import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDZ_jpgInkc3aeXOTG_kFYXsmq2b2BuDk",
  authDomain: "mapitausers.firebaseapp.com",
  projectId: "mapitausers",
  storageBucket: "mapitausers.appspot.com",
  messagingSenderId: "704575496940",
  appId: "1:704575496940:web:32fbb3a0b2534a513b3bc9",
  measurementId: "G-LEQ4CFZYBP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const realtimeDB = getDatabase(app);
export const storage = getStorage(app);