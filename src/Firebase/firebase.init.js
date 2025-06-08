// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zOxIX63NtI5NL57g6dLKmamePZr8dCE",
  authDomain: "coffee-store-app-64bbf.firebaseapp.com",
  projectId: "coffee-store-app-64bbf",
  storageBucket: "coffee-store-app-64bbf.firebasestorage.app",
  messagingSenderId: "150105392270",
  appId: "1:150105392270:web:5c98cedacce9394b0ff5df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
