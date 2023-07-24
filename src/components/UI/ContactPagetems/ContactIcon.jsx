import { Typography } from "@mui/material";
/*import { useContext } from "react";
import { ThemeContext } from "../../../themes/Theme";*/

const ContactIcon = (icon) => {
  //const theme = useContext(ThemeContext);
  return (
    <Typography
      variant="subtitle1"
      sx={{ display: "flex", gap: 5, color: `white` }}
    >
      <icon.avatar />
      {icon.label}
    </Typography>
  );
};
export default ContactIcon;
