
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAgfZw1Xx0-o5R0LMnaZ4s0edpVQqTmXyM",
  authDomain: "certificate-generator-27e41.firebaseapp.com",
  projectId: "certificate-generator-27e41",
  storageBucket: "certificate-generator-27e41.appspot.com",
  messagingSenderId: "744014443771",
  appId: "1:744014443771:web:440d19cf063d29e4006c5e",
  databaseURL:"https://certificate-generator-27e41-default-rtdb.firebaseio.com/"
};


 export const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);

export { db, ref, set, get, child };