import {
  Delete,
  Favorite,
  FavoriteBorder,
  InfoOutlined,
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
  hasVoted,
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
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography fontWeight={"bold"} variant="h6">
              {title}
            </Typography>
            <Tooltip
              title={
                <Stack>
                  <Typography>{`${
                    likes > 1
                      ? likes + " spectateurs ont aimé"
                      : likes + " spectateur a aimé"
                  }`}</Typography>
                  <Typography>{`${
                    dislikes > 1
                      ? dislikes + " spectateurs n'ont pas aimé"
                      : dislikes + " spectateur n'a pas aimé"
                  }`}</Typography>
                </Stack>
              }
            >
              <InfoOutlined color="primary" />
            </Tooltip>
          </Stack>
        }
        subheader={category}
        action={
          <Stack direction={"column"} spacing={1} alignItems={"center"}>
            <Typography variant="body2">Popularité</Typography>
            <Stack direction={"row"} spacing={3}>
              <Stack direction={"row"} spacing={1}>
                <Tooltip title={likes.toString()}>
                  <IconButton
                    disabled={hasVoted}
                    onClick={() => handleLikeClick(id)}
                  >
                    <ThumbUpAlt sx={{ color: green[500] }} />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Tooltip title={dislikes.toString()}>
                  <IconButton
                    disabled={hasVoted}
                    onClick={() => handleDislikeClick(id)}
                  >
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
