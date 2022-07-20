// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDwpn3kdvN3C5jCoXtN5rCB-8zPZTgNtaQ",
    authDomain: "lets-us-chat-273be.firebaseapp.com",
    projectId: "lets-us-chat-273be",
    storageBucket: "lets-us-chat-273be.appspot.com",
    messagingSenderId: "94051359244",
    appId: "1:94051359244:web:97cfeebdaa50de5def2c29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



