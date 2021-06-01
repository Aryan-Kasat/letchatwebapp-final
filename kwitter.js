function addusser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username_key",username);
    window.location="kwitter_room.html";
}