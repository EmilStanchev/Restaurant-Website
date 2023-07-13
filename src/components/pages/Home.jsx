import React, { useState } from "react";
import { GetAllFoods, FetchData } from "../utils/FoodContext";
import FoodCards from "../UI/FoodItems/Cards";
import { Button } from "@mui/material";
import { SaveFoods } from "../utils/FoodContext.jsx";
const Home = () => {
  const [data, setData] = useState([]);
  const [isFromDb, setIsFromDb] = useState(false);
  const clickHandler = async () => {
    const recipes = await GetAllFoods();
    setIsFromDb(true);
    setData(recipes);
  };
  const apiCall = async () => {
    const recipes = await FetchData();
    setData(recipes);
    await SaveFoods(data);
  };
  return (
    <>
      <Button onClick={clickHandler}>Click me to get info</Button>
      <Button onClick={() => apiCall()}>Click me for api call</Button>
      {isFromDb ? <FoodCards recipes={data} /> : "hi"}
    </>
  );
};
export default Home;
