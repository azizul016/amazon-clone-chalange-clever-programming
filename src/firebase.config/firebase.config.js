import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBC14s9XfhnAjqgcDgH0O1MUGkDLggh51g",
  authDomain: "emazon-clone-chalange.firebaseapp.com",
  projectId: "emazon-clone-chalange",
  storageBucket: "emazon-clone-chalange.appspot.com",
  messagingSenderId: "638147943410",
  appId: "1:638147943410:web:f56d3857c1436fe849696b",
  measurementId: "G-2FS08V045M"
};
export default firebaseConfig;
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
// export {db, auth}
