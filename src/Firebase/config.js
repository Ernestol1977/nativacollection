// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoMNmJ4_HGmHc90QBcw_AGNhrgHU0Wso",
  authDomain: "ecommerce-manativacollection.firebaseapp.com",
  projectId: "ecommerce-manativacollection",
  storageBucket: "ecommerce-manativacollection.appspot.com",
  messagingSenderId: "965879318763",
  appId: "1:965879318763:web:b272c33f02be8c13c9d6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}