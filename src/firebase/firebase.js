import firebase from 'firebase';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBc0LzZiGRB_hBLUSUx9viR_CLAdLKt1Yw",
    authDomain: "expensify-c4de7.firebaseapp.com",
    databaseURL: "https://expensify-c4de7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "expensify-c4de7",
    storageBucket: "expensify-c4de7.appspot.com",
    messagingSenderId: "844032377565",
    appId: "1:844032377565:web:ff408202b9016636add134",
    measurementId: "G-ELZMWNX97J"
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }