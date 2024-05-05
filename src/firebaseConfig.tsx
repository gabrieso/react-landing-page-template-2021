// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCclCaxxk0XHK-FluEYo6uFCH7_I096MsQ',
  authDomain: 'engineeringtalentfinder.firebaseapp.com',
  projectId: 'engineeringtalentfinder',
  storageBucket: 'engineeringtalentfinder.appspot.com',
  messagingSenderId: '160251362218',
  appId: '1:160251362218:web:75ed91363647b5dc3e09d3',
  measurementId: 'G-NMX0XBLZEV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
