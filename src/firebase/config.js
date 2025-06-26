import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD0YiyqI86sv5vug4nokyWrQL-ph4s4QSo",

  authDomain: "fakesocial-e350d.firebaseapp.com",

  projectId: "fakesocial-e350d",

  storageBucket: "fakesocial-e350d.firebasestorage.app",

  messagingSenderId: "219634919379",

  appId: "1:219634919379:web:0b2fbf1c46716c09c07126",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
