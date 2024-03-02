(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let le=window.location;const{pathname:ce,host:E}=le;E!=="localhost"&&E!=="localhost:5173"&&E!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(ce+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:b}=window.location,de="MandragoraJS SPA",ue="firebase",p="#/",H="src/",j=H+"pages/",ge="vite",y="localhost:5173",k="localhost";console.log(b+"=="+y,b+"=="+k);const w=b==y||b==k?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+w);const me=w+"/v2/api_version",ve=`<div class="container text-center">\r
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
`,pe=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,he=`<div class="alert alert-warning" role="alert">\r
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
</div>`,xe="<!--HOME-->",Le=`<!--LOGIN-->\r
<div class="login-page">\r
    <div class="container d-flex align-items-center">\r
        <div class="form-holder has-shadow">\r
            <div class="row">\r
                <!-- Logo & Information Panel-->\r
                <div class="col-lg-6">\r
                    <div class="info d-flex-logo align-items-center">\r
                        <div class="content">\r
                            <div class="logo">\r
                                <img src="./assets/img/logo_vcard.min.png" alt="">\r
                                <h1>Login</h1>\r
                            </div>\r
                            <p>"Conectando negocios y profesionales"</p>\r
                        </div>\r
                    </div>\r
                </div>\r
                <!-- Form Panel    -->\r
                <div class="col-lg-6">\r
                    <div class="form d-flex align-items-center">\r
                        <div class="content">\r
                            <form id="form-login" action="#/login" class="form-validate mb-4">\r
                                <div id="msj-error" class="mb-3"></div>\r
                                <div class="form-group">\r
                                    <input id="username" type="text" required data-msg="Ingresa tu Usuario" placeholder="*Usuario" autocomplete="off" class="input-material">\r
                                </div>\r
                                <div class="form-group">\r
                                    <input id="password" type="password" required data-msg="Ingresa tu Contraseña" placeholder="*Contraseña" autocomplete="off" class="input-material">\r
                                </div>\r
                                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>\r
                                <button type="button" class="btn btn-info btn-block" id="googleLogin">Ingresar con Google</button>\r
                            </form>\r
                            <a href="#/" class="forgot-pass">Inicio</a> | \r
                            <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
                            <br>\r
                            <small>No tienes cuenta?</small>\r
                            <a href="#/registro" class="signup">Registrate</a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="copyrights text-center">\r
        <!--p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" class="external">Bootstrapious</a></p-->\r
        <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
    </div>\r
</div>\r
<!--//LOGIN-->`,Se=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Ie=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Ee="<h1>Categorias</h1>",je=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,h=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,A=`<div class="sidebar">\r
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
</div>`,Ae=["dashboard","perfil"],Te={forget:ve,login:fe,logout:pe,noauth:he,registro:be,dashboard:A+ye,settings:A+ke,perfil:A+we},M={Home:xe,app:Le,nosotros:h+Se,productos:h+Ie,categorias:h+Ee,contacto:h+je},U={...M,...Te},Ce=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Be=n=>{var e=U[n];return e=e??Ce,Fe(e)},_e=async(n,e,r,o)=>{const t=`${n}/${e}`;let s=localStorage.getItem("Token");s=s&&s!=null?s:"";const a={...o,token:s},c=o!=null?JSON.stringify(a):"",i=await fetch(t,{method:r,headers:{"Content-Type":"application/json"},body:c});if(!i.ok)console.error("Error 404(Fetch): "),i=="Unauthorized"?console.error("Error 401(Fetch): "):i=="Forbidden"?console.error("Error 403(Fetch): "):i=="Not Found"&&console.error("Error 404(Fetch): ");else return await i.json()},qe=async(n,e)=>{const{data:r}=await _e(n,"profile/index.php","POST","");switch(e){case"InfoUser":return r.InfoUser;case"InfoToken":return r.InfoToken;default:return r}},$=async n=>{try{const e=await fetch(n);if(e.status==200){const r=await e.json();if(r)return r}else console.log("Error 404")}catch(e){console.log(e)}},{hash:fn,host:Ne,hostDev:Oe,typeBack:pn,apiVer:$e}=g();function De(){var n=self.location.href,e=n.lastIndexOf("/"),r=n.substring(e+1,n.length);return r}function Pe(n,e){var r=n.replace("/"+e,""),o=r.split("/"),t=window.location.search.substring(1),s=t.split("&");return t==""&&(s=["mod="+o[1],"ext="+o[2],"id="+o[3]]),s}function Re(n){for(var e=0;e<n.length;e++){var r=n[e].split("=");if(r[0]=="mod")var o=r[1];if(r[0]=="ext")var t=r[1];if(r[0]=="id")var s=r[1]}return o=o==""?"Home":o.replace("?",""),t=t==""||t=="undefined"?"index":t,s=s==""||s=="undefined"?"":s,{mod:o,ext:t,id:s}}function He(n,e,r,o){let t=localStorage.getItem("Token");document.querySelector("#menuweb");let s=document.querySelector(".user-login"),a=document.querySelector(".user-activo"),c=document.querySelector(".user-logout");r[e]&&(s.classList.remove("d-none"),a.classList.add("d-none"),c.classList.add("d-none"),t!=null&&t!=null&&t!="null"&&t!="undefined"&&(s.classList.add("d-none"),a.classList.remove("d-none"),c.classList.remove("d-none")))}const Me=(n,e,r,o)=>{localStorage.getItem("Token"),l("log","hash=>"+n);let t=r!="index"?" / "+D(r):"";document.title=o+" - "+D(e)+t,Ue(e,Ae);let s=e!="Home"&&r!="index"?r:e,a=document.getElementById("app");if(a&&(a.innerHTML="",n))return a.appendChild(Be(s))};function Ue(n,e){var r=localStorage.getItem("Token");l("log","token="+r);let o=e.length;for(let t=0;t<o;t++)n===e[t]&&l("log","Accceso: "+n+"="+e[t]),n===e[t]&&(r==null||r=="undefined")&&(window.location.href="#/noauth");n=="login"&&r!=null&&r!="undefined"&&(window.location.href="#/dashboard")}function Fe(n){const e=document.createElement("div");return e.innerHTML=n,e}function Ve(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function l(n,e){if(Ne==Oe)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function D(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function P(n,e){if(n.length>0)for(let t=0;t<n.length;t++)if(document.getElementById(e+t))l("log","Ok: dash-"+t);else if(document.createStyleSheet)document.createStyleSheet(n[t]);else{var r="@import url('"+n[t]+"');",o=document.createElement("link");o.id=e+t,o.rel="stylesheet",o.href="data:text/css,"+escape(r),document.getElementsByTagName("head")[0].appendChild(o)}}function ze(n,e){if(n.length>0)for(let o=0;o<n.length;o++)if(document.getElementById(e+o))l("log","Ok: "+e+o);else{var r=document.createElement("script");r.id=e+o,r.src=n[o],document.body.appendChild(r)}}function Je(n,e){for(let r=0;r<=n;r++){let o=document.getElementById(e+r);o&&(l("log",o),document.body.removeChild(o))}}function R(n,e){for(let r=0;r<n;r++){let o=document.getElementById(e+r);o&&document.getElementsByTagName("head")[0].removeChild(o)}}function We(){let n=document.getElementsByTagName("body")[0],r=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var o=document.createElement("div");o.id="load",o.innerHTML=r,n.appendChild(o),setTimeout(()=>{let t=document.getElementById(o.id);t&&n.removeChild(t)},5e3)}function Ke(){const{mod:n,ext:e}=g();let r=n!="Home"&&e!="index"?e:n;var o=U[r];n!="logout"&&n!="noauth"&&e=="index"&&o!=null&&We()}async function Ge(n,e){if(n=="Home"){const{version:r}=await $(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${r}`);const o=await $($e);if(o&&o!=null){const{ultimate:t}=o.data[0];r!=t&&console.log(`Actualizar version ${n} (${r} => ${t})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const Qe=g(),{host:Ye,dominio:Ze,path_url:Xe,hostDev:en}=Qe;console.log("/* javascript login | VARIABLES CONSTANTES*/");let T=w+"/login/";Ye==en&&console.log("api_login="+T);function nn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",rn),console.log("btnLogin Activado"))}function rn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,r=document.getElementById("password").value;var o={username:e,password:r};const t=T+"index.php";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(s=>s.json()).then(s=>{const{data:a}=s;l("log",s),l("log","getToken:"+a.token),localStorage.setItem("Token",a.token);let c=localStorage.getItem("Token");if(l("log","Res-Token:"+c),c!=null&&c!="undefined")location.href=Ze+Xe+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(s=>{console.log(s);let a=document.getElementById("msj-error");a.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const tn=()=>{const n=T+"";fetch(n).then(e=>e.json()).then(e=>{l("log",e)}).catch(e=>console.log(e)),setTimeout(function(){nn()},1e3)};function on(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const sn=g(),{host:F,dominio:hn,path_url:bn,base_url:yn,screenw:an,mod:kn,hostDev:V}=sn;async function ln(){let n=document.querySelector(".bx-log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let e=document.querySelectorAll(".arrow");for(var r=0;r<e.length;r++)e[r].addEventListener("click",d=>{d.target.parentElement.parentElement.classList.toggle("showMenu")});let o=document.querySelector(".sidebar"),t=document.querySelector(".bx-menu");if(t!=null){let d=localStorage.getItem("bar");d=="true"&&o.classList.toggle("close"),t.addEventListener("click",()=>{let i=o.classList.toggle("close");localStorage.setItem("bar",i),d=localStorage.getItem("bar")}),console.log("Bar-Load:",d)}an<=740&&document.querySelector(".sidebar").classList.add("close");const s=document.querySelector(".profile_name"),a=document.querySelector(".job");let c=F==V?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+c),s!=null&&a!=null){const{email:d,username:i,nombre:m,foto:x,puesto:v,status:C}=await qe(w,"InfoUser");s!=null&&(s.innerHTML=i),a!=null&&(a.innerHTML=v)}}function cn(){setTimeout(function(){F==V&&console.log("btnSidebar Activado"),ln()},500)}function dn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function un(n,e){const r=["https://fonts.googleapis.com/css?family=Muli:300,400,700",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css",e+"assets/dashboard/xeria/assets/css/bootstrap.css",e+"assets/dashboard/xeria/assets/css/app.css"];n!="app"?R(r.length,"appCS-"):P(r,"appCS-");const o=[],t=[e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(R(o.length,"homeCS-"),Je(t.length,"homeJS-")):(P(o,"homeCS-"),ze(t,"homeJS-"))}function gn(n){const{route:e,mod:r,id:o,base_url:t}=n;Ke(),r&&(dn(r),un(r,t)),l("log","route="+e),e=="login/index"&&tn(),e=="logout/index"&&on(),(e=="dashboard/index"||r=="dashboard"||r=="links")&&cn()}function g(){var n=window,e=document,r=n.location,o=new Date,t=o.getDate();t=t<10?"0"+t:t;var s=o.getMonth()+1;s=s<10?"0"+s:s;var a=o.getFullYear(),c=a+"-"+s+"-"+t;const{protocol:d,host:i,origin:m,pathname:x,hash:v,href:C,search:J}=r,L=m+"/",W=m,K=C,G=J,S=x.replace("/",""),I=L+S,B=i=="localhost"||i!=y&&i!=k?S+p:p,Q=i=="localhost:9001"?"../":"./",Y=L+B,Z=screen.width,X=screen.height;var _="default",ee="temas/"+_+"/",ne=De(),q=Pe(v,p);let{mod:f,ext:u,id:re}=Re(q);var N="/"+u,O=f+N,te=f||"",oe=u&&u!="index"?"/"+u:"",se="#/"+te+oe,ae=I+j+O+".html",ie=I+j+"404/index.html";return{w:n,d:e,loc:r,dt:o,day:t,mon:s,year:a,fecha:c,title:de,typeBack:ue,typeDev:ge,path_hash:p,path_src:H,path_page:j,hostDev:y,hostPre:k,protocol:d,host:i,dominio:L,dominio1:W,pathname:x,hash:v,URL:K,quest:G,path_url:S,path_root:B,path_build:Q,base_url:I,page_url:Y,screenw:Z,screenh:X,tema:_,path_tema:ee,pag_name:ne,vars_Url:q,mod:f,ext:u,id:re,ext2:N,route:O,hash2:se,url_mod:ae,url404:ie,apiVer:me}}function z(){const n=g();l("log",n);const{hash:e,mod:r,ext:o,page_url:t,base_url:s,title:a}=n;Me(e,r,o,a),gn(n),He(e,r,M),Ve(r,t),Ge(r,s)}function mn(){console.log("Run function inicio"),z()}window.addEventListener("hashchange",()=>{l("warn","Event Listener"),z()});mn();
