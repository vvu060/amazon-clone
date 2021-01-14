// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWSVHyNsVtii2bVY-yZf9JfU1lzWel49c",
  authDomain: "clone-fc4f1.firebaseapp.com",
  databaseURL: "https://clone-fc4f1.firebaseio.com",
  projectId: "clone-fc4f1",
  storageBucket: "clone-fc4f1.appspot.com",
  messagingSenderId: "777372273575",
  appId: "1:777372273575:web:34c35b7db6cb7269350482",
  measurementId: "G-BLK29RFJN3"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); //firestore is a firebase database .
  const auth = firebase.auth();

  export { db, auth };