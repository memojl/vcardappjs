/**
 <!-- The core Firebase JS SDK is always required and must be listed first -->
 <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase.js"></script>
 <!-- TODO: Add SDKs for Firebase products that you want to use
 https://firebase.google.com/docs/web/setup#available-libraries -->
 <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-firestore.js"></script>
**/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { variables } from "../core/lib";
import { validImage, validImage2, validaImagen } from "../functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { alertMessage, showMessage } from "../hooks/messages";
//console.log('Firebase SDK',typeof URL,URL);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",
  authDomain: "vcardapp-js.firebaseapp.com",
  databaseURL: "https://vcardapp-js.firebaseio.com",
  projectId: "vcardapp-js",
  storageBucket: "vcardapp-js.appspot.com",
  messagingSenderId: "420720513571",
  appId: "1:420720513571:web:f072eeda6cd3cfa1429796",
  measurementId: "G-LDPZ4BZ1GV",
};

// Initialize Firebase
//analytics();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);//Realtime Database
export const fs = getFirestore(app);//FireStore

//CRUD FUNCTIONS
/*export function getData(tab){
  const tabRef = ref(db, tab+'/');
  onValue(tabRef, (snapshot) => {
    const data = snapshot.val(); //console.log(data);
    return data;
  });
}*/

//CONSTANTES

//GET DATA ASINCRONA
export function getData(tab) {
  return new Promise((resolve, reject) => {
    const tabRef = ref(db, tab + '/');
    onValue(tabRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, reject);
  });
}

//PUT DATA
export function saveData(tab){

}

export function saveUser(user) {console.log('saveUser');
  var u = {
    uid: user.uid,
    usuario: user.displayName,
    email: user.email,
    foto: user.photoURL
  };
  set(ref(db, "vcard_signup/" + user.uid), u);
}


//APP
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = (user) => { console.log('loginCheck');
  const btnLogout = document.querySelector('#logout-1');
  const btnRegis = document.querySelector('#btnRegis');
  const btnLogin = document.querySelector('#btnLogin');
  const formRegis = document.querySelector('.registro-page');
  const formLogin = document.querySelector('.login-page');
  const dash = document.querySelector('.dashboard');

  if (user) {    
    formLogin.style.display = 'none';
    formRegis.style.display = 'none';
    dash.style.display = 'block';
    //if(btnLogout){btnLogout.style.display = "block";}
  } else {
    formLogin.style.display = 'block';
    //formRegis.style.display = 'block';
    dash.style.display = 'none';
    //if(btnLogout){btnLogout.style.display = "none";}
    if(btnRegis){
      btnRegis.addEventListener('click',()=>{
        formRegis.style.display = 'block';
        formLogin.style.display = 'none';
      });
    }
    if(btnLogin){
      btnLogin.addEventListener('click',()=>{
        formRegis.style.display = 'none';
        formLogin.style.display = 'block';
      });
    }
  }
};

export function getUserSesion(user){
  const foto = document.querySelector("#photo"); //console.log(foto);
  const nom = document.querySelector("#nombre_session"); //console.log(nom);
  const mail = document.querySelector("#email_session"); //console.log(mail);
  const uid = document.querySelector("#id_code_google"); //console.log(uid);
  const tabRef = ref(db, 'vcard_signup/');
  onValue(tabRef, (snapshot) => {
      const data = snapshot.val(); //console.log(data);
      for (let key in data){
        const u = data[key]; 
        if(u.uid == user.uid){console.log(u);
          const f = (u.foto == null)?page_url+'assets/img/sinfoto.png':u.foto;
          const cover = '<img src="' + f + '" class="img-fluid rounded-circle">';
          const nombre = (u.usuario == null)?u.email:u.usuario;
          const correo = u.email;
          const ID_user = u.uid;

          foto.innerHTML = cover;
          nom.innerHTML = nombre;
          mail.innerHTML = correo;
          uid.innerHTML = ID_user;
        }
      }
  });
}

export async function listar_vcard(){
  console.log('Listar tarjetas');
  let template = '';
  let sinfoto = 'assets/img/sinfoto.png';
  const lista = document.querySelector('#lista');
  const data = await getData('vcard_vcard'); //console.log(data);
  const items = Object.entries(data).map(([key, value]) => ({key,...value}));// 
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    const {ID,cover,profile,nombre,puesto,f_create,visible} = items[i];
    if(visible==1){
      template+=`
    <div class="public-user-block block">
      <div class="row d-flex align-items-center">                   
        <div class="col-lg-4 d-flex align-items-center">
          <div class="order">${ID}</div>
          <div class="avatar" id="${ID}" style="background:url(${cover?cover:sinfoto});"></div>
          <a href="#/vcard/profile/${profile}" class="name">
            <strong class="d-block">${nombre}</strong>
            <span class="d-block">${profile}</span>
          </a>
        </div>
        <div class="col-lg-4 text-center">
          <div class="contributions">${puesto}</div>
        </div>
        <div class="col-lg-4">
          <div class="details d-flex">
            <div class="item"><i class="fa fa-calendar"></i><strong>${f_create}</strong></div>
            <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
            <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
            <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
          </div>
        </div>
      </div>
    </div>`; 
      lista.innerHTML=template;
    }
  }
  
  for (let i = 0; i < items.length; i++) {
    const {ID,cover,visible} = items[i];
    if(visible == 1 && cover != ''){
      let id = document.getElementById(ID);
      validaImagen(cover,id);
    }
  }
}

/*export function logoutApp() {
  const logout = document.querySelector("#logout-1"); //console.log(logout);
  if (logout) {
    logout.addEventListener("click", async (e) => {//console.log('LogOut',e);
      e.preventDefault();
      try {
        await signOut(auth);
        localStorage.clear();
        console.log("signup out");
        showMessage("Signup out", "info");
      } catch (error) {
        console.log(error);
      }
    });
  }
}*/

/** 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();
export const auth = firebase.auth();
export const fs = firebase.firestore();

console.log("Modulo=>" + mod);

//Tablas-Documentos
var refConfig = db.ref().child("vcard_config");
var refSignup = db.ref().child("vcard_signup");
var refVcard = db.ref().child("vcard_vcard");
var refUser = db.ref().child("vcard_user");
var refEmpresas = db.ref().child("vcard_vcard_empresas");
*/

