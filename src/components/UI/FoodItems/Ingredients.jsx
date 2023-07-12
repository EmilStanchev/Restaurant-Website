import { Typography } from "@mui/material";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients?.map((ingredient) => {
        return (
          <Typography key={ingredient} color="text.secondary">
            {ingredient}
          </Typography>
        );
      })}
    </>
  );
};
export default Ingredients;
