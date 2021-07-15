
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBhJzePTVbAVvIIpb99kzCiTcV3fpwdSAc",
    authDomain: "kwitter-6aea4.firebaseapp.com",
    databaseURL: "https://kwitter-6aea4-default-rtdb.firebaseio.com",
    projectId: "kwitter-6aea4",
    storageBucket: "kwitter-6aea4.appspot.com",
    messagingSenderId: "949673048727",
    appId: "1:949673048727:web:7325b8bc890f5d021787d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " +  user_name + "!";

  function addRoom(){

      Room_name = document.getElementById("Room_name").value;

          firebase.database().ref("/").child(Room_name).update({
            purpose:"adding Room Name"
          });
      localStorage.setItem("Room_name",Room_name);
      window.location = "kwitter_page.html";

      

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room"+Room_names);
     row = "<div class='room_name' id= "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML = row;
    //End code
    });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}