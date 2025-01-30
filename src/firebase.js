// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-b151c.firebaseapp.com",
  projectId: "next-blog-b151c",
  storageBucket: "next-blog-b151c.firebasestorage.app",
  messagingSenderId: "286177316408",
  appId: "1:286177316408:web:96f163b6dbd85f013720cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
