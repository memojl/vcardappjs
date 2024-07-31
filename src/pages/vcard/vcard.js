import { variables } from "../../app/core/lib";
import { getRegister, accion } from "./funciones";

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext } = variables;

async function pagVcard() {
  const data = await getRegister('Multiportal','https://vcardapp-js.firebaseio.com/vcard_vcard.json');
  console.log('Usuario',data);
  const dataEmpresa = await getRegister(data.idemp,'https://vcardapp-js.firebaseio.com/vcard_vcard.json'); 
  console.log('Empresa',dataEmpresa);
  accion('inicio');
  
  //MENU
  const btnContacto = document.querySelector('#btnContacto');
  if(btnContacto){//console.log(btnContacto.id);
    btnContacto.addEventListener('click',()=>{accion(btnContacto.name)});
  }
  const btnUbicacion = document.querySelector('#btnUbicacion');
  if(btnUbicacion){//console.log(btnUbicacion.id);
    btnUbicacion.addEventListener('click',()=>{accion(btnUbicacion.name)});
  }    
}

export default function vcard() {
  //Retardo para activar pagHome
  setTimeout(() => {
    pagVcard();
  }, 500);
}
