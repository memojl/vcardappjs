import './vcard.css';
import { variables } from "../../app/core/lib";
import { getRegister, accion } from "./funciones";
import { Api } from '../../app/core/const.env';

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext, id } = variables();

async function pagVcard() { console.log(id);
  const data = await getRegister(id,Api+'/vcard_vcard.json');
  console.log('Usuario',data);
  const {nombre,puesto,descripcion} = data;
  const dataEmpresa = await getRegister(data.idemp,Api+'/vcard_vcard_empresas.json'); 
  console.log('Empresa',dataEmpresa);
  accion('inicio');

  //INFO
  document.querySelector('#tit').innerHTML = nombre;
  document.querySelector('#puesto').innerHTML = puesto;
  document.querySelector('#des').innerHTML = descripcion;
  //RRSS
  //const fb = 
  const redes = `
  <div id="medios">
    <a href="" target="_blank" aria-label="Facebook" class="icon-rrss">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
    </a>
  </div>`;
  
  //MENU
  const btnCerrar = document.querySelector('#close');
  if(btnCerrar){//console.log(btnCerrar.id);
    btnCerrar.addEventListener('click',()=>{accion('inicio')});
  }
  const btnContacto = document.querySelector('#btnContacto');
  if(btnContacto){//console.log(btnContacto.id);
    btnContacto.addEventListener('click',()=>{accion(btnContacto.name)});
  }
  const btnUbicacion = document.querySelector('#btnUbicacion');
  if(btnUbicacion){//console.log(btnUbicacion.id);
    btnUbicacion.addEventListener('click',()=>{accion(btnUbicacion.name)});
  }
  const btnCompartir = document.querySelector('#btnCompartir');
  if(btnCompartir){//console.log(btnUbicacion.id);
    btnCompartir.addEventListener('click',()=>{accion(btnCompartir.name)});
  }
  const btnGuardar = document.querySelector('#btnGuardar');
  if(btnGuardar){//console.log(btnUbicacion.id);
    btnGuardar.addEventListener('click',()=>{accion(btnGuardar.name)});
  }
  const btnAcceso = document.querySelector('#btnAcceso');
  if(btnAcceso){//console.log(btnUbicacion.id);
    btnAcceso.addEventListener('click',()=>{accion(btnAcceso.name)});
  }    
}

export default function vcard() {
  //Retardo para activar pagHome
  setTimeout(() => {
    pagVcard();
  }, 500);
}
