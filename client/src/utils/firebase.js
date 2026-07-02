import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-8ee3a.firebaseapp.com",
  projectId: "authexamnotes-8ee3a",
  storageBucket: "authexamnotes-8ee3a.firebasestorage.app",
  messagingSenderId: "556158078079",
  appId: "1:556158078079:web:1005642f3ffd51e881c34a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
