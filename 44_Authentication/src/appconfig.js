// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiTNyaDilJRa-Y0_BI0jx1wKmKHrAQpaU",
  authDomain: "react-authentication-8fc64.firebaseapp.com",
  projectId: "react-authentication-8fc64",
  storageBucket: "react-authentication-8fc64.appspot.com",
  messagingSenderId: "348375101166",
  appId: "1:348375101166:web:d2be28b6ebe2699c2f8dff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();