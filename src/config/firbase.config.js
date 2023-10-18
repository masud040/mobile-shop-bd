import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9wQlcH6oyqfM7d6zAXom3WhTkQVM2xW4",
  authDomain: "technology-and-electroni-9a153.firebaseapp.com",
  projectId: "technology-and-electroni-9a153",
  storageBucket: "technology-and-electroni-9a153.appspot.com",
  messagingSenderId: "831995790306",
  appId: "1:831995790306:web:52193a2f6d53b5a99aefbb",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
