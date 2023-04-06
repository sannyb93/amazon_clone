import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUl75QSCLqcT5ErIwfP-d9RLxCeQaOxDU",
    authDomain: "clone-b8b1b.firebaseapp.com",
    projectId: "clone-b8b1b",
    storageBucket: "clone-b8b1b.appspot.com",
    messagingSenderId: "557255248699",
    appId: "1:557255248699:web:f5afa0c8cea6ec15f2c51e",
    measurementId: "G-TJLXM58QF5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };