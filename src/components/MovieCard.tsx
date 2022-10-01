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
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import React from "react";
import { movieObject } from "../App";
import GaugeRating from "./GaugeRating";

const MovieCard = ({
  title,
  category,
  likes,
  dislikes,
  handleMovieDelete,
  handleFavoriteToggle,
  favorite,
}: movieObject) => {
  return (
    <Card>
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
                <ThumbUpAlt sx={{ color: green[500] }} />{" "}
                <Typography variant="body2">{likes}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <ThumbDownAlt sx={{ color: red[500] }} />{" "}
                <Typography variant="body2">{dislikes}</Typography>
              </Stack>
            </Stack>
            <GaugeRating likes={likes} dislikes={dislikes} />
          </Stack>
        }
      />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteToggle}
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
            onClick={handleMovieDelete}
          >
            Supprimer
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
