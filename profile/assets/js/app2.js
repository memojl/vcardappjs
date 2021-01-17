/* VARIABLES CONSTANTES*/
console.log('/* VARIABLES CONSTANTES*/');
var loc = window.location;
console.log(loc);
var fecha = new Date();
console.log(fecha);
const protocol = window.location.protocol;
console.log('protocol='+protocol);
const host = window.location.host;
console.log('host='+host);
const dominio = window.location.origin+'/';
console.log('dominio='+dominio);
const dominio1 = window.location.origin;
console.log('dominio1='+dominio1);
const path_url = window.location.pathname;
console.log('path_url='+path_url);
const URL = window.location.href;
console.log('URL='+URL);
/* VARIABLES */
console.log('/* VARIABLES */');
var path_url1 = path_url.replace("/", "");
//var path_root=(host=='localhost')?path_url1:'';
var path_root=(host=='localhost')?'MisSitios/vcardappjs/':'';
console.log('path_root='+path_root);
var page_url = dominio+path_root;
console.log('page_url='+page_url);
var perfil = filename();
console.log(perfil);

/*FUNCIONES */
function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

function action(type){
  if(type=='viewcopy'){
    $('#inputCopiar').select();
       var res = document.execCommand("copy");
      if (!res) { console.log("> No copy to clipboard");}else{console.log('Texto Copiado');document.getElementById('aviso').innerHTML='<div class="alert alert-success">Texto Copiado!</div>';}
  }
}

function accion(type){
    const closed = document.querySelector("#close");
    if(type!='inicio'){$("#close").show();}else{$("#close").hide();}
    
    if(type=='inicio'){$("#inicio").fadeIn();}else{$("#inicio").hide();}
    if(type=='contacto'){$("#contacto").fadeIn();}else{$("#contacto").hide();}
    if(type=='ubicacion'){$("#ubicacion").fadeIn();}else{$("#ubicacion").hide();}
    if(type=='compartir'){$("#compartir").fadeIn();}else{$("#compartir").hide();}
    if(type=='guardar'){$("#guardar").fadeIn();}else{$("#guardar").hide();}
    if(type=='acceso'){$("#acceso").fadeIn();}else{$("#acceso").hide();}
}

function load(){
  accion('inicio');
}

document.onload = load();

