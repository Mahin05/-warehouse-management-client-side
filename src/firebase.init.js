// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9RAXILKAc2FTIoiphB8TcB-UWIVo_do8",
  authDomain: "islams-vehicle-corporati-6cfe1.firebaseapp.com",
  projectId: "islams-vehicle-corporati-6cfe1",
  storageBucket: "islams-vehicle-corporati-6cfe1.appspot.com",
  messagingSenderId: "950147374815",
  appId: "1:950147374815:web:96302f0ad96b654efad36a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;