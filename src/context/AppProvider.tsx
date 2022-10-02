import React, { useEffect, useState } from "react";
import { movieObject, snackBarObject } from "../types/Types";
import { movies$ } from "../movies";

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

  useEffect(() => {
    movies$.then((value) =>
      setMovies(
        value.map((item: movieObject) => ({
          ...item,
          favorite: false,
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
      setMovies(_movies);
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
      setMovies(_movies);
    }
  }

  function handleChangeCategory(event: any): void {
    setCategory(event.target.value);
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
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default AppProvider;
