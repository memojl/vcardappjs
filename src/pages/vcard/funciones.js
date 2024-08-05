import { consoleLocal } from "../../app/functions";

/*FUNCIONES */
export async function getRegister(x, url) {
  const response = await fetch(url);
  const data = await response.json();
  //const uid = "sXP6Y9Uje3dy3cXZrzyY4aBwVhF2";
  let res = null;
  for (const key in data) {
    if (data[key].profile === x || data[key].ID === x) {
      res = data[key];
    }
  }
  return res;
}

//ACCIONES MENU
export function accion(type) { //consoleLocal('',type);
  if (type != 'inicio') { $("#close").show(); } else { $("#close").hide(); }
  if (type == 'inicio') { $("#inicio").fadeIn(); } else { $("#inicio").hide(); }
  if (type == 'contacto') { $("#contacto").fadeIn(); } else { $("#contacto").hide(); }
  if (type == 'ubicacion') { $("#ubicacion").fadeIn(); } else { $("#ubicacion").hide(); }
  if (type == 'compartir') { $("#compartir").fadeIn(); } else { $("#compartir").hide(); }
  if (type == 'guardar') { $("#guardar").fadeIn(); } else { $("#guardar").hide(); }
  if (type == 'acceso') { $("#acceso").fadeIn(); } else { $("#acceso").hide(); }
}

export function filename() {
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
  return rutaRelativa;
}

export function actionCopy(type) {
  if (type == "viewcopy") {
    $("#inputCopiar").select();
    var res = document.execCommand("copy");
    if (!res) {
      console.log("> No copy to clipboard");
    } else {
      console.log("Texto Copiado");
      document.getElementById("aviso").innerHTML = '<div class="alert alert-success">Texto Copiado!</div>';
    }
  }
}

export function menuFooter() {
  const menu = document.querySelector("#footerbar");
  if (menu) {
    menu.addEventListener("click", (e) => {//consoleLocal('',e.target);
      const btn = e.target.id.replace('btn','').replace('1','').toLowerCase(); //console.log(btn); 
      if(btn && btn!=''){ accion(btn); }
      //setTimeout(() => {location.href = URL + "#td2";}, 200);
    });
  }
}

export function ssl() {
  //const protocol = window.location.protocol;console.log("protocol=" + protocol);
  if (protocol == "http:") {
    window.location = "https://" + host + "/" + path_root;
  }
}

export function sslProfile() {
  //const protocol = window.location.protocol;console.log("protocol=" + protocol);
  if (protocol == "http:") {
    window.location = URL;
  }
}

export const isValidUrl = urlString => {
  try {
    return Boolean(new URL(urlString));
  }
  catch(e){
    return false;
  }
}

export function validImage(url,ele,type){
  var image = new Image();
  image.src = url;
  image.addEventListener('load', () =>{
    const msj = (type == 0) ? 'Logo' : 'Foto de perfil';console.log('Success: '+msj);
    (type == 0) ? ele.src = url : ele.style.backgroundImage = `url('${url}')`;
  });
  image.addEventListener('error', () =>{
    const msj = (type == 0) ? 'logo' : 'foto de perfil';
    console.error('Error: Fallo carga de '+msj);
  });
}

export function validImage2(url,tmp,ele,type){
  //window.addEventListener("load", event => {
    var image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      const msj = (type == 0) ? 'Logo' : 'Foto de perfil';console.log('Success: '+msj);
      (type == 0) ? ele.src = url : ele.style.backgroundImage = `url('${url}')`;
    });
    image.addEventListener('error', () => {
      const msj = (type == 0) ? 'logo' : 'foto de perfil';
      if(tmp && tmp!=''){validImage(tmp,ele,type)}else{console.error('Error: Fallo carga de '+msj);}
    });
  //});
}
