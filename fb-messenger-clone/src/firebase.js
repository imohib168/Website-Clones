import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbNuG6GAAvNB_aRR4neogmVVLa11MQgCM",
    authDomain: "messenger-clone-168.firebaseapp.com",
    databaseURL: "https://messenger-clone-168.firebaseio.com",
    projectId: "messenger-clone-168",
    storageBucket: "messenger-clone-168.appspot.com",
    messagingSenderId: "732147265211",
    appId: "1:732147265211:web:4bf81e5d7ce3b87e05c39e",
    measurementId: "G-STK3L82JSN"
})

const db = firebaseApp.firestore();

export default db;