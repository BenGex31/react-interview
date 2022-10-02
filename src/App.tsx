import React, { useContext } from "react";
import { Container } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "./components/MovieCard";
import SimpleSnackbar from "./components/SnabarBar";
import { MoviesContext } from "./context/AppProvider";

export type movieObject = {
  id?: string;
  title?: string;
  category?: string;
  favorite?: boolean;
  likes: number;
  dislikes: number;
  handleMovieDelete?: () => void;
  handleFavoriteToggle?: () => void;
};

export type snackBarObject = {
  handleClose: (event: React.SyntheticEvent | Event) => void;
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning" | undefined;
};

function App() {
  const { movies, handleMovieDelete, handleFavoriteToggle, snackBar }: any =
    useContext(MoviesContext);

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

  return (
    <Container maxWidth={"xl"}>
      <Grid container justifyContent={"space-between"} spacing={2}>
        {movies
          ? movies.map((movie: movieObject) => (
              <Grid key={movie.id} item xs={12} sm={6} lg={4}>
                <MovieCard
                  title={movie.title}
                  category={movie.category}
                  likes={movie.likes}
                  dislikes={movie.dislikes}
                  handleMovieDelete={() => handleMovieDelete(movie.id)}
                  handleFavoriteToggle={() => handleFavoriteToggle(movie.id)}
                  favorite={movie.favorite}
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
