import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzWRKOujblA9vIdPiZYUAsJPYZ7CK5Pns",
  authDomain: "vue-blog-system-2c146.firebaseapp.com",
  projectId: "vue-blog-system-2c146",
  storageBucket: "vue-blog-system-2c146.appspot.com",
  messagingSenderId: "413563081636",
  appId: "1:413563081636:web:565846c6e1cd91ce36a731",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth };
