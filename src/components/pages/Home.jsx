import React from "react";
import { Grid } from "@mui/material";
import SliderComponent from "../UI/Slider";

const Home = () => {
  return (
    <Grid
      container
      id="container-grid"
      sx={{ overflow: "hidden", height: "80%" }}
    >
      <SliderComponent />
    </Grid>
  );
};

export default Home;
