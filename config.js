import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCdUXpRrVgHoDsw2w36_xJ4gjnjAl03KAY",
  authDomain: "bed-time-stories-app-52ece.firebaseapp.com",
  projectId: "bed-time-stories-app-52ece",
  storageBucket: "bed-time-stories-app-52ece.appspot.com",
  messagingSenderId: "883343628283",
  appId: "1:883343628283:web:2d5408c128376e3dd49d5e",
  measurementId: "G-PVYV16JKJS"
};

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   