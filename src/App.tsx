import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import MovieCard from "./components/MovieCard";

export type movieObject = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

function App() {
  const [movies, setMovies] = useState<movieObject[] | null>(null);

  useEffect(() => {
    movies$.then((value) => setMovies(value));
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Grid container justifyContent={"space-between"} spacing={2}>
        {movies &&
          movies.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} lg={4}>
              <MovieCard title={movie.title} category={movie.category} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default App;
