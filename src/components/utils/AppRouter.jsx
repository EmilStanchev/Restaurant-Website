import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodMenu from "../pages/FoodMenu";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
