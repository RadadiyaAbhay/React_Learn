// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDodVkGeViU2Q4OZk8uJrWfaNuCyfuw80I",
  authDomain: "newsdekhoo-3e7b6.firebaseapp.com",
  projectId: "newsdekhoo-3e7b6",
  storageBucket: "newsdekhoo-3e7b6.appspot.com",
  messagingSenderId: "42075473972",
  appId: "1:42075473972:web:777ade48ce9c4b998e6261",
  measurementId: "G-2LCPRCZBK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();