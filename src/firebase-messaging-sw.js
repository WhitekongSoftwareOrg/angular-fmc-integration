// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAxp_VHST2CzOQG-pqRyetv5-xv7RGe-k8',
  authDomain: 'challenge-65c9c.firebaseapp.com',
  projectId: 'challenge-65c9c',
  storageBucket: 'challenge-65c9c.appspot.com',
  messagingSenderId: '717441221391',
  appId: '1:717441221391:web:467625725fa9aee6a9347a',
  measurementId: 'G-DBMKZ9HKMN',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
