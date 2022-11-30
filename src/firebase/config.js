
import { initializeApp } from "firebase/app";
import { getDatabase,ref,push,onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCHsIdTQl0DMYZPNl67fBz8A_sASEnwykM",
  authDomain: "chat-app-2-87f9c.firebaseapp.com",
  projectId: "chat-app-2-87f9c",
  storageBucket: "chat-app-2-87f9c.appspot.com",
  messagingSenderId: "623623176459",
  appId: "1:623623176459:web:c6245f3ab8115f7ae5220e",
  databaseURL: "https://chat-app-2-87f9c-default-rtdb.asia-southeast1.firebasedatabase.app"
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export { database,ref,push,onValue }