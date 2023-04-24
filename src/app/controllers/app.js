//APP.JS
import {variables} from '../lib';
import {functionFetch, fetchProfile} from '../services/fetch';
import {Api} from '../const.env';
import {consoleLocal} from '../functions';
import dashApp from './dash-app';
import firebaseService from '../services/firebase';

const v = variables();
const {host, dominio, path_url, base_url, screenw, mod, hostDev, year} = v;

async function btnSidebar() {
  //Init dashApp
  dashApp();
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
  //Retardo para activar btnLogin
  setTimeout(function () {
    if (host == hostDev) {console.log('btnSidebar Activado');}
    btnSidebar();
    firebaseService();
  }, 500);
  //loadStyleDashboard();
}

export { dashboardApp };