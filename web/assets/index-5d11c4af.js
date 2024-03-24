import{getAuth as me}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as ge}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as ue}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as pe}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();let ve=window.location;const{pathname:fe,host:I}=ve;I!=="localhost"&&I!=="localhost:5173"&&I!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(fe+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:b}=window.location,he="Vcard",be="firebase",f="#/",V="src/",E=V+"pages/",ye="vite",y="localhost:5173",w="localhost";console.log(b+"=="+y,b+"=="+w);const j=b==y||b==w?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+j);const we=j+"/v2/api_version",je=`<div class="container text-center">\r
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
`,ke=`<div class="container text-center">\r
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
`,xe=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Se=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Le=`<div class="container text-center">\r
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
`,Ie=`<section class="home-section">\r
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
</section>`,Ee=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,qe=`<section class="home-section">\r
    <div class="home-content">\r
      <i class='bx bx-menu'></i>\r
      <span class="text">Profile</span>\r
    </div>\r
    <div id="content" class="container-fluid" style="margin-top: 25px;">\r
      <div class="row">\r
      </div>\r
    </div>\r
  </section>`,Ae="<!--HOME-->",Te=`<!--DASHBOARD-->\r
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
                  <a href="../" class="forgot-pass">Inicio</a> | \r
                  <a href="./forget" class="forgot-pass">Olvide mi Password?</a>  \r
                </div>\r
                <div>\r
                  <small>¿No tienes cuenta? </small><a href="./registro" class="signup">Registrate</a>\r
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
  <!--//REGISTRO-->`,Pe=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,De=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Be="<h1>Categorias</h1>",Re=`<div class="container text-center">\r
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
</nav>`,q=`<div class="sidebar">\r
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
</div>`,Ce=["dashboard","perfil"],Ne={forget:je,login:ke,logout:xe,noauth:Se,registro:Le,dashboard:q+Ie,settings:q+Ee,perfil:q+qe},z={Home:Ae,app:Te,nosotros:h+Pe,productos:h+De,categorias:h+Be,contacto:h+Re},J={...z,...Ne},Oe=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,$e=n=>{var e=J[n];return e=e??Oe,Ze(e)},He=async(n,e,s,t)=>{const r=`${n}/${e}`;let a=localStorage.getItem("Token");a=a&&a!=null?a:"";const o={...t,token:a},c=t!=null?JSON.stringify(o):"",i=await fetch(r,{method:s,headers:{"Content-Type":"application/json"},body:c});if(!i.ok)console.error("Error 404(Fetch): "),i=="Unauthorized"?console.error("Error 401(Fetch): "):i=="Forbidden"?console.error("Error 403(Fetch): "):i=="Not Found"&&console.error("Error 404(Fetch): ");else return await i.json()},Me=async(n,e)=>{const{data:s}=await He(n,"profile/index.php","POST","");switch(e){case"InfoUser":return s.InfoUser;case"InfoToken":return s.InfoToken;default:return s}},O=async n=>{try{const e=await fetch(n);if(e.status==200){const s=await e.json();if(s)return s}else console.log("Error 404")}catch(e){console.log(e)}},{hash:qn,host:Fe,hostDev:Ue,typeBack:An,apiVer:Ve}=g();function ze(){var n=self.location.href,e=n.lastIndexOf("/"),s=n.substring(e+1,n.length);return s}function Je(n,e){var s=n.replace("/"+e,""),t=s.split("/"),r=window.location.search.substring(1),a=r.split("&");return r==""&&(a=["mod="+t[1],"ext="+t[2],"id="+t[3]]),a}function Ge(n){for(var e=0;e<n.length;e++){var s=n[e].split("=");if(s[0]=="mod")var t=s[1];if(s[0]=="ext")var r=s[1];if(s[0]=="id")var a=s[1]}return t=t==""?"Home":t.replace("?",""),r=r==""||r=="undefined"?"index":r,a=a==""||a=="undefined"?"":a,{mod:t,ext:r,id:a}}function Ke(n,e,s,t){let r=localStorage.getItem("Token");document.querySelector("#menuweb");let a=document.querySelector(".user-login"),o=document.querySelector(".user-activo"),c=document.querySelector(".user-logout");s[e]&&(a.classList.remove("d-none"),o.classList.add("d-none"),c.classList.add("d-none"),r!=null&&r!=null&&r!="null"&&r!="undefined"&&(a.classList.add("d-none"),o.classList.remove("d-none"),c.classList.remove("d-none")))}const We=(n,e,s,t)=>{localStorage.getItem("Token"),l("log","hash=>"+n);let r=s!="index"?" / "+$(s):"";document.title=t+" - "+$(e)+r,Ye(e,Ce);let a=e!="Home"&&s!="index"?s:e,o=document.getElementById("app");if(o&&(o.innerHTML="",n))return o.appendChild($e(a))};function Ye(n,e){var s=localStorage.getItem("Token");l("log","token="+s);let t=e.length;for(let r=0;r<t;r++)n===e[r]&&l("log","Accceso: "+n+"="+e[r]),n===e[r]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");n=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function Ze(n){const e=document.createElement("div");return e.innerHTML=n,e}function _e(n,e){(n==""||n=="undefined")&&(window.location.href=e)}function l(n,e){if(Fe==Ue)switch(n){case"log":console.log(e);break;case"warn":console.warn(e);break;case"error":console.error(e);break;default:console.log(e);break}}function $(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function H(n,e){if(n.length>0)for(let r=0;r<n.length;r++)if(document.getElementById(e+r))l("log","Ok: dash-"+r);else if(l("log",n[r]),document.createStyleSheet)document.createStyleSheet(n[r]);else{var s="@import url('"+n[r]+"');",t=document.createElement("link");t.id=e+r,t.rel="stylesheet",t.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(t)}}function M(n,e){if(n.length>0)for(let t=0;t<n.length;t++)if(document.getElementById(e+t))l("log","Ok: "+e+t);else{l("log",n[t]);var s=document.createElement("script");s.id=e+t,s.src=n[t],document.body.appendChild(s)}}function F(n,e){for(let s=0;s<=n.length;s++){let t=document.getElementById(e+s);t&&document.body.removeChild(t)}}function U(n,e){for(let s=0;s<n.length;s++){let t=document.getElementById(e+s);t&&document.getElementsByTagName("head")[0].removeChild(t)}}function Qe(){let n=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var t=document.createElement("div");t.id="load",t.innerHTML=s,n.appendChild(t),setTimeout(()=>{let r=document.getElementById(t.id);r&&n.removeChild(r)},5e3)}function Xe(){const{mod:n,ext:e}=g();let s=n!="Home"&&e!="index"?e:n;var t=J[s];n!="logout"&&n!="noauth"&&e=="index"&&t!=null&&Qe()}async function en(n,e){if(n=="Home"){const{version:s}=await O(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const t=await O(Ve);if(t&&t!=null){const{ultimate:r}=t.data[0];s!=r&&console.log(`Actualizar version ${n} (${s} => ${r})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const nn=g(),{host:sn,dominio:rn,path_url:tn,hostDev:an}=nn;console.log("/* javascript login | VARIABLES CONSTANTES*/");let A=j+"/login/";sn==an&&console.log("api_login="+A);function on(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",ln),console.log("btnLogin Activado"))}function ln(n){n.preventDefault(),console.log("Validación de Datos");let e=document.getElementById("username").value,s=document.getElementById("password").value;var t={username:e,password:s};const r=A+"index.php";fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(a=>a.json()).then(a=>{const{data:o}=a;l("log",a),l("log","getToken:"+o.token),localStorage.setItem("Token",o.token);let c=localStorage.getItem("Token");if(l("log","Res-Token:"+c),c!=null&&c!="undefined")location.href=rn+tn+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(a=>{console.log(a);let o=document.getElementById("msj-error");o.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const cn=()=>{const n=A+"";fetch(n).then(e=>e.json()).then(e=>{l("log",e)}).catch(e=>console.log(e)),setTimeout(function(){on()},1e3)};function dn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const mn=g(),{host:G,dominio:Tn,path_url:Pn,base_url:Dn,screenw:gn,mod:Bn,hostDev:K}=mn;async function un(){let n=document.querySelector(".bx-log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let e=document.querySelectorAll(".arrow");for(var s=0;s<e.length;s++)e[s].addEventListener("click",d=>{d.target.parentElement.parentElement.classList.toggle("showMenu")});let t=document.querySelector(".sidebar"),r=document.querySelector(".bx-menu");if(r!=null){let d=localStorage.getItem("bar");d=="true"&&t.classList.toggle("close"),r.addEventListener("click",()=>{let i=t.classList.toggle("close");localStorage.setItem("bar",i),d=localStorage.getItem("bar")}),console.log("Bar-Load:",d)}gn<=740&&document.querySelector(".sidebar").classList.add("close");const a=document.querySelector(".profile_name"),o=document.querySelector(".job");let c=G==K?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+c),a!=null&&o!=null){const{email:d,username:i,nombre:u,foto:k,puesto:p,status:P}=await Me(j,"InfoUser");a!=null&&(a.innerHTML=i),o!=null&&(o.innerHTML=p)}}function pn(){setTimeout(function(){G==K&&console.log("btnSidebar Activado"),un()},500)}function vn(n){let e=document.querySelector(".body");e&&(n!=""&&n!="Home"?e.style.display="none":e.style.display="inherit")}function fn(n,e){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700",e+"assets/login/vendor/bootstrap/css/bootstrap.min.css",e+"assets/login/vendor/font-awesome/css/font-awesome.min.css",e+"assets/login/css/font.css",e+"assets/login/css/style.green.css",e+"assets/login/css/custom.css"],t=[e+"assets/login/js/front.js"];n!="app"?(U(s,"appCS-"),F(t,"appJS-")):(H(s,"appCS-"),M(t,"appJS-"));const r=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",e+"assets/tema/css/bootstrap.min.css",e+"assets/tema/css/all.min.css",e+"assets/tema/css/animate.min.css",e+"assets/tema/css/simple-line-icons.min.css",e+"assets/tema/css/owl.carousel.min.css",e+"assets/tema/css/owl.theme.default.min.css",e+"assets/tema/css/magnific-popup.min.css",e+"assets/tema/css/theme.css",e+"assets/tema/css/theme-elements.css",e+"assets/tema/css/theme-blog.css",e+"assets/tema/css/theme-shop.css",e+"assets/tema/css/settings.css",e+"assets/tema/css/layers.css",e+"assets/tema/css/navigation.css",e+"assets/tema/css/demo-business-consulting.css",e+"assets/tema/css/skin-business-consulting.css",e+"assets/tema/css/style.css",e+"assets/font-awesome-4.7.0/css/font-awesome.css"],a=[e+"assets/tema/js/jquery.appear.min.js",e+"assets/tema/js/jquery.easing.min.js",e+"assets/tema/js/jquery.cookie.min.js",e+"assets/tema/js/popper.min.js",e+"assets/tema/js/bootstrap.min.js",e+"assets/tema/js/common.min.js",e+"assets/tema/js/jquery.validate.min.js",e+"assets/tema/js/jquery.easypiechart.min.js",e+"assets/tema/js/jquery.gmap.min.js",e+"assets/tema/js/jquery.lazyload.min.js",e+"assets/tema/js/jquery.isotope.min.js",e+"assets/tema/js/owl.carousel.min.js",e+"assets/tema/js/jquery.magnific-popup.min.js",e+"assets/tema/js/jquery.vide.min.js",e+"assets/tema/js/vivus.min.js",e+"assets/tema/js/theme.js",e+"assets/tema/js/jquery.themepunch.tools.min.js",e+"assets/tema/js/jquery.themepunch.revolution.min.js",e+"assets/tema/js/demo-business-consulting.js",e+"assets/tema/js/custom.js",e+"assets/tema/js/theme.init.js"];n!="Home"?(U(r,"homeCS-"),F(a,"homeJS-")):(H(r,"homeCS-"),M(a,"homeJS-"))}console.log("Firebase SDK");var hn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const T=ge(hn);me(T);const bn=pe(T);ue(T);document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");function yn(){console.log("Cargando App..."),l("db",bn)}const wn=()=>{yn()};function jn(n){const{route:e,mod:s,id:t,base_url:r}=n;l("log","route="+e),Xe(),s&&(vn(s),fn(s,r)),e=="app/index"&&wn(),e=="login/index"&&cn(),e=="logout/index"&&dn(),(e=="dashboard/index"||s=="dashboard"||s=="links")&&pn()}function g(){var n=window,e=document,s=n.location,t=new Date,r=t.getDate();r=r<10?"0"+r:r;var a=t.getMonth()+1;a=a<10?"0"+a:a;var o=t.getFullYear(),c=o+"-"+a+"-"+r;const{protocol:d,host:i,origin:u,pathname:k,hash:p,href:P,search:Y}=s,x=u+"/",Z=u,_=P,Q=Y,S=k.replace("/",""),L=x+S,D=i=="localhost"||i!=y&&i!=w?S+f:f,X=i=="localhost:9001"?"../":"./",ee=x+D,ne=screen.width,se=screen.height;var B="default",re="temas/"+B+"/",te=ze(),R=Je(p,f);let{mod:v,ext:m,id:ae}=Ge(R);var C="/"+m,N=v+C,oe=v||"",ie=m&&m!="index"?"/"+m:"",le="#/"+oe+ie,ce=L+E+N+".html",de=L+E+"404/index.html";return{w:n,d:e,loc:s,dt:t,day:r,mon:a,year:o,fecha:c,title:he,typeBack:be,typeDev:ye,path_hash:f,path_src:V,path_page:E,hostDev:y,hostPre:w,protocol:d,host:i,dominio:x,dominio1:Z,pathname:k,hash:p,URL:_,quest:Q,path_url:S,path_root:D,path_build:X,base_url:L,page_url:ee,screenw:ne,screenh:se,tema:B,path_tema:re,pag_name:te,vars_Url:R,mod:v,ext:m,id:ae,ext2:C,route:N,hash2:le,url_mod:ce,url404:de,apiVer:we}}function W(){const n=g();l("log",n);const{hash:e,mod:s,ext:t,page_url:r,base_url:a,title:o}=n;We(e,s,t,o),jn(n),Ke(e,s,z),_e(s,r),en(s,a)}function kn(){console.log("Run function inicio"),W()}window.addEventListener("hashchange",()=>{l("warn","Event Listener"),W()});kn();
