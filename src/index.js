import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyCz74itIsuFt4QJzxeGz9qHOhT5P6hNJ4I",
  authDomain: "cart-adda7.firebaseapp.com",
  projectId: "cart-adda7",
  storageBucket: "cart-adda7.appspot.com",
  messagingSenderId: "736739643603",
  appId: "1:736739643603:web:abdb93b56f388625850426"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

