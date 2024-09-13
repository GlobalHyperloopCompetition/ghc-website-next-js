// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: "506855800201",
  // appId: process.env.APP_ID,
  // measurementId: "G-GQGNHXP41R",

  apiKey: 'AIzaSyBWp_RWTUkIp7IqAkfMWzbZ8-PumVaGPMY',
  authDomain: 'ghc-app-81fba.firebaseapp.com',
  projectId: 'ghc-app-81fba',
  storageBucket: 'ghc-app-81fba.appspot.com',
  messagingSenderId: "506855800201",
  appId: '1:506855800201:web:f8aceea894ebf2b0eeb558',
  measurementId: "G-GQGNHXP41R",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

const db = getFirestore(app);

export { db };



// # firebase


// # Next auth jwt secret
// NEXTAUTH_SECRET= ghc@india_iitm_2024