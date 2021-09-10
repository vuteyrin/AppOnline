
import firebase from 'firebase'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
 apiKey: "AIzaSyCBd-W7T29gyD8YJkL0zsp5_oclPxzBVxc",
 authDomain: "onlineshop-60c77.firebaseapp.com",
 projectId: "onlineshop-60c77",
 storageBucket: "onlineshop-60c77.appspot.com",
 messagingSenderId: "1071880910932",
 appId: "1:1071880910932:web:26545c5410b077794195c1",
 measurementId: "G-DWM4X2ZDCB"
};


firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();