import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCU2B78Zn1czSyCYJ5vNRa4KfPG0iUCIUo",
  authDomain: "react-hooks-blog-a8ccf.firebaseapp.com",
  projectId: "react-hooks-blog-a8ccf",
  storageBucket: "react-hooks-blog-a8ccf.appspot.com",
  messagingSenderId: "115675409999",
  appId: "1:115675409999:web:82e2814e343f43ad9d443a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();