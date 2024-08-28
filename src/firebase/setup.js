import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD10SIqkc7wmzOiNabuMiB7BMMWIoqZNxw",
    authDomain: "clone-news-rakamin.firebaseapp.com",
    projectId: "clone-news-rakamin",
    storageBucket: "clone-news-rakamin.appspot.com",
    messagingSenderId: "278130350586",
    appId: "1:278130350586:web:0f3a6778c31d264ceaec43"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();