import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "./ToastNotify";




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

export const creatUser = async (email,password,navigate,displayName) => {
  try {
    await createUserWithEmailAndPassword (auth, email, password);
    await updateProfile(auth.currentUser, {displayName:displayName})
    toastSuccessNotify("User Registered Successfuly")
    navigate("/")
  } catch (error) {
    toastErrorNotify(error.message)
  }
}

export const signIn = async (email, password, navigate)=> {
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    toastSuccessNotify("User Login Successfully")
    navigate("/")
  } catch (error) {
    toastErrorNotify(error.message)
  }
}

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      setCurrentUser(currentUser)
    }else {
      setCurrentUser(false)
    }
  })
}

export const logOut = () => {
  signOut(auth);
  toastSuccessNotify("Logout Successfully")
}

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result)=> {
    console.log(result)
    toastSuccessNotify("User login successfully")
    navigate("/")
  }).catch((error) => {
    toastErrorNotify(error.message)
    });
  
}