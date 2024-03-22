// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0gcnNGVppuULSdC8IEiy6OFrFT6XHhuc",
  authDomain: "netflixclone-52896.firebaseapp.com",
  projectId: "netflixclone-52896",
  storageBucket: "netflixclone-52896.appspot.com",
  messagingSenderId: "689047391072",
  appId: "1:689047391072:web:a1809b7430177491486c05",
  measurementId: "G-8TB2V5G586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);