import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
const firebaseConfig = {
  apiKey: "AIzaSyC244wm0biWCupTydLHh4wxFeUKZp70NPY",
  authDomain: "bareleaf-admin.firebaseapp.com",
  projectId: "bareleaf-admin",
  storageBucket: "bareleaf-admin.appspot.com",
  messagingSenderId: "508848962272",
  appId: "1:508848962272:web:f09c5e6512d4ceeadbee85",
  measurementId: "G-B30KV33EWS"
};

const app = firebase.initializeApp(firebaseConfig);
export const cloudFireStore = app.firestore();
