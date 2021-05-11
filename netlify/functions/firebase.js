const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCcOl7MlVDIqbVr0I_ZAYickf9CDpU-X0A",
  authDomain: "kiei-451-test.firebaseapp.com",
  projectId: "kiei-451-test",
  storageBucket: "kiei-451-test.appspot.com",
  messagingSenderId: "39595432585",
  appId: "1:39595432585:web:4f053be4fc9cdc59de4458",
  measurementId: "G-MKBQ8LYGC4"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase