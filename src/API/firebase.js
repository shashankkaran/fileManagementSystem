import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASONkB7VlyJ4SmWYJVysgvnZjr5kxymPM",
  authDomain: "vaibhav-7e189.firebaseapp.com",
  projectId: "vaibhav-7e189",
  storageBucket: "vaibhav-7e189.appspot.com",
  messagingSenderId: "677598177939",
  appId: "1:677598177939:web:84dd6ffc35e0a7d9343b66",
  measurementId: "G-P58FE8DJ31"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
