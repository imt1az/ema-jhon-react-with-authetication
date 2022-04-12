// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF8BhigllQT2w2FiqUd3kqDqpW01QEGIc",
  authDomain: "ema-jhon-react-authentication.firebaseapp.com",
  projectId: "ema-jhon-react-authentication",
  storageBucket: "ema-jhon-react-authentication.appspot.com",
  messagingSenderId: "712398669572",
  appId: "1:712398669572:web:fa28fa690097f7cceeb251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;