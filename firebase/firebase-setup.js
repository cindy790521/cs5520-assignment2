import { initializeApp } from 'firebase/app'; 
import { getFirestore } from 'firebase/firestore'; 
import{apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId} from'@env';
// To import a Firebase service, use this pattern: import {} from 'firebase/<service>'
//Your web app's Firebase configuration. 
// Copy this object from Firebase console
const firebaseConfig = {
  // apiKey: "AIzaSyACu8nCfTFAXF8VPgOdPfzp9ekkO4C0eac",
  // authDomain:  "assignment2-1943e.firebaseapp.com",
  // projectId:  "assignment2-1943e",
  // storageBucket:  "assignment2-1943e.appspot.com",
  // messagingSenderId:  "205697075725",
  // appId:  "1:205697075725:web:bdf95a7c2adde3f2a5a344"


  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
 } ;
const myApp = initializeApp(firebaseConfig); 
export const firestore = getFirestore(myApp);