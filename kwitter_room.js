
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA58U48VI1duHYYf0PMPxK2YOz5PQ9gVoM",
      authDomain: "let-chat-web-app-19021.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-19021-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-19021",
      storageBucket: "let-chat-web-app-19021.appspot.com",
      messagingSenderId: "319697156119",
      appId: "1:319697156119:web:94f4030e0ed73359000452",
      measurementId: "G-1QJ34T5BHL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("username_key");
document.getElementById("user_name").innerHTML="welcome "+username+" !";

function addroom(){
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"addroomname"
});
localStorage.setItem("roomname_key",roomname);
window.location="kwitter_page.html";

}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                   Room_names = childKey;
      //Start code
            console.log("roomnames-"+Room_names);
            row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroom(this.id)'>"+Room_names+"</div><hr>"
            document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirecttoroom(currentroom){
      console.log(currentroom);
      localStorage.setItem("roomname_key",currentroom);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location="index.html";
}
