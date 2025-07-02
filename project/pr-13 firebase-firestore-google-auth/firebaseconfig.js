// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXoNHpBNAHJBHXrLf7frtVHYTKC43HNM",
  authDomain: "authentication-75ac3.firebaseapp.com",
  projectId: "authentication-75ac3",
  storageBucket: "authentication-75ac3.firebasestorage.app",
  messagingSenderId: "518667642108",
  appId: "1:518667642108:web:7cc5bad1d48e235e57a379",
  measurementId: "G-W18Y4YMYZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const google=new GoogleAuthProvider
const analytics = getAnalytics(app);