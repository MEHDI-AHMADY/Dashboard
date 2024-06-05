// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6JGK2XXsQEb1Wi7BupUxDm9ufFd7ERIs",
  authDomain: "dashboard-8d24f.firebaseapp.com",
  databaseURL: "https://dashboard-8d24f-default-rtdb.firebaseio.com",
  projectId: "dashboard-8d24f",
  storageBucket: "dashboard-8d24f.appspot.com",
  messagingSenderId: "439963864130",
  appId: "1:439963864130:web:1d9e55a92a56f9e120f1db",
  measurementId: "G-0VEVPCXRY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage , db }