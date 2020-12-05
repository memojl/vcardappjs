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
    console.log("signin:" + user.email);//console.log(user);
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
  const nom = document.querySelector("#nombre_session");
  const mail = document.querySelector("#email_session");
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

function add_empresa(val){
  if(val==1){
    document.getElementById('sel_empresa').innerHTML='<input type="text" class="form-control" id="empresa" name="empresa" value=""><div><a href="javascript:add_empresa(0);">Cancelar</a></div>';
  }else{
    document.getElementById('sel_empresa').innerHTML='<div class="input-group"><!--span class="input-group-addon"><i class="fa fa-industry"></i></span--><select class="form-control" id="empresa" name="empresa" style="float:left;"><option>Seleccione Empresa</option><option value="Multiportal">Multiportal</option><option value="Billnex">Billnex</option><option value="Capital">Capital</option></select></div>';
  }
}

function up(val){
	switch (val){
	case 1:
		document.getElementById('upload').innerHTML = '<span style="float:right;"><a href="javascript:up(0);"><i class="fa fa-close" title="Cerrar"></i></a></span><br><input type="file" name="userfile" class="required" size="40" style="font-size: 0.9em;"><br><input type="submit" id="Aceptar" name="Aceptar" value="Aceptar">';
	break; 
	case 2:
		document.getElementById('upload').innerHTML = '<div style="text-align:right;"><a href="javascript:up(0);"><i class="fa fa-close" title="Cerrar"></i></a></div><div id="box-load2"><input type="file" id="userfile" name="userfile"></div><input type="submit" id="Aceptar" name="Aceptar" value="Aceptar">';
	break; 
	default: 
		document.getElementById('upload').innerHTML = '';
	break;
	}
}

function obtenerEmpresa(){
  var sel_emp='<option>Seleccione Empresa</option>'  
  refEmpresas.on('child_added',function(datos){
    var reg=datos.val(); //console.log(reg);
    let opc=`<option value='${reg.ID}'>${reg.empresa}</option>`;
    sel_emp+=opc; //console.log(sel_emp)
    let sel = document.querySelector('#idemp');
    sel.innerHTML=sel_emp;
  });
}

if(mod=='tarjetas'){obtenerEmpresa();}

/**CRUD VCARD*/
let edit = true;

//Mostrar(Listar)
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
            <div class="avatar"><img src="`+page_url+`files/images/photos/${cover}" alt="..." class="img-fluid">
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

//BTN-AGREGAR
$('#app-modulo').on('click','.btn-add',function(){
  $("#form1").trigger('reset');
  fecha_hora_create(1);//fecha_hora_update(0);
  console.log('Boton Agregar activado');
  let idVcard=refVcard.orderByChild('ID');
  idVcard.on('value',function(datos){
    var reg=datos.val();
    let val = Object.values(reg); //console.log(val);
    let n=val.length-1; //console.log('n: '+n);
    let ureg=val[n]; //console.log(ureg);
    let ID=parseInt(ureg.ID)+1; //console.log(ID);
    $('#ID').val(ID);
  });
  let IDu=document.querySelector('#id_code_google');
  $('#uid').val(IDu.textContent);
  let name=document.querySelector('#email_session');  
  $('#user').val(name.textContent);
  $("#ima").attr('src', './assets/img/photos/sinfoto.png');
  
  edit = false;
});

//BTN-EDITAR [Form_Editar]
$('#app-modulo').on('click','.btn-edit',function(){
  $("#form1").trigger('reset');
  fecha_hora_update(1);//fecha_hora_create(0);
  console.log('Boton Editar activado');  
  const element = $(this)[0].parentElement.parentElement.parentElement;
  let Id = $(element).attr('vcardId'); //console.log(Id);
  refVcard.child(Id).once('value',function(datos){
      valor=datos.val(); //console.log(valor);
      //Campos Ocultos
      $('#cardId').val(Id),
      $('#ID').val(valor.ID);
      $('#uid').val(valor.uid); //uid del usuario     
      $('#f_create').val(valor.f_create);
      $('#user').val(valor.user);
      //Campos de Edicion
      $('#cover').val(valor.cover);
      $('#descripcion').val(valor.descripcion);
      $('#profile').val(valor.profile);
      $('#nombre').val(valor.nombre);
      $('#puesto').val(valor.puesto);
      $('#email').val(valor.email);
      $('#cell').val(valor.cell);
      $('#tel_ofi').val(valor.tel_ofi);
      $('#idemp').val(valor.idemp);
      //$('#empresa').val(valor.empresa);
      $('#web').val(valor.web);
      $('#fb').val(valor.fb);
      //$('#tw').val(valor.tw);
      $('#lk').val(valor.lk);
      $('#ins').val(valor.ins);
      $('#visible').val(valor.visible);

      $("#ima").attr('src', page_url+'files/images/photos/' + valor.cover);

  });

  edit = true;
});

//Guardar(Enviar)/Editar
$('#app-modulo').on('#form1').submit(function(e){
  e.preventDefault();
  var Id=$('#cardId').val();
  console.log(Id);

  var action='';

  const postData = {
    ID: $('#ID').val(),
    uid: $('#uid').val(), //uid del usuario
    f_create: $('#f_create').val(),
    f_update: $('#f_update').val(),
    user: $('#user').val(),
    descripcion: $('#descripcion').val(),
    cover: $('#cover').val(),
    profile: $('#profile').val(),
    nombre: $('#nombre').val(),
    puesto: $('#puesto').val(),
    email: $('#email').val(), 
    web: $('#web').val(),
    cell: $('#cell').val(),
    tel_ofi: $('#tel_ofi').val(),
    idemp: $('#idemp').val(),
    //empresa: $('#empresa').val(),
    fb: $('#fb').val(),
    //tw: $('#tw').val(),
    lk: $('#lk').val(),
    ins: $('#ins').val(),
    visible: $('#visible').val()    
  };
  console.log(postData);
  if(edit==false){action='Guardado';
    refVcard.push(postData); // Guardamos los datos en referencia
  }else{action='Actualizado';
    refVcard.child(Id).update(postData); // Actualizamos los datos en referencia
  }
  console.log('Se ha '+action+' el registro');
  $("#form1").trigger('reset');
  $('#addVcard').modal('hide');
  edit = false;
});

//BORRAR
$('#app-modulo').on('click', '.btn-delete', function(){
  const element = $(this)[0].parentElement.parentElement.parentElement;
  let Id = $(element).attr('vcardId'); console.log(Id);
  Swal.fire({
    title: "Esta seguro de eliminar esta Tarjeta?",
    text: "¡Está operación no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Borrar'
  }).then((result) => {
    if (result.value) {
        //let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  
        refVcard.child(Id).remove(); //eliminamos el producto de firebase      
        Swal.fire('¡Eliminado!', 'La Tarjeta ha sido eliminada.','success')
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

//SUBIR COVER
$(document).on('click', '#Aceptar', function (e) {
  e.preventDefault();
  var frmData = new FormData;
  frmData.append("userfile", $("input[name=userfile]")[0].files[0]);
  //console.log('Se cargo Imagen');		
  $.ajax({
    url: page_url+'pages/'+mod+'/admin/backend.php?mod='+mod+'&action=subir_cover',
    type: 'POST',
    data: frmData,
    processData: false,
    contentType: false,
    cache: false,
    beforeSend: function (data) {
    $("#imagen").html("Subiendo Imagen");
    },
    success: function (data) {
      $("#imagen").html(data);
      $(".alert-dismissible").delay(1000).fadeOut("slow");
      console.log("Subido Correctamente");
    }
  });
  //return false;
});