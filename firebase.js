import firebase from 'firebase/app'
import 'firebase/database'

  var firebaseConfig = {
    apiKey: "AIzaSyAz6Xv7t1aTUrKIXunBrIiJYSfUbdoh7Bg",
    authDomain: "crud-project-174cd.firebaseapp.com",
    databaseURL: "https://crud-project-174cd.firebaseio.com",
    projectId: "crud-project-174cd",
    storageBucket: "crud-project-174cd.appspot.com",
    messagingSenderId: "202967794502",
    appId: "1:202967794502:web:527e3f4bc9979777e89b47",
    measurementId: "G-J8WR8Z45GH"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();