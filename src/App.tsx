import React, { useContext } from "react";
import { Container } from "@mui/system";
import { Grid, Pagination, Skeleton, Stack } from "@mui/material";
import MovieCard from "./components/MovieCard";
import SimpleSnackbar from "./components/SnabarBar";
import { MoviesContext } from "./context/AppProvider";
import { movieObject } from "./types/Types";
import SearchAppBar from "./components/AppBar";

function App() {
  const {
    movies,
    data,
    handleMovieDelete,
    handleFavoriteToggle,
    snackBar,
    category,
    page,
    perPage,
    handlePageChange,
  }: any = useContext(MoviesContext);

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

  function renderPagination() {
    return (
      <Stack justifyContent={"center"} direction="row" mt={5} mb={2}>
        <Pagination
          color="secondary"
          size="large"
          count={Math.ceil(movies?.length / perPage)}
          page={page}
          onChange={(event, p) => handlePageChange(event, p)}
        />
      </Stack>
    );
  }

  return (
    <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth={"xl"}>
      <SearchAppBar />
      {renderPagination()}
      <Grid container justifyContent={"space-between"} spacing={2}>
        {movies
          ? data
              .currentData()
              .filter((movie: movieObject) =>
                category !== "toutes"
                  ? category === movie.category
                  : category !== movie.category
              )
              .map((movie: movieObject) => (
                <Grid key={movie.id} item xs={12} sm={6} lg={4}>
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    category={movie.category}
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                    handleMovieDelete={() => handleMovieDelete(movie.id)}
                    handleFavoriteToggle={() => handleFavoriteToggle(movie.id)}
                    favorite={movie.favorite}
                    image={movie.image}
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
      {renderPagination()}
    </Container>
  );
}

export default App;
