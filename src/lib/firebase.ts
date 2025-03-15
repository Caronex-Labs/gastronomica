// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIRXN8hdwXrzra9HLZGYthsxpclxcCtHc",
    authDomain: "gastronomica-74914.firebaseapp.com",
    databaseURL: "https://gastronomica-74914-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gastronomica-74914",
    storageBucket: "gastronomica-74914.firebasestorage.app",
    messagingSenderId: "168988724876",
    appId: "1:168988724876:web:4cf0171bcbb42da789f5a9",
    measurementId: "G-V44X1MK6TB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance
export { app };
