import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-f2972.firebaseapp.com",
  projectId: "task-manager-f2972",
  storageBucket: "task-manager-f2972.firebasestorage.app",
  messagingSenderId: "849690211698",
  appId: "1:849690211698:web:a02924d9c1fdfd7104d9eb",
  measurementId: "G-EXK94SK13D"
};

export const app = initializeApp(firebaseConfig);
