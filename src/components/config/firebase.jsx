import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "foodproject-test.firebaseapp.com",
  projectId: `${projectId}`,
  storageBucket: "foodproject-test.appspot.com",
  messagingSenderId: "35064237359",
  appId: "1:35064237359:web:e3a935ace5843ef5a5a5da",
  measurementId: "G-ZWJ9Z3S2HS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
