import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const prodConfig = {
  apiKey: "AIzaSyDCEsIzuQie0mV8SYpcys0FLVnuU1-sxz8",
  authDomain: "idev-community.firebaseapp.com",
  databaseURL: "https://idev-community-default-rtdb.firebaseio.com",
  projectId: "idev-community",
  storageBucket: "idev-community.appspot.com",
  messagingSenderId: "602283832790",
  appId: "1:602283832790:web:117f2b4c96b645ce16e077",
};

const devConfig = {
  apiKey: "AIzaSyDCEsIzuQie0mV8SYpcys0FLVnuU1-sxz8",
  authDomain: "idev-community.firebaseapp.com",
  databaseURL: "https://idev-community-default-rtdb.firebaseio.com",
  projectId: "idev-community",
  storageBucket: "idev-community.appspot.com",
  messagingSenderId: "602283832790",
  appId: "1:602283832790:web:117f2b4c96b645ce16e077",
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth, firebase };
