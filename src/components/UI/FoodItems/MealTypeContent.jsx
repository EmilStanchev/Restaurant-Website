import { Typography } from "@mui/material";

const MealTypeContent = ({ types }) => {
  return (
    <>
      {types.map((type) => {
        return (
          <Typography variant="h5" component="h5">
            {type}
          </Typography>
        );
      })}
    </>
  );
};
export default MealTypeContent;
