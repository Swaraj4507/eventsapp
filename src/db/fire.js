// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUhFLZ6w_IcMGcuVNrk567tPhq__q6ryw",
  authDomain: "events-app-8a786.firebaseapp.com",
  databaseURL: "https://events-app-8a786-default-rtdb.firebaseio.com",
  projectId: "events-app-8a786",
  storageBucket: "events-app-8a786.appspot.com",
  messagingSenderId: "593192966656",
  appId: "1:593192966656:web:86cc974853c86764dcd6e5",
  measurementId: "G-R9QM55RH5V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);