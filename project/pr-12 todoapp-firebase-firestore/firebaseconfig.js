// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXV6R9CxtG3lHpsMpKnWo8X0O0jH76ao0",
  authDomain: "todo-firebase-firestore-db.firebaseapp.com",
  projectId: "todo-firebase-firestore-db",
  storageBucket: "todo-firebase-firestore-db.firebasestorage.app",
  messagingSenderId: "859165107095",
  appId: "1:859165107095:web:b65da21dbe8849e15b9ad2",
  measurementId: "G-VL08JLTYSL"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);