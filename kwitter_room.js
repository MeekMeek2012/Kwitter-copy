
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

    userName=localStorage.getItem("name")
    document.getElementById("userName").innerHTML="welcome " +userName
    function addRoom(){
      roomName=document.getElementById("Add_Room").value
firebase.database().ref("/").child(roomName).update({
      purpose:"Add_RoomName"
})
localStorage.setItem("roomName",roomName)
window.location="kwitterpage.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
row="<div class='room_name'id="+Room_names+"onclick='rediect(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}

getData();
function rediect(name){
localStorage.setItem("roomName",name)
window.location="kwitterpage.html"
}
function logOut(){
      localStorage.removeItem("name")
      localStorage.removeItem("roomName")
      window.location="index.html"
}
