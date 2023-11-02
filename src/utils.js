
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAUp9bpYDPtBdzPt-5l4hZquZ9vdQdz7vQ",
  authDomain: "fir-auth-aab.firebaseapp.com",
  projectId: "fir-auth-aab",
  storageBucket: "fir-auth-aab.appspot.com",
  messagingSenderId: "550926628267",
  appId: "1:550926628267:web:f28329e30ddca1d9d28eee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)