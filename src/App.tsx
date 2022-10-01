import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import { Container } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "./components/MovieCard";

export type movieObject = {
  id?: string;
  title?: string;
  category?: string;
  likes: number;
  dislikes: number;
  handleMovieDelete?: () => void;
};

function App() {
  const [movies, setMovies] = useState<movieObject[] | null>(null);

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
    </Container>
  );
}

export default App;
