import React, { useEffect, useState } from "react";
import { movieObject, snackBarObject } from "../types/Types";
import { movies$ } from "../movies";
import usePagination from "../hooks/usePagination";

// @ts-ignore
export const MoviesContext = React.createContext();

const AppProvider = ({ children }: any) => {
  const [movies, setMovies] = useState<movieObject[] | null>(null);
  const [snackBar, setSnackBar] = useState<snackBarObject>({
    handleClose: (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      setSnackBar({ ...snackBar, open: false });
    },
    open: false,
    message: "",
    severity: undefined,
  });
  const [category, setCategory] = useState<string>("toutes");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    movies$.then((value) =>
      setMovies(
        value.map((item: movieObject) => ({
          ...item,
          favorite: false,
          hasVoted: false,
        }))
      )
    );
  }, []);

  function handleMovieDelete(movieId: string | undefined): void {
    if (movies) {
      const _movies = [...movies];
      const findedIndexMovie = _movies.findIndex(
        (movie) => movie.id === movieId
      );
      setSnackBar({
        ...snackBar,
        open: true,
        message: `Film ${_movies[findedIndexMovie].title} supprimé !`,
        severity: "success",
      });
      _movies.splice(findedIndexMovie, 1);
      setMovies(_movies);
    }
  }

  function handleFavoriteToggle(movieId: string | undefined): void {
    if (movies) {
      const _movies = [...movies];
      const findedIndexMovie = _movies.findIndex(
        (movie) => movie.id === movieId
      );
      _movies[findedIndexMovie].favorite = !_movies[findedIndexMovie].favorite;
      if (_movies[findedIndexMovie].favorite) {
        setSnackBar({
          ...snackBar,
          open: true,
          message: `Film ${_movies[findedIndexMovie].title} ajouté à vos favoris !`,
          severity: "success",
        });
      } else {
        setSnackBar({
          ...snackBar,
          open: true,
          message: `Film ${_movies[findedIndexMovie].title} supprimé de vos favoris !`,
          severity: "success",
        });
      }
      setMovies(_movies);
    }
  }

  function handleLikeClick(movieId: string | undefined): void {
    if (movies) {
      const _movies = [...movies];
      const findedIndexMovie = _movies.findIndex(
        (movie) => movie.id === movieId
      );
      _movies[findedIndexMovie].likes = _movies[findedIndexMovie].likes + 1;
      _movies[findedIndexMovie].hasVoted = true
      setMovies(_movies);
      setSnackBar({
        ...snackBar,
        open: true,
        message: `Vous aimez le film ${_movies[findedIndexMovie].title}`,
        severity: "info",
      });
    }
  }

  function handleDislikeClick(movieId: string | undefined): void {
    if (movies) {
      const _movies = [...movies];
      const findedIndexMovie = _movies.findIndex(
        (movie) => movie.id === movieId
      );
      _movies[findedIndexMovie].dislikes =
        _movies[findedIndexMovie].dislikes + 1;
        _movies[findedIndexMovie].hasVoted = true
      setMovies(_movies);
      setSnackBar({
        ...snackBar,
        open: true,
        message: `Vous n'aimez pas le film ${_movies[findedIndexMovie].title}`,
        severity: "info",
      });
    }
  }

  function handleChangeCategory(event: any): void {
    setCategory(event.target.value);
  }

  const data = usePagination(movies, perPage);

  function handlePageChange(event: any, _page: number): void {
    setPage(_page);
    data.jump(_page);
  }

  function handlePerPageChange(event: any): void {
    setPerPage(event.target.value);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        handleMovieDelete,
        handleFavoriteToggle,
        snackBar,
        handleLikeClick,
        handleDislikeClick,
        handleChangeCategory,
        category,
        page,
        perPage,
        handlePageChange,
        handlePerPageChange,
        data,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default AppProvider;
