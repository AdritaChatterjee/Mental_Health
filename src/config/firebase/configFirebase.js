import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDVerYC1vTNvkQP3gAha6_un0brEOVjaNM",
    authDomain: "reactform-7b6b6.firebaseapp.com",
    databaseURL: "https://reactform-7b6b6-default-rtdb.firebaseio.com",
    projectId: "reactform-7b6b6",
    storageBucket: "reactform-7b6b6.appspot.com",
    messagingSenderId: "20903636007",
    appId: "1:20903636007:web:0400625b4c95b1cdb57202"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
