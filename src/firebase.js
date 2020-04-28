
  import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "#APIKEY HERE",
    authDomain: "my-corona-app.firebaseapp.com",
    databaseURL: "#",
    projectId: "my-corona-app",
    storageBucket: "my-corona-app.appspot.com",
    messagingSenderId: "397698524577",
    appId: "1:397698524577:web:309bcb78706589a22297e0",
    measurementId: "G-BJZYTLCTLZ"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
