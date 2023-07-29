import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhMcY4h29_POsvU__NIR4a3Hj4lv3ZG8I",
  authDomain: "book-catalogue-knowaminul.firebaseapp.com",
  projectId: "book-catalogue-knowaminul",
  storageBucket: "book-catalogue-knowaminul.appspot.com",
  messagingSenderId: "559774326958",
  appId: "1:559774326958:web:3336adeea4a11a9c490d3f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
