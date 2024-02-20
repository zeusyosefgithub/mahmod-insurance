import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1koc_FYfv3SCSAh8jn0qm4qQawEKoong",
  authDomain: "mahmod-insurance.firebaseapp.com",
  projectId: "mahmod-insurance",
  storageBucket: "mahmod-insurance.appspot.com",
  messagingSenderId: "253605515226",
  appId: "1:253605515226:web:d59a5aa3ee82ae5f1f3ae3",
  measurementId: "G-Z27HB40J8D"
};

const app = initializeApp(firebaseConfig);
export const MohamadFireStore = getFirestore(app);