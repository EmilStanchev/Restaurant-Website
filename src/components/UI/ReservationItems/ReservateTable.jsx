import React, { useState, useContext } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { ThemeContext } from "../../../themes/Theme";
import PhoneField from "./PhoneField";

const ReservateTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    hour: "",
  });

  const theme = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid orange",
        borderRadius: 12,
        padding: 20,
        backgroundColor: `${theme.isDark ? "#F8E8EE" : "#2c2c2c"}`,
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Allura, cursive",
          color: "#8B008B",
          textShadow: "2px 2px 4px #888",
          textAlign: "center",
          marginBottom: "20px",
          letterSpacing: "2px",
          fontWeight: 600,
        }}
      >
        Book Your Table
      </Typography>
      <Stack spacing={2} sx={{ mb: 2 }} direction="row">
        <TextField
          required
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          color="secondary"
        />

        <TextField
          required
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          color="secondary"
        />
      </Stack>

      <PhoneField />
      <FormControl
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        color="secondary"
      >
        <InputLabel>Number of Guests</InputLabel>
        <Select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          label="Number of Guests"
        >
          {[1, 2, 3, 4, 5, 6].map((guests) => (
            <MenuItem key={guests} value={guests}>
              {guests}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack spacing={2} sx={{ mb: 2 }} direction="row">
        <TextField
          required
          name="date"
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          color="secondary"
          value={formData.date}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          name="hour"
          label="Hour"
          type="time"
          variant="outlined"
          color="secondary"
          fullWidth
          value={formData.hour}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mb: 2, backgroundColor: "#f36700", color: "white" }}
        >
          Reserve
        </Button>
      </Typography>
    </form>
  );
};
export default ReservateTable;
