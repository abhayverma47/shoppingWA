import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPYVV47VzQdKMBOgv6SHn83VdUWvusWiQ",
  authDomain: "shoppingwa-947a2.firebaseapp.com",
  databaseURL: "https://shoppingwa-947a2.firebaseio.com",
  projectId: "shoppingwa-947a2",
  storageBucket: "shoppingwa-947a2.appspot.com",
  messagingSenderId: "607705406750",
  appId: "1:607705406750:web:8962b6624774d5ceaa7d0f",
  measurementId: "G-Y1GR0QK7FG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
