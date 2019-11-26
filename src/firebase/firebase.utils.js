import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClJgUTlF8iOre7SP7mo-QrMgw9Isn0xaI",
    authDomain: "ebi-db.firebaseapp.com",
    databaseURL: "https://ebi-db.firebaseio.com",
    projectId: "ebi-db",
    storageBucket: "ebi-db.appspot.com",
    messagingSenderId: "801347450011",
    appId: "1:801347450011:web:e1db6412c0ad9bc8f8823e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;