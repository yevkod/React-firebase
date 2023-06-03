import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcKG0SGX79hQ0NM-QWuOQMJYs6pvD8zEc",
  authDomain: "thedojo-7aae2.firebaseapp.com",
  projectId: "thedojo-7aae2",
  storageBucket: "thedojo-7aae2.appspot.com",
  messagingSenderId: "1086941915121",
  appId: "1:1086941915121:web:cebabc303931942bcb8650"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, projectStorage, timestamp}