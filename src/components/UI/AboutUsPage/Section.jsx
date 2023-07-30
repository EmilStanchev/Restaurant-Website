import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

import React from "react";

export const Section = ({ title, content, image, id }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const wrap = isMobile ? "wrap" : "nowrap";
  return (
    <Grid
      id={id}
      key={title}
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        padding: "10% 0%",
        flexWrap: wrap,
      }}
    >
      <Typography>
        <img src={image} alt="hello" style={{ width: 450 }} />
      </Typography>
      <Box>
        <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
          {content}
        </Typography>
      </Box>
    </Grid>
  );
};
