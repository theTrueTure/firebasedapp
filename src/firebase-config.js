/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";
const config = {
  apiKey: "AIzaSyCkMRyjRX4yiZ2fFa-9EbYuSokFCogTbRs",
  authDomain: "friendlychat-c8a70.firebaseapp.com",
  projectId: "friendlychat-c8a70",
  storageBucket: "friendlychat-c8a70.appspot.com",
  messagingSenderId: "900069495267",
  appId: "1:900069495267:web:c57ae5fd9a0129f817d0d6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// Initialize Firebase

const app = initializeApp(config);
