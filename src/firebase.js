// firebase.js

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI-z31ldyV5dOYiUZJ9JUfxu2uPZXwa54",
  authDomain: "crmv-11331.firebaseapp.com",
  projectId: "crmv-11331",
  storageBucket: "crmv-11331.firebasestorage.app",
  messagingSenderId: "1063824378126",
  appId: "1:1063824378126:web:7c5219b18a11b40aedaf5f",
  measurementId: "G-87ENXZHGRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Provider
export const provider = new GoogleAuthProvider();