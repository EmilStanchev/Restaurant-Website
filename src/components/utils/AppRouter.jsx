import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodMenu from "../pages/FoodMenu";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Reservation from "../pages/Reservation";
import Admin from "../pages/Admin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
