import { Card, CardHeader, Typography } from "@mui/material";
import React from "react";

type movieCardProps = {
  title: string;
  category: string;
};

const MovieCard = ({ title, category }: movieCardProps) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography fontWeight={"bold"} variant="h5">
            {title}
          </Typography>
        }
        subheader={category}
      />
    </Card>
  );
};

export default MovieCard;
