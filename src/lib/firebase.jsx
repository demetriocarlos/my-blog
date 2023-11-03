
//import firebase from 'firebase'

/*let firebaseConfig = {

    // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
  apiKey: "AIzaSyCqqXyL8XEQEp9dL-vzHanSlrBD2WEm8zE",
  authDomain: "mi-primer-blog-25e6d.firebaseapp.com",
  databaseURL: "https://mi-primer-blog-25e6d-default-rtdb.firebaseio.com",
  projectId: "mi-primer-blog-25e6d",
  storageBucket: "mi-primer-blog-25e6d.appspot.com",
  messagingSenderId: "665264022057",
  appId: "1:665264022057:web:856fb6a5d3036d4b337238"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
}

firebase.initializeApp(firebaseConfig);

export default firebase*/

// Import the functions you need from the SDKs you need

import  firebase  from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqqXyL8XEQEp9dL-vzHanSlrBD2WEm8zE",
  authDomain: "mi-primer-blog-25e6d.firebaseapp.com",
  databaseURL: "https://mi-primer-blog-25e6d-default-rtdb.firebaseio.com",
  projectId: "mi-primer-blog-25e6d",
  storageBucket: "mi-primer-blog-25e6d.appspot.com",
  messagingSenderId: "665264022057",
  appId: "1:665264022057:web:856fb6a5d3036d4b337238"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase