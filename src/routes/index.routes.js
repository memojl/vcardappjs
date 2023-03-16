import { consoleLocal, router, loading } from "../app/functions";
import { pages, pagesSys } from "../app/controllers/pages";
import { login } from "../app/controllers/login";
import { logout } from "../app/controllers/logout";
import { dashboard } from "../app/controllers/dashboard";
import { cssLoadMod } from "./css.routes";
//import { links } from "../app/controllers/links";
//import { linksAdd } from "../app/controllers/link-add";
//import { linksEdit } from "../app/controllers/link-edit";

//Functions for Controllers JS
function controlRoutes(route,v){ consoleLocal('log','route='+route);
  const {mod,base_url} = v;
  if(mod){cssLoadMod(mod,base_url);  loading();}
  if(route=='login/index'){login();}
  if(route=='logout/index'){logout();}
  if(route=='dashboard/index' || (mod=='dashboard')){dashboard();}//else{delStyleDashboard();}
  //if(route=='links/index'){links();}
  //if(route=='links/linksAdd'){linksAdd();}
  //if(route=='links/linksEdit'){linksEdit(id);}
}

export { controlRoutes,router,pages,pagesSys };