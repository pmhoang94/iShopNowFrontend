import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyBwAahpuBDb863wp-5nDUsc3eXf7_kqm8o',
  authDomain: 'moodle-b4df4.firebaseapp.com',
  databaseURL: 'https://moodle-b4df4.firebaseio.com',
  projectId: 'moodle-b4df4',
  storageBucket: 'moodle-b4df4.appspot.com',
  messagingSenderId: '875068733043',
  appId: '1:875068733043:web:68ed65ce102f4825d51c06'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const fireAuth = firebase.auth()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
