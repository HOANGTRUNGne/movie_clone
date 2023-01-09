import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDo4_F64W_s5ecz3w3al7LlZqrDCzFGmZ4",
    authDomain: "movie-clone-67752.firebaseapp.com",
    projectId: "movie-clone-67752",
    storageBucket: "movie-clone-67752.appspot.com",
    messagingSenderId: "788755599692",
    appId: "1:788755599692:web:f75f50ee215cc0bb697fe9"
};


// const firebaseConfig = {
//     apiKey: process.env.REACT_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_FIREBASE_APP_ID
// };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
