import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import { Container } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "./components/MovieCard";
import SimpleSnackbar from "./components/SnabarBar";

export type movieObject = {
  id?: string;
  title?: string;
  category?: string;
  likes: number;
  dislikes: number;
  handleMovieDelete?: () => void;
};

export type snackBarObject = {
  handleClose: (event: React.SyntheticEvent | Event) => void;
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning" | undefined;
};

function App() {
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

  useEffect(() => {
    movies$.then((value) => setMovies(value));
  }, []);

  function displayLoadingSkeletons(): React.ReactNode {
    return (
      <Grid container justifyContent={"space-between"} spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={400} height={100} />
        </Grid>
      </Grid>
    );
  }

  function handleMovieDelete(movieId: string | undefined): void {
    if (movies) {
      const _movies = [...movies];
      const findedIndexMovie = movies.findIndex(
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

  return (
    <Container maxWidth={"lg"}>
      <Grid container justifyContent={"space-between"} spacing={2}>
        {movies
          ? movies.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={6} lg={4}>
                <MovieCard
                  title={movie.title}
                  category={movie.category}
                  likes={movie.likes}
                  dislikes={movie.dislikes}
                  handleMovieDelete={() => handleMovieDelete(movie.id)}
                />
              </Grid>
            ))
          : displayLoadingSkeletons()}
      </Grid>
      <SimpleSnackbar
        handleClose={snackBar.handleClose}
        open={snackBar.open}
        message={snackBar.message}
        severity={snackBar.severity}
      />
    </Container>
  );
}

export default App;
