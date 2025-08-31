// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHnYpxN9oL3KUa61Bgsm7wNyV97Kc_Y6s",
  authDomain: "portfolio-modjo.firebaseapp.com",
  projectId: "portfolio-modjo",
  storageBucket: "portfolio-modjo.firebasestorage.app",
  messagingSenderId: "195250838177",
  appId: "1:195250838177:web:a0dd9636fb23510340eee0",
  measurementId: "G-C02YEZVHQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
