
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIY6YWHCtvstqzxugjOOgJOrE0N8UAXXM",
  authDomain: "lets-chat-c10ac.firebaseapp.com",
  projectId: "lets-chat-c10ac",
  storageBucket: "lets-chat-c10ac.appspot.com",
  messagingSenderId: "406143976682",
  appId: "1:406143976682:web:de4fbf651d37f5b5824393",
  measurementId: "G-MFD7ZMLGJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const connected = () => {
    console.log("Firebase Connected")
}

export {
    initializeApp,
    app,
    connected,
    db,
    auth
}
