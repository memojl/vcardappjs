//APP.JS
import {variables} from '../lib';
import {functionFetch, fetchProfile} from '../services/fetch';
import {Api} from '../const.env';
import { consoleLocal, loadDashboard, btnMenuPages} from '../functions';
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
  if(sideMenu){
    sideMenu.addEventListener('click', () => {
      document.body.classList.toggle("sidebar-enable");
      loadD();    

      
    });
  }
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

  let yFooter = document.querySelector('#year');
  if(yFooter){
    yFooter.innerHTML = year + ` &copy; VcardApp V<span id="version"></span> de <a href="#/app" alt="">[:Multiportal:]</a>`;
  }

  setTimeout(() => {console.log('Cargando Dash...');
    loadDashboard('dash');
    loadD();
  },1000);

  setTimeout(() => {
    //BTN-Dashboard
    var btnDashboard = document.querySelector('.btn-dash');
    if(btnDashboard != null){ btnMenuPages(btnDashboard);}
    //BTN-Tarjetas
    let btnTarjetas = document.querySelector('.btn-tarjetas');
    if(btnTarjetas != null){ btnMenuPages(btnTarjetas);}
    //BTN-Empresas
    let btnEmpresas = document.querySelector('.btn-empresas');
    if(btnEmpresas != null){ btnMenuPages(btnEmpresas);}
    //
    let btnSet = document.querySelector('.btn-set');
    if(btnSet != null){btnMenuPages(btnSet);}
    //
    let btnProfile = document.querySelector('.user-edit');
    if(btnProfile != null){ btnMenuPages(btnProfile);}
  
  }, 500);

  setTimeout(() => {
    let scrollMenu = document.querySelector('.slimscroll-menu');
    if(scrollMenu){scrollMenu.style.height = '350px';}
    let scrollMenu2 = document.querySelector('#slimscroll-menu');
    if(scrollMenu2){scrollMenu2.style.height = '250px';}    
  }, 100);
}

function loadD(){
  setTimeout(() => { 
    let fluid = document.querySelector('.container-fluid');
    if(fluid){
      console.log('fluid');
      fluid.innerHTML += `
      <div id="h-dash" class="row">
          <div class="col-12 load-dash">
              <div class="spinner-border avatar-lg text-primary m-2" role="status"></div>
          </div> <!-- end col-->
      </div><!-- end col-->`;  
    }
  }, 100);
  console.log('Cargando...');
  setTimeout(() => { 
    let s = document.getElementById('s-dash');
    let h = document.getElementById('h-dash');
    if(s){s.style.display = 'inherit';}
    if(h){h.style.display = 'none';}
    console.log('Terminado.');
  }, 3000);        
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