// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH91SBPDJPBg2IESOMUFVv7wC8HNrSdUc",
    authDomain: "social-media-app-2e68e.firebaseapp.com",
    projectId: "social-media-app-2e68e",
    storageBucket: "social-media-app-2e68e.appspot.com",
    messagingSenderId: "918169783916",
    appId: "1:918169783916:web:651070ae2418a26fd25249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);

export const storage = getStorage(app);

