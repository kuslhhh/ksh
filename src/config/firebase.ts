// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCly96W612i87WH0U1QMQKEI1qC9A_5U6s",
  authDomain: "kush-62d9e.firebaseapp.com",
  projectId: "kush-62d9e",
  storageBucket: "kush-62d9e.appspot.com",
  messagingSenderId: "697435820442",
  appId: "1:697435820442:web:854ce8294e193116a6aa23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   
export const provider = new GoogleAuthProvider();