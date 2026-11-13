
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm9__ZSd4Wzd0GgvRS-2rUQdfUX3ApK5I",
  authDomain: "zooom-1a240.firebaseapp.com",
  projectId: "zooom-1a240",
  storageBucket: "zooom-1a240.firebasestorage.app",
  messagingSenderId: "920367523236",
  appId: "1:920367523236:web:d2d93a61eb33e59b388d31",
  measurementId: "G-7Z5VY1L58N"
};

const app = initializeApp(firebaseConfig);

window.firebaseApp = app;
window.firebaseAuth = getAuth(app);
window.firebaseDb = getFirestore(app);

console.log("Firebase connected successfully!");
