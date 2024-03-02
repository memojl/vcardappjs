(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();let le=window.location;const{pathname:ce,host:A}=le;A!=="localhost"&&A!=="localhost:5173"&&A!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(ce+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:k}=window.location,de="MandragoraJS SPA",ue="firebase",h="#/",_="src/",T=_+"pages/",ge="vite",w="localhost:5173",x="localhost";console.log(k+"=="+w,k+"=="+x);const L=k==w||k==x?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+L);const ve=L+"/v2/api_version",me=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Recuperar contraseña</h5>\r
                <div class="card-body">\r
                    <form id="form-registro" action="#/registro" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="email" class="form-control" id="email" placeholder="Email" autocomplete="off" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/login">Login</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,fe=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Login</h5>\r
                <div class="card-body">\r
                    <form id="form-login" action="#/login" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="text" class="form-control" id="username" placeholder="*Usuario" autocomplete="off" required>\r
                        </div>\r
                        <div class="mb-3">\r
                            <input type="password" class="form-control" id="password" placeholder="*Password" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/registro">Registrarse</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,he=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,pe=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,be=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Registro</h5>\r
                <div class="card-body">\r
                    <form id="form-registro" action="#/registro" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="text" class="form-control" id="username" placeholder="*Agregue un nombre de usuario" autocomplete="off" required>\r
                        </div>\r
                        <div class="mb-3">\r
                            <input type="password" class="form-control" id="password" placeholder="*Agregue Password" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/login">Login</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,ye=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">DASHBOARD</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
      <div class="card" style="width: 18rem;">\r
        <img src="./assets/img/webpage.jpg" class="card-img-top" alt="">\r
        <div class="card-body">\r
          <h5 class="card-title">Card title</h5>\r
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r
          <a href="#" class="btn btn-primary">Go somewhere</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>`,ke=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,we=`<div class="container p-4">\r
  <div class="row">\r
      <div class="col-md-3">\r
          <div class="card text-center">\r
              <div class="card-body">\r
                  <a href="#/links/add">\r
                      <h3 class="card-title text-uppercase">\r
                          Agregar\r
                      </h3>\r
                  </a>\r
                  <p class="m-2" style="font-size: 42px;"><i class="fas fa-plus"></i></p>\r
                  <a class="btn btn-info" href="#/links/add">Agregar</a>\r
              </div>\r
          </div>\r
      </div>\r
      {{#each links}}\r
      <div class="col-md-3">\r
          <div class="card text-center">\r
              <div class="card-body">\r
                  <a href="{{url}}" target="_blank">\r
                      <h3 class="card-title text-uppercase">\r
                          {{title}}\r
                      </h3>\r
                  </a>\r
                  <p class="m-2">{{description}}</p>\r
                  <p class="text-muted">\r
                      {{timeago created_at}}\r
                  </p>\r
                  <a class="btn btn-danger" href="#/links/delete/{{id}}">Borrar</a>\r
                  <a class="btn btn-secondary" href="#/links/edit/{{id}}">Editar</a>\r
              </div>\r
          </div>\r
      </div>\r
      {{else}}\r
      <div class="col-md-4 mx-auto">\r
          <div class="card card-body text-center">\r
              <p>There are not Links saved yet.</p>\r
              <a href="#/links/add">Create One!</a>\r
          </div>\r
      </div>\r
      {{/each}}\r
  </div>\r
</div>`,xe="<!--HOME-->",Le="<div>Mi APP</div>",Se=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Ee=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Ie="<h1>Categorias</h1>",je=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,p=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
    <div class="container">\r
        <a class="navbar-brand" href="./">Favorite Links</a>\r
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"\r
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r
            <span class="navbar-toggler-icon"></span>\r
        </button>\r
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">\r
            <ul class="navbar-nav">\r
                <li class="nav-item">\r
                    <a class="nav-link" href="#/registro">Registro</a>\r
                </li>\r
                <li class="nav-item user-login">\r
                    <a class="btn btn-primary" href="#/login">Login</a>\r
                </li>\r
                <li class="nav-item user-activo">\r
                    <a class="nav-link" href="#/dashboard">Dashboard</a>\r
                </li>\r
                <li class="nav-item user-logout">\r
                    <a class="nav-link" href="#/logout">Salir</a>\r
                </li>\r
            </ul>\r
        </div>\r
    </div>\r
</nav>`,C=`<div class="sidebar">\r
    <div class="logo-details">\r
        <i class='bx bxl-c-plus-plus'></i>\r
        <span class="logo_name">AdminLab</span>\r
    </div>\r
    <ul class="nav-links">\r
        <li>\r
            <a href="#/dashboard">\r
                <i class='bx bx-grid-alt'></i>\r
                <span class="link_name">Dashboard</span>\r
            </a>\r
            <ul class="sub-menu blank">\r
                <li><a class="link_name" href="#/dashboard">Dashboard</a></li>\r
            </ul>\r
        </li>\r
        <li>\r
            <div class="iocn-link">\r
                <a href="#/links">\r
                    <i class='bx bx-book-alt'></i>\r
                    <span class="link_name">Links</span>\r
                </a>\r
                <i class='bx bxs-chevron-down arrow'></i>\r
            </div>\r
            <ul class="sub-menu">\r
                <li><a class="link_name" href="#/links">Links</a></li>\r
                <li><a href="#/links">Lista</a></li>\r
                <li><a href="#/links/linksAdd">Nuevo</a></li>\r
            </ul>\r
        </li>\r
        <li>\r
            <a href="#/dashboard/settings">\r
                <i class='bx bx-cog'></i>\r
                <span class="link_name">Setting</span>\r
            </a>\r
            <ul class="sub-menu blank">\r
                <li><a class="link_name" href="#/dashboard/settings">Setting</a></li>\r
            </ul>\r
        </li>\r
        <li>\r
            <div class="profile-details">\r
                <div class="profile-content">\r
                    <a href="#/dashboard/perfil">\r
                        <img src="./assets/img/sinfoto.png" alt="profileImg">\r
                    </a>\r
                </div>\r
                <div class="name-job">\r
                    <div class="profile_name">name</div>\r
                    <div class="job">job</div>\r
                </div>\r
                <i class='bx bx-log-out'></i>\r
            </div>\r
        </li>\r
    </ul>\r
</div>`,Ae=["dashboard","perfil"],Te={forget:me,login:fe,logout:he,noauth:pe,registro:be,dashboard:C+ye,settings:C+ke,perfil:C+we},H={Home:xe,app:Le,nosotros:p+Se,productos:p+Ee,categorias:p+Ie,contacto:p+je},F={...H,...Te},Ce=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Be=n=>{var e=F[n];return e=e??Ce,Ue(e)},$e=async(n,e,t,r)=>{const o=`${n}/${e}`;let s=localStorage.getItem("Token");s=s&&s!=null?s:"";const a={...r,token:s},l=r!=null?JSON.stringify(a):"",i=await fetch(o,{method:t,headers:{"Content-Type":"application/json"},body:l});if(!i.ok)console.error("Error 404(Fetch): "),i=="Unauthorized"?console.error("Error 401(Fetch): "):i=="Forbidden"?console.error("Error 403(Fetch): "):i=="Not Found"&&console.error("Error 404(Fetch): ");else return await i.json()},qe=async(n,e)=>{const{data:t}=await $e(n,"profile/index.php","POST","");switch(e){case"InfoUser":return t.InfoUser;case"InfoToken":return t.InfoToken;default:return t}},P=async n=>{try{const e=await fetch(n);if(e.status==200){const t=await e.json();if(t)return t}else console.log("Error 404")}catch(e){console.log(e)}},{hash:fn,host:De,hostDev:Oe,typeBack:hn,apiVer:Ne}=g();function Me(){var n=self.location.href,e=n.lastIndexOf("/"),t=n.substring(e+1,n.length);return t}function Pe(n,e){var t=n.replace("/"+e,""),r=t.split("/"),o=window.location.search.substring(1),s=o.split("&");return o==""&&(s=["mod="+r[1],"ext="+r[2],"id="+r[3]]),s}function Re(n){for(var e=0;e<n.length;e++){var t=n[e].split("=");if(t[0]=="mod")var r=t[1];if(t[0]=="ext")var o=t[1];if(t[0]=="id")var s=t[1]}return r=r==""?"Home":r.replace("?",""),o=o==""||o=="undefined"?"index":o,s=s==""||s=="undefined"?"":s,{mod:r,ext:o,id:s}}function _e(n,e,t,r){let o=localStorage.getItem("Token");document.querySelector("#menuweb");let s=document.querySelector(".user-login"),a=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");t[e]&&(s.classList.remove("d-none"),a.classList.add("d-none"),l.classList.add("d-none"),o!=null&&o!=null&&o!="null"&&o!="undefined"&&(s.classList.add("d-none"),a.classList.remove("d-none"),l.classList.remove("d-none")))}const He=(n,e,t,r)=>{localStorage.getItem("Token"),d("log","hash=>"+n);let o=t!="index"?" / "+R(t):"";document.title=r+" - "+R(e)+o,Fe(e,Ae);let s=e!="Home"&&t!="index"?t:e,a=document.getElementById("app");if(a&&(a.innerHTML="",n))return a.appendChild(Be(s))};function Fe(n,e){var t=localStorage.getItem("Token");d("log","token="+t);let r=e.length;for(let o=0;o<r;o++)n===e[o]&&d("log","Accceso: "+n+"="+e[o]),n===e[o]&&(t==null||t=="undefined")&&(window.location.href="#/noauth");n=="login"&&t!=null&&t!="undefined"&&(window.location.href="#/dashboard")}function Ue(n){const e=document.createElement("div");return e.innerHTML=n,e}function Ve(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function d(n,e){if(De==Oe)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function R(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function b(n,e){if(n.length>0)for(let o=0;o<n.length;o++)if(document.getElementById(e+o))d("log","Ok: dash-"+o);else if(document.createStyleSheet)document.createStyleSheet(n[o]);else{var t="@import url('"+n[o]+"');",r=document.createElement("link");r.id=e+o,r.rel="stylesheet",r.href="data:text/css,"+escape(t),document.getElementsByTagName("head")[0].appendChild(r)}}function ze(n,e){if(n.length>0)for(let r=0;r<n.length;r++)if(document.getElementById(e+r))d("log","Ok: "+e+r);else{var t=document.createElement("script");t.id=e+r,t.src=n[r],document.body.appendChild(t)}}function Je(n,e){for(let t=0;t<=n;t++){let r=document.getElementById(e+t);r&&(d("log",r),document.body.removeChild(r))}}function y(n,e){for(let t=0;t<n;t++){let r=document.getElementById(e+t);r&&document.getElementsByTagName("head")[0].removeChild(r)}}function We(){let n=document.getElementsByTagName("body")[0],t=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var r=document.createElement("div");r.id="load",r.innerHTML=t,n.appendChild(r),setTimeout(()=>{let o=document.getElementById(r.id);o&&n.removeChild(o)},5e3)}function Ke(){const{mod:n,ext:e}=g();let t=n!="Home"&&e!="index"?e:n;var r=F[t];n!="logout"&&n!="noauth"&&e=="index"&&r!=null&&We()}async function Qe(n,e){if(n=="Home"){const{version:t}=await P(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${t}`);const r=await P(Ne);if(r&&r!=null){const{ultimate:o}=r.data[0];t!=o&&console.log(`Actualizar version ${n} (${t} => ${o})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const Ye=g(),{host:Ze,dominio:Xe,path_url:Ge,hostDev:en}=Ye;console.log("/* javascript login | VARIABLES CONSTANTES*/");let B=L+"/login/";Ze==en&&console.log("api_login="+B);function nn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",tn),console.log("btnLogin Activado"))}function tn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,t=document.getElementById("password").value;var r={username:e,password:t};const o=B+"index.php";fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(s=>s.json()).then(s=>{const{data:a}=s;d("log",s),d("log","getToken:"+a.token),localStorage.setItem("Token",a.token);let l=localStorage.getItem("Token");if(d("log","Res-Token:"+l),l!=null&&l!="undefined")location.href=Xe+Ge+"#/dashboard";else{let c=document.getElementById("msj-error");c.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(s=>{console.log(s);let a=document.getElementById("msj-error");a.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const on=()=>{const n=B+"";fetch(n).then(e=>e.json()).then(e=>{d("log",e)}).catch(e=>console.log(e)),setTimeout(function(){nn()},1e3)};function rn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const sn=g(),{host:U,dominio:pn,path_url:bn,base_url:yn,screenw:an,mod:kn,hostDev:V}=sn;async function ln(){let n=document.querySelector(".bx-log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let e=document.querySelectorAll(".arrow");for(var t=0;t<e.length;t++)e[t].addEventListener("click",c=>{c.target.parentElement.parentElement.classList.toggle("showMenu")});let r=document.querySelector(".sidebar"),o=document.querySelector(".bx-menu");if(o!=null){let c=localStorage.getItem("bar");c=="true"&&r.classList.toggle("close"),o.addEventListener("click",()=>{let i=r.classList.toggle("close");localStorage.setItem("bar",i),c=localStorage.getItem("bar")}),console.log("Bar-Load:",c)}an<=740&&document.querySelector(".sidebar").classList.add("close");const s=document.querySelector(".profile_name"),a=document.querySelector(".job");let l=U==V?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+l),s!=null&&a!=null){const{email:c,username:i,nombre:v,foto:S,puesto:m,status:$}=await qe(L,"InfoUser");s!=null&&(s.innerHTML=i),a!=null&&(a.innerHTML=m)}}function cn(){setTimeout(function(){U==V&&console.log("btnSidebar Activado"),ln()},500)}function dn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function un(n,e){const t=["https://fonts.googleapis.com/css?family=Muli:300,400,700",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css",e+"assets/dashboard/xeria/assets/css/bootstrap.css",e+"assets/dashboard/xeria/assets/css/app.css"];n=="app"?b(t,"appCS-"):y(t.length,"appCS-");const r="dash-",o=[e+"assets/dashboard/xeria/assets/css/bootstrap.css",e+"assets/dashboard/xeria/assets/css/app.css"];n=="dashboard"?b(o,r):y(o.length,r);const s="login-",a=["https://fonts.googleapis.com/css?family=Muli:300,400,700",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css"];n!="login"&&n!="registro"?y(a.length,s):b(a,s);const l=[],c=[e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(y(l.length,"homeCS-"),Je(c.length,"homeJS-")):(b(l,"homeCS-"),ze(c,"homeJS-"))}function gn(n){const{route:e,mod:t,id:r,base_url:o}=n;t&&(un(t,o),Ke()),document.addEventListener("DOMContentLoaded",()=>{dn(t)}),d("log","route="+e),e=="login/index"&&on(),e=="logout/index"&&rn(),(e=="dashboard/index"||t=="dashboard"||t=="links")&&cn()}function g(){var n=window,e=document,t=n.location,r=new Date,o=r.getDate();o=o<10?"0"+o:o;var s=r.getMonth()+1;s=s<10?"0"+s:s;var a=r.getFullYear(),l=a+"-"+s+"-"+o;const{protocol:c,host:i,origin:v,pathname:S,hash:m,href:$,search:J}=t,E=v+"/",W=v,K=$,Q=J,I=S.replace("/",""),j=E+I,q=i=="localhost"||i!=w&&i!=x?I+h:h,Y=i=="localhost:9001"?"../":"./",Z=E+q,X=screen.width,G=screen.height;var D="default",ee="temas/"+D+"/",ne=Me(),O=Pe(m,h);let{mod:f,ext:u,id:te}=Re(O);var N="/"+u,M=f+N,oe=f||"",re=u&&u!="index"?"/"+u:"",se="#/"+oe+re,ae=j+T+M+".html",ie=j+T+"404/index.html";return{w:n,d:e,loc:t,dt:r,day:o,mon:s,year:a,fecha:l,title:de,typeBack:ue,typeDev:ge,path_hash:h,path_src:_,path_page:T,hostDev:w,hostPre:x,protocol:c,host:i,dominio:E,dominio1:W,pathname:S,hash:m,URL:K,quest:Q,path_url:I,path_root:q,path_build:Y,base_url:j,page_url:Z,screenw:X,screenh:G,tema:D,path_tema:ee,pag_name:ne,vars_Url:O,mod:f,ext:u,id:te,ext2:N,route:M,hash2:se,url_mod:ae,url404:ie,apiVer:ve}}function z(){const n=g();d("log",n);const{hash:e,mod:t,ext:r,page_url:o,base_url:s,title:a}=n;He(e,t,r,a),gn(n),_e(e,t,H),Ve(t,o),Qe(t,s)}function vn(){console.log("Run function inicio"),z()}window.addEventListener("hashchange",()=>{d("warn","Event Listener"),z()});vn();
