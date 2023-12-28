//APP.JS
import {variables} from '../lib';
import {functionFetch, fetchProfile} from '../services/fetch';
import {Api} from '../const.env';
import {consoleLocal, btnMenuPages} from '../functions';
import { privatePage, menuPages } from './pages';
import dashApp from './dash-app';
import firebaseService from '../services/firebase';

const {host, dominio, path_url, base_url, screenw, mod, hash, hostDev, year} = variables();

async function btnSidebar() {
  //Init dashApp
  dashApp();

  //MENU SIDE
  let sideMenu = document.querySelector('#side-menu');
  //
  for(let item in menuPages){//console.log(menuPages[item]);
    const {txt,icon} = menuPages[item];
    sideMenu.innerHTML += `
      <li>
        <a class="link btn-${item}" data-menu="${item}">
          <i class="${icon}"></i>
          <span> ${txt} </span>
        </a>
      </li>`;

    var btn = document.querySelector('.btn-'+item);
    if(btn != null){ btnMenuPages(btn);}
  }
  //
  /*let n = privatePage.length;
  for(var i=0;i<n;i++){
    let lista = privatePage[i]; 
    if(lista!='settings' && lista!=='cuenta'){console.log(privatePage[i]);
        menuc.innerHTML += `
        <li>
          <a class="btn-${lista}">
            <i class="fas fa-industry"></i>
            <span> ${lista} </span>
          </a>
        </li>`;
    }
  }*/

  //Dashboard
  let btnSet = document.querySelector('.btn-set');
  if (btnSet != null) {
    btnSet.addEventListener('click', () => {
      window.location.href = '#/app/settings';        
    });
  }

  let btnProfile = document.querySelector('.user-edit');
  if (btnProfile != null) {
    btnProfile.addEventListener('click', () => {
      window.location.href = '#/app/cuenta';        
    });
  }

  //BTN-Dashboard
  var btnDashboard = document.querySelector('.btn-dash');
  if(btnDashboard != null){ btnMenuPages(btnDashboard);}
  //BTN-Tarjetas
  let btnTarjetas = document.querySelector('.btn-tarjetas');
  if(btnTarjetas != null){ btnMenuPages(btnTarjetas);}
  //BTN-Empresas
  let btnEmpresas = document.querySelector('.btn-empresas');
  if(btnEmpresas != null){ btnMenuPages(btnEmpresas);}

  let yFooter = document.querySelector('#year');
  if(yFooter){
    yFooter.innerHTML = year + ' &copy; Xeria theme';
  }

  setTimeout(() => {
    let scrollMenu = document.querySelector('.slimscroll-menu');
    if(scrollMenu){scrollMenu.style.height = '350px';}
    let scrollMenu2 = document.querySelector('#slimscroll-menu');
    if(scrollMenu2){scrollMenu2.style.height = '250px';}    
  }, 100);
}

function dashboardApp() {
  //Retardo para activar 
  setTimeout(function () {
    if (host == hostDev) {console.log('btnSidebar Activado');}
    btnSidebar();
    firebaseService();
  }, 500);
  //loadStyleDashboard();
}

export { dashboardApp };