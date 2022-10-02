import {
  Delete,
  Favorite,
  FavoriteBorder,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Stack,
  Tooltip,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import React from "react";
import { MoviesContext } from "../context/AppProvider";
import { movieObject } from "../types/Types";
import GaugeRating from "./GaugeRating";

const MovieCard = ({
  id,
  title,
  category,
  likes,
  dislikes,
  image,
  favorite,
}: movieObject) => {
  const {
    handleLikeClick,
    handleDislikeClick,
    handleMovieDelete,
    handleFavoriteToggle,
  }: any = React.useContext(MoviesContext);
  return (
    <Card raised={favorite}>
      <CardHeader
        title={
          <Typography fontWeight={"bold"} variant="h6">
            {title}
          </Typography>
        }
        subheader={category}
        action={
          <Stack direction={"column"} spacing={5} alignItems={"center"}>
            <Stack direction={"row"} spacing={3}>
              <Stack direction={"row"} spacing={1}>
                <Tooltip title={likes.toString()}>
                  <IconButton onClick={() => handleLikeClick(id)}>
                    <ThumbUpAlt sx={{ color: green[500] }} />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Tooltip title={dislikes.toString()}>
                  <IconButton onClick={() => handleDislikeClick(id)}>
                    <ThumbDownAlt sx={{ color: red[500] }} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <GaugeRating likes={likes} dislikes={dislikes} />
          </Stack>
        }
      />
      <CardMedia
        component="img"
        height={700}
        sx={{ width: "100%" }}
        src={image}
        alt={title}
      />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavoriteToggle(id)}
        >
          {favorite ? (
            <Favorite sx={{ color: red[500] }} />
          ) : (
            <FavoriteBorder sx={{ color: red[500] }} />
          )}
        </IconButton>
        <Tooltip title="Ce film ne vous plaît pas ?">
          <Button
            sx={{ textTransform: "none" }}
            size="small"
            variant="outlined"
            startIcon={<Delete />}
            onClick={() => handleMovieDelete(id)}
          >
            Supprimer
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
