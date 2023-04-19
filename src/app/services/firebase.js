// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",
    authDomain: "vcardapp-js.firebaseapp.com",
    databaseURL: "https://vcardapp-js.firebaseio.com",
    projectId: "vcardapp-js",
    storageBucket: "vcardapp-js.appspot.com",
    messagingSenderId: "420720513571",
    appId: "1:420720513571:web:f072eeda6cd3cfa1429796",
    measurementId: "G-LDPZ4BZ1GV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const db = firebase.database();
  const auth = firebase.auth();
  const fs = firebase.firestore();
  
  console.log('Modulo=>' + mod);
  
  //Tablas-Documentos
  var refConfig = db.ref().child('vcard_config');
  var refSignup = db.ref().child('vcard_signup');
  var refVcard = db.ref().child('vcard_vcard');
  var refUser = db.ref().child('vcard_user');
  var refEmpresas = db.ref().child('vcard_vcard_empresas');