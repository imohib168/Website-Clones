import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKDVvc6wYCE0k1fuNP3whYpdFiVH9__eo",
    authDomain: "instagram-clone-168.firebaseapp.com",
    databaseURL: "https://instagram-clone-168.firebaseio.com",
    projectId: "instagram-clone-168",
    storageBucket: "instagram-clone-168.appspot.com",
    messagingSenderId: "278547728657",
    appId: "1:278547728657:web:05f45b59398516ee1964b0",
    measurementId: "G-1NMLKYJQ2S"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {
    db,
    auth,
    storage
};