import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyIG3u4sb0ht_NaRBMPg7Alqs9WlzP2Qo",
  authDomain: "c-shop-db-cf014.firebaseapp.com",
  projectId: "c-shop-db-cf014",
  storageBucket: "c-shop-db-cf014.appspot.com",
  messagingSenderId: "671401216942",
  appId: "1:671401216942:web:6cb02398be0b1ca6d3963f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
