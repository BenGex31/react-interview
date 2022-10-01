import React from "react";
import { Grid } from "@mui/material";
import { movieObject } from "../App";
import { red, green } from "@mui/material/colors";

const GaugeRating = ({ likes, dislikes }: movieObject) => {
  return (
    <Grid
      container
      height={3}
      width={100}
      sx={{ backgroundColor: likes === dislikes ? "transparent" : red[500] }}
    >
      <Grid
        height={"100%"}
        sx={{
          backgroundColor: likes === dislikes ? "transparent" : green[500],
        }}
        width={`${likes / (likes + dislikes)}`}
      />
    </Grid>
  );
};

export default GaugeRating;
