var firebaseConfig = {
    apiKey: "AIzaSyCS2CsnIKXBS1QYGwIyhJle5VORaHLzclE",
    authDomain: "criter-f7d31.firebaseapp.com",
    databaseURL: "https://criter-f7d31-default-rtdb.firebaseio.com",
    projectId: "criter-f7d31",
    storageBucket: "criter-f7d31.appspot.com",
    messagingSenderId: "248026356676",
    appId: "1:248026356676:web:3cbcfaa9d931a9630e6291",
    measurementId: "G-DWGDQLR9DC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("name")
  roomName=localStorage.getItem("roomName")
  function send(){
    message=document.getElementById("message").value 
    firebase.database().ref(roomName).push({
        name:username,
        message:message,
        like:0
    })
    document.getElementById("message").value=""
  }