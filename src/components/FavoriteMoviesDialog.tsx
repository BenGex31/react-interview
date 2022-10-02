import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { MoviesContext } from "../context/AppProvider";
import { movieObject } from "../types/Types";

type favoriteMoviesDialogProps = {
  onClose: () => void;
  open?: boolean;
};

const FavoriteMoviesDialog = ({ onClose, open }: favoriteMoviesDialogProps) => {
  const { movies, handleFavoriteToggle }: any = React.useContext(MoviesContext);
  const favoriteMoviesFiltered = movies.filter(
    (movie: movieObject) => movie.favorite
  );
  return (
    // @ts-ignore
    <Dialog fullWidth maxWidth="md" onClose={onClose} open={open}>
      <DialogTitle>Mes Films favoris</DialogTitle>
      <DialogContent>
        <Stack direction="row" spacing={2}>
          {favoriteMoviesFiltered.length === 0 ? (
            <Typography>Aucun film favoris</Typography>
          ) : (
            favoriteMoviesFiltered.map((movie: movieObject) => (
              <Chip
                key={movie.id}
                label={movie.title}
                color="primary"
                onDelete={() => handleFavoriteToggle(movie.id)}
              />
            ))
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: "none" }}
          onClick={onClose}
        >
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FavoriteMoviesDialog;
