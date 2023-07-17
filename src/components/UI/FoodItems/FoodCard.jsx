import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import Ingredients from "./Ingredients";
import MealTypeContent from "./MealTypeContent";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FoodCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item>
      <Card
        key={recipe.id}
        sx={{
          width: 345,
          height: `${expanded ? "auto" : "445"}`,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.name}
          titleTypographyProps={{ fontSize: "14px" }}
        />
        <CardMedia
          component="img"
          height="194"
          image={recipe.imageName}
          alt={recipe.label}
        />
        <CardContent>
          <Typography variant="h4" component="h4" sx={{ float: "right" }}>
            {recipe.price}$
          </Typography>
          <MealTypeContent types={recipe.mealType} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h2" component="h2">
              Ingredients:
            </Typography>
            <Ingredients ingredients={recipe.ingredients} />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default FoodCard;
