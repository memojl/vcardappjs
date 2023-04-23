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
  let btnSalir = document.querySelector('.log-out');
  if (btnSalir != null) {
    btnSalir.addEventListener('click', () => {
      //delStyleDashboard();
      setTimeout(() => {
        window.location.href = '#/logout';                
      }, 1000);
    });
  }

  let btnSet = document.querySelector('.btn-set');
  if (btnSet != null) {
    btnSet.addEventListener('click', () => {
      window.location.href = '#/dashboard/settings';        
    });
  }

  let btnProfile = document.querySelector('.user-edit');
  if (btnProfile != null) {
    btnProfile.addEventListener('click', () => {
      window.location.href = '#/dashboard/cuenta';        
    });
  }

  let yFooter = document.querySelector('#year');
  if(yFooter){
    yFooter.innerHTML = year + ' &copy; Xeria theme';
  }

  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu"); //console.log(sidebarBtn);
  if (sidebarBtn) {
    let bar = localStorage.getItem('bar');
    if (bar == 'true') {
      sidebar.classList.toggle("close");
    }
    sidebarBtn.addEventListener("click", () => {
      let sbar = sidebar.classList.toggle("close"); //console.log(sbar);
      localStorage.setItem("bar", sbar);
      bar = localStorage.getItem('bar'); //console.log('Bar-Click:',bar);
    });
    console.log('Bar-Load:', bar);
    //sidebarBtn.addEventListener("click", () => { sidebar.classList.toggle("close"); });
  }
  if (screenw <= 740) {
    if (sidebar) {
      side.classList.add('close');
    }
  }

  //INFO USER /////////
  /////////////////////
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