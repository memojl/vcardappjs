import { consoleLocal, router, controlLoading, menuBar} from "../app/functions";
import { pages, pagesSys } from "../app/controllers/pages";
import { login } from "../app/sys/login/login";
import { logout } from "../app/sys/logout/logout";
//import { dashboard } from "../app/auth/dashboard/dashboard";
import { cssLoadMod, classBody } from "./css.routes";
//import Home from "../pages/Home/home";
import { loadApp } from "../pages/app/app";
import vcard from "../pages/vcard/vcard";

//Functions for Controllers JS
function controlRoutes(v){ 
  const {route,hash,mod,ext,id,dominio} = v;consoleLocal('log','route='+route);
  controlLoading();
  if(mod){classBody(mod);cssLoadMod(mod,dominio);}
  //document.addEventListener("DOMContentLoaded", () => {});    
  //if(route=='Home/index'){Home();}
  if(route=='dashboard/index'){loadApp();}
  if(route=='app/index'){loadApp();}
  if(route=='app/perfil'){loadApp();}
  if(route=='app/tarjetas'){loadApp();}
  if(route=='app/empresas'){loadApp();}
  if(route=='vcard/index' || route=='vcard/profile'){vcard();}
  if(route=='login/index'){login();}
  if(route=='logout/index'){logout();}
  //ALL APP/DASHBORD
  if(mod=='app' || mod=='dashboard'){menuBar(hash,route,mod);}
}

export { controlRoutes,router,pages,pagesSys };