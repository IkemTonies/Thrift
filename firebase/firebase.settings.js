// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from "./firebase.key";
import { getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "thrift-e1d6c.firebaseapp.com",
  projectId: "thrift-e1d6c",
  storageBucket: "thrift-e1d6c.appspot.com",
  messagingSenderId: "547983511393",
  appId: "1:547983511393:web:2712ae67ce5fd50f917f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export { authentication,db}