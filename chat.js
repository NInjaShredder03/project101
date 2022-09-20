// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW9cOx0EibPgkLSIXcRSNwMDZQF0sQbSM",
  authDomain: "twitter-b4e87.firebaseapp.com",
  projectId: "twitter-b4e87",
  storageBucket: "twitter-b4e87.appspot.com",
  messagingSenderId: "462806726522",
  appId: "1:462806726522:web:e9633a9857c771fe4bc8c3",
  measurementId: "G-XXQXZXBX3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



