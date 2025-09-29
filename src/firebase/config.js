import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDh4IYasqOEQdDHocjj82bTRJjYADwI8YI",
  authDomain: "maicosmetics-db.firebaseapp.com",
  projectId: "maicosmetics-db",
  storageBucket: "maicosmetics-db.firebasestorage.app",
  messagingSenderId: "255587510807",
  appId: "1:255587510807:web:1c4b6e7f73b6fb01160a52"
}

export const app = initializeApp(firebaseConfig)