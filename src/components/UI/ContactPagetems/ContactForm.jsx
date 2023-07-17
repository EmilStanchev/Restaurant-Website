import React, { useRef } from "react";
import { TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    // Prepare the template parameters
    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Reset the form fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Grid item sx={{}}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          inputRef={nameRef}
          required
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          inputRef={emailRef}
          required
          fullWidth
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
          inputRef={messageRef}
          required
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "100%", marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default ContactForm;
