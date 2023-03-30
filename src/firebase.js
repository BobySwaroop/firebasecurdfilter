
import firebase from "firebase/compat/app";
import "firebase/database";

// import { getFirestore } from "@firebase/firestore"

// import { createContext, useContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBT55paOmRnQwDhso5FtOHgu_K-CcDNlUg",
    authDomain: "reactform-21cf1.firebaseapp.com",
    databaseURL: "https://reactform-21cf1-default-rtdb.firebaseio.com",
    projectId: "reactform-21cf1",
    storageBucket: "reactform-21cf1.appspot.com",
    messagingSenderId: "971274115434",
    appId: "1:971274115434:web:f9bebeabe7200162ac6d13"
  };
//  export  const useFirebase = () => useContext(FirebaseContext);
//   const FirebaseContext = createContext(null);
//   const firebaseApp = initializeApp(firebaseConfig);
//   const firebaseAuth = getAuth(firebaseApp);
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();