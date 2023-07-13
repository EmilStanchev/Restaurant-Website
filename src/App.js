import { ThemeProviderWrapper } from "./themes/Theme";
import { CssBaseline } from "@mui/material";
import SideBar from "./components/navigation/SideBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import AppRouter from "./components/utils/AppRouter";

const pages = [
  { name: "Menu", icon: MenuBookIcon, path: "/menu" },
  { name: "Contact us", icon: PhoneIcon, path: "/contacts" },
];

const App = () => {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />

      <SideBar pages={pages} />
      <AppRouter />
    </ThemeProviderWrapper>
  );
};

export default App;
