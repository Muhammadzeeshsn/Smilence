// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/authhttps://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMsnmIJdwwLjInJJaJvtEKhAokhmb5Pro",
  authDomain: "smilence-b5319.firebaseapp.com",
  projectId: "smilence-b5319",
  storageBucket: "smilence-b5319.firebasestorage.app",
  messagingSenderId: "312790857073",
  appId: "1:312790857073:web:3770d0c30c1158776232d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign In inputs

const sign_in = document.getElementById('sign_in');
sign_in.addEventListener("click", function (event) {
  event.preventDefault()
  alert('Wait, Signing in...')
});

const UserName = document.getElementById("Username");
const email = document.getElementById("Email");
const Password = document.getElementById("Password");
const confirm_password = document.getElementById("ConfirmPassword");
const sign_up = document.getElementById('sign_up');

sign_up.addEventListener("click", function(event){
event.preventDefault()

alert('error')

})