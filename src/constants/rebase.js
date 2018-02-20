import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyApfvkQhUlVVhJWV5_xSsLbDH4jWi81o98",
    authDomain: "beer-react.firebaseapp.com",
    databaseURL: "https://beer-react.firebaseio.com",
    projectId: "beer-react",
    storageBucket: "beer-react.appspot.com",
    messagingSenderId: "239594233116"
});

var base = Rebase.createClass(app.database());

export const ref = firebase.database().ref()
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export default base;