import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCRHWUyDk8YgWvU2-3jPoFqNxLmRXoe11o",
    authDomain: "kickoff-ba6f9.firebaseapp.com",
    projectId: "kickoff-ba6f9",
    storageBucket: "kickoff-ba6f9.appspot.com",
    messagingSenderId: "1048387684094",
    appId: "1:1048387684094:web:6f70ebdf1681a1a36b47af"
};

firebase.initializeApp(firebaseConfig);

export default firebase

