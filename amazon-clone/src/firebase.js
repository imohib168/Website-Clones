import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdCPKvxvO2aj_iOQLY2JsCHgBczo-01Ow",
    authDomain: "amaz-clone-168.firebaseapp.com",
    projectId: "amaz-clone-168",
    storageBucket: "amaz-clone-168.appspot.com",
    messagingSenderId: "181600917073",
    appId: "1:181600917073:web:05b5a94e40659469468a70",
    measurementId: "G-S23SM57SPY"
});

const auth = firebase.auth();

export { auth };