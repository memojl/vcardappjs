import { variables } from "../../app/core/lib";

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext } = variables;

async function pagVcard() {
    const data = await getRegister('Multiportal','https://vcardapp-js.firebaseio.com/vcard_vcard.json');
    console.log('Usuario',data);
    const dataEmpresa = await getRegister(data.idemp,'https://vcardapp-js.firebaseio.com/vcard_vcard.json'); 
    console.log('Empresa',dataEmpresa);
    accion('inicio');
}

/*FUNCIONES */
function filename() {
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length,rutaAbsoluta.length);
  return rutaRelativa;
}

function action(type) {
  if (type == "viewcopy") {
    $("#inputCopiar").select();
    var res = document.execCommand("copy");
    if (!res) {
      console.log("> No copy to clipboard");
    } else {
      console.log("Texto Copiado");
      document.getElementById("aviso").innerHTML =
        '<div class="alert alert-success">Texto Copiado!</div>';
    }
  }
}

function accion(type) {
  //const closed = document.querySelector("#close");
  if(type!='inicio'){$("#close").show();}else{$("#close").hide();}
  if(type=='inicio'){$("#inicio").fadeIn();}else{$("#inicio").hide();}
  if(type=='contacto'){$("#contacto").fadeIn();}else{$("#contacto").hide();}
  if(type=='ubicacion'){$("#ubicacion").fadeIn();}else{$("#ubicacion").hide();}
  if(type=='compartir'){$("#compartir").fadeIn();}else{$("#compartir").hide();}
  if(type=='guardar'){$("#guardar").fadeIn();}else{$("#guardar").hide();}
  if(type=='acceso'){$("#acceso").fadeIn();}else{$("#acceso").hide();}
}

function menuFooter() {
  const menu = document.querySelector("#footerbar");
  if (menu) {
    menu.addEventListener("click", (e) => {
      //console.log(e);
      setTimeout(() => {
        location.href = URL + "#td2";
      }, 200);
    });
  }
}

function ssl() {
  //const protocol = window.location.protocol;console.log("protocol=" + protocol);
  if (protocol == "http:") {
    window.location = "https://" + host + "/" + path_root;
  }
}

function sslProfile() {
  //const protocol = window.location.protocol;console.log("protocol=" + protocol);
  if (protocol == "http:") {
    window.location = URL;
  }
}

async function getRegister(x,url){
  const response = await fetch(url);
  const data = await response.json();
  //const uid = "sXP6Y9Uje3dy3cXZrzyY4aBwVhF2";
  let res = null;
  for (const key in data) {
    if (data[key].nombre === x || data[key].ID === x) {
      res = data[key];
    }
  }
  return res;
}

export default function vcard() {
  //Retardo para activar pagHome
  setTimeout(() => {
    pagVcard();
  }, 500);
}
