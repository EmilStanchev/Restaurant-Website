import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContactIcon from "./ContactIcon";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactContent = () => {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "#110833",
        border: "2px solid #36285e",
        borderRadius: 2,
        maxWidth: "550px",
      }}
    >
      <Typography variant="h2" sx={{ color: "#e942cd", padding: 5 }}>
        Contact us
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "#e942cd", padding: 5, wordBreak: "break-word" }}
      >
        We're here to help and answer any questions you might have. We will
        answer your inquiries in a maximum of 48 hours.
      </Typography>
      <Box
        sx={{ padding: 5, display: "flex", gap: 4, flexDirection: "column" }}
      >
        <ContactIcon label="info@tastebudsbistro.com" avatar={EmailIcon} />
        <ContactIcon label="+1 (123) 456-7890" avatar={PhoneIcon} />
        <ContactIcon
          label=" 123 Main Street, Cityville"
          avatar={LocationOnIcon}
        />
      </Box>
    </Grid>
  );
};
export default ContactContent;
