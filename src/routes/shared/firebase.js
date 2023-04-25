import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { firebaseConfig } from './env.js';

const config = firebaseConfig;
const app = initializeApp(config);

export const db = getFirestore(app);