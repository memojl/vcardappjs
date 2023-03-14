/**PAGES SYSTEM**/
import dashboard from "../../pages/dashboard/index.html?raw";
import settings from "../../pages/dashboard/settings.html?raw";
import forget from "../../pages/forget/index.html?raw";
import login from "../../pages/login/index.html?raw";
import logout from "../../pages/logout/index.html?raw";
import register from "../../pages/registro/index.html?raw";
import noauth from "../../pages/noauth/index.html?raw";

/**COMPONENTS**/
import menu from "../../components/menu.html?raw";
import sidebarR from "../../components/dash-sidebar-right.html?raw";
import sidebarL from "../../components/dash-sidebar-left.html?raw";
import dashMenu from "../../components/dash-menu.html?raw";
import dashFooter from "../../components/dash-footer.html?raw";

/**PAGES**/
import Home from "../../pages/Home/index.html?raw";

export const pages = {
  Home: menu+Home,
};

export const pagesSys = {
  dashboard: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+dashboard+'</div><!-- END wrapper -->'+sidebarR,
  settings: '<!-- Begin page --><div id="wrapper">'+dashMenu+sidebarL+settings+'</div><!-- END wrapper -->'+sidebarR,
  forget: forget,
  login: login,
  logout: logout,
  registro: register,
  noauth: noauth,
};

export const privatePage = [
  'dashboard',
  'settings'
];