
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBT55paOmRnQwDhso5FtOHgu_K-CcDNlUg",
  authDomain: "reactform-21cf1.firebaseapp.com",
  databaseURL: "https://reactform-21cf1-default-rtdb.firebaseio.com",
  projectId: "reactform-21cf1",
  storageBucket: "reactform-21cf1.appspot.com",
  messagingSenderId: "971274115434",
  appId: "1:971274115434:web:f9bebeabe7200162ac6d13"
};

  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);