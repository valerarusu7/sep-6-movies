import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe_xKyK36niLcicW_EyxzQOwMMROkY9rI",
  authDomain: "black-balancer-310707.firebaseapp.com",
  databaseURL:
    "https://black-balancer-310707-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "black-balancer-310707",
  storageBucket: "black-balancer-310707.appspot.com",
  messagingSenderId: "400963345387",
  appId: "1:400963345387:web:7a20efccdc46655dcd97ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
