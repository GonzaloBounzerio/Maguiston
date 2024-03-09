
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC75SSIBcdZ6dClmS1DS_rX0lSo-1AR0YY",
  authDomain: "maguiston-coder.firebaseapp.com",
  projectId: "maguiston-coder",
  storageBucket: "maguiston-coder.appspot.com",
  messagingSenderId: "688803670138",
  appId: "1:688803670138:web:80102fb496fbe1fbe273c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )