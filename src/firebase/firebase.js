import firebase from 'firebase';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDEsg7n0Q7kILP8Xfzh5o9h2iZnjuojSKs",
    authDomain: "expensify-app-31186.firebaseapp.com",
    databaseURL: "https://expensify-app-31186-default-rtdb.firebaseio.com",
    projectId: "expensify-app-31186",
    storageBucket: "expensify-app-31186.appspot.com",
    messagingSenderId: "240307474526",
    appId: "1:240307474526:web:425279ede6919e1c0564cf",
    measurementId: "G-P80LCE5YDD"
};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }