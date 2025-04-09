// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/* *************** import Auth *************** */

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyTQdpNsobclE9vHUrJ_1XsG58Z5nGIgc",
  authDomain: "coffee-store-4c2e5.firebaseapp.com",
  projectId: "coffee-store-4c2e5",
  storageBucket: "coffee-store-4c2e5.firebasestorage.app",
  messagingSenderId: "696754377606",
  appId: "1:696754377606:web:59963d0db9f2b8698dd207",
  measurementId: "G-JRC990EMZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
