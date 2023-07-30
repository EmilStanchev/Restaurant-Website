import React from "react";
import { Section } from "./Section";
import { Grid } from "@mui/material";

export const Sections = ({ sections }) => {
  return (
    <Grid container>
      {sections?.map((section) => {
        return (
          <Section
            id={section.anchorName}
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
          />
        );
      })}
    </Grid>
  );
};
