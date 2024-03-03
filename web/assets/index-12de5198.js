(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();let le=window.location;const{pathname:ce,host:E}=le;E!=="localhost"&&E!=="localhost:5173"&&E!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(ce+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:b}=window.location,de="MandragoraJS SPA",ue="firebase",f="#/",M="src/",j=M+"pages/",ge="vite",y="localhost:5173",k="localhost";console.log(b+"=="+y,b+"=="+k);const x=b==y||b==k?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+x);const me=x+"/v2/api_version",ve=`<div class="container text-center">\r
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
`,pe=`<div class="container text-center">\r
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
`,fe=`<div class="container text-center">\r
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
</section>`,xe=`<div class="container p-4">\r
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
</div>`,we="<!--HOME-->",Se=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none;">\r
    <header class="header">\r
      <nav class="navbar navbar-expand-lg">\r
        <div class="search-panel">\r
          <div class="search-inner d-flex align-items-center justify-content-center">\r
            <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
            <form id="searchForm">\r
              <div class="form-group">\r
                <input type="search" id="q" placeholder="Busque una profesión o negocio">\r
                <button type="submit" class="submit">Buscar</button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
        <div class="container-fluid d-flex align-items-center justify-content-between">\r
          <div class="navbar-header">\r
            <!-- Navbar Header-->\r
            <a href="./" class="navbar-brand">\r
              <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">Vcard</strong><strong>Admin</strong></div>\r
              <div class="brand-text brand-sm"><strong class="text-primary">D</strong><strong>A</strong></div>\r
            </a>\r
            <!-- Sidebar Toggle Btn-->\r
            <button class="sidebar-toggle"><i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i--></button>\r
          </div>\r
          <div class="right-menu list-inline no-margin-bottom">\r
            <div class="list-inline-item"><a href="#" class="search-open nav-link"><i class="icon-magnifying-glass-browser"></i></a></div>\r
            <!-- Mensajes-->\r
\r
            <!-- Tasks-->\r
            <!-- Tasks end-->\r
            \r
            <!-- Megamenu-->\r
            <!-- Megamenu end     -->\r
            \r
            <!-- Languages dropdown    -->\r
            \r
            <!-- Log out               -->\r
            <div class="list-inline-item logout"><a id="logout" href="#" class="nav-link"><span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i></a></div>\r
          </div>\r
        </div>\r
      </nav>\r
    </header>\r
    <div class="d-flex align-items-stretch">\r
      <!-- Sidebar Navigation-->\r
      <nav id="sidebar">\r
        <!-- Sidebar Header-->\r
        <div class="sidebar-header d-flex align-items-center">\r
          <a href="./perfil">\r
            <div id="photo" class="avatar"><img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"></div>\r
          </a>\r
          <div class="title">\r
            <h1 id="nombre_session" class="h5"></h1>\r
            <p id="email_session"></p>\r
          </div>\r
        </div>\r
        <!--div id="email_session"></div-->\r
        <div id="id_code_google"></div>\r
        <!-- Sidebar Navidation Menus-->\r
        <span class="heading">Menu</span>\r
        <ul class="list-unstyled">\r
          <li class="active"><a href="./app/"> <i class="icon-dashboard"></i>Dashboard </a></li>\r
          <li><a href="./perfil"> <i class="fa fa-user"></i>Perfil </a></li>\r
          <li><a href="./tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a></li>\r
          <li><a href="./empresas"> <i class="fa fa-industry"></i>Empresas </a></li>\r
        </ul>\r
      </nav>\r
      <!-- Sidebar Navigation end-->\r
      <div id="app-modulo" class="page-content">\r
        <!--section class="">\r
          <ul class="list-group posts">\r
          </ul>\r
        </section-->\r
        <section class="no-padding-bottom">\r
\r
        </section>\r
      </div>\r
      <footer class="footer">\r
        <div class="footer__block block no-margin-bottom">\r
          <div class="container-fluid text-center">\r
            <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
            <p id="footer_page" class="no-margin-bottom">2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.</p>\r
          </div>\r
        </div>\r
      </footer>\r
    </div>\r
  </div>\r
  <!--//DASHBOARD-->\r
\r
  <!--LOGIN-->\r
  <div class="login-page">\r
    <div class="container d-flex align-items-center">\r
      <div class="form-holder has-shadow">\r
        <div class="row">\r
          <!-- Logo & Information Panel-->\r
          <div class="col-lg-6">\r
            <div class="info d-flex-logo align-items-center">\r
              <div class="content">\r
                <div class="logo">\r
                  <img src="./assets/img/logo_vcard.min.png">\r
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
                <form id="login-form" class="form-validate mb-4">\r
                  <div class="form-group">\r
                    <input id="login-email" type="text" name="loginUsername" required data-msg="Please enter your username" class="input-material">\r
                    <label for="login-email" class="label-material">Email</label>\r
                  </div>\r
                  <div class="form-group">\r
                    <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" class="input-material">\r
                    <label for="login-password" class="label-material">Contraseña</label>\r
                  </div>\r
                  <button type="submit" class="btn btn-primary btn-block">Ingresar</button>\r
                  <button type="button" class="btn btn-info btn-block" id="googleLogin">Ingresar con Google</button>\r
                </form>\r
                <a href="../" class="forgot-pass">Inicio</a> | \r
                <a href="./forget" class="forgot-pass">Olvide mi Password?</a>\r
                <br>\r
                <small>¿No tienes cuenta? </small><a href="./registro" class="signup">Registrate</a>\r
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
  <!--//LOGIN-->\r
\r
  <!--REGISTRO-->\r
  <div class="registro-page" style="display: none;">\r
    <div class="container d-flex align-items-center">\r
      <div class="form-holder has-shadow">\r
        <div class="row">\r
          <!-- Logo & Information Panel-->\r
          <div class="col-lg-6">\r
            <div class="info d-flex-logo align-items-center">\r
              <div class="content">\r
                <div class="logo">\r
                  <img src="./assets/img/logo_vcard.min.png">\r
                  <h1>Registro</h1>\r
                </div>\r
                <p>"Conectando negocios y profesionales"</p>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Form Panel    -->\r
          <div class="col-lg-6 bg-white">\r
            <div class="form d-flex align-items-center">\r
              <div class="content">\r
                <form id="registro-form" class="text-left form-validate">\r
                  <!--div class="form-group-material">\r
                    <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material">\r
                    <label for="register-username" class="label-material">Usuario </label>\r
                  </div-->\r
                  <div class="form-group-material">\r
                    <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" class="input-material">\r
                    <label for="register-email" class="label-material">Email </label>\r
                  </div>\r
                  <div class="form-group-material">\r
                    <input id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" class="input-material">\r
                    <label for="register-password" class="label-material">Contraseña </label>\r
                  </div>\r
                  <div class="form-group terms-conditions text-center">\r
                    <input id="register-agree" name="registerAgree" type="checkbox" required value="1" data-msg="Your agreement is required" class="checkbox-template">\r
                    <label for="register-agree"><a target="_blank" href="privacidad.html">Políticas de Privacidad</a></label>\r
                  </div>\r
                  <div class="form-group text-center">\r
                    <button type="submit" class="btn btn-primary btn-block">Registrar</button>\r
                    <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                    <button type="button" class="btn btn-info btn-block" id="googleRegister">Registrarse con Google</button>\r
                  </div>\r
                </form>\r
                <a href="../" class="forgot-pass">Inicio</a> | \r
                <small>¿Ya tienes una cuenta? </small><a href="./" class="signup">Login</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="copyrights text-center">\r
      <!--p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p-->\r
      <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
    </div>\r
  </div>\r
  <!--//REGISTRO-->`,Le=`<div class="container text-center">\r
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
</nav>`,T=`<div class="sidebar">\r
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
</div>`,Te=["dashboard","perfil"],Ae={forget:ve,login:pe,logout:fe,noauth:he,registro:be,dashboard:T+ye,settings:T+ke,perfil:T+xe},H={Home:we,app:Se,nosotros:h+Le,productos:h+Ie,categorias:h+Ee,contacto:h+je},U={...H,...Ae},_e=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Pe=n=>{var e=U[n];return e=e??_e,Fe(e)},Be=async(n,e,r,a)=>{const s=`${n}/${e}`;let t=localStorage.getItem("Token");t=t&&t!=null?t:"";const o={...a,token:t},c=a!=null?JSON.stringify(o):"",i=await fetch(s,{method:r,headers:{"Content-Type":"application/json"},body:c});if(!i.ok)console.error("Error 404(Fetch): "),i=="Unauthorized"?console.error("Error 401(Fetch): "):i=="Forbidden"?console.error("Error 403(Fetch): "):i=="Not Found"&&console.error("Error 404(Fetch): ");else return await i.json()},qe=async(n,e)=>{const{data:r}=await Be(n,"profile/index.php","POST","");switch(e){case"InfoUser":return r.InfoUser;case"InfoToken":return r.InfoToken;default:return r}},D=async n=>{try{const e=await fetch(n);if(e.status==200){const r=await e.json();if(r)return r}else console.log("Error 404")}catch(e){console.log(e)}},{hash:pn,host:Re,hostDev:Ce,typeBack:fn,apiVer:De}=g();function Oe(){var n=self.location.href,e=n.lastIndexOf("/"),r=n.substring(e+1,n.length);return r}function Ne(n,e){var r=n.replace("/"+e,""),a=r.split("/"),s=window.location.search.substring(1),t=s.split("&");return s==""&&(t=["mod="+a[1],"ext="+a[2],"id="+a[3]]),t}function $e(n){for(var e=0;e<n.length;e++){var r=n[e].split("=");if(r[0]=="mod")var a=r[1];if(r[0]=="ext")var s=r[1];if(r[0]=="id")var t=r[1]}return a=a==""?"Home":a.replace("?",""),s=s==""||s=="undefined"?"index":s,t=t==""||t=="undefined"?"":t,{mod:a,ext:s,id:t}}function Me(n,e,r,a){let s=localStorage.getItem("Token");document.querySelector("#menuweb");let t=document.querySelector(".user-login"),o=document.querySelector(".user-activo"),c=document.querySelector(".user-logout");r[e]&&(t.classList.remove("d-none"),o.classList.add("d-none"),c.classList.add("d-none"),s!=null&&s!=null&&s!="null"&&s!="undefined"&&(t.classList.add("d-none"),o.classList.remove("d-none"),c.classList.remove("d-none")))}const He=(n,e,r,a)=>{localStorage.getItem("Token"),l("log","hash=>"+n);let s=r!="index"?" / "+O(r):"";document.title=a+" - "+O(e)+s,Ue(e,Te);let t=e!="Home"&&r!="index"?r:e,o=document.getElementById("app");if(o&&(o.innerHTML="",n))return o.appendChild(Pe(t))};function Ue(n,e){var r=localStorage.getItem("Token");l("log","token="+r);let a=e.length;for(let s=0;s<a;s++)n===e[s]&&l("log","Accceso: "+n+"="+e[s]),n===e[s]&&(r==null||r=="undefined")&&(window.location.href="#/noauth");n=="login"&&r!=null&&r!="undefined"&&(window.location.href="#/dashboard")}function Fe(n){const e=document.createElement("div");return e.innerHTML=n,e}function Ve(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function l(n,e){if(Re==Ce)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function O(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function N(n,e){if(n.length>0)for(let s=0;s<n.length;s++)if(document.getElementById(e+s))l("log","Ok: dash-"+s);else if(document.createStyleSheet)document.createStyleSheet(n[s]);else{var r="@import url('"+n[s]+"');",a=document.createElement("link");a.id=e+s,a.rel="stylesheet",a.href="data:text/css,"+escape(r),document.getElementsByTagName("head")[0].appendChild(a)}}function Je(n,e){if(n.length>0)for(let a=0;a<n.length;a++)if(document.getElementById(e+a))l("log","Ok: "+e+a);else{var r=document.createElement("script");r.id=e+a,r.src=n[a],document.body.appendChild(r)}}function ze(n,e){for(let r=0;r<=n;r++){let a=document.getElementById(e+r);a&&(l("log",a),document.body.removeChild(a))}}function $(n,e){for(let r=0;r<n;r++){let a=document.getElementById(e+r);a&&document.getElementsByTagName("head")[0].removeChild(a)}}function We(){let n=document.getElementsByTagName("body")[0],r=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var a=document.createElement("div");a.id="load",a.innerHTML=r,n.appendChild(a),setTimeout(()=>{let s=document.getElementById(a.id);s&&n.removeChild(s)},5e3)}function Ge(){const{mod:n,ext:e}=g();let r=n!="Home"&&e!="index"?e:n;var a=U[r];n!="logout"&&n!="noauth"&&e=="index"&&a!=null&&We()}async function Ye(n,e){if(n=="Home"){const{version:r}=await D(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${r}`);const a=await D(De);if(a&&a!=null){const{ultimate:s}=a.data[0];r!=s&&console.log(`Actualizar version ${n} (${r} => ${s})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const Ke=g(),{host:Qe,dominio:Ze,path_url:Xe,hostDev:en}=Ke;console.log("/* javascript login | VARIABLES CONSTANTES*/");let A=x+"/login/";Qe==en&&console.log("api_login="+A);function nn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",rn),console.log("btnLogin Activado"))}function rn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,r=document.getElementById("password").value;var a={username:e,password:r};const s=A+"index.php";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(t=>t.json()).then(t=>{const{data:o}=t;l("log",t),l("log","getToken:"+o.token),localStorage.setItem("Token",o.token);let c=localStorage.getItem("Token");if(l("log","Res-Token:"+c),c!=null&&c!="undefined")location.href=Ze+Xe+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(t=>{console.log(t);let o=document.getElementById("msj-error");o.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const sn=()=>{const n=A+"";fetch(n).then(e=>e.json()).then(e=>{l("log",e)}).catch(e=>console.log(e)),setTimeout(function(){nn()},1e3)};function an(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const tn=g(),{host:F,dominio:hn,path_url:bn,base_url:yn,screenw:on,mod:kn,hostDev:V}=tn;async function ln(){let n=document.querySelector(".bx-log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let e=document.querySelectorAll(".arrow");for(var r=0;r<e.length;r++)e[r].addEventListener("click",d=>{d.target.parentElement.parentElement.classList.toggle("showMenu")});let a=document.querySelector(".sidebar"),s=document.querySelector(".bx-menu");if(s!=null){let d=localStorage.getItem("bar");d=="true"&&a.classList.toggle("close"),s.addEventListener("click",()=>{let i=a.classList.toggle("close");localStorage.setItem("bar",i),d=localStorage.getItem("bar")}),console.log("Bar-Load:",d)}on<=740&&document.querySelector(".sidebar").classList.add("close");const t=document.querySelector(".profile_name"),o=document.querySelector(".job");let c=F==V?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+c),t!=null&&o!=null){const{email:d,username:i,nombre:m,foto:w,puesto:v,status:_}=await qe(x,"InfoUser");t!=null&&(t.innerHTML=i),o!=null&&(o.innerHTML=v)}}function cn(){setTimeout(function(){F==V&&console.log("btnSidebar Activado"),ln()},500)}function dn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function un(n,e){const r=["https://fonts.googleapis.com/css?family=Muli:300,400,700",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css",e+"assets/dashboard/xeria/assets/css/bootstrap.css",e+"assets/dashboard/xeria/assets/css/app.css"];n!="app"?$(r.length,"appCS-"):N(r,"appCS-");const a=[],s=[e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?($(a.length,"homeCS-"),ze(s.length,"homeJS-")):(N(a,"homeCS-"),Je(s,"homeJS-"))}function gn(n){const{route:e,mod:r,id:a,base_url:s}=n;Ge(),r&&(dn(r),un(r,s)),l("log","route="+e),e=="login/index"&&sn(),e=="logout/index"&&an(),(e=="dashboard/index"||r=="dashboard"||r=="links")&&cn()}function g(){var n=window,e=document,r=n.location,a=new Date,s=a.getDate();s=s<10?"0"+s:s;var t=a.getMonth()+1;t=t<10?"0"+t:t;var o=a.getFullYear(),c=o+"-"+t+"-"+s;const{protocol:d,host:i,origin:m,pathname:w,hash:v,href:_,search:z}=r,S=m+"/",W=m,G=_,Y=z,L=w.replace("/",""),I=S+L,P=i=="localhost"||i!=y&&i!=k?L+f:f,K=i=="localhost:9001"?"../":"./",Q=S+P,Z=screen.width,X=screen.height;var B="default",ee="temas/"+B+"/",ne=Oe(),q=Ne(v,f);let{mod:p,ext:u,id:re}=$e(q);var R="/"+u,C=p+R,se=p||"",ae=u&&u!="index"?"/"+u:"",te="#/"+se+ae,oe=I+j+C+".html",ie=I+j+"404/index.html";return{w:n,d:e,loc:r,dt:a,day:s,mon:t,year:o,fecha:c,title:de,typeBack:ue,typeDev:ge,path_hash:f,path_src:M,path_page:j,hostDev:y,hostPre:k,protocol:d,host:i,dominio:S,dominio1:W,pathname:w,hash:v,URL:G,quest:Y,path_url:L,path_root:P,path_build:K,base_url:I,page_url:Q,screenw:Z,screenh:X,tema:B,path_tema:ee,pag_name:ne,vars_Url:q,mod:p,ext:u,id:re,ext2:R,route:C,hash2:te,url_mod:oe,url404:ie,apiVer:me}}function J(){const n=g();l("log",n);const{hash:e,mod:r,ext:a,page_url:s,base_url:t,title:o}=n;He(e,r,a,o),gn(n),Me(e,r,H),Ve(r,s),Ye(r,t)}function mn(){console.log("Run function inicio"),J()}window.addEventListener("hashchange",()=>{l("warn","Event Listener"),J()});mn();
