// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'ai-sales-assistant-3c705.firebaseapp.com',
  projectId: 'ai-sales-assistant-3c705',
  storageBucket: 'ai-sales-assistant-3c705.appspot.com',
  messagingSenderId: '742209961843',
  appId: '1:742209961843:web:bbd8122bc9e6318bb50f06',
  measurementId: 'G-J6X3DC9QVY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
