// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7_NvwpzODjF96ypWNS6OHkOadlMbOnJ8",
  authDomain: "clio7f.firebaseapp.com",
  projectId: "clio7f",
  storageBucket: "clio7f.appspot.com",
  messagingSenderId: "192343950982",
  appId: "1:192343950982:web:6f3050b957a7260eceb307",
  measurementId: "G-R81EFQ7C6V"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
 // Agregar Storage

export { db, storage, collection, addDoc, ref, uploadBytes, getDownloadURL  }; 
