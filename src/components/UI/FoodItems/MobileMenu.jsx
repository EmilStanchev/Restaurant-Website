import { Box, Grid } from "@mui/material";
import chopBoard from "../../../assets/chopBoard.png";
import breadIcon from "../../../assets/breadIcon.png";
const MobileMenu = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        backgroundImage: `url(${chopBoard})`,
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
        height: "70vh",
      }}
    >
      <Grid xs={12} item sx={{ width: "" }}>
        <img src={breadIcon} alt="icon" />
      </Grid>
    </Grid>
  );
};
export default MobileMenu;
