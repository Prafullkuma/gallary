import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAJXgec7a35K18UR82DQnNZ5Vq6bi2Bnl8",
    authDomain: "projectdata-52ab0.firebaseapp.com",
    databaseURL: "https://projectdata-52ab0.firebaseio.com",
    projectId: "projectdata-52ab0",
    storageBucket: "projectdata-52ab0.appspot.com",
    messagingSenderId: "510832222432",
    appId: "1:510832222432:web:044ab9e39decf2a85bf085",
    measurementId: "G-NB4XCSEG3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
firebase.analytics();

export { projectStorage, projectFirestore }