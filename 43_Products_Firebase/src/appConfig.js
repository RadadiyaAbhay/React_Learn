

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANELU5YDjS0BLalrfIkItoJrzbzjoF7hQ",
  authDomain: "reactlearn-60f99.firebaseapp.com",
  projectId: "reactlearn-60f99",
  storageBucket: "reactlearn-60f99.appspot.com",
  messagingSenderId: "1098287767071",
  appId: "1:1098287767071:web:5ad122fb9e9d02c8967f2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);