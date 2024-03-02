import { consoleLocal, router, controlLoading} from "../app/functions";
import { pages, pagesSys } from "../app/controllers/pages";
import { login } from "../app/sys/login/login";
import { logout } from "../app/sys/logout/logout";
import { dashboard } from "../app/auth/dashboard/dashboard";
import { cssLoadMod, classBody } from "./css.routes";
//import Home from "../app/pages/home/home";

//Functions for Controllers JS
function controlRoutes(v){ 
  const {route,mod,id,base_url} = v;
  document.addEventListener("DOMContentLoaded", () => {classBody(mod)});
  if(mod){cssLoadMod(mod,base_url);controlLoading();}  
  consoleLocal('log','route='+route);
  //if(route=='Home/index'){Home();}
  if(route=='login/index'){login();}
  if(route=='logout/index'){logout();}
  if(route=='dashboard/index' || (mod=='dashboard' || mod=='links')){dashboard();}
}

export { controlRoutes,router,pages,pagesSys };