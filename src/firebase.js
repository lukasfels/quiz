import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCqoZydYelqel01aC0sD12hp6JOOGTFmK0",
    authDomain: "vuequiz-1c49b.firebaseapp.com",
    projectId: "vuequiz-1c49b",
    storageBucket: "vuequiz-1c49b.appspot.com",
    messagingSenderId: "298182348689",
    appId: "1:298182348689:web:dc93eb7f8e7bd3f5d51430"
};

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)

const signIn = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    //console.log(result)
}

export { auth, signIn }