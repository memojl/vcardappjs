//DASHBOARD.JS
import {variables} from '../lib';
import {functionFetch, fetchProfile} from '../services/fetch';
import {Api} from '../const.env';
import {consoleLocal} from '../functions';
import dashApp from './dash-app';
import firebaseConfig from '../services/firebase';

const v = variables();
const {host, dominio, path_url, base_url, screenw, mod, hostDev, year} = v;

/*function loadStyleDashboard() {
  const dashCss = [
    base_url + 'assets/dashboard/xeria/assets/css/bootstrap.css', 
    base_url + 'assets/dashboard/xeria/assets/css/app.css'
  ];

  if (dashCss.length > 0) {
    for (let i = 0; i < dashCss.length; i++) {
      let node = document.getElementById('dash-'+i);
      if(node){
        if (host == hostDev) {console.log('Ok: dash-'+i);}
      }else{
      if (host == hostDev) {console.log(dashCss[i]);}
      //<![CDATA[
      if (document.createStyleSheet) {
        document.createStyleSheet(dashCss[i]);
      } else {
        var styles = "@import url('" + dashCss[i] + "');";
        var newSS = document.createElement('link');
        newSS.id = 'dash-' + i;
        newSS.rel = 'stylesheet';
        newSS.href = 'data:text/css,' + escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
      }
      //]]>
    }
    }
  }
}*/

async function btnSidebar() {
  //Init dashApp
  dashApp();
  //Dashboard
  let btnSalir = document.querySelector('.log-out');
  if (btnSalir != null) {
    btnSalir.addEventListener('click', () => {
      //delStyleDashboard();
      window.location.href = '#/logout';        
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
    //let side = document.querySelector('.sidebar');
    if (sidebar) {
      side.classList.add('close');
    }
  }

  //INFO USER /////////
  //setTimeout(async () => {    
  //if(mod === 'dashboard'){
  const u = document.querySelector('.profile_name');
  const user = document.querySelector('.pro-user-name');
  const job = document.querySelector('.job');
  let msjProfile = (host == hostDev) ? ': DASHBOARD-GET PROFILE' : '';
  console.log('AUTORIZADO' + msjProfile);
  if (u!= null && job!= null && user!= null) {
    const {email, username, nombre, foto, puesto, status} = await fetchProfile(Api, 'InfoUser');
    if (u) {u.innerHTML = username;}
    if (user) {user.innerHTML = username + ' <i class="mdi mdi-chevron-down"></i>';}
    if (job) {job.innerHTML = puesto;}
  }
  //}
  //}, 1000);
  /////////////////////
  setTimeout(() => {
    let scrollMenu = document.querySelector('.slimscroll-menu');
    if(scrollMenu){scrollMenu.style.height = '350px';}
    let scrollMenu2 = document.querySelector('#slimscroll-menu');
    if(scrollMenu2){scrollMenu2.style.height = '250px';}    
  }, 100);
}

/*function delStyleDashboard(){
  for(let i=0;i<2;i++){
    let nodo = document.getElementById("dash-"+i);
    if(nodo){console.log(nodo);
      document.getElementsByTagName("head")[0].removeChild(nodo);
    }  
  }
}*/

function dashboard() {
  //Retardo para activar btnLogin
  setTimeout(function () {
    if (host == hostDev) {console.log('btnSidebar Activado');}
    btnSidebar();
    firebaseConfig();
  }, 500);
  //loadStyleDashboard();
}

export { dashboard };