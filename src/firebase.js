// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getDatabase} from 'firebase/database';
import{getAuth} from 'firebase/auth'
// import * as firebase from 'firebase'
// import 'firebase/firestore';
// import 'firebase/auth'
// import 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeR4sNBciB78Ts5iGKj0ur7it_0juj4u4",
  authDomain: "todo-list-cb292.firebaseapp.com",
  databaseURL: "https://todo-list-cb292-default-rtdb.firebaseio.com",
  projectId: "todo-list-cb292",
  storageBucket: "todo-list-cb292.appspot.com",
  messagingSenderId: "178082350581",
  appId: "1:178082350581:web:511b59539029177e85ccbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);
export const auth = getAuth()
