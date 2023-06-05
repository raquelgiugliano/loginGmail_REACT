import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC03vcienJENUMHLlE6ZrSvXVExuSIuYD4",
  authDomain: "login-8ed0e.firebaseapp.com",
  projectId: "login-8ed0e",
  storageBucket: "login-8ed0e.appspot.com",
  messagingSenderId: "564588641793",
  appId: "1:564588641793:web:02540a4dd420c22b8aca00",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
