import  firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBqtECzDsklxV8aMcRypC-741QnXYzfU2o",
  authDomain: "dates-app-18dc5.firebaseapp.com",
  databaseURL: "https://dates-app-18dc5-default-rtdb.firebaseio.com",
  projectId: "dates-app-18dc5",
  storageBucket: "dates-app-18dc5.appspot.com",
  messagingSenderId: "280910036182",
  appId: "1:280910036182:web:9cf83ca4f1b6b5b6a39d77"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()