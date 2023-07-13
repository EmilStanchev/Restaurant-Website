import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const foodName = "soup";
const foodsCollectionRef = collection(db, "foods");
console.log(foodsCollectionRef);
export const FetchData = async () => {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${foodName}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const responseData = await response.json();
    const recipes = responseData.hits.map((hit) => hit.recipe);
    return recipes;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};
export const GetAllFoods = async () => {
  try {
    const rawData = await getDocs(foodsCollectionRef);
    const data = rawData.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const SaveFoods = async (foods) => {
  foods?.map(async (food) => {
    console.log(food);
    let dbFood = {
      name: food.label,
      price: 12,
      imageName: food.images.SMALL.url,
      cautions: food.cautions,
      mealType: food.mealType,
      ingredients: food.ingredientLines,
    };
    await addDoc(foodsCollectionRef, dbFood);
  });
};
