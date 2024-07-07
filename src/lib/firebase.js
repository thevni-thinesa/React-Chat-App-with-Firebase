import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-28717.firebaseapp.com",
  projectId: "reactchatapp-28717",
  storageBucket: "reactchatapp-28717.appspot.com",
  messagingSenderId: "580700628863",
  appId: "1:580700628863:web:5996bb0b3a58a412121c4a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()