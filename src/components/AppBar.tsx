import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { MoviesContext } from "../context/AppProvider";
import { movieObject } from "../types/Types";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function SearchAppBar() {
  const { movies }: any = React.useContext(MoviesContext);

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
              borderRadius: 5
            }}
          >
            <TextField
              sx={{
                width: 150,
              }}
              select
              label="Catégorie"
            >
              <MenuItem value={"aucune"}>Aucune</MenuItem>
              {renderCategories()}
            </TextField>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
