/**PAGES SYSTEM**/
import dashboard from "../../pages/dashboard/index.html?raw";
import app from "../../pages/app/index.html?raw";
import dash from "../../pages/app/dash.html?raw";
import appLogin from "../../components/login.html?raw";
import appRegistro from "../../components/registro.html?raw"
import settings from "../../pages/dashboard/settings.html?raw";
import forget from "../../pages/forget/index.html?raw";
import login from "../../pages/login/index.html?raw";
import logout from "../../pages/logout/index.html?raw";
import register from "../../pages/registro/index.html?raw";
import noauth from "../../pages/noauth/index.html?raw";
import cuenta from "../../pages/dashboard/cuenta.html?raw";
import empresas from "../../pages/dashboard/empresas.html?raw";
import tarjetas from "../../pages/dashboard/tarjetas.html?raw";

/**COMPONENTS**/
import menu from "../../components/menu.html?raw";
import sidebarR from "../../components/dash-sidebar-right.html?raw";
import sidebarL from "../../components/dash-sidebar-left.html?raw";
import dashMenu from "../../components/dash-menu.html?raw";
import dashFooter from "../../components/dash-footer.html?raw";

/**PAGES**/
import Home from "../../pages/Home/index.html?raw";

export const pages = {
  Home: Home,
};

export const pagesSys = {
  dashboard: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+'<div class="content-page">'+dashboard+dashFooter+'</div></div><!-- END wrapper -->'+sidebarR,
  //settings: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+'<div class="content-page">'+settings+dashFooter+'</div></div><!-- END wrapper -->'+sidebarR,
  //cuenta: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+'<div class="content-page">'+cuenta+dashFooter+'<div></div><!-- END wrapper -->'+sidebarR,
  //empresas: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+'<div class="content-page">'+empresas+dashFooter+'</div></div><!-- END wrapper -->'+sidebarR,
  //tarjetas: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+'<div class="content-page">'+tarjetas+dashFooter+'<div></div><!-- END wrapper -->'+sidebarR,
  app: '<!-- Begin page --><div id="wrapper" class="dashboard" style="display: none;">'+dashMenu+sidebarL+'<div class="content-page">'+app+dashFooter+'</div></div><!-- END wrapper -->'+sidebarR+appLogin+appRegistro,
  dash: dash,
  tarjetas: tarjetas,
  empresas: empresas,
  cuenta: cuenta,
  settings: settings,
  forget: forget,
  login: login,
  logout: logout,
  registro: register,
  noauth: noauth,
};

export const pagesAll = {
  ...pages, 
  ...pagesSys
};//console.log('pagesAll:',pagesAll);

export const privatePage = [
  'dashboard',
  'tarjetas',
  'empresas',
  'cuenta',
  'settings'
];

export const menuPages = {
  dash:{
    txt:'Dashboard',
    icon:'fas fa-tachometer-alt'
  },
  tarjetas:{
    txt:'Mis tarjetas',
    icon:'far fa-address-card'
  },
  empresas:{
    txt:'Mis empresas',
    icon:'fas fa-industry'
  }
}