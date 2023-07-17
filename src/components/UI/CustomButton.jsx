import { Button, Typography } from "@mui/material";
import { ThemeContext } from "../../themes/Theme";
import { useContext } from "react";
const CustomButton = (content) => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      sx={{
        borderRadius: "8px",
        padding: "10px 20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        fontSize: "16px",
        width: 240,
        fontWeight: "bold",
        color: `${theme.isDark ? "black" : "white"}`,
        backgroundColor: `${
          theme.isDark ? "rgb(240, 237, 212)" : "transparant"
        }`,
        textTransform: "uppercase",
        "&:focus": {
          background: "linear-gradient(to right, #FFA500, #FF8C00)",
        },
        "&:hover": { color: `${theme.isDark ? "transparant" : "white"}` },
      }}
      onClick={content.onClick}
    >
      <content.icon />
      <Typography sx={{ marginLeft: 3 }}>{content.label}</Typography>
    </Button>
  );
};
export default CustomButton;
