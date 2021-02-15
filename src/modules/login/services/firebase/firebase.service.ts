import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBWs2B8_9MLMWE96xhVdVdQIK0h7JqMVrs",
    authDomain: "react-cloth-app-65dcf.firebaseapp.com",
    projectId: "react-cloth-app-65dcf",
    storageBucket: "react-cloth-app-65dcf.appspot.com",
    messagingSenderId: "1043170475435",
    appId: "1:1043170475435:web:8602271a5f18f1769266ee"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
