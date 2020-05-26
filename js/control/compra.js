var firebaseConfig = {
    apiKey: "AIzaSyC0ZPzuFU1XKqtmHBmhGwBF9lQl_Hl1lFg",
    authDomain: "pharma-7e8e7.firebaseapp.com",
    databaseURL: "https://pharma-7e8e7.firebaseio.com",
    projectId: "pharma-7e8e7",
    storageBucket: "pharma-7e8e7.appspot.com",
    messagingSenderId: "355822346883",
    appId: "1:355822346883:web:a084b8b44a6d9331ac71b6",
    measurementId: "G-363JVV4P5V"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  
  const confirmar = document.getElementById("confirmar");
  const direccion = document.getElementById("direccion");
  const nombre = document.getElementById("nombre");


  confirmar.addEventListener("click",function(event){
      event.preventDefault();
      window.location.href="farmacologicos.html";
  })