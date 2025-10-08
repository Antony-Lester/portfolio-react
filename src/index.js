import './styling/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './controllers/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb7M95xxqMh4LWBvXbDuATD29Bk4pfUfU",
  authDomain: "antony-lester-portfolio.firebaseapp.com",
  projectId: "antony-lester-portfolio",
  storageBucket: "antony-lester-portfolio.appspot.com",
  messagingSenderId: "668346057125",
  appId: "1:668346057125:web:697082a8577092a84ca84c"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
