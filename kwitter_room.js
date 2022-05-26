const firebaseConfig = {
    apiKey: "AIzaSyDiUh3UMbu9W9raIq9nI7lOGkQ5y_49mKg",
    authDomain: "site-kwitter.firebaseapp.com",
    databaseURL: "https://site-kwitter-default-rtdb.firebaseio.com",
    projectId: "site-kwitter",
    storageBucket: "site-kwitter.appspot.com",
    messagingSenderId: "60350141535",
    appId: "1:60350141535:web:4adcf23bd705b3d21577ea"
  };

  firebase.initializeApp(firebaseConfig);

  //falta declarar uma variavel para o nome do usuario aparecer nessa tela
  //dica: name = localStorage() - tem que buscar lá do armazenamento da tela login
  //depois fazer um document para mostrar na tela no "user_name" com innerHTML

  function logout() {
    localStorage.removeItem("userName");
    window.location = "kwitter.html";
  } 


  function addRoom(){
      roomName = document.getElementById("roomName");
      firebase.database().ref("/").child(roomName).update({
        purpose : "adicionar nome de sala" 
      });
      localStorage.setItem("roomName", roomName);
      //window.location serve pra trocar de tela
      //cuidado com o nome da proxima tela, corrigir aqui
      window.location = "kwitterPage.html";
    }

    //cuidado com a formatação do código, ela pode te confundir
    function getData(){
      firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        roomName = childKey;
        //faltou o código da row aqui
        //está tentando criar no HTML sem estar no lugar certo
          //colocar o código do row aqui
        document.getElementById("output").innerHTML += row;
  
});
});
};

function redirectToRoomName(){
  localStorage.setItem("roomName", roomName);
  //você colocou no redirect, mas aqui só devemos redirecionar o usuario
  //esse row é lá na function getData()
  //onde obtem o dado e mostra na tela
  // tirar daqui o row -> row = "<div class='roomName' id="+roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>";
  window.location = "kwitter_page.html";
}
getData();