// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-46378.firebaseapp.com",
  projectId: "ai-room-redesign-46378",
  storageBucket: "ai-room-redesign-46378.firebasestorage.app",
  messagingSenderId: "125589179600",
  appId: "1:125589179600:web:0afeb76a1234f7ed5aa2d5",
  measurementId: "G-8LH750RSYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage=getStorage(app)
