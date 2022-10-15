import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCFa271a4Nw_cQ7LdhiNTdt4hP9XltJwQ",
  authDomain: "reactfolio-67073.firebaseapp.com",
  projectId: "reactfolio-67073",
  storageBucket: "reactfolio-67073.appspot.com",
  messagingSenderId: "431339034964",
  appId: "1:431339034964:web:3fd551a77413cc7f7790c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};