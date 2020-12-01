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
var url_json_vcard = 'https://vcardapp-js.firebaseio.com/vcard_vcard.json';
console.log(url_json_vcard);
//const shareLink = document.querySelectorAll("#shareLink");

/*FUNCIONES */
function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

