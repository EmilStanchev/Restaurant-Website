import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FormControl, Grid } from "@mui/material";

const PhoneField = ({ onChange, value }) => {
  const [phone, setPhone] = useState("");

  const handleChangePhone = (value) => {
    setPhone(value);
  };
  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <PhoneInput
            id="phone"
            name="phone"
            international
            defaultCountry="US"
            value={value}
            onChange={handleChangePhone}
            placeholder="Enter phone number"
            style={{
              height: "56px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              fontSize: "16px",
              outline: "none",
              width: "100%",
            }}
            countrySelectProps={{
              style: { minWidth: 120 },
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
export default PhoneField;
