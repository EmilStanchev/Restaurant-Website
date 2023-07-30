import { Container, Grid } from "@mui/material";
import CustomButton from "../CustomButton";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
const NavBar = () => {
  const onClickHandler = (section) => {
    console.log(section);
    const element = document.getElementById(`${section}`);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: 2,
        gap: 3,
      }}
    >
      <CustomButton
        label="About Us"
        icon={HelpCenterIcon}
        onClick={() => {
          onClickHandler("aboutUs");
        }}
      />
      <CustomButton
        label="Our Story"
        icon={WorkHistoryIcon}
        onClick={() => {
          onClickHandler("ourStory");
        }}
      />
      <CustomButton
        label="Phylosophy"
        icon={LightbulbIcon}
        onClick={() => {
          onClickHandler("ourPhilosophy");
        }}
      />
      <CustomButton
        label="OUr team"
        icon={GroupsIcon}
        onClick={() => {
          onClickHandler("team");
        }}
      />
    </Grid>
  );
};
export default NavBar;
