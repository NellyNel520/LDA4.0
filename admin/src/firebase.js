// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-z3Q-mJg0PIcH_ScTxzfi1So56La4sWA",
  authDomain: "london-dior-apparel.firebaseapp.com",
  projectId: "london-dior-apparel",
  storageBucket: "london-dior-apparel.appspot.com",
  messagingSenderId: "160685449625",
  appId: "1:160685449625:web:8dfb7e10f8bce0a0f77308",
  measurementId: "G-Y48P8TFZ2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;