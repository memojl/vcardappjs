import{getAuth as fe,GoogleAuthProvider as he,signInWithPopup as be,signOut as ye,onAuthStateChanged as we}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as je}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as ke}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as xe,set as Se,ref as Le}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let Ie=window.location;const{pathname:Ee,host:I}=Ie;I!=="localhost"&&I!=="localhost:5173"&&I!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Ee+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:b}=window.location,Ae="Vcard",qe="firebase",f="#/",J="src/",E=J+"pages/",Te="vite",y="localhost:5173",w="localhost";console.log(b+"=="+y,b+"=="+w);const j=b==y||b==w?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+j);const Pe=j+"/v2/api_version",De=`<div class="container text-center">\r
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
`,Be=`<div class="container text-center">\r
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
</div>`,Oe=`<div class="container text-center">\r
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
`,Ne=`<section class="home-section">\r
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
</section>`,$e=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,He=`<section class="home-section">\r
    <div class="home-content">\r
      <i class='bx bx-menu'></i>\r
      <span class="text">Profile</span>\r
    </div>\r
    <div id="content" class="container-fluid" style="margin-top: 25px;">\r
      <div class="row">\r
      </div>\r
    </div>\r
  </section>`,Me="<!--HOME-->",Fe=`<!--DASHBOARD-->\r
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
                  <small>¿No tienes cuenta? </small><a href="#/registro" class="signup">Registrate</a>\r
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
  <!--//REGISTRO-->\r
  <div class="nav-item logged-in">\r
    <a class="nav-link" id="logout-1" href="#/app">Logout</a>\r
  </div>`,Ue=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Ve=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,We="<h1>Categorias</h1>",ze=`<div class="container text-center">\r
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
</div>`,Ge=["dashboard","perfil"],Je={forget:De,login:Be,logout:Ce,noauth:Re,registro:Oe,dashboard:A+Ne,settings:A+$e,perfil:A+He},K={Home:Me,app:Fe,nosotros:h+Ue,productos:h+Ve,categorias:h+We,contacto:h+ze},Y={...K,...Je},Ke=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Ye=n=>{var e=Y[n];return e=e??Ke,ln(e)},Ze=async(n,e,s,r)=>{const t=`${n}/${e}`;let o=localStorage.getItem("Token");o=o&&o!=null?o:"";const a={...r,token:o},c=r!=null?JSON.stringify(a):"",i=await fetch(t,{method:s,headers:{"Content-Type":"application/json"},body:c});if(!i.ok)console.error("Error 404(Fetch): "),i=="Unauthorized"?console.error("Error 401(Fetch): "):i=="Forbidden"?console.error("Error 403(Fetch): "):i=="Not Found"&&console.error("Error 404(Fetch): ");else return await i.json()},_e=async(n,e)=>{const{data:s}=await Ze(n,"profile/index.php","POST","");switch(e){case"InfoUser":return s.InfoUser;case"InfoToken":return s.InfoToken;default:return s}},$=async n=>{try{const e=await fetch(n);if(e.status==200){const s=await e.json();if(s)return s}else console.log("Error 404")}catch(e){console.log(e)}},{hash:Un,host:Qe,hostDev:Xe,typeBack:Vn,apiVer:en}=g();function nn(){var n=self.location.href,e=n.lastIndexOf("/"),s=n.substring(e+1,n.length);return s}function sn(n,e){var s=n.replace("/"+e,""),r=s.split("/"),t=window.location.search.substring(1),o=t.split("&");return t==""&&(o=["mod="+r[1],"ext="+r[2],"id="+r[3]]),o}function tn(n){for(var e=0;e<n.length;e++){var s=n[e].split("=");if(s[0]=="mod")var r=s[1];if(s[0]=="ext")var t=s[1];if(s[0]=="id")var o=s[1]}return r=r==""?"Home":r.replace("?",""),t=t==""||t=="undefined"?"index":t,o=o==""||o=="undefined"?"":o,{mod:r,ext:t,id:o}}function rn(n,e,s,r){let t=localStorage.getItem("Token");document.querySelector("#menuweb");let o=document.querySelector(".user-login"),a=document.querySelector(".user-activo"),c=document.querySelector(".user-logout");s[e]&&(o.classList.remove("d-none"),a.classList.add("d-none"),c.classList.add("d-none"),t!=null&&t!=null&&t!="null"&&t!="undefined"&&(o.classList.add("d-none"),a.classList.remove("d-none"),c.classList.remove("d-none")))}const on=(n,e,s,r)=>{localStorage.getItem("Token"),l("log","hash=>"+n);let t=s!="index"?" / "+H(s):"";document.title=r+" - "+H(e)+t,an(e,Ge);let o=e!="Home"&&s!="index"?s:e,a=document.getElementById("app");if(a&&(a.innerHTML="",n))return a.appendChild(Ye(o))};function an(n,e){var s=localStorage.getItem("Token");l("log","token="+s);let r=e.length;for(let t=0;t<r;t++)n===e[t]&&l("log","Accceso: "+n+"="+e[t]),n===e[t]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");n=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function ln(n){const e=document.createElement("div");return e.innerHTML=n,e}function cn(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function l(n,e){if(Qe==Xe)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function H(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function M(n,e){if(n.length>0)for(let t=0;t<n.length;t++)if(document.getElementById(e+t))l("log","Ok: dash-"+t);else if(l("log",n[t]),document.createStyleSheet)document.createStyleSheet(n[t]);else{var s="@import url('"+n[t]+"');",r=document.createElement("link");r.id=e+t,r.rel="stylesheet",r.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(r)}}function F(n,e){if(n.length>0)for(let r=0;r<n.length;r++)if(document.getElementById(e+r))l("log","Ok: "+e+r);else{l("log",n[r]);var s=document.createElement("script");s.id=e+r,s.src=n[r],document.body.appendChild(s)}}function U(n,e){for(let s=0;s<=n.length;s++){let r=document.getElementById(e+s);r&&document.body.removeChild(r)}}function V(n,e){for(let s=0;s<n.length;s++){let r=document.getElementById(e+s);r&&document.getElementsByTagName("head")[0].removeChild(r)}}function dn(){let n=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var r=document.createElement("div");r.id="load",r.innerHTML=s,n.appendChild(r),setTimeout(()=>{let t=document.getElementById(r.id);t&&n.removeChild(t)},5e3)}function mn(){const{mod:n,ext:e}=g();let s=n!="Home"&&e!="index"?e:n;var r=Y[s];n!="logout"&&n!="noauth"&&e=="index"&&r!=null&&dn()}async function gn(n,e){if(n=="Home"){const{version:s}=await $(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const r=await $(en);if(r&&r!=null){const{ultimate:t}=r.data[0];s!=t&&console.log(`Actualizar version ${n} (${s} => ${t})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const un=g(),{host:pn,dominio:vn,path_url:fn,hostDev:hn}=un;console.log("/* javascript login | VARIABLES CONSTANTES*/");let q=j+"/login/";pn==hn&&console.log("api_login="+q);function bn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",yn),console.log("btnLogin Activado"))}function yn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,s=document.getElementById("password").value;var r={username:e,password:s};const t=q+"index.php";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(o=>o.json()).then(o=>{const{data:a}=o;l("log",o),l("log","getToken:"+a.token),localStorage.setItem("Token",a.token);let c=localStorage.getItem("Token");if(l("log","Res-Token:"+c),c!=null&&c!="undefined")location.href=vn+fn+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(o=>{console.log(o);let a=document.getElementById("msj-error");a.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const wn=()=>{const n=q+"";fetch(n).then(e=>e.json()).then(e=>{l("log",e)}).catch(e=>console.log(e)),setTimeout(function(){bn()},1e3)};function jn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const kn=g(),{host:Z,dominio:Wn,path_url:zn,base_url:Gn,screenw:xn,mod:Jn,hostDev:_}=kn;async function Sn(){let n=document.querySelector(".bx-log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let e=document.querySelectorAll(".arrow");for(var s=0;s<e.length;s++)e[s].addEventListener("click",d=>{d.target.parentElement.parentElement.classList.toggle("showMenu")});let r=document.querySelector(".sidebar"),t=document.querySelector(".bx-menu");if(t!=null){let d=localStorage.getItem("bar");d=="true"&&r.classList.toggle("close"),t.addEventListener("click",()=>{let i=r.classList.toggle("close");localStorage.setItem("bar",i),d=localStorage.getItem("bar")}),console.log("Bar-Load:",d)}xn<=740&&document.querySelector(".sidebar").classList.add("close");const o=document.querySelector(".profile_name"),a=document.querySelector(".job");let c=Z==_?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+c),o!=null&&a!=null){const{email:d,username:i,nombre:u,foto:k,puesto:p,status:D}=await _e(j,"InfoUser");o!=null&&(o.innerHTML=i),a!=null&&(a.innerHTML=p)}}function Ln(){setTimeout(function(){Z==_&&console.log("btnSidebar Activado"),Sn()},500)}function In(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function En(n,e){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/vendor/font-awesome/css/font-awesome.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css"],r=[e+"assets/login/vendor/bootstrap/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",e+"assets/login/js/front.js"];n!="app"?(V(s,"appCS-"),U(r,"appJS-")):(M(s,"appCS-"),F(r,"appJS-"));const t=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",e+"assets/tema/css/bootstrap.min.css",e+"assets/tema/css/all.min.css",e+"assets/tema/css/animate.min.css",e+"assets/tema/css/simple-line-icons.min.css",e+"assets/tema/css/owl.carousel.min.css",e+"assets/tema/css/owl.theme.default.min.css",e+"assets/tema/css/magnific-popup.min.css",e+"assets/tema/css/theme.css",e+"assets/tema/css/theme-elements.css",e+"assets/tema/css/theme-blog.css",e+"assets/tema/css/theme-shop.css",e+"assets/tema/css/settings.css",e+"assets/tema/css/layers.css",e+"assets/tema/css/navigation.css",e+"assets/tema/css/demo-business-consulting.css",e+"assets/tema/css/skin-business-consulting.css",e+"assets/tema/css/style.css",e+"assets/font-awesome-4.7.0/css/font-awesome.css"],o=[e+"assets/tema/js/jquery.appear.min.js",e+"assets/tema/js/jquery.easing.min.js",e+"assets/tema/js/jquery.cookie.min.js",e+"assets/tema/js/popper.min.js",e+"assets/tema/js/bootstrap.min.js",e+"assets/tema/js/common.min.js",e+"assets/tema/js/jquery.validate.min.js",e+"assets/tema/js/jquery.easypiechart.min.js",e+"assets/tema/js/jquery.gmap.min.js",e+"assets/tema/js/jquery.lazyload.min.js",e+"assets/tema/js/jquery.isotope.min.js",e+"assets/tema/js/owl.carousel.min.js",e+"assets/tema/js/jquery.magnific-popup.min.js",e+"assets/tema/js/jquery.vide.min.js",e+"assets/tema/js/vivus.min.js",e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(V(t,"homeCS-"),U(o,"homeJS-")):(M(t,"homeCS-"),F(o,"homeJS-"))}console.log("Firebase SDK");var An={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const T=je(An),P=fe(T),qn=xe(T);ke(T);function Tn(n){var e={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};Se(Le(qn,"vcard_signup/"+n.uid),e)}const W=document.querySelectorAll(".logged-out"),z=document.querySelectorAll(".logged-in"),G=n=>{n?(z.forEach(e=>e.style.display="block"),W.forEach(e=>e.style.display="none")):(z.forEach(e=>e.style.display="none"),W.forEach(e=>e.style.display="block"))};function Q(n,e){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:e==="success"?"green":e==="warning"?"orange":e==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Pn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async e=>{e.preventDefault();const s=new he;try{const r=await be(P,s);console.log(r),console.log("google sign in"),Q("Welcome "+r.user.displayName,"success")}catch(r){console.log(r)}})}function Dn(){const n=document.querySelector("#logout-1");console.log(n),n&&n.addEventListener("click",async e=>{console.log("LogOut",e),e.preventDefault();try{await ye(P),console.log("signup out"),Q("Signup out","info")}catch(s){console.log(s)}})}function Bn(){console.log("Cargando App..."),Pn(),we(P,async n=>{if(n){l("log",n),G(n);try{Tn(n),Dn()}catch(e){console.log(e)}}else G(n)})}const Cn=()=>{Bn()};function Rn(n){const{route:e,mod:s,id:r,base_url:t}=n;l("log","route="+e),mn(),s&&(In(s),En(s,t)),e=="app/index"&&Cn(),e=="login/index"&&wn(),e=="logout/index"&&jn(),(e=="dashboard/index"||s=="dashboard"||s=="links")&&Ln()}function g(){var n=window,e=document,s=n.location,r=new Date,t=r.getDate();t=t<10?"0"+t:t;var o=r.getMonth()+1;o=o<10?"0"+o:o;var a=r.getFullYear(),c=a+"-"+o+"-"+t;const{protocol:d,host:i,origin:u,pathname:k,hash:p,href:D,search:ee}=s,x=u+"/",ne=u,se=D,te=ee,S=k.replace("/",""),L=x+S,B=i=="localhost"||i!=y&&i!=w?S+f:f,re=i=="localhost:9001"?"../":"./",oe=x+B,ae=screen.width,ie=screen.height;var C="default",le="temas/"+C+"/",ce=nn(),R=sn(p,f);let{mod:v,ext:m,id:de}=tn(R);var O="/"+m,N=v+O,me=v||"",ge=m&&m!="index"?"/"+m:"",ue="#/"+me+ge,pe=L+E+N+".html",ve=L+E+"404/index.html";return{w:n,d:e,loc:s,dt:r,day:t,mon:o,year:a,fecha:c,title:Ae,typeBack:qe,typeDev:Te,path_hash:f,path_src:J,path_page:E,hostDev:y,hostPre:w,protocol:d,host:i,dominio:x,dominio1:ne,pathname:k,hash:p,URL:se,quest:te,path_url:S,path_root:B,path_build:re,base_url:L,page_url:oe,screenw:ae,screenh:ie,tema:C,path_tema:le,pag_name:ce,vars_Url:R,mod:v,ext:m,id:de,ext2:O,route:N,hash2:ue,url_mod:pe,url404:ve,apiVer:Pe}}function X(){const n=g();l("log",n);const{hash:e,mod:s,ext:r,page_url:t,base_url:o,title:a}=n;on(e,s,r,a),Rn(n),rn(e,s,K),cn(s,t),gn(s,o)}function On(){console.log("Run function inicio"),X()}window.addEventListener("hashchange",()=>{l("warn","Event Listener"),X()});On();
