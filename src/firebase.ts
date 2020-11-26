import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCCUw6F95OpY6pBqQwx1xmoOJCZxkD5tlM",
	authDomain: "reddit-f1ef9.firebaseapp.com",
	databaseURL: "https://reddit-f1ef9.firebaseio.com",
	projectId: "reddit-f1ef9",
	storageBucket: "reddit-f1ef9.appspot.com",
	messagingSenderId: "45830974055",
	appId: "1:45830974055:web:6a2d95d7febb9e56c402c2"
};
const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const signOut = () => {
	auth.signOut()
}