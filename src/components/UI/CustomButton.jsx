import { Button, Typography } from "@mui/material";

const CustomButton = (content) => {
  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "start",
        marginLeft: 12,
        width: 240,
        "&:focus": { color: "red", backgroundColor: "white", borderRadius: 3 },
      }}
      onClick={content.onClick}
    >
      <content.icon />
      <Typography sx={{ marginLeft: 3 }}>{content.text}</Typography>
    </Button>
  );
};
export default CustomButton;
