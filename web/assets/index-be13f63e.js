import{getAuth as ge,GoogleAuthProvider as pe,signInWithPopup as ue,signOut as ve,onAuthStateChanged as fe}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as he}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as be}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as ye,set as we,ref as ke}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let je=window.location;const{pathname:xe,host:j}=je;j!=="localhost"&&j!=="localhost:5173"&&j!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(xe+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:v}=window.location,Se="Vcard",Le="firebase",p="#/",W="src/",x=W+"pages/",Ie="vite",f="localhost:5173",h="localhost",L=v==f||v==h?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",qe=L+"/v2/api_version";console.log(v+"=="+f,v+"=="+h);console.warn("Api="+L);const Ae=`<div class="container text-center">\r
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
`,Ee=`<div class="container text-center">\r
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
`,Ce=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Re=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Be=`<div class="container text-center">\r
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
`,Pe=`<section class="home-section">\r
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
</section>`,Te=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,De=`<section class="home-section">\r
    <div class="home-content">\r
      <i class='bx bx-menu'></i>\r
      <span class="text">Profile</span>\r
    </div>\r
    <div id="content" class="container-fluid" style="margin-top: 25px;">\r
      <div class="row">\r
      </div>\r
    </div>\r
  </section>`,Ne="<!--HOME-->",Oe=`<!--DASHBOARD-->\r
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
                    <input id="login-email" type="email" name="loginUsername" required data-msg="Please enter your username" class="input-material">\r
                    <label for="login-email" class="label-material">Email</label>\r
                  </div>\r
                  <div class="form-group">\r
                    <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" class="input-material">\r
                    <label for="login-password" class="label-material">Contraseña</label>\r
                  </div>\r
                  <button type="submit" class="btn btn-primary btn-block">Ingresar</button>\r
                  <button type="button" class="btn btn-info btn-block" id="googleLogin">Ingresar con Google</button>\r
                </form>\r
                <div>\r
                  <a href="#/" class="forgot-pass">Inicio</a> | \r
                  <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>  \r
                </div>\r
                <div>\r
                  <small>¿No tienes cuenta? </small><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
                </div>\r
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
                <div>\r
                  <a href="#/" class="forgot-pass">Inicio</a> | \r
                  <small>¿Ya tienes una cuenta? </small><a href="#/app" id="btnLogin" class="signup">Login</a>\r
                </div>\r
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
  <!--//REGISTRO-->\r
  <!--div class="nav-item logged-in">\r
    <a class="nav-link" id="logout-1" href="#/app">Logout</a>\r
  </div-->`,He=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Me=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,$e="<h1>Categorias</h1>",Ve=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,u=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,S=`<div class="sidebar">\r
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
</div>`,Ue=["dashboard","perfil"],Fe={forget:Ae,login:Ee,logout:Ce,noauth:Re,registro:Be,dashboard:S+Pe,settings:S+Te,perfil:S+De},z={Home:Ne,app:Oe,nosotros:u+He,productos:u+Me,categorias:u+$e,contacto:u+Ve},G={...z,...Fe},We=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,ze=n=>{var e=G[n];return e=e??We,sn(e)},O=async n=>{try{const e=await fetch(n);if(e.status==200){const s=await e.json();if(s)return s}else console.log("Error 404")}catch(e){console.log(e)}},{hash:Tn,host:Ge,hostDev:Je,typeBack:Ke,apiVer:Ye}=m();function Qe(){var n=self.location.href,e=n.lastIndexOf("/"),s=n.substring(e+1,n.length);return s}function Xe(n,e){var s=n.replace("/"+e,""),r=s.split("/"),t=window.location.search.substring(1),o=t.split("&");return t==""&&(o=["mod="+r[1],"ext="+r[2],"id="+r[3]]),o}function Ze(n){for(var e=0;e<n.length;e++){var s=n[e].split("=");if(s[0]=="mod")var r=s[1];if(s[0]=="ext")var t=s[1];if(s[0]=="id")var o=s[1]}return r=r==""?"Home":r.replace("?",""),t=t==""||t=="undefined"?"index":t,o=o==""||o=="undefined"?"":o,{mod:r,ext:t,id:o}}function _e(n,e,s,r){let t=localStorage.getItem("Token");document.querySelector("#menuweb");let o=document.querySelector(".user-login"),a=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");s[e]&&(o.classList.remove("d-none"),a.classList.add("d-none"),l.classList.add("d-none"),t!=null&&t!=null&&t!="null"&&t!="undefined"&&(o.classList.add("d-none"),a.classList.remove("d-none"),l.classList.remove("d-none")))}const en=(n,e,s,r)=>{localStorage.getItem("Token"),i("log","hash=>"+n);let t=s!="index"?" / "+H(s):"";document.title=r+" - "+H(e)+t,nn(e,Ue);let o=e!="Home"&&s!="index"?s:e,a=document.getElementById("app");if(a&&(a.innerHTML="",n))return a.appendChild(ze(o))};function nn(n,e){var s=localStorage.getItem("Token");i("log","token="+s);let r=e.length;for(let t=0;t<r;t++)n===e[t]&&i("log","Accceso: "+n+"="+e[t]),n===e[t]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");n=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function sn(n){const e=document.createElement("div");return e.innerHTML=n,e}function tn(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function i(n,e){if(Ge==Je)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function H(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function M(n,e){if(n.length>0)for(let t=0;t<n.length;t++)if(document.getElementById(e+t))i("log","Ok: dash-"+t);else if(i("log",n[t]),document.createStyleSheet)document.createStyleSheet(n[t]);else{var s="@import url('"+n[t]+"');",r=document.createElement("link");r.id=e+t,r.rel="stylesheet",r.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(r)}}function $(n,e){if(n.length>0)for(let r=0;r<n.length;r++)if(document.getElementById(e+r))i("log","Ok: "+e+r);else{i("log",n[r]);var s=document.createElement("script");s.id=e+r,s.src=n[r],document.body.appendChild(s)}}function V(n,e){for(let s=0;s<=n.length;s++){let r=document.getElementById(e+s);r&&document.body.removeChild(r)}}function U(n,e){for(let s=0;s<n.length;s++){let r=document.getElementById(e+s);r&&document.getElementsByTagName("head")[0].removeChild(r)}}function rn(){let n=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var r=document.createElement("div");r.id="load",r.innerHTML=s,n.appendChild(r),setTimeout(()=>{let t=document.getElementById(r.id);t&&n.removeChild(t)},5e3)}function on(){const{mod:n,ext:e}=m();let s=n!="Home"&&e!="index"?e:n;var r=G[s];n!="logout"&&n!="noauth"&&e=="index"&&r!=null&&rn()}async function an(n,e){if(Ke!="firebase"){if(n=="Home"){const{version:s}=await O(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const r=await O(Ye);if(r&&r!=null){const{ultimate:t}=r.data[0];s!=t&&console.log(`Actualizar version ${n} (${s} => ${t})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}const ln=m(),{host:cn,dominio:dn,path_url:mn,hostDev:gn,typeBack:pn}=ln;console.log("/* javascript login | VARIABLES CONSTANTES*/");let I=L+"/login/";cn==gn&&pn!="firebase"&&console.log("api_login="+I);function un(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",vn),console.log("btnLogin Activado"))}function vn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,s=document.getElementById("password").value;var r={username:e,password:s};const t=I+"index.php";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(o=>o.json()).then(o=>{const{data:a}=o;i("log",o),i("log","getToken:"+a.token),localStorage.setItem("Token",a.token);let l=localStorage.getItem("Token");if(i("log","Res-Token:"+l),l!=null&&l!="undefined")location.href=dn+mn+"#/dashboard";else{let b=document.getElementById("msj-error");b.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(o=>{console.log(o);let a=document.getElementById("msj-error");a.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const fn=()=>{const n=I+"";fetch(n).then(e=>e.json()).then(e=>{i("log",e)}).catch(e=>console.log(e)),setTimeout(function(){un()},1e3)};function hn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}m();function bn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function yn(n,e){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/vendor/font-awesome/css/font-awesome.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css"],r=[e+"assets/login/vendor/bootstrap/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",e+"assets/login/js/front.js"];n!="app"?(U(s,"appCS-"),V(r,"appJS-")):(M(s,"appCS-"),$(r,"appJS-"));const t=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",e+"assets/tema/css/bootstrap.min.css",e+"assets/tema/css/all.min.css",e+"assets/tema/css/animate.min.css",e+"assets/tema/css/simple-line-icons.min.css",e+"assets/tema/css/owl.carousel.min.css",e+"assets/tema/css/owl.theme.default.min.css",e+"assets/tema/css/magnific-popup.min.css",e+"assets/tema/css/theme.css",e+"assets/tema/css/theme-elements.css",e+"assets/tema/css/theme-blog.css",e+"assets/tema/css/theme-shop.css",e+"assets/tema/css/settings.css",e+"assets/tema/css/layers.css",e+"assets/tema/css/navigation.css",e+"assets/tema/css/demo-business-consulting.css",e+"assets/tema/css/skin-business-consulting.css",e+"assets/tema/css/style.css",e+"assets/font-awesome-4.7.0/css/font-awesome.css"],o=[e+"assets/tema/js/jquery.appear.min.js",e+"assets/tema/js/jquery.easing.min.js",e+"assets/tema/js/jquery.cookie.min.js",e+"assets/tema/js/popper.min.js",e+"assets/tema/js/bootstrap.min.js",e+"assets/tema/js/common.min.js",e+"assets/tema/js/jquery.validate.min.js",e+"assets/tema/js/jquery.easypiechart.min.js",e+"assets/tema/js/jquery.gmap.min.js",e+"assets/tema/js/jquery.lazyload.min.js",e+"assets/tema/js/jquery.isotope.min.js",e+"assets/tema/js/owl.carousel.min.js",e+"assets/tema/js/jquery.magnific-popup.min.js",e+"assets/tema/js/jquery.vide.min.js",e+"assets/tema/js/vivus.min.js",e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(U(t,"homeCS-"),V(o,"homeJS-")):(M(t,"homeCS-"),$(o,"homeJS-"))}console.log("Firebase SDK");var wn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const q=he(wn),A=ge(q),kn=ye(q);be(q);function jn(n){console.log("saveUser");var e={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};we(ke(kn,"vcard_signup/"+n.uid),e)}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const F=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const e=document.querySelector("#btnRegis"),s=document.querySelector("#btnLogin"),r=document.querySelector(".registro-page"),t=document.querySelector(".login-page"),o=document.querySelector(".dashboard");n?(t.style.display="none",r.style.display="none",o.style.display="block"):(t.style.display="block",o.style.display="none",e&&e.addEventListener("click",()=>{r.style.display="block",t.style.display="none"}),s&&s.addEventListener("click",()=>{r.style.display="none",t.style.display="block"}))};function J(n,e){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:e==="success"?"green":e==="warning"?"orange":e==="info"?"blue":"red"},onClick:function(){}}).showToast()}function xn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async e=>{e.preventDefault();const s=new pe;try{const r=await ue(A,s);console.log(r),console.log("google sign in"),J("Welcome "+r.user.displayName,"success")}catch(r){console.log(r)}})}function Sn(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async e=>{e.preventDefault();try{await ve(A),localStorage.clear(),console.log("signup out"),J("Signup out","info")}catch(s){console.log(s)}})}function Ln(){console.log("Cargando App..."),xn(),Sn(),fe(A,async n=>{if(n){i("log",n),F(n);try{jn(n)}catch(e){console.log(e)}}else F(n)})}const In=()=>{Ln()};function qn(n){const{route:e,mod:s,id:r,base_url:t}=n;i("log","route="+e),on(),s&&(bn(s),yn(s,t)),e=="app/index"&&In(),e=="login/index"&&fn(),e=="logout/index"&&hn()}function m(){var n=window,e=document,s=n.location,r=new Date,t=r.getDate();t=t<10?"0"+t:t;var o=r.getMonth()+1;o=o<10?"0"+o:o;var a=r.getFullYear(),l=a+"-"+o+"-"+t;const{protocol:b,host:c,origin:E,pathname:C,hash:R,href:Y,search:Q}=s,y=E+"/",X=E,Z=Y,_=Q,w=C.replace("/",""),k=y+w,B=c=="localhost"||c!=f&&c!=h?w+p:p,ee=c=="localhost:9001"?"../":"./",ne=y+B,se=screen.width,te=screen.height;var P="default",re="temas/"+P+"/",oe=Qe(),T=Xe(R,p);let{mod:g,ext:d,id:ae}=Ze(T);var D="/"+d,N=g+D,ie=g||"",le=d&&d!="index"?"/"+d:"",ce="#/"+ie+le,de=k+x+N+".html",me=k+x+"404/index.html";return{w:n,d:e,loc:s,dt:r,day:t,mon:o,year:a,fecha:l,title:Se,typeBack:Le,typeDev:Ie,path_hash:p,path_src:W,path_page:x,hostDev:f,hostPre:h,protocol:b,host:c,dominio:y,dominio1:X,pathname:C,hash:R,URL:Z,quest:_,path_url:w,path_root:B,path_build:ee,base_url:k,page_url:ne,screenw:se,screenh:te,tema:P,path_tema:re,pag_name:oe,vars_Url:T,mod:g,ext:d,id:ae,ext2:D,route:N,hash2:ce,url_mod:de,url404:me,apiVer:qe}}function K(){const n=m();i("log",n);const{hash:e,mod:s,ext:r,page_url:t,base_url:o,title:a}=n;en(e,s,r,a),qn(n),_e(e,s,z),tn(s,t),an(s,o)}function An(){console.log("Run function inicio"),K()}window.addEventListener("hashchange",()=>{i("warn","Event Listener"),K()});An();
