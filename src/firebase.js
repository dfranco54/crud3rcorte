import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDZFIaO3u7hkdHnkhc9EmzRTvOPV5uPTOY",
  
    authDomain: "crud3rcorte-761fe.firebaseapp.com",
  
    projectId: "crud3rcorte-761fe",
  
    storageBucket: "crud3rcorte-761fe.firebasestorage.app",
  
    messagingSenderId: "743376999103",
  
    appId: "1:743376999103:web:cb88ac38c9c734e6c02c0a"
  
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);