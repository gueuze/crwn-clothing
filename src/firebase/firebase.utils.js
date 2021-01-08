import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBZxDd1qBY_Ktj5wQcX8V4kRffwjNQaUjU",
  authDomain: "crwn-db-f2a02.firebaseapp.com",
  projectId: "crwn-db-f2a02",
  storageBucket: "crwn-db-f2a02.appspot.com",
  messagingSenderId: "194270707348",
  appId: "1:194270707348:web:46ca73ee95b67b56eefe81",
  measurementId: "G-5ST070ZY9P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
