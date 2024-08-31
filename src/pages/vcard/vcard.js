import './vcard.css';
import { variables } from "../../app/core/lib";
import { getRegister, isValidUrl, validImage, validImage2, accion, menuFooter, actionCopy } from "./funciones";
import { Api } from '../../app/core/const.env';

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext, id, URL } = variables();

async function pagVcard() { //console.log(id);
  const dataUser = await getRegister(id, Api+'/vcard_vcard.json'); console.log('Usuario',dataUser);
  if(dataUser == null){document.querySelector('#container').style.display = 'none';return;}
  const { nombre, profile, puesto, descripcion, fb, tw, ins, lk, web, email, cell, tel_ofi, cover, idemp, visible, direc } = dataUser;
  const dataEmpresa = await getRegister(idemp, Api+'/vcard_vcard_empresas.json'); console.log('Empresa',dataEmpresa);
  const {bg_color, coverbg, empresa} = dataEmpresa;
  accion('inicio');
  menuFooter();  

  //INFO
  document.querySelector('#head').style.backgroundColor = bg_color;
  const tmpLogo = (id == 'multiportal')?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpprRNyywxrgFdZ7rLvnq-6jEgWCBq_4Js3A&s':null;
  validImage2(dataEmpresa.cover,tmpLogo,document.querySelector('#logo'),0);//document.querySelector('#logo').src = dataEmpresa.cover;
  const tmpPerfil = (id == 'multiportal')?'https://multiportal.webcindario.com/assets/img/Multiportal.logo2023.png':null;
  validImage2(cover,tmpPerfil,document.querySelector('#fotoperfil'),1);//document.querySelector('#fotoperfil').style.backgroundImage = `url('${cover}')`;

  document.querySelector('#tit').innerHTML = nombre;
  document.querySelector('#puesto').innerHTML = puesto;
  document.querySelector('#des').innerHTML = descripcion;
  const medios = document.querySelector('#medios');
  const cellHTML = (cell)?`<a href="tel:${cell}"><i class="fa fa-phone"></i><span>Llamar</span></a>`:'';
  const waHTML = (cell)?`<a target="_blank" href="https://wa.me/+52${cell}"><i class="fa fa-whatsapp"></i><span>WhatsApp</span></a>`:'';
  const mailHTML = (email)?`<a href="mailto:${email}"><i class="fa fa-envelope-o"></i><span>E-mail</span></a>`:'';
  const webHTML = (web)?`<a href="${web}" target="_blank" id="empresaweb">${empresa}</a>`:'';
  medios.innerHTML = cellHTML + waHTML + mailHTML + webHTML;
  //RRSS
  const redes = document.querySelector('#redes');
  const fbHtml = (fb)?`
  <a href="${fb}" target="_blank" aria-label="Facebook" class="icon-rrss">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`:'';
  const twHtml = (tw)?`
  <a href="${tw}" target="_blank" aria-label="Twitter" class="icon-rrss">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`:'';
  const lkHtml = (lk)?`
  <a href="${lk}" target="_blank" aria-label="LinkedIn" class="icon-rrss">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`:'';
  const insHtml = (ins)?`
  <a href="${ins}" target="_blank" aria-label="Instagram" class="icon-rrss">
    <i class="fa fa-instagram"></i>
    <span>Instagram</span>
  </a>`:'';
  redes.innerHTML = `<div id="medios">${fbHtml} ${twHtml} ${lkHtml} ${insHtml}</div>`;

  //CONTACTO
  const acell = document.querySelector('#a-cell');
  if(cell){acell.setAttribute("href", "tel:"+cell);}else{acell.style.display = 'none';}
  const awa = document.querySelector('#a-wa');
  if(cell){awa.setAttribute("href", "https://wa.me/+52"+cell);}else{awa.style.display = 'none';}
  const asms = document.querySelector('#a-sms');
  if(cell){asms.setAttribute("href", "sms:"+cell);}else{asms.style.display = 'none';}
  const aemail = document.querySelector('#a-email');
  if(email){aemail.setAttribute("href", "mailto:"+email);}else{aemail.style.display = 'none';}
  const aweb = document.querySelector('#a-web');
  if(web){aweb.setAttribute("href", web);}else{aweb.style.display = 'none';}
  //UBICACION
  const ubi = document.querySelector('#ubi'); //console.log(direc);
  ubi.innerHTML = (direc)?`<p style="font-size: 18px;"><b>Dirección:</b> ${direc}</p>
  <div id="map"></div>`:`<p>No hay dirección disponible.</p>`;
  //COMPARTIR
  const accesos = document.querySelector('.share'); console.warn(accesos);
  const fbHtml2 = `
  <a target="_blank" href="//www.facebook.com/sharer.php?u=${URL}&t=Vcard+${profile}" aria-label="Facebook" class="icon-access">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`;
  const twHtml2 = `
  <a target="_blank" href="//twitter.com/share?url=${URL}&text=Vcard+${profile}" aria-label="Twitter" class="icon-access">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`;
  const lkHtml2 = `
  <a target="_blank" href="//www.linkedin.com/shareArticle?mini=true&url=${URL}&title=${profile}&ro=false&summary=&source=" aria-label="LinkedIn" class="icon-access">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`;
  const waHtml2 = `
  <a target="_blank" href="https://api.whatsapp.com/send?text=Accede+a+la+tarjeta+digital+desde+el+siguiente+enlace:${URL}" aria-label="whatsapp" class="icon-access">
    <i class="fa fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>`;
  accesos.innerHTML = `${fbHtml2}${twHtml2}${lkHtml2}${waHtml2}`;
  document.querySelector('#inputCopiar').value = URL; //console.log(URL);
  const copy = document.querySelector('#viewcopy');
  if(copy){
    copy.addEventListener('click',()=>{actionCopy('viewcopy')});
  }
  document.querySelector('#sendEmail').href = 'mailto:?body=' + URL;
  //GUARDAR CARD
  document.querySelector('#saveCard').href = `files/vcf/${profile}.vcf`;

  //MENU
  const btnCerrar = document.querySelector('#close');
  if(btnCerrar){//console.log(btnCerrar.id);
    btnCerrar.addEventListener('click',()=>{accion('inicio')});
  }
}

export default function vcard() {
  //Retardo para activar pagHome
  setTimeout(() => {
    pagVcard();
  }, 500);
}
