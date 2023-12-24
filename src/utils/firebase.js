// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0v-Y_qBo4Jbpn6DzRanbCZD_8HrIs2OM",
  authDomain: "gptscreen-6355e.firebaseapp.com",
  projectId: "gptscreen-6355e",
  storageBucket: "gptscreen-6355e.appspot.com",
  messagingSenderId: "160897318670",
  appId: "1:160897318670:web:0a16ff65af57ca92f2215f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
