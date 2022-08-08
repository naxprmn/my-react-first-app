// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdTd3O5oEshqjEVgFhkfxHCAds7e5tu5Q",
  authDomain: "react-test-fe45c.firebaseapp.com",
  projectId: "react-test-fe45c",
  storageBucket: "react-test-fe45c.appspot.com",
  messagingSenderId: "344548447902",
  appId: "1:344548447902:web:62d2f7e53ad4aaed3ecd8f",
  measurementId: "G-Q70RW4WM57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export {db}