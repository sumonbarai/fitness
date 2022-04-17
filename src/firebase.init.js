// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSH2Bp19ssydnTKso-iyVa8-83benCKiw",
  authDomain: "fitness-94a8e.firebaseapp.com",
  projectId: "fitness-94a8e",
  storageBucket: "fitness-94a8e.appspot.com",
  messagingSenderId: "217000843248",
  appId: "1:217000843248:web:ceb28cd38b3c0550796f35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
