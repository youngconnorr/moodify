// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3h-3bZJ1fI2oFzY37guoFpeipgXnj_fc",
  authDomain: "volleyball-63110.firebaseapp.com",
  projectId: "volleyball-63110",
  storageBucket: "volleyball-63110.firebasestorage.app",
  messagingSenderId: "684631958589",
  appId: "1:684631958589:web:4443e80a057c73604e7654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }