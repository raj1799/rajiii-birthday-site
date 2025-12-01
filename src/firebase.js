import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSASMvatkg6oLYkvkZ-HjX2RPgjBSoSDY",
  authDomain: "birthday-special-5741a.firebaseapp.com",
  projectId: "birthday-special-5741a",
  storageBucket: "birthday-special-5741a.firebasestorage.app",
  messagingSenderId: "945722189778",
  appId: "1:945722189778:web:27f5b6de6d590bf1954a0b",
  measurementId: "G-W8QRJV0SGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);
