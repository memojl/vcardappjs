import {
  variables
} from '../lib';

export default function firebaseService() {
  /* VARIABLES CONSTANTES*/
  const {
    mod
  } = variables();

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

  //console.log('Config =>', refConfig);

  //APP
  const dashboard = document.querySelectorAll(".dashboard");
  //const contentLinks = document.querySelectorAll(".content-page");
  const loginLinks = document.querySelectorAll(".login-page");
  const registroLinks = document.querySelectorAll(".registro-page");

  const loginCheck = (user) => {
    if (user) {
      dashboard.forEach((link) => (link.style.display = "block"));
      loginLinks.forEach((link) => (link.style.display = "none"));
      registroLinks.forEach((link) => (link.style.display = "none"));
    } else {
      dashboard.forEach((link) => (link.style.display = "none"));
      if (mod == 'registro') {
        registroLinks.forEach((link) => (link.style.display = "block"));
        loginLinks.forEach((link) => (link.style.display = "none"));
      } else {
        registroLinks.forEach((link) => (link.style.display = "none"));
        loginLinks.forEach((link) => (link.style.display = "block"));
      }
    }
  }

  // Logout
  const logout = document.querySelector("#logout");
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log("signup out");
      localStorage.clear();
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      });
    });
    //if (mod != 'Home') {location.href = page_url;}
  });



  // events
  // list for auth state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin:" + user.email); //console.log(user);
      //leerDatos(user.email);
      //tarjetas(user.uid);
      //empresas(user.uid);
      loginCheck(user);
      //guardarDatos(user);
      //if (mod == 'tarjetas'){ selectEmpresa(user.uid);}
      //vuser(user.uid);
      /*fs.collection("posts").get().then((snapshot) => {
        loginCheck(user);
        setupPosts(snapshot.docs);
      });*/
    } else {
      console.log("signout");
      //setupPosts([]);
      loginCheck(user);
    }
  });
}