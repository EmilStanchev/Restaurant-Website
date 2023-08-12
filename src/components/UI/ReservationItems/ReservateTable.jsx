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
import { AddClient, MakeReservation } from "../../utils/FoodContext";
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
  const [message, setMessage] = useState("");
  const [reserved, setReserved] = useState(false);
  const theme = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const client = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };
    await AddClient(client);
    const [hour, minute] = formData.hour.split(":");
    const date = new Date(formData.date);
    date.setHours(hour);
    date.setMinutes(minute);
    const reservation = { guestsNumber: formData.guests, date: date };
    const res = await MakeReservation(client, reservation);
    console.log(res);
    res
      ? setMessage("You reserved table")
      : setMessage(
          "There aren`t free table for this date for your requirments"
        );
    setReserved(res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        borderRadius: 12,
        padding: 20,
        backgroundColor: `${theme.isDark ? "#F8E8EE" : "#111111"}`,
        //backgroundColor: `${theme.isDark ? "#F8E8EE" : "#16003B"}`,
        opacity: `${theme.isDark ? "1" : "0.9"}`,
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Allura, cursive",
          color: `${theme.isDark ? "#8B008B" : "white"}`,
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

      <PhoneField onChange={() => handleChange()} value={formData.phone} />
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
        <Typography
          sx={{ color: `${reserved ? "green" : "red"}`, fontSize: "28px" }}
        >
          {message}
        </Typography>
      </Typography>
    </form>
  );
};
export default ReservateTable;
