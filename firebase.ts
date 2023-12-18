// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf6iPb8xlXxykpnrFHQeHWquBgNN6JvHY",
    authDomain: "netflix-clone-588d3.firebaseapp.com",
    projectId: "netflix-clone-588d3",
    storageBucket: "netflix-clone-588d3.appspot.com",
    messagingSenderId: "723291970898",
    appId: "1:723291970898:web:b46102b8a81bebfc616e8b"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }