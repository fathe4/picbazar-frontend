import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDxalH2Vm-vdjIgZAHOlWtFZTev5xVXobg",
    authDomain: "picbazar-cd124.firebaseapp.com",
    projectId: "picbazar-cd124",
    storageBucket: "picbazar-cd124.appspot.com",
    messagingSenderId: "675267558876",
    appId: "1:675267558876:web:0fe486f19a57756d4b6319",
    measurementId: "G-2E64C8T2QD"
};

initializeApp(firebaseConfig);
const auth = getAuth()
const googleAuthProvider = new GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
// const createUserWithEmailAndPassword = new firebase.auth.createUserWithEmailAndPassword()

export { auth, googleAuthProvider }