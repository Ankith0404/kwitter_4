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
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();



function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").innerHTML = "";
}