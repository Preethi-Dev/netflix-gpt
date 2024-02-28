// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi4F-pssdsOVhMw_KdRnGFJ33yK_1DsnE",
  authDomain: "netflixgpt-503be.firebaseapp.com",
  projectId: "netflixgpt-503be",
  storageBucket: "netflixgpt-503be.appspot.com",
  messagingSenderId: "603534063602",
  appId: "1:603534063602:web:b03eba650d90011f0e5d6b",
  measurementId: "G-6TSPB5YBXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
