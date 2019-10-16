import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA5G0LzKQB72kE5urB2dE7MvrNXHi3FLDk",
    authDomain: "tacomatic-1561425208087.firebaseapp.com",
    databaseURL: "https://tacomatic-1561425208087.firebaseio.com",
    projectId: "tacomatic-1561425208087",
    storageBucket: "tacomatic-1561425208087.appspot.com",
    messagingSenderId: "857472550298",
    appId: "1:857472550298:web:5e4446a0671351913fa623"
  }
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export default firebase
export { auth }
