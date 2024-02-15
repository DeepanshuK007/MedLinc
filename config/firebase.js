// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ,
	measurementId: 
};

// Initialize Firebase using the method initializeApp in which we pass firebaseConfig const in it which consists of all the useful data of our firebase account.
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getDatabase();
//getDatabase returns the instance of the realtime database

export const auth = getAuth(app);
export { db };
