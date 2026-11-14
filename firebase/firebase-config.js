
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4IQniquqr9VrGgd3IpCyojovKBPDqQ2Q",
    authDomain: "foodie-reppy.firebaseapp.com",
    projectId: "foodie-reppy",
    storageBucket: "foodie-reppy.firebasestorage.app",
    messagingSenderId: "601548809102",
    appId: "1:601548809102:web:aa66c0ee3682c797657adf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
