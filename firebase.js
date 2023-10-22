// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkuOuGJxSzhctFthtfKLIx-RHXY7pBaCI",
  authDomain: "ocusly-8fffc.firebaseapp.com",
  databaseURL: "https://ocusly-8fffc-default-rtdb.firebaseio.com",
  projectId: "ocusly-8fffc",
  storageBucket: "ocusly-8fffc.appspot.com",
  messagingSenderId: "547980514439",
  appId: "1:547980514439:web:1a0841e9adaea76c829422",
  measurementId: "G-KWRLP33Q7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
