import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyB-wtLwLtpn4HnxtaJbv7466fkzrLFk1t8",
    authDomain: "linked-502b5.firebaseapp.com",
    projectId: "linked-502b5",
    storageBucket: "linked-502b5.appspot.com",
    messagingSenderId: "95575880272",
    appId: "1:95575880272:web:555e29e39f31e83b66d755",
    measurementId: "G-QKBGKN06NE"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  const storage = getStorage(firebaseApp);

  export {db, auth, storage};
