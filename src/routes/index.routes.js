import { consoleLocal, router, controlLoading } from "../app/functions";
import { pages, pagesSys } from "../app/controllers/pages";
import { login } from "../app/controllers/login";
import { logout } from "../app/controllers/logout";
import { dashboard } from "../app/controllers/dashboard";
import { cssLoadMod } from "./css.routes";
import { dashboardApp } from "../app/controllers/app";
import Home from "../app/controllers/home";


//Functions for Controllers JS
function controlRoutes(v){ 
  const {route,mod,base_url} = v;consoleLocal('log','route='+route);
  if(mod){cssLoadMod(mod,base_url);controlLoading();}
  if(route=='Home/index'){Home();}
  if(route=='login/index'){login();}
  if(route=='logout/index'){logout();}
  if(route=='dashboard/index'){dashboard();}
  if(route=='app/index'){dashboardApp();}
}

export { controlRoutes,router,pages,pagesSys };