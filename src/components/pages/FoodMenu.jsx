import { Grid } from "@mui/material";
import CustomButton from "../UI/CustomButton";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { GetFiveElements, SearchByMealType } from "../utils/FoodContext";
import { useEffect, useState } from "react";
import FoodCards from "../UI/FoodItems/Cards";
import CakeIcon from "@mui/icons-material/Cake";

const FoodMenu = () => {
  const [foods, setFoods] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const foodFilter = async (text) => {
    setFoods(await SearchByMealType(text));
    setIsFiltered(true);
  };
  useEffect(() => {
    async function topFive() {
      setFoods(await GetFiveElements());
    }
    topFive();
    console.log(foods);
  }, []);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 7,
      }}
    >
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
          label="Breakfast"
          icon={FreeBreakfastIcon}
          onClick={() => foodFilter("breakfast")}
        />
        <CustomButton
          label="Lunch"
          icon={LunchDiningIcon}
          onClick={() => foodFilter("lunch/dinner")}
        />
        <CustomButton
          label="Dinner"
          icon={SoupKitchenIcon}
          onClick={() => foodFilter("dinner")}
        />
        <CustomButton
          label="Desserts"
          icon={CakeIcon}
          onClick={() => foodFilter("dessert")}
        />
      </Grid>
      <FoodCards recipes={foods} />
    </Grid>
  );
};
export default FoodMenu;
