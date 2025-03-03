// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCBokn9IBjCkp1ZWfWYmVb3VHehQ7PKZrc',
  authDomain: 'shopflow-ai.firebaseapp.com',
  projectId: 'shopflow-ai',
  storageBucket: 'shopflow-ai.firebasestorage.app',
  messagingSenderId: '592933157515',
  appId: '1:592933157515:web:eb063388bef656bbed728e',
  measurementId: 'G-N03VN7CZ0J',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app);
