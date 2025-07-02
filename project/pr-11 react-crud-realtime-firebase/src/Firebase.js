import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDiLwruXDqBIdR1MwLXL5y9_hPtW5LLQ-M",
  authDomain: "crud-realtime-database-70842.firebaseapp.com",
  databaseURL: "https://crud-realtime-database-70842-default-rtdb.firebaseio.com",
  projectId: "crud-realtime-database-70842",
  storageBucket: "crud-realtime-database-70842.firebasestorage.app",
  messagingSenderId: "726006540413",
  appId: "1:726006540413:web:ab3cd3bb29bdad483ea914",
  measurementId: "G-36DF0P9NND"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);