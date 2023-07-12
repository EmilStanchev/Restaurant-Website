import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/config/firebase";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const foodName = "soup";

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
  const foodsCollectionRef = collection(db, "foods");
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
