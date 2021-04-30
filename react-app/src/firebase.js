import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4sfAEyvKTlvtWz2FUjQFocifq9DmDafg',
  authDomain: 'raize-baa4f.firebaseapp.com',
  projectId: 'raize-baa4f',
  storageBucket: 'raize-baa4f.appspot.com',
  messagingSenderId: '795218547340',
  appId: '1:795218547340:web:8e00e2a47e0fb997f6a1a9',
  measurementId: 'G-1JM1LRSTDM',
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.firestore()
