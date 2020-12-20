import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ9l4zMaMmDKWQoRnXR61I4n0cjqX4eaw",
    authDomain: "utolo-clothing-db.firebaseapp.com",
    projectId: "utolo-clothing-db",
    storageBucket: "utolo-clothing-db.appspot.com",
    messagingSenderId: "480397579254",
    appId: "1:480397579254:web:6b20e98c2d98a7ed58add7",
    measurementId: "G-M2QWQFMQCF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;