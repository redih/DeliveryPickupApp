// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATcNmWlC5-xBHTRK6yzgsohmhK4R_zPB8",
  authDomain: "restaurant-mobile-app-bf71d.firebaseapp.com",
  projectId: "restaurant-mobile-app-bf71d",
  storageBucket: "restaurant-mobile-app-bf71d.appspot.com",
  messagingSenderId: "834885553755",
  appId: "1:834885553755:web:b89ebb8310e86cdebdb97e",
  measurementId: "G-J1X1RXJEMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
