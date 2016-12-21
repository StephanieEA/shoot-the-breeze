import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAOwYcBPbbT7nmkGMQy4jrGQcpo6vAaS18',
  authDomain: 'shoot-the-breeze-7b0a7.firebaseapp.com',
  databaseURL: 'https://shoot-the-breeze-7b0a7.firebaseio.com',
  storageBucket: 'shoot-the-breeze-7b0a7.appspot.com',
  messagingSenderId: '944753781844',
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = () => firebase.auth().signInWithPopup(provider);
export const signOut = () => firebase.auth().signOut();
