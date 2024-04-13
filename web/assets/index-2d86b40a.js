import{getAuth as pe,GoogleAuthProvider as ve,signInWithPopup as fe,signOut as he,onAuthStateChanged as be}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as ye}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as je}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as ke,set as we,ref as G,onValue as xe}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();let Se=window.location;const{pathname:Le,host:I}=Se;I!=="localhost"&&I!=="localhost:5173"&&I!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Le+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:b}=window.location,qe="Vcard",Ie="firebase",f="#/",J="src/",A=J+"pages/",Ae="vite",y="localhost:5173",j="localhost",T=b==y||b==j?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",Ee=T+"/v2/api_version";console.log(b+"=="+y,b+"=="+j);console.warn("Api="+T);const Te=`<div class="container text-center">\r
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
`,Ce=`<div class="container text-center">\r
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
`,Re=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Be=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Pe=`<div class="container text-center">\r
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
`,De=`<section class="home-section">\r
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
</section>`,Ne=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,Oe=`<section class="home-section">\r
    <div class="home-content">\r
      <i class='bx bx-menu'></i>\r
      <span class="text">Profile</span>\r
    </div>\r
    <div id="content" class="container-fluid" style="margin-top: 25px;">\r
      <div class="row">\r
      </div>\r
    </div>\r
  </section>`,He="<!--HOME-->",Me=`<!--DASHBOARD-->\r
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
          <a href="/#/perfil">\r
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
          <li><a href="/#/perfil"> <i class="fa fa-user"></i>Perfil </a></li>\r
          <li><a href="/#/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a></li>\r
          <li><a href="/#/empresas"> <i class="fa fa-industry"></i>Empresas </a></li>\r
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
  </div-->`,Ve=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,$e=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Ue="<h1>Categorias</h1>",Fe=`<div class="container text-center">\r
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
</nav>`,E=`<div class="sidebar">\r
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
</div>`,We=["dashboard","perfil"],ze={forget:Te,login:Ce,logout:Re,noauth:Be,registro:Pe,dashboard:E+De,settings:E+Ne,perfil:E+Oe},K={Home:He,app:Me,nosotros:h+Ve,productos:h+$e,categorias:h+Ue,contacto:h+Fe},Y={...K,...ze},Ge=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Je=n=>{var e=Y[n];return e=e??Ge,on(e)},M=async n=>{try{const e=await fetch(n);if(e.status==200){const t=await e.json();if(t)return t}else console.log("Error 404")}catch(e){console.log(e)}},{hash:Nn,host:Ke,hostDev:Ye,typeBack:Qe,apiVer:Xe}=g();function Ze(){var n=self.location.href,e=n.lastIndexOf("/"),t=n.substring(e+1,n.length);return t}function _e(n,e){var t=n.replace("/"+e,""),o=t.split("/"),s=window.location.search.substring(1),r=s.split("&");return s==""&&(r=["mod="+o[1],"ext="+o[2],"id="+o[3]]),r}function en(n){for(var e=0;e<n.length;e++){var t=n[e].split("=");if(t[0]=="mod")var o=t[1];if(t[0]=="ext")var s=t[1];if(t[0]=="id")var r=t[1]}return o=o==""?"Home":o.replace("?",""),s=s==""||s=="undefined"?"index":s,r=r==""||r=="undefined"?"":r,{mod:o,ext:s,id:r}}function nn(n,e,t,o){let s=localStorage.getItem("Token");document.querySelector("#menuweb");let r=document.querySelector(".user-login"),a=document.querySelector(".user-activo"),c=document.querySelector(".user-logout");t[e]&&(r.classList.remove("d-none"),a.classList.add("d-none"),c.classList.add("d-none"),s!=null&&s!=null&&s!="null"&&s!="undefined"&&(r.classList.add("d-none"),a.classList.remove("d-none"),c.classList.remove("d-none")))}const sn=(n,e,t,o)=>{localStorage.getItem("Token"),l("log","hash=>"+n);let s=t!="index"?" / "+V(t):"";document.title=o+" - "+V(e)+s,tn(e,We);let r=e!="Home"&&t!="index"?t:e,a=document.getElementById("app");if(a&&(a.innerHTML="",n))return a.appendChild(Je(r))};function tn(n,e){var t=localStorage.getItem("Token");l("log","token="+t);let o=e.length;for(let s=0;s<o;s++)n===e[s]&&l("log","Accceso: "+n+"="+e[s]),n===e[s]&&(t==null||t=="undefined")&&(window.location.href="#/noauth");n=="login"&&t!=null&&t!="undefined"&&(window.location.href="#/dashboard")}function on(n){const e=document.createElement("div");return e.innerHTML=n,e}function rn(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function l(n,e){if(Ke==Ye)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function V(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function $(n,e){if(n.length>0)for(let s=0;s<n.length;s++){let r=document.getElementById(e+s);if(console.log(e+s),r)l("log","Ok: "+e+"-"+s);else if(l("log",n[s]),document.createStyleSheet)document.createStyleSheet(n[s]);else{var t="@import url('"+n[s]+"');",o=document.createElement("link");o.id=e+s,o.rel="stylesheet",o.href="data:text/css,"+escape(t),document.getElementsByTagName("head")[0].appendChild(o)}}}function U(n,e){if(n.length>0)for(let o=0;o<n.length;o++)if(document.getElementById(e+o))l("log","Ok: "+e+o);else{l("log",n[o]);var t=document.createElement("script");t.id=e+o,t.src=n[o],document.body.appendChild(t)}}function F(n,e){for(let t=0;t<=n.length;t++){let o=document.getElementById(e+t);o&&document.body.removeChild(o)}}function W(n,e){for(let t=0;t<n.length;t++){let o=document.getElementById(e+t);o&&document.getElementsByTagName("head")[0].removeChild(o)}}function an(){let n=document.getElementsByTagName("body")[0],t=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var o=document.createElement("div");o.id="load",o.innerHTML=t,n.appendChild(o),setTimeout(()=>{let s=document.getElementById(o.id);s&&n.removeChild(s)},5e3)}function ln(){const{mod:n,ext:e}=g();let t=n!="Home"&&e!="index"?e:n;var o=Y[t];n!="logout"&&n!="noauth"&&e=="index"&&o!=null&&an()}async function cn(n,e){if(Qe!="firebase"){if(n=="Home"){const{version:t}=await M(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${t}`);const o=await M(Xe);if(o&&o!=null){const{ultimate:s}=o.data[0];t!=s&&console.log(`Actualizar version ${n} (${t} => ${s})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}const dn=g(),{host:mn,dominio:gn,path_url:un,hostDev:pn,typeBack:vn}=dn;console.log("/* javascript login | VARIABLES CONSTANTES*/");let C=T+"/login/";mn==pn&&vn!="firebase"&&console.log("api_login="+C);function fn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",hn),console.log("btnLogin Activado"))}function hn(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,t=document.getElementById("password").value;var o={username:e,password:t};const s=C+"index.php";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(r=>r.json()).then(r=>{const{data:a}=r;l("log",r),l("log","getToken:"+a.token),localStorage.setItem("Token",a.token);let c=localStorage.getItem("Token");if(l("log","Res-Token:"+c),c!=null&&c!="undefined")location.href=gn+un+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(r=>{console.log(r);let a=document.getElementById("msj-error");a.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const bn=()=>{const n=C+"";fetch(n).then(e=>e.json()).then(e=>{l("log",e)}).catch(e=>console.log(e)),setTimeout(function(){fn()},1e3)};function yn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}g();function jn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function kn(n,e){const t=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/vendor/font-awesome/css/font-awesome.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css"],o=[e+"assets/login/vendor/popper.js/umd/popper.min.js",e+"assets/login/vendor/bootstrap/js/bootstrap.min.js",e+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",e+"assets/login/vendor/jquery.cookie/jquery.cookie.js",e+"assets/login/vendor/chart.js/Chart.min.js",e+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",e+"assets/login/js/front.js"];n!="app"?(W(t,"appCS-"),F(o,"appJS-")):($(t,"appCS-"),U(o,"appJS-"));const s=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",e+"assets/tema/css/bootstrap.min.css",e+"assets/tema/css/all.min.css",e+"assets/tema/css/animate.min.css",e+"assets/tema/css/simple-line-icons.min.css",e+"assets/tema/css/owl.carousel.min.css",e+"assets/tema/css/owl.theme.default.min.css",e+"assets/tema/css/magnific-popup.min.css",e+"assets/tema/css/theme.css",e+"assets/tema/css/theme-elements.css",e+"assets/tema/css/theme-blog.css",e+"assets/tema/css/theme-shop.css",e+"assets/tema/css/settings.css",e+"assets/tema/css/layers.css",e+"assets/tema/css/navigation.css",e+"assets/tema/css/demo-business-consulting.css",e+"assets/tema/css/skin-business-consulting.css",e+"assets/tema/css/style.css",e+"assets/font-awesome-4.7.0/css/font-awesome.css"],r=[e+"assets/tema/js/jquery.appear.min.js",e+"assets/tema/js/jquery.easing.min.js",e+"assets/tema/js/jquery.cookie.min.js",e+"assets/tema/js/popper.min.js",e+"assets/tema/js/bootstrap.min.js",e+"assets/tema/js/common.min.js",e+"assets/tema/js/jquery.validate.min.js",e+"assets/tema/js/jquery.easypiechart.min.js",e+"assets/tema/js/jquery.gmap.min.js",e+"assets/tema/js/jquery.lazyload.min.js",e+"assets/tema/js/jquery.isotope.min.js",e+"assets/tema/js/owl.carousel.min.js",e+"assets/tema/js/jquery.magnific-popup.min.js",e+"assets/tema/js/jquery.vide.min.js",e+"assets/tema/js/vivus.min.js",e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(W(s,"homeCS-"),F(r,"homeJS-")):($(s,"homeCS-"),U(r,"homeJS-"))}console.log("Firebase SDK");var wn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const R=ye(wn),B=pe(R),Q=ke(R);je(R);function xn(n){console.log("saveUser");var e={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};we(G(Q,"vcard_signup/"+n.uid),e)}function Sn(n){const e=document.querySelector("#photo"),t=document.querySelector("#nombre_session"),o=document.querySelector("#email_session"),s=document.querySelector("#id_code_google"),r=G(Q,"vcard_signup/");xe(r,a=>{const c=a.val();for(let d in c){const i=c[d];if(i.uid==n.uid){console.log(i);const u='<img src="'+(i.foto==null?page_url+"bloques/files/images/photos/sinfoto.png":i.foto)+'" class="img-fluid rounded-circle">',p=i.usuario==null?i.email:i.usuario,w=i.email,x=i.uid;e.innerHTML=u,t.innerHTML=p,o.innerHTML=w,s.innerHTML=x}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const z=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const e=document.querySelector("#btnRegis"),t=document.querySelector("#btnLogin"),o=document.querySelector(".registro-page"),s=document.querySelector(".login-page"),r=document.querySelector(".dashboard");n?(s.style.display="none",o.style.display="none",r.style.display="block"):(s.style.display="block",r.style.display="none",e&&e.addEventListener("click",()=>{o.style.display="block",s.style.display="none"}),t&&t.addEventListener("click",()=>{o.style.display="none",s.style.display="block"}))};function X(n,e){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:e==="success"?"green":e==="warning"?"orange":e==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Ln(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async e=>{e.preventDefault();const t=new ve;try{const o=await fe(B,t);console.log("google sign in"),X("Welcome "+o.user.displayName,"success")}catch(o){console.log(o)}})}function qn(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async e=>{e.preventDefault();try{await he(B),localStorage.clear(),console.log("signup out"),X("Signup out","info")}catch(t){console.log(t)}})}function In(){console.log("Cargando App..."),Ln(),qn(),be(B,async n=>{if(n){l("log",n),z(n),Sn(n);try{xn(n)}catch(e){console.log(e)}}else z(n)})}const An=()=>{In()};function En(n){const{route:e,mod:t,id:o,base_url:s}=n;l("log","route="+e),ln(),t&&(jn(t),kn(t,s)),e=="app/index"&&An(),e=="login/index"&&bn(),e=="logout/index"&&yn()}function g(){var n=window,e=document,t=n.location,o=new Date,s=o.getDate();s=s<10?"0"+s:s;var r=o.getMonth()+1;r=r<10?"0"+r:r;var a=o.getFullYear(),c=a+"-"+r+"-"+s;const{protocol:d,host:i,origin:k,pathname:u,hash:p,href:w,search:x}=t,S=k+"/",_=k,ee=w,ne=x,L=u.replace("/",""),q=S+L,P=i=="localhost"||i!=y&&i!=j?L+f:f,se=i=="localhost:9001"?"../":"./",te=S+P,oe=screen.width,re=screen.height;var D="default",ae="temas/"+D+"/",ie=Ze(),N=_e(p,f);let{mod:v,ext:m,id:le}=en(N);var O="/"+m,H=v+O,ce=v||"",de=m&&m!="index"?"/"+m:"",me="#/"+ce+de,ge=q+A+H+".html",ue=q+A+"404/index.html";return{w:n,d:e,loc:t,dt:o,day:s,mon:r,year:a,fecha:c,title:qe,typeBack:Ie,typeDev:Ae,path_hash:f,path_src:J,path_page:A,hostDev:y,hostPre:j,protocol:d,host:i,dominio:S,dominio1:_,pathname:u,hash:p,URL:ee,quest:ne,path_url:L,path_root:P,path_build:se,base_url:q,page_url:te,screenw:oe,screenh:re,tema:D,path_tema:ae,pag_name:ie,vars_Url:N,mod:v,ext:m,id:le,ext2:O,route:H,hash2:me,url_mod:ge,url404:ue,apiVer:Ee}}function Z(){const n=g();l("log",n);const{hash:e,mod:t,ext:o,page_url:s,base_url:r,title:a}=n;sn(e,t,o,a),En(n),nn(e,t,K),rn(t,s),cn(t,r)}function Tn(){console.log("Run function inicio"),Z()}window.addEventListener("hashchange",()=>{l("warn","Event Listener"),Z()});Tn();
