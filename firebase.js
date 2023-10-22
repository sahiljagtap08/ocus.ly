// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuEgZB_QGbikIgVVAjty9xnuAwkvywdv0",
  authDomain: "ocusly.firebaseapp.com",
  projectId: "ocusly",
  storageBucket: "ocusly.appspot.com",
  messagingSenderId: "562179721889",
  appId: "1:562179721889:web:541b406b0c43bc7e4abee0",
  measurementId: "G-T1F190ZT9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);