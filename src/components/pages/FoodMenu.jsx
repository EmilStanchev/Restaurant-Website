import { Grid } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { GetFiveElements, SearchByMealType } from "../utils/FoodContext";
import { useEffect, useState } from "react";
import FoodCards from "../UI/FoodItems/Cards";

const FoodMenu = () => {
  const [foods, setFoods] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const foodFilter = async (text) => {
    setFoods(await SearchByMealType(text));
    setIsFiltered(true);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: 2,
          gap: 3,
        }}
      >
        <CustomButton
          text="Breakfast"
          icon={FreeBreakfastIcon}
          onClick={() => foodFilter("breakfast")}
        />
        <CustomButton
          text="Lunch"
          icon={LunchDiningIcon}
          onClick={() => foodFilter("lunch/dinner")}
        />
        <CustomButton
          text="Dinner"
          icon={SoupKitchenIcon}
          onClick={() => foodFilter("dinner")}
        />
      </Grid>
      <FoodCards recipes={foods} />
    </Grid>
  );
};
export default FoodMenu;
