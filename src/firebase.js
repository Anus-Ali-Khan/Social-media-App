// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALQbgQqZMCoGFgR5o2i5g4lwEnmDJ9PNQ",
    authDomain: "social-media-website-29fbf.firebaseapp.com",
    projectId: "social-media-website-29fbf",
    storageBucket: "social-media-website-29fbf.appspot.com",
    messagingSenderId: "286065208327",
    appId: "1:286065208327:web:f87ec9a71dc14db8e20ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export const storage = getStorage(app);

