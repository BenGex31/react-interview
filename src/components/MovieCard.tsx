import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import { Card, CardHeader, Stack, Tooltip, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import React from "react";

type movieCardProps = {
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

const MovieCard = ({ title, category, likes, dislikes }: movieCardProps) => {
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
          <Stack direction={"row"} spacing={3}>
            <Stack direction={"row"} spacing={1}>
              <ThumbUpAlt sx={{ color: green[500] }} />{" "}
              <Typography>{likes}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <ThumbDownAlt sx={{ color: red[500] }} />{" "}
              <Typography>{dislikes}</Typography>
            </Stack>
          </Stack>
        }
      />
    </Card>
  );
};

export default MovieCard;
