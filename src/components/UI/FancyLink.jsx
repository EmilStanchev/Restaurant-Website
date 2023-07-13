import { Link, Typography } from "@mui/material";

const FancyLink = ({ link, text }) => {
  return (
    <Link
      href={link}
      sx={{
        background: "linear-gradient(to right, #FF5F6D, #FFC371)",
        borderRadius: "20px",
        color: "white",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
        fontSize: "24px",
        padding: "10px 20px",
        border: "1px solid",
        "&:hover": {
          background: "linear-gradient(to right, #FFC371, #FF5F6D)",
        },
      }}
    >
      <Typography variant="h4">{text}</Typography>
    </Link>
  );
};
export default FancyLink;
