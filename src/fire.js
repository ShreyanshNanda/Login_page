import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD6eOfrhJk7dU--KkRtj1cjEegMRc5JW7g",
    authDomain: "login-291f3.firebaseapp.com",
    projectId: "login-291f3",
    storageBucket: "login-291f3.appspot.com",
    messagingSenderId: "366679281307",
    appId: "1:366679281307:web:6b90f0dbd44937f9e7403e"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;