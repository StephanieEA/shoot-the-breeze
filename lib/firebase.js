import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAOwYcBPbbT7nmkGMQy4jrGQcpo6vAaS18",
   authDomain: "shoot-the-breeze-7b0a7.firebaseapp.com",
   databaseURL: "https://shoot-the-breeze-7b0a7.firebaseio.com",
   storageBucket: "shoot-the-breeze-7b0a7.appspot.com",
   messagingSenderId: "944753781844"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
