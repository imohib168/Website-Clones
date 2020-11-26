import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABwZsgp09-VBcCT4lhlqx77W7cZxN_2rg",
    authDomain: "react-todo-app-168.firebaseapp.com",
    databaseURL: "https://react-todo-app-168.firebaseio.com",
    projectId: "react-todo-app-168",
    storageBucket: "react-todo-app-168.appspot.com",
    messagingSenderId: "1016923410498",
    appId: "1:1016923410498:web:73d293298c54cbafe55ddb",
    measurementId: "G-NH1151BL1L"
})

const db = firebaseApp.firestore();
export default db;