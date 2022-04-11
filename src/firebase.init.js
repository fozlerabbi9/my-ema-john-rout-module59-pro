// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATlT8kOLaCJZ4ZntYMPjVDBS88NDimMDw",
  authDomain: "my-ema-john-route-module59-pro.firebaseapp.com",
  projectId: "my-ema-john-route-module59-pro",
  storageBucket: "my-ema-john-route-module59-pro.appspot.com",
  messagingSenderId: "542837909764",
  appId: "1:542837909764:web:8d9bfe81168129082c4851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;