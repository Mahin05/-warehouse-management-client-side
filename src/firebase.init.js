// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTFH7ZbmqO4NtOyjdrHNPWxLsbOxSGY9Y",
  authDomain: "islams-vehicle-corporation.firebaseapp.com",
  projectId: "islams-vehicle-corporation",
  storageBucket: "islams-vehicle-corporation.appspot.com",
  messagingSenderId: "618790400814",
  appId: "1:618790400814:web:9871c9867209a2522bc0bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;