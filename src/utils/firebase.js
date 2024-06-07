// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBP1zFCBBZ6RH6NDsSTRJQoEnM1xvHaA",
  authDomain: "netflixgpt-4ed25.firebaseapp.com",
  projectId: "netflixgpt-4ed25",
  storageBucket: "netflixgpt-4ed25.appspot.com",
  messagingSenderId: "793807575645",
  appId: "1:793807575645:web:5c7470f7b9afd9cc358bb4",
  measurementId: "G-RGSV24S00W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()