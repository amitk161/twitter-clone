import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDRr-H_M33tA155AZpTSGQQQmRmtCP8O5s",
	authDomain: "twitter-clone-fd57d.firebaseapp.com",
	projectId: "twitter-clone-fd57d",
	storageBucket: "twitter-clone-fd57d.appspot.com",
	messagingSenderId: "943440463374",
	appId: "1:943440463374:web:211c98d22080eede541e5f",
	measurementId: "G-S0VM9PECN0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
