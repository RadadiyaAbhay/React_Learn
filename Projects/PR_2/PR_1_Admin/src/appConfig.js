// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChIPfeRXgaF7Ci9M6DRPQKta1KGWJMvRU",
  authDomain: "ecommerce-573b6.firebaseapp.com",
  projectId: "ecommerce-573b6",
  storageBucket: "ecommerce-573b6.appspot.com",
  messagingSenderId: "496849944918",
  appId: "1:496849944918:web:5a321ddf09eabceca816f7",
  measurementId: "G-BH20HJSJD2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
