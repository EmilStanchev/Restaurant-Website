import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodMenu from "./components/pages/FoodMenu";
import ErrorPage from "./components/pages/ErrorPage";
import { ThemeProviderWrapper } from "./themes/Theme";
import { CssBaseline } from "@mui/material";
import SideBar from "./components/navigation/SideBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import AppRouter from "./components/utils/AppRouter";

const pages = [
  { name: "Menu", icon: MenuBookIcon },
  { name: "Contact us", icon: PhoneIcon },
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
