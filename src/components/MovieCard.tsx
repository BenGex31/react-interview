import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import React from "react";
import { movieObject } from "../App";
import GaugeRating from "./GaugeRating";

const MovieCard = ({ title, category, likes, dislikes }: movieObject) => {
  const displayRating = () => {
    if (likes > dislikes) {
      return ((likes - dislikes) / (likes + dislikes)) * 100;
    }
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography fontWeight={"bold"} variant="h5">
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
    </Card>
  );
};

export default MovieCard;
