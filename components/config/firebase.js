// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoTDfRqpc8_HHkSttaTAHtz87gNlvPrQI",
  authDomain: "reelrater-pam.firebaseapp.com",
  projectId: "reelrater-pam",
  storageBucket: "reelrater-pam.appspot.com",
  messagingSenderId: "302889962428",
  appId: "1:302889962428:web:fab8e7a7f3227341de39b9",
  measurementId: "G-Q6Q3GC2ZEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuthentication = getAuth(app);