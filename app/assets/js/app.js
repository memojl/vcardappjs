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
var refU = db.ref().child('vcard_signup');
var refVcard = db.ref().child('vcard_vcard');
var refEmpresas = db.ref().child('vcard_vcard_empresas');

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
};

// Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signup out");
  });  
  if(mod!='Home'){location.href=page_url;}
});

// SignUp (Registarse con correo)
const signUpForm = document.querySelector("#registro-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = signUpForm["register-username"].value;
  const email = signUpForm["register-email"].value;
  const password = signUpForm["register-password"].value;
  var user = {/*uid: "",*/ displayName: usuario, email: email, photoURL: null}
  // Authenticate the User
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Datos user: '+user);
      //guardarDatos(user);
      // clear the form
      signUpForm.reset();
      // close the modal//$("#signupModal").modal("hide");
    });
});

// SingIn (Login)
const signInForm = document.querySelector("#login-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    signInForm.reset();
    // close the modal//$("#signinModal").modal("hide");
  });
});

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("signin:" + user.email);
    console.log(user);
    leerDatos(user.email);
    tarjetas(user.uid);
    loginCheck(user);
    guardarDatos(user);
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

// Login with Google
const googleButton = document.querySelector("#googleLogin");
googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  //$("#signinModal").modal("hide");
  autorizar();
});

const googleButton2 = document.querySelector("#googleRegister");
googleButton2.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  //$("#signinModal").modal("hide");
  autorizar();
});

function autorizar(){
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      console.log("google sign in");
    })
    .catch(err => {
      console.log(err);
    })
}

//FUNCIONES

//Guardar automaticamente
function guardarDatos(user) {
  var usuario = {
    uid: user.uid,
    usuario: user.displayName,
    email: user.email,
    foto: user.photoURL
  }
  db.ref('vcard_signup/' + user.uid).set(usuario);
}

//Leer los datos
function leerDatos(userlogin) {
  const foto = document.querySelector("#photo");
  const nom = document.querySelector("#nombre");
  const mail = document.querySelector("#email");
  const uid = document.querySelector("#id_code_google");
  db.ref("vcard_signup").on("child_added", function (s) {
    var user = s.val();
    var f = (user.foto == null)?'assets/img/photos/sinfoto.png':user.foto;
    var u = (user.usuario == null)?user.email:user.usuario;
    if (user.email == userlogin) {
      const cover = '<img src="' + f + '" class="img-fluid rounded-circle">';
      const nombre = '<h1 class="h5">' + u + '</h1>';
      const correo = userlogin;
      const ID_user = user.uid;

      foto.innerHTML = cover;
      nom.innerHTML = nombre;
      mail.innerHTML = correo;
      uid.innerHTML = ID_user;
    }
  });
}

function tarjetas(userid){//var reg = {};    
  refVcard.on('value',function(datos){
      const content = document.querySelector("#vcontent");
      var template = '';
      var reg=datos.val();
      // Recorremos los productos y los mostramos
      $.each(reg, function(indice,valor){//console.log(indice);
        var ID = (valor.ID == null)?'':valor.ID;
        var uid = (valor.uid == null)?'':valor.uid;
        var profile = (valor.profile == null)?'':valor.profile;
        var cover = (valor.cover == null)?'sinfoto.png':valor.cover;
        var nombre = (valor.nombre == null)?'':valor.nombre;
        var puesto = (valor.puesto == null)?'':valor.puesto;
        var email = (valor.email == null)?'':valor.email;
        var cell = (valor.cell == null)?'':valor.cell;
        var web = (valor.web == null)?'':valor.web;
        var visible = (valor.visible == null)?'':valor.visible;
        if(uid==userid){
          template += `
          <div vcardId="${indice}" class="col-lg-4">
          <div class="user-block block text-center">
            <div class="avatar"><img src="./assets/img/photos/${cover}" alt="..." class="img-fluid">
              <div class="order dashbg-2">1st</div>
            </div><a href="#" class="user-title">
              <h3 class="h5">${nombre}</h3><span>${puesto}</span></a>
            <div class="contributions">${profile}</div>
            <div class="details d-flex">
              <div class="item"><a href="`+page_url+`../profile/${profile}"><i class="fa fa-vcard"></i><strong>Ver</strong></a></div>
              <div class="item btn-edit" data-toggle="modal" data-target="#addVcard" title="Editar" style="cursor:pointer;"><i class="fa fa-edit"></i><strong>Editar</strong></div>
              <div class="item btn-delete" title="Borrar" style="cursor:pointer;"><i class="fa fa-trash"></i><strong>Borrar</strong></div>
            </div>
          </div>
        </div>`
        }        
        if(mod=='tarjetas'){
          content.innerHTML = '<div class="container-fluid"><div class="row">' + template + '</div></div>';
        }
      });
  });
}
/*
function tarjetas(userid){
  const vcards = document.querySelector("#vcontent");
  var html='';
  db.ref("vcard_vcard").on("child_added", function(datos) {
    var vcard = datos.val();
    var ID = (vcard.ID == null)?'':vcard.ID;
    var uid = (vcard.uid == null)?'':vcard.uid;
    var profile = (vcard.profile == null)?'':vcard.profile;
    var cover = (vcard.cover == null)?'sinfoto.png':vcard.cover;
    var nombre = (vcard.nombre == null)?'':vcard.nombre;
    var puesto = (vcard.puesto == null)?'':vcard.puesto;
    var email = (vcard.email == null)?'':vcard.email;
    var cell = (vcard.cell == null)?'':vcard.cell;
    var web = (vcard.web == null)?'':vcard.web;
    var visible = (vcard.visible == null)?'':vcard.visible;
    if(uid==userid){
      var card = `    
      <div vcardId="" class="col-lg-4">
        <div class="user-block block text-center">
          <div class="avatar"><img src="./assets/img/photos/${cover}" alt="..." class="img-fluid">
            <div class="order dashbg-2">1st</div>
          </div><a href="#" class="user-title">
            <h3 class="h5">${nombre}</h3><span>${puesto}</span></a>
          <div class="contributions">${profile}</div>
          <div class="details d-flex">
            <div class="item"><a href="`+page_url+`../profile/${profile}"><i class="fa fa-vcard"></i><strong>Ver</strong></a></div>
            <div class="item btn-edit" data-toggle="modal" data-target="#addVcard" title="Editar" style="cursor:pointer;"><i class="fa fa-edit"></i><strong>Editar</strong></div>
            <div class="item btn-delete" title="Borrar" style="cursor:pointer;"><i class="fa fa-trash"></i><strong>Borrar</strong></div>
          </div>
        </div>
      </div>
      `;
      html += card;
      if(mod=='tarjetas'){
        vcards.innerHTML = '<div class="container-fluid"><div class="row">' + html + '</div></div>';
      }            
    }    
  });
}
*/
$('#app-modulo').on('click', '.btn-delete', function(){
  Swal.fire({
    title: '¿Está seguro de eliminar el producto?',
    text: "¡Está operación no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Borrar'
  }).then((result) => {
    if (result.value) {
        let productoId = $(this).closest('div').attr('vcardId');
        //let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  
        refVcard.child(productoId).remove(); //eliminamos el producto de firebase      
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.','success')
    }
  })        
});

function alError(error){
  if (error){
    alert('Ha habido problemas al realizar la operación: '+error.code);
  }else{
    alert('Operación realizada con éxito !');
  }
}
