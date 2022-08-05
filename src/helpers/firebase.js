import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import {
//   toastErrorNotify,
//   toastSuccessNotify,
// } from "./ToastNotify";




const firebaseConfig = {
    apiKey: "AIzaSyDveEI0a1ncJerpeaUIsjVTYN4l_MGJyWA",
    authDomain: "blog-449f3.firebaseapp.com",
    databaseURL: "https://blog-449f3-default-rtdb.firebaseio.com",
    projectId: "blog-449f3",
    storageBucket: "blog-449f3.appspot.com",
    messagingSenderId: "991196571353",
    appId: "1:991196571353:web:bf4c1143444aad570ac0c8"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);