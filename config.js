import firbase from 'firebase'
require('@firebase/firesatore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAcT1SW_bflGP10bS6sYZXflROJXR0i16I",
    authDomain: "booksantac77.firebaseapp.com",
    projectId: "booksantac77",
    storageBucket: "booksantac77.appspot.com",
    messagingSenderId: "168038256965",
    appId: "1:168038256965:web:04a6844e49dbe67f2fee2c",
    measurementId: "G-08BSSDXR8R"
  };firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()