// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-TMbUh2BDlACkJ5cUY-sYNtQjITmMXzE",
  authDomain: "netflixclone-53c33.firebaseapp.com",
  projectId: "netflixclone-53c33",
  storageBucket: "netflixclone-53c33.appspot.com",
  messagingSenderId: "400098961190",
  appId: "1:400098961190:web:fc910a0edad2b7cc41c3e7",
  measurementId: "G-W0QGCLZGSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);




