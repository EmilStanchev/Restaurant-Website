import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC9EgWXijRKF0m4dY6ojYVtkmgK0u9tfJE",
  authDomain: "foodproject-test.firebaseapp.com",
  projectId: "foodproject-test",
  storageBucket: "foodproject-test.appspot.com",
  messagingSenderId: "35064237359",
  appId: "1:35064237359:web:e3a935ace5843ef5a5a5da",
  measurementId: "G-ZWJ9Z3S2HS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
