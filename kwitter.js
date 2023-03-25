function AddUser(){

    var Username = document.getElementById("input").value 
localStorage.setItem("name",Username);
window.location = "kwitter_room.html";
}