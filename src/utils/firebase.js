// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT4_yUUCBVsDDAUo1hLIND4sssF5tMdog",
  authDomain: "netflixgpt-7fe77.firebaseapp.com",
  projectId: "netflixgpt-7fe77",
  storageBucket: "netflixgpt-7fe77.appspot.com",
  messagingSenderId: "835728932676",
  appId: "1:835728932676:web:49f9b056351f5270e72111",
  measurementId: "G-2YEPWEXECW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();