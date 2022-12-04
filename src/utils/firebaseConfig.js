// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApAT0GNgZomx0pkAy_blmwKXFzLkRhQIQ",
    authDomain: "proyecto-coder-react-d0dae.firebaseapp.com",
    projectId: "proyecto-coder-react-d0dae",
    storageBucket: "proyecto-coder-react-d0dae.appspot.com",
    messagingSenderId: "69958566994",
    appId: "1:69958566994:web:46e5001024c1c7a8864b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);