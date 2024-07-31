// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAa8eSZyi1ZCF-N9DwYm-aCldmp3TL6lJg',
  authDomain: 'geynius-d495d.firebaseapp.com',
  projectId: 'geynius-d495d',
  storageBucket: 'geynius-d495d.appspot.com',
  messagingSenderId: '1092792481266',
  appId: '1:1092792481266:web:6c3e72884c23b9a641276b',
  measurementId: 'G-8EEJ7XYQ6B',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

