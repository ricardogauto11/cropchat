import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC9PFgiITUAiSSAChsb2oQRLkDchCzCriY',
  authDomain: 'cropchat-bd.firebaseapp.com',
  databaseURL: 'https://cropchat-bd.firebaseio.com',
  projectId: 'cropchat-bd',
  storageBucket: 'cropchat-bd.appspot.com',
  messagingSenderId: '362894365393'
}

firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

export {
  database,
  storage
}
