import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCfwt31cdxw-b9ZtaFSvQ0u3YWfpk8wbjI",
    authDomain: "z-world-jackets.firebaseapp.com",
    projectId: "z-world-jackets",
    storageBucket: "z-world-jackets.appspot.com",
    messagingSenderId: "339856848126",
    appId: "1:339856848126:web:1bd91da08115a72cffe1af",
    measurementId: "G-J1B3RXBS35"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);