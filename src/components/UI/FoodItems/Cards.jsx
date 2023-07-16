import { Grid } from "@mui/material";
import FoodCard from "./FoodCard";

const FoodCards = ({ recipes }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      {recipes?.map((recipe) => {
        return <FoodCard recipe={recipe} key={recipe.id} />;
      })}
    </Grid>
  );
};
export default FoodCards;
