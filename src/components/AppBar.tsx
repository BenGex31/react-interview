import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, TextField } from "@mui/material";
import { MoviesContext } from "../context/AppProvider";
import { movieObject } from "../types/Types";

export default function SearchAppBar() {
  const { movies, handleChangeCategory }: any = React.useContext(MoviesContext);

  function renderCategories(): React.ReactNode {
    if (movies) {
      const categories: [] = [];
      movies.forEach((movie: movieObject) => {
        // @ts-ignore
        categories.push(movie.category);
      });
      // @ts-ignore
      const categoriesWithoutDuplicates = [...new Set(categories)];
      return categoriesWithoutDuplicates.map((category: string, index) => (
        <MenuItem key={index} value={category}>
          {category}
        </MenuItem>
      ));
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ padding: 2 }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BestMovies4U
          </Typography>
          <div
            style={{
              backgroundColor: "white",
              padding: 7,
              borderRadius: 5,
            }}
          >
            <TextField
              sx={{
                width: 150,
              }}
              select
              label="Catégorie"
              size="small"
              onChange={(event) => handleChangeCategory(event)}
              defaultValue="toutes"
            >
              <MenuItem value={"toutes"}>Toutes</MenuItem>
              {renderCategories()}
            </TextField>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
