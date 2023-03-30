
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6C6ALyE5ZSzHQ3Jdz3_9aP2vMTETJSYs",
    authDomain: "myapp-74f97.firebaseapp.com",
    databaseURL: "https://myapp-74f97-default-rtdb.firebaseio.com",
    projectId: "myapp-74f97",
    storageBucket: "myapp-74f97.appspot.com",
    messagingSenderId: "438463680441",
    appId: "1:438463680441:web:e59651c0b316d4e85ef068"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);