import { Grid } from "@mui/material";
import ContactForm from "../UI/ContactPagetems/ContactForm";
import ContactContent from "../UI/ContactPagetems/ContactContent";

const Contact = () => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", gap: 12 }}>
      <ContactContent />
      <ContactForm />
    </Grid>
  );
};
export default Contact;
