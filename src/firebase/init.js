// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNxSu258SQmF8fCyXc9zzIzvqIiQKnYx0",
  authDomain: "fit5032-week-1d500.firebaseapp.com",
  projectId: "fit5032-week-1d500",
  storageBucket: "fit5032-week-1d500.firebasestorage.app",
  messagingSenderId: "680484918681",
  appId: "1:680484918681:web:1058124d27f47d95a1af08"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db