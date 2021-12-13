import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8AuiXYl1oXPiK8LajcY4c__iIOZr78OI",
  authDomain: "coderhouse-ecommerce-d2601.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d2601",
  storageBucket: "coderhouse-ecommerce-d2601.appspot.com",
  messagingSenderId: "630211775198",
  appId: "1:630211775198:web:942cc2c810987c7e54d04f",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
