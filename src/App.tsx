import React, { useContext } from "react";
import { Container } from "@mui/system";
import {
  Grid,
  Grow,
  MenuItem,
  Pagination,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import MovieCard from "./components/MovieCard";
import SimpleSnackbar from "./components/SnabarBar";
import { MoviesContext } from "./context/AppProvider";
import { movieObject } from "./types/Types";
import SearchAppBar from "./components/AppBar";
import "./App.css";

function App() {
  const {
    movies,
    data,
    snackBar,
    category,
    page,
    perPage,
    handlePageChange,
    handlePerPageChange,
  }: any = useContext(MoviesContext);

  function displayLoadingSkeletons(): React.ReactNode {
    const width = 485;
    const height = 879;
    return (
      <Grid container mt={3} justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={width} height={height} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={width} height={height} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={width} height={height} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton variant="rectangular" width={width} height={height} />
        </Grid>
      </Grid>
    );
  }

  function renderPagination() {
    return (
      <Stack justifyContent={"center"} direction="row" mt={5} mb={2}>
        <TextField
          sx={{ width: 150 }}
          size="small"
          select
          label="Films par page"
          color="secondary"
          variant="filled"
          onChange={(event) => handlePerPageChange(event)}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </TextField>
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
      <Grid container justifyContent={"center"} spacing={2}>
        {movies
          ? data
              .currentData()
              .filter((movie: movieObject) =>
                category !== "toutes"
                  ? category === movie.category
                  : category !== movie.category
              )
              .map((movie: movieObject, index: number) => (
                <Grow timeout={index * 1000} in={true} key={movie.id}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MovieCard
                      id={movie.id}
                      title={movie.title}
                      category={movie.category}
                      likes={movie.likes}
                      dislikes={movie.dislikes}
                      favorite={movie.favorite}
                      image={movie.image}
                    />
                  </Grid>
                </Grow>
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
