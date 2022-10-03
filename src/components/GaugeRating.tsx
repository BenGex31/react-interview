import React from "react";
import { Grid, Typography } from "@mui/material";
import { movieObject } from "../types/Types";
import { red, green } from "@mui/material/colors";

const GaugeRating = ({ likes, dislikes }: movieObject) => {
  return (
    <Grid
      container
      direction={"column-reverse"}
      height={3}
      width={100}
      sx={{ backgroundColor: "transparent" }}
    >
      <Grid
        height={"100%"}
        sx={{
          backgroundColor: likes === dislikes ? "transparent" : green[500],
        }}
        width={`${likes / (likes + dislikes)}`}
      />
      <Grid
        height={"100%"}
        sx={{
          backgroundColor: likes === dislikes ? "transparent" : red[500],
        }}
        width={`${dislikes / (likes + dislikes)}`}
      />
    </Grid>
  );
};

export default GaugeRating;
