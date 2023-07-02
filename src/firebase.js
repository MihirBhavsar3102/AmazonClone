import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD20LtW9GkrVZJtXRAlBYtqpzBqIl57Dvk",
  authDomain: "clone-58d2c.firebaseapp.com",
  projectId: "clone-58d2c",
  storageBucket: "clone-58d2c.appspot.com",
  messagingSenderId: "212998148190",
  appId: "1:212998148190:web:fd748546176efe2e2da4cf",
  measurementId: "G-BXDXML832Q",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
