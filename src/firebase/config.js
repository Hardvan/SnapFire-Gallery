import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "snapfire-gallery.firebaseapp.com",
  projectId: "snapfire-gallery",
  storageBucket: "snapfire-gallery.appspot.com",
  messagingSenderId: "862594411149",
  appId: "1:862594411149:web:d2b5747e91d5a451abd0c4",
  measurementId: "G-NM4LEQX2B2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
