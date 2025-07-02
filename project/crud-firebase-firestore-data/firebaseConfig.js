// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDhFYvjMiUMqiG5x-24LJSzj4owlmKsiI",
  authDomain: "crud-firebase-firestore-db.firebaseapp.com",
  projectId: "crud-firebase-firestore-db",
  storageBucket: "crud-firebase-firestore-db.firebasestorage.app",
  messagingSenderId: "496829767718",
  appId: "1:496829767718:web:8d51650925e498ea8906e7",
  measurementId: "G-YDVHFVK22Q"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);