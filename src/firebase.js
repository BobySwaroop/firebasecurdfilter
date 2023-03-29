import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBT55paOmRnQwDhso5FtOHgu_K-CcDNlUg",
    authDomain: "reactform-21cf1.firebaseapp.com",
    databaseURL: "https://reactform-21cf1-default-rtdb.firebaseio.com",
    projectId: "reactform-21cf1",
    storageBucket: "reactform-21cf1.appspot.com",
    messagingSenderId: "971274115434",
    appId: "1:971274115434:web:f9bebeabe7200162ac6d13"
  };
  const firedb =firebase.initializeApp(firebaseConfig);
  export default firedb.database().ref();