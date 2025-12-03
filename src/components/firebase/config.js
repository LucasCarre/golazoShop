import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC2mv5Dfez179Wnkpak00vbfwG5sBGAPjY",
    authDomain: "golazoshop-db.firebaseapp.com",
    projectId: "golazoshop-db",
    storageBucket: "golazoshop-db.firebasestorage.app",
    messagingSenderId: "1096561378666",
    appId: "1:1096561378666:web:6ba43f66576cbe909a5113"
};


export const app = initializeApp(firebaseConfig);