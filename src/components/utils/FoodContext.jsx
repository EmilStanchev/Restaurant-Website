import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const foodName = "breakfast";
const foodsCollectionRef = collection(db, "foods");
const clientsCollectionRef = collection(db, "clients");
const tablesCollectionRef = collection(db, "tables");
const reservationsCollectionRef = collection(db, "reservations");

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
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const SearchByMealType = async (type) => {
  try {
    const rawData = await getDocs(foodsCollectionRef);
    const data = rawData.docs
      .map((document) => ({
        ...document.data(),
        id: document.id,
      }))
      .filter((item) => item.mealType.includes(type));
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const SaveFoods = async (foods) => {
  foods?.map(async (food) => {
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

export const AddClient = async (client) => {
  const rawDbClients = await getDocs(clientsCollectionRef);
  const dbClients = rawDbClients?.docs?.map((document) => ({
    ...document.data(),
    id: document.id,
  }));

  const currentClient = dbClients?.find(
    (currClient) =>
      currClient.name === client.name && currClient.email === client.email
  );

  if (currentClient) {
  } else await addDoc(clientsCollectionRef, client);
};

export const MakeReservation = async (formClient, formReservation) => {
  const getClient = async () => {
    const rawClients = await getDocs(clientsCollectionRef);
    return rawClients.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  };

  const getTable = async () => {
    const rawTables = await getDocs(tablesCollectionRef);
    return rawTables.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  };

  const clients = await getClient();
  const tables = await getTable();

  const client = clients.find(
    (dbClient) =>
      dbClient.name === formClient.name && dbClient.Phone === formClient.Phone
  );

  const table = tables.find(
    (table) =>
      table.Capacity === formReservation.guestsNumber && !table.Reserved
  );

  if (client && table) {
    const reservation = {
      ClientId: client.id,
      TableId: table.id,
      date: formReservation.date,
    };

    await addDoc(reservationsCollectionRef, reservation);
    await updateDoc(doc(db, "tables", table.id), { Reserved: true });

    return true;
  }

  return false;
};

export const GetFiveElements = async () => {
  const data = await GetAllFoods();
  return data?.slice(0, 8);
};
