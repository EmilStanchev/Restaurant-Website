import { ThemeProviderWrapper } from "./themes/Theme";
import { CssBaseline, Grid } from "@mui/material";
import SideBar from "./components/navigation/SideBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import AppRouter from "./components/utils/AppRouter";
import InfoIcon from "@mui/icons-material/Info";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const pages = [
  { name: "Menu", icon: MenuBookIcon, path: "/menu" },
  { name: "Reservation", icon: BookOnlineIcon, path: "/reservation" },
  { name: "About us", icon: InfoIcon, path: "/aboutus" },
  { name: "Contact us", icon: PhoneIcon, path: "/contacts" },
];

const App = () => {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />

      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Grid>
          <SideBar pages={pages} />
        </Grid>
        <Grid>
          <AppRouter />
        </Grid>
      </Grid>
    </ThemeProviderWrapper>
  );
};

export default App;
