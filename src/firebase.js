// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX7R5Mn8KVQ1tRf0-HsNBIgkeya6KAjMw",
  authDomain: "fir-auth-2ca5f.firebaseapp.com",
  projectId: "fir-auth-2ca5f",
  storageBucket: "fir-auth-2ca5f.appspot.com",
  messagingSenderId: "79621784704",
  appId: "1:79621784704:web:1bcfd41297ea16a76f5265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app