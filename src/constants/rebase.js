import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';

var app = firebase.initializeApp({
 // Put your API Info here
});

var base = Rebase.createClass(app.database());

export const ref = firebase.database().ref()
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export default base;