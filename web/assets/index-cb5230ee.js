import{getAuth as br,GoogleAuthProvider as hr,signInWithPopup as yr,signOut as kr,onAuthStateChanged as xr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as wr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Ir}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as Lr,set as jr,ref as z,onValue as Sr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let Pr=window.location;const{pathname:Rr,host:T}=Pr;T!=="localhost"&&T!=="localhost:5173"&&T!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Rr+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:k}=window.location,Tr="Vcard",Ar="firebase",b="#/",Y="src/",A=Y+"pages/",Dr="vite",x="localhost:5173",w="localhost",E=k==x||k==w?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",Cr=E+"/v2/api_version";console.log(k+"=="+x,k+"=="+w);console.warn("Api="+E);const Er=`<div class="container text-center">\r
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
`,Nr=`<div class="container text-center">\r
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
`,qr=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Or=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,_r=`<div class="container text-center">\r
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
`,$r=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--CONTENIDO-->\r
      <div class="page-header">\r
        <div class="container-fluid">\r
          <h2 class="h5 no-margin-bottom">Dashboard</h2>\r
        </div>\r
      </div>\r
      <div class="container-fluid">\r
        <ul class="breadcrumb">\r
          <li class="breadcrumb-item active">Dashboard</li>\r
        </ul>\r
      </div>\r
      <section class="">\r
        <div class="">Nuevos Registros</div>\r
        <ul class="list-group posts">\r
        </ul>\r
      </section>\r
      <section class="no-padding-bottom">\r
        <div class="row">\r
          <div id="lista" class="col-lg-8"></div>\r
        </div>\r
      </section>\r
      <!--/CONTENIDO-->\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>\r
<!--//DASHBOARD-->\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                    />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                    />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                    >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                  >\r
                Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
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
<!--REGISTRO-->\r
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                    />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                    />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                    />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                    >Políticas de Privacidad</a\r
                    ></label\r
                    >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                  Registrar\r
                  </button>\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                    >\r
                  Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
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
  </div-->`,Mr=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
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
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--CONTENIDO-->\r
      <div class="page-header">\r
        <div class="container-fluid">\r
          <h2 class="h5 no-margin-bottom">Dashboard</h2>\r
        </div>\r
      </div>\r
      <div class="container-fluid">\r
        <ul class="breadcrumb">\r
          <li class="breadcrumb-item active">Home</li>\r
        </ul>\r
      </div>\r
      <section class="">\r
        <div class="">Nuevos Registros</div>\r
        <ul class="list-group posts">\r
        </ul>          \r
      </section>\r
      <section class="no-padding-bottom">\r
         <div class="row">\r
           <div id="lista" class="col-lg-8">\r
           </div>  \r
         </div>\r
      </section>\r
      <!--/CONTENIDO-->\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
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
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
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
  </div-->\r
`,Br=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
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
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--CONTENIDO-->\r
      <div class="page-header">\r
        <div class="container-fluid">\r
          <h2 class="h5 no-margin-bottom">Perfil</h2>\r
        </div>\r
      </div>\r
      <div class="container-fluid">\r
        <ul class="breadcrumb">\r
          <li class="breadcrumb-item"><a href="/#/dashboard">Dashboard</a></li>\r
          <li class="breadcrumb-item active"><b>Perfil</b></li>\r
        </ul>\r
      </div>\r
      <section class="">\r
        <ul class="list-group posts">\r
        </ul>\r
      </section>\r
      <section class="no-padding-bottom">\r
        <div class="row">\r
          <div id="myProfile" class="col-lg-8">\r
          </div>\r
        </div>\r
      </section>\r
     \r
      <!-- Modal-->\r
      <div id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" class="modal fade text-left"\r
        style="display: none;" aria-hidden="true">\r
        <div role="document" class="modal-dialog">\r
          <div class="modal-content">\r
            <form id="form3">\r
              <div class="modal-header">\r
                <strong id="exampleModalLabel" class="modal-title">Modificar Perfil</strong>\r
                <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span\r
                    aria-hidden="true">×</span></button>\r
              </div>\r
              <div class="modal-body">\r
                <div class="form-group">\r
                  <label for="cover">Imagen</label>\r
                  <div id="imagen">\r
                    <input type="hidden" class="form-control" id="cover" name="cover"\r
                      value="./assets/img/sinfoto.png">\r
                    <img id="ima" src="./assets/img/sinfoto.png" style="width:150px;" title="sinfoto.png">\r
                    <div id="upload"><a href="javascript:up(1);">Cambiar Foto</a></div>\r
                  </div>\r
                </div>\r
                <div class="form-group">\r
                  <input type="hidden" class="form-control" id="cardId" name="cardId" value="" placeholder="cardId">\r
                </div>\r
                <div class="form-group">\r
                  <input type="hidden" id="uid" name="uid" placeholder="uid" class="form-control">\r
                </div>\r
                <div class="form-group">\r
                  <input type="hidden" id="email" name="email" placeholder="Email" class="form-control">\r
                </div>\r
                <div class="form-group">\r
                  <input type="hidden" class="form-control" id="f_create" name="f_create" value="" placeholder="Creado">\r
                </div>\r
                <div class="form-group">\r
                  <input type="hidden" class="form-control" id="f_update" name="f_update" value="" placeholder="Actualizado">\r
                </div>\r
     \r
                <div class="form-group">\r
                  <label>Nombre</label>\r
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="form-control">\r
                </div>\r
                <div class="form-group">\r
                  <label>Dirección</label>\r
                  <input type="text" id="direc" name="direc" placeholder="Direccion" class="form-control">\r
                </div>\r
                <div class="form-group">\r
                  <label>Telefono</label>\r
                  <input type="text" id="tel" name="tel" placeholder="Telefono" class="form-control">\r
                </div>\r
     \r
                <div class="form-group">\r
                  <label>Nivel</label>\r
                  <input type="text" id="level" name="level" placeholder="Level" class="form-control" value="1">\r
                </div>\r
                <div class="form-group">\r
                  <label>Tipo de Cuenta</label>\r
                  <input type="text" id="tipoc" name="tipoc" placeholder="Tipoc" class="form-control" value="Personal">\r
                </div>\r
                <div class="form-group">\r
                  <label>Código de activación</label>\r
                  <input type="text" id="codi" name="codi" placeholder="Codi" class="form-control">\r
                </div>\r
              </div>\r
              <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>\r
                <button type="submit" class="btn btn-primary guardar" id="Aceptar1">Guardar</button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      </div>\r
      <!--/CONTENIDO-->\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
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
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
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
  </div-->\r
`,Hr=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
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
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
     \r
        <!--CONTENIDO--->\r
\r
        <div class="page-header">\r
          <div class="container-fluid">\r
             <h2 class="h5 no-margin-bottom">Mis Tarjetas</h2>\r
          </div>\r
       </div>\r
       <div class="container-fluid">\r
          <ul class="breadcrumb">\r
             <li class="breadcrumb-item"><a href="/#/dashboard">Dashboard</a></li>\r
             <li class="breadcrumb-item active"><b>Mis Tarjetas</b></li>\r
          </ul>\r
       </div>\r
       <section class="">\r
          <ul class="list-group posts">\r
          </ul>\r
       </section>\r
       <section id="vcontent" class="no-padding-bottom">\r
       </section>\r
       <!-- Modal -->\r
       <div class="modal fade" id="addVcard" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\r
        <div class="modal-dialog modal-lg" role="document">\r
          <div class="modal-content">\r
          <form id="form1">\r
             <div class="modal-header">\r
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-text="true">&times;</span></button>\r
                <h4 class="modal-title" id="gridSystemModalLabel">Registro Vcard</h4>\r
             </div>\r
             <div class="modal-body">\r
                <div class="row">\r
                   <!--div class="col-md-12"-->\r
                   <!-- form start -->\r
                   <div class="box-body">\r
                      <div class="row">\r
                         <div class="col-lg-4 col-md-4 col-xs-4">\r
                            <div class="form-group">   \r
                        <label for="cover">Imagen</label>\r
                        <div id="imagen">\r
                                  <input type="hidden" class="form-control" id="cover" name="cover" value="./assets/img/sinfoto.png">\r
                                  <img id="ima" src="./assets/img/sinfoto.png" style="width:150px;" title="sinfoto.png">\r
                                  <div id="upload"><a href="javascript:up(1);">Cambiar Foto</a></div>\r
                               </div>\r
                     </div>                     \r
                            <!--div class="form-group">\r
                               <label for="descripcion">Descripci&oacute;n</label>\r
                               <textarea class="form-control" id="descripcion" name="descripcion"></textarea>\r
                            </div-->\r
                            <div class="form-group">\r
                               <label for="descripcion">Descripci&oacute;n</label>\r
                               <input type="text" class="form-control" id="descripcion" name="descripcion" value="" placeholder="Descripcion">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="cardId" name="cardId" value="" placeholder="cardId">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="ID" name="ID" value="" placeholder="ID">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="orden" name="orden" value="" placeholder="Orden Descendente">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="uid" name="uid" value="" placeholder="uid">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="f_create" name="f_create" value="" placeholder="Creado">\r
                            </div>\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="f_update" name="f_update" value="" placeholder="Actualizado">\r
                            </div>\r
                            <!--div class="form-group">\r
                               <input type="hidden" class="form-control" id="vcard" name="vcard" value="1" placeholder="vcard">\r
                            </div-->\r
                            <div class="form-group">\r
                               <input type="hidden" class="form-control" id="user" name="user" value="username" placeholder="usuario">\r
                            </div>\r
                            <i class="icon-info" title="Info"></i>*Profile: Escribe un nombre corto para tu tarjeta sin espacios o caracteres especiales. (ejemplo: asanchez)\r
                         </div>\r
                         <div class="col-lg-4 col-md-4 col-xs-4">\r
                            <div class="form-group">\r
                               <label for="profile">Profile*</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-credit-card"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="profile" name="profile" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="nombre">Nombre</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-user"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="nombre" name="nombre" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="puesto">Puesto</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-user-secret"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="puesto" name="puesto" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="email">Email</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-envelope"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="email" class="form-control" id="email" name="email" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="cell">Movil</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-mobile-phone"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="tel" class="form-control" id="cell" name="cell" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="tel_ofi">Tel-Oficina</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-phone"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="tel" class="form-control" id="tel_ofi" name="tel_ofi" value="">\r
                               </div>\r
                            </div>\r
                         </div>\r
                         <div class="col-lg-4 col-md-4 col-xs-4">\r
                            <div class="form-group">\r
                               <label for="empresa">Empresa</label>\r
                               <a href="./empresas"><i class="fa fa-plus"></i> Agregar</a>\r
                               <!--a href="javascript:add_empresa(1);" title="Agregar Empresa"><i class="fa fa-plus"></i></a-->\r
                               <div id="sel_empresa">\r
                                  <div class="input-group">\r
                                     <div class="input-group-prepend">\r
                                        <span class="input-group-text">\r
                                           <i class="fa fa-industry"></i>\r
                                        </span>\r
                                     </div>\r
                                     <select class="form-control" id="idemp" name="idemp">\r
                                        <option>Empresa</option>\r
                                     </select>\r
                                     <!--input type="text" class="form-control" id="empresa" name="empresa" value="" placeholder="Empresa"-->\r
                                  </div>\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="web">Web</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-globe"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="web" name="web" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="fb">Facebook</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-facebook"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="fb" name="fb" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="lk">LinkedIn</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-linkedin"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="lk" name="lk" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label for="ins">Instagram</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-instagram"></i>\r
                                     </span>\r
                                  </div>\r
                                  <input type="text" class="form-control" id="ins" name="ins" value="">\r
                               </div>\r
                            </div>\r
                            <div class="form-group">\r
                               <label>Visible</label>\r
                               <div class="input-group">\r
                                  <div class="input-group-prepend">\r
                                     <span class="input-group-text">\r
                                        <i class="fa fa-eye-slash"></i>\r
                                     </span>\r
                                  </div>\r
                                  <select class="form-control" id="visible" name="visible">\r
                                     <option value="1">Si</option>\r
                                     <option value="0">No</option>                              \r
                                  </select>\r
                                  <div>\r
                                  </div>\r
                               </div>\r
                            </div>\r
                         </div>\r
                         <!-- /.box-body -->\r
                         <div class="box-footer">\r
                         </div>\r
                         <!--/div--><!-- /.col-->            \r
                      </div>\r
                   </div>\r
                   <div class="modal-footer">\r
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>\r
                      <button type="submit" class="btn btn-primary guardar" id="Aceptar1">Guardar</button>\r
                   </div>\r
                </div>\r
             </div>   \r
          </form>\r
          </div>\r
        </div>\r
       </div>\r
       <!-- /Modal -->\r
       <!--div class="btn-mas"-->\r
       <a href="#" class="btn-add" data-toggle="modal" data-target="#addVcard" title="Agregar"><i class="fa fa-plus-circle"></i></a>\r
       <!--/div-->\r
\r
        <!--/CONTENIDO--->\r
 \r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
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
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
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
  </div-->\r
`,Vr=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
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
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--CONTENIDO-->\r
      <div class="page-header">\r
        <div class="container-fluid">\r
          <h2 class="h5 no-margin-bottom">Empresas</h2>\r
        </div>\r
      </div>\r
      <div class="container-fluid">\r
       <ul class="breadcrumb">\r
         <li class="breadcrumb-item"><a href="/#/dashboard">Dashboard</a></li>\r
         <li class="breadcrumb-item active"><b>Empresas</b></li>\r
       </ul>\r
     </div>\r
      <section class="">\r
        <ul class="list-group posts">\r
        </ul>          \r
      </section>\r
      <section id="vcontent" class="no-padding-bottom">\r
      </section>\r
      <!-- Modal -->\r
     <div class="modal fade" id="empresaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\r
       <div class="modal-dialog modal-md" role="document">\r
         <div class="modal-content">\r
         <form id="form2">\r
            <div class="modal-header">\r
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-text="true">&times;</span></button>\r
               <h4 class="modal-title" id="gridSystemModalLabel">Registrar Empresa</h4>\r
            </div>\r
            <div class="modal-body">\r
               <div class="row">\r
                  <!--div class="col-md-12"-->\r
                  <!-- form start -->\r
                  <div class="box-body">\r
                     <div class="row">\r
                        <div class="col-lg-6 col-md-6 col-xs-6">\r
                           <div class="form-group">   \r
                             <label for="cover">Logo</label>\r
                             <div id="imagen">\r
                                 <input type="hidden" class="form-control" id="cover" name="cover" value="sinlogo.jpg">\r
                                 <img id="ima" src="./assets/img/sinlogo.jpg" style="width:150px;border-radius:0%;-moz-border-radius:0%;-webkit-border-radius:0%;" title="sinfoto.png">\r
                                 <div id="upload"><a href="javascript:up(1);">Cambiar Logo</a></div>\r
                             </div>\r
                           </div>                     \r
     \r
                           <div class="form-group">   \r
                             <label for="coverbg">Fondo</label>\r
                             <div id="imagen2">\r
                                 <input type="hidden" class="form-control" id="coverbg" name="coverbg" value="sinbg.jpg">\r
                                 <img id="ima2" src="./assets/img/sinbg.jpg" style="width:150px;" title="sinfoto.png">\r
                                 <div id="upload2"><a href="javascript:up2(1);">Cambiar Fondo</a></div>\r
                             </div>\r
                           </div>\r
     \r
                           <div class="form-group">\r
                              <input type="hidden" class="form-control" id="cardId" name="cardId" value="" placeholder="cardId">\r
                           </div>\r
                           <div class="form-group">\r
                              <input type="hidden" class="form-control" id="ID" name="ID" value="" placeholder="ID">\r
                           </div>\r
                           <div class="form-group">\r
                              <input type="hidden" class="form-control" id="uid" name="uid" value="uid" placeholder="">\r
                           </div>\r
                           <div class="form-group">\r
                              <input type="hidden" class="form-control" id="f_create" name="f_create" value="" placeholder="Creado">\r
                           </div>\r
                           <div class="form-group">\r
                              <input type="hidden" class="form-control" id="f_update" name="f_update" value="" placeholder="Actualizado">\r
                           </div>\r
                           <!--div class="form-group">\r
                              <input type="hidden" class="form-control" id="user" name="user" value="username" placeholder="usuario">\r
                           </div-->\r
                        </div>\r
                        <div class="col-lg-6 col-md-6 col-xs-6">\r
                           <div class="form-group">\r
                              <label for="profile">Nombre de la Empresa</label>\r
                              <div class="input-group">\r
                                 <div class="input-group-prepend">\r
                                    <span class="input-group-text">\r
                                       <i class="fa fa-industry"></i>\r
                                    </span>\r
                                 </div>\r
                                 <input type="text" class="form-control" id="empresa" name="empresa" value="">\r
                              </div>\r
                           </div>\r
     <!--\r
                           <div class="form-group">\r
                             <label>Color picker:</label>\r
                             <input type="text" class="form-control my-colorpicker1 colorpicker-element">\r
                           </div>\r
                           <div class="form-group">\r
                             <label>Color picker with addon:</label>        \r
                             <div class="input-group my-colorpicker2 colorpicker-element">\r
                               <input type="text" class="form-control">        \r
                               <div class="input-group-addon">\r
                                 <i></i>\r
                               </div>\r
                             </div>\r
                           </div>\r
     -->\r
                           <div class="form-group">\r
                              <label for="bg_color">Color Identidad</label>                         \r
                              <div class="input-group">\r
                                 <div class="input-group-prepend">\r
                                    <span class="input-group-text">\r
                                       <i class="fa fa-paint-brush"></i>\r
                                    </span>\r
                                 </div>\r
                                 <select class="form-control" id="bg_color" name="bg_color">\r
                                   <option value="#000000">Negro</option>\r
                                   <option value="#444444">Gris Oscuro</option>\r
                                   <option value="#888888">Gris</option>\r
                                   <option value="#ff0000">Rojo</option>\r
                                   <option value="#0000ff">Azul</option>\r
                                   <option value="#00ff00">Verde</option>\r
                                   <option value="#eedd00">Amarillo</option>\r
                                   <option value="#f8971d">Naranja</option>\r
                                   <option value="#ff00cc">Rosa</option>\r
                                </select>\r
                              </div>\r
                           </div>\r
                           <div class="form-group">\r
                             <label>Visible</label>\r
                             <div class="input-group">\r
                                <div class="input-group-prepend">\r
                                   <span class="input-group-text">\r
                                      <i class="fa fa-eye-slash"></i>\r
                                   </span>\r
                                </div>\r
                                <select class="form-control" id="visible" name="visible">\r
                                   <option value="1">Si</option>\r
                                   <option value="0">No</option>                              \r
                                </select>\r
                                <div>\r
                                </div>\r
                             </div>\r
                          </div>\r
                        </div>\r
                        <!-- /.box-body -->\r
                        <div class="box-footer">\r
                        </div>\r
                        <!--/div--><!-- /.col-->            \r
                     </div>\r
                  </div>\r
                  <div class="modal-footer">\r
                     <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>\r
                     <button type="submit" class="btn btn-primary guardar" id="Aceptar1">Guardar</button>\r
                  </div>\r
               </div>\r
            </div>   \r
         </form>\r
         </div>\r
       </div>\r
      </div>\r
      <!-- /Modal -->\r
      <!--div class="btn-mas"-->\r
      <a href="#" class="btnAdd" data-toggle="modal" data-target="#empresaModal" title="Agregar"><i class="fa fa-plus-circle"></i></a>\r
      <!--/div-->\r
      <!--/CONTENIDO-->\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
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
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
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
  </div-->\r
`,Gr="<!--HOME-->",Ur=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio"/>\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link">\r
              <i class="icon-magnifying-glass-browser"></i>\r
            </a>\r
          </div>\r
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link">\r
              <span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"/>\r
          </div>\r
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
      <ul class="list-unstyled" id="menuList">\r
        <!--li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li-->\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--CONTENIDO-->\r
      <div class="page-header">\r
        <div class="container-fluid">\r
          <h2 class="h5 no-margin-bottom">Dashboard</h2>\r
        </div>\r
      </div>\r
      <div class="container-fluid">\r
        <ul class="breadcrumb">\r
          <li class="breadcrumb-item active">Dashboard</li>\r
        </ul>\r
      </div>\r
      <section class="">\r
        <div class="">Nuevos Registros</div>\r
        <ul class="list-group posts">\r
        </ul>\r
      </section>\r
      <section class="no-padding-bottom">\r
        <div class="row">\r
          <div id="lista" class="col-lg-8"></div>\r
        </div>\r
      </section>\r
      <!--/CONTENIDO-->\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.\r
          </p>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>\r
<!--//DASHBOARD-->\r
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
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                    />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                    />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                    >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                  >\r
                Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
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
<!--REGISTRO-->\r
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
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
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                    />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                    />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                    />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                    >Políticas de Privacidad</a\r
                    ></label\r
                    >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                  Registrar\r
                  </button>\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                    >\r
                  Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
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
  </div-->`,Fr=`<div id="container">\r
    <div id="head" style="background-color: #000">\r
        <?php echo $logo;?>\r
        <img id="logo" src="./assets/img/sinlogo.jpg" alt="">\r
    </div>\r
    <!--div id="portada" style="background: url(<?php echo $coverbg;?>);background-repeat:no-repeat;background-size:cover;background-position:center;"></div-->\r
    <div id="portada"></div>\r
    <div id="base">\r
        <div id="td1">\r
            <div id="contenedorfoto">\r
                <div id="fotoperfil" style="background:url('./assets/img/sinfoto.png');background-repeat: no-repeat; background-size:cover; background-position: center;"></div>				\r
            </div>\r
            <h1 id="tit"><?php echo $nombre;?></h1>\r
            <div class="row-div"><?php echo $puesto;?></div>\r
            <div class="row-div"><?php echo $des;?></div>\r
            <div id="medios">\r
                <?php echo ($cell!='')?'<a href="tel:'.$cell.'"><i class="fa fa-phone"></i><span>Llamar</span></a>':'';?>\r
                <?php echo ($cell!='')?'<a target="_blank" href="https://wa.me/+52'.$cell.'"><i class="fa fa-whatsapp"></i><span>WhatsApp</span></a>':'';?>\r
                <?php echo ($email!='')?'<a href="mailto:'.$email.'"><i class="fa fa-envelope-o"></i><span>E-mail</span></a>':'';?>\r
                <?php echo ($web!='')?'<a href="'.$web.'" id="empresaweb">'.$empresa.'</a>':'';?>						\r
                <div id="redes">\r
<?php\r
if($fb!=''){\r
echo '<a href="'.$fb.'" target="_blank" aria-label="Facebook" class="icon-rrss">\r
<i class="fa fa-facebook"></i>\r
<span>Facebook</span>\r
</a>';\r
}\r
if($tw!=''){\r
echo '<a href="'.$tw.'" target="_blank" aria-label="Twitter" class="icon-rrss">\r
<i class="fa fa-twitter"></i>\r
<span>Twitter</span>\r
</a>';\r
}\r
if($lk!=''){\r
echo '<a href="'.$lk.'" target="_blank" aria-label="LinkedIn" class="icon-rrss">\r
<i class="fa fa-linkedin"></i>\r
<span>LinkedIn</span>\r
</a>';\r
}\r
if($ins!=''){\r
echo '<a href="'.$ins.'" target="_blank" aria-label="Instagram" class="icon-rrss">\r
<i class="fa fa-instagram"></i>\r
<span>Instagram</span>\r
</a>';\r
}\r
?>\r
                </div>\r
            </div>\r
        </div>\r
        <div id="td2">\r
            <div id="close" onclick="accion('inicio');">Cerrar <i class="fa fa-times"></i></div>\r
            <div id="inicio">\r
                <h1><i class="fa fa-home"></i> Inicio</h1>\r
                <div>\r
                    <img src="./assets/vcard/img/concepto1.jpg" class="img-responsive">\r
                    <a href="app/registro">¡Registrate Ahora!</a>\r
                </div>	\r
            </div>\r
            <div id="contacto">\r
                <h1><i class="fa fa-user"></i> Datos de Contacto</h1>\r
                <div>\r
                    <p>Puedes contactar directamente pulsando el icono deseado.</p>\r
                    <p class="text-left"><b>MOVIL:</b> <?php echo $cell;?></p>\r
                    <div id="accesos">\r
                        <a href="tel:<?php echo $cell;?>" aria-label="Llamar" class="icon-access">\r
                            <i class="fa fa-mobile"></i>\r
                            <span>Llamar</span>\r
                        </a>\r
                        <a target="_blank" href="https://wa.me/+52<?php echo $cell;?>" aria-label="WhatsApp" class="icon-access">\r
                            <i class="fa fa-whatsapp"></i>\r
                            <span>WhatsApp</span>\r
                        </a>\r
                        <a href="sms:<?php echo $cell;?>" aria-label="sms" class="icon-access">\r
                            <i class="fa fa-commenting"></i>\r
                            <span>SMS</span>\r
                        </a>\r
                    </div>\r
                    <p class="text-left"><b>EMAIL:</b> <?php echo $email;?></p>\r
                    <div id="accesos">\r
                        <?php\r
                        if($email!=''){\r
                        ?>\r
                        <a href="mailto:<?php echo $email;?>" aria-label="Email" class="icon-access">\r
                            <i class="fa fa-envelope-o"></i>\r
                            <span>Email</span>\r
                        </a>\r
                        <?php\r
                        }\r
                        ?>\r
                    </div>\r
                    <p class="text-left"><b>WEB:</b> <?php echo $web;?></p>\r
                    <div id="accesos">\r
                        <?php\r
                        if($web!=''){\r
                        ?>\r
                        <a target="_blank" href="#" aria-label="Web" class="icon-access">\r
                            <i class="fa fa-globe"></i>\r
                            <span>Web</span>\r
                        </a>	\r
                        <?php\r
                        }\r
                        ?>\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <div id="ubicacion">\r
                <h1><i class="fa fa-map-marker"></i> Ubicación</h1>\r
                <?php if($direc!=''){?>\r
                <p style="font-size: 18px;"><b>Dirección:</b> <?php echo $direc;?></p>\r
                <div id="map"></div>\r
                <?php }else{echo '<p>No hay dirección disponible.<p>';}?>\r
            </div>\r
            <div id="compartir">\r
                <h1><i class="fa fa-share-alt"></i> Compartir</h1>\r
                <div>\r
                    <p>Puedes compartir esta tarjeta fácilmente en cualquiera de los sistemas informados que tengas habilitados en tu dispositivo.</p>\r
                    <p>COMPARTIR EN REDES SOCIALES:</p>\r
                    <div id="accesos">\r
                        <a target="_blank" href="//www.facebook.com/sharer.php?u=<?php echo $page_url.'profile/'.$profile;?>&t=Vcard+<?php echo $profile;?>" aria-label="Facebook" class="icon-access">\r
                            <i class="fa fa-facebook"></i>\r
                            <span>Facebook</span>\r
                        </a>\r
                        <a target="_blank" href="//twitter.com/share?url=<?php echo $page_url.'profile/'.$profile;?>&text=Vcard+<?php echo $profile;?>" aria-label="Twitter" class="icon-access">\r
                            <i class="fa fa-twitter"></i>\r
                            <span>Twitter</span>\r
                        </a>\r
                        <a target="_blank" href="//www.linkedin.com/shareArticle?mini=true&url=<?php echo $page_url.'profile/'.$profile;?>&title=<?php echo $profile;?>&ro=false&summary=&source=" aria-label="LinkedIn" class="icon-access">\r
                            <i class="fa fa-linkedin"></i>\r
                            <span>LinkedIn</span>\r
                        </a>\r
                        <a target="_blank" href="https://api.whatsapp.com/send?text=Accede+a+la+tarjeta+digital+desde+el+siguiente+enlace: <?php echo $page_url.'profile/'.$profile;?>" aria-label="whatsapp" class="icon-access">\r
                            <i class="fa fa-whatsapp"></i>\r
                            <span>WhatsApp</span>\r
                        </a>\r
                    </div>\r
                    <p>OTROS MÉTODOS PARA COMPARTIR:</p>\r
                    <div id="aviso"></div>\r
                    <div id="accesos">\r
                        <a href="javascript:action('viewcopy');" aria-label="Copiar" class="icon-access">\r
                            <i class="fa fa-copy"></i>\r
                            <span>Copiar enlace</span>\r
                        </a>\r
                        <a href="mailto:?body=<?php echo $page_url.'profile/'.$profile;?>" aria-label="Email" class="icon-access">\r
                            <i class="fa fa-envelope-o"></i>\r
                            <span>Enviar email</span>\r
                        </a>\r
                        <div style="position:fixed; bottom:0px">\r
                            <input id="inputCopiar" type="text" value="<?php echo $page_url.'profile/'.$profile;?>">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div id="guardar">\r
                <h1><i class="fa fa-save"></i> Guardar</h1>\r
                <div>\r
                    <p>Elije como guardar la tarjeta de contacto.</p>\r
                    <div id="accesos">\r
                        <a href="<?php echo $page_url.'app/bloques/files/vcf/'.$profile.'.vcf';?>" aria-label="Guardar" class="icon-access">\r
                            <i class="fa fa-address-book-o"></i>\r
                            <span>Guardar Vcard</span>\r
                        </a>\r
                    </div>\r
                </div>\r
            </div>\r
            <div id="acceso">\r
                <h1><i class="fa fa-lock"></i> Acceso</h1>\r
                <div>\r
                    <p>Accede a tu panel de adminisración de tu tarjeta VcardApp.</p>\r
                    <div id="accesos">\r
                        <a href="app/" aria-label="Panel" class="icon-access">\r
                            <i class="fa fa-dashboard"></i>\r
                            <span>Panel</span>\r
                        </a>\r
                        <a href="app/tarjetas" aria-label="MisTarjetas" class="icon-access">\r
                            <i class="fa fa-vcard"></i>\r
                            <span>Tarjetas</span>\r
                        </a>\r
                    </div>\r
                    <p>No tienes cuenta registrate <a href="app/registro">Aquí</a></p>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div id="footerbar">\r
        <a href="javascript:accion('contacto')"><i class="fa fa-user"></i></a>\r
        <a href="javascript:accion('ubicacion')"><i class="fa fa-map-marker"></i></a>\r
        <a href="javascript:accion('compartir')"><i class="fa fa-share-alt"></i></a>\r
        <a href="javascript:accion('guardar')"><i class="fa fa-save"></i></a>\r
        <a href="javascript:accion('acceso')"><i class="fa fa-lock"></i></a>\r
    </div>\r
</div>`,Jr=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Wr=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,zr="<h1>Categorias</h1>",Yr=`<div class="container text-center">\r
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
</nav>`,Kr=["dashboard","settings","perfil","tarjetas","empresas"],Qr={forget:Er,login:Nr,logout:qr,noauth:Or,registro:_r,dashboard:$r,settings:Mr,perfil:Br,tarjetas:Hr,empresas:Vr},K={Home:Gr,app:Ur,vcard:Fr,nosotros:h+Jr,productos:h+Wr,categorias:h+zr,contacto:h+Yr},Q={...K,...Qr},G=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/app/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/app/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/app/empresas"}],Xr=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Zr=n=>{var r=Q[n];return r=r??Xr,pn(r)},U=async n=>{try{const r=await fetch(n);if(r.status==200){const s=await r.json();if(s)return s}else console.log("Error 404")}catch(r){console.log(r)}},{hash:zn,host:rn,year:nn,hostDev:en,typeBack:X,apiVer:an}=m();function sn(){var n=self.location.href,r=n.lastIndexOf("/"),s=n.substring(r+1,n.length);return s}function on(n,r){var s=n.replace("/"+r,""),a=s.split("/"),e=window.location.search.substring(1),i=e.split("&");return e==""&&(i=["mod="+a[1],"ext="+a[2],"id="+a[3]]),i}function tn(n){for(var r=0;r<n.length;r++){var s=n[r].split("=");if(s[0]=="mod")var a=s[1];if(s[0]=="ext")var e=s[1];if(s[0]=="id")var i=s[1]}return a=a==""?"Home":a.replace("?",""),e=e==""||e=="undefined"?"index":e,i=i==""||i=="undefined"?"":i,{mod:a,ext:e,id:i}}function ln(n,r,s,a){let e=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),o=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");s[r]&&(i.classList.remove("d-none"),o.classList.add("d-none"),l.classList.add("d-none"),e!=null&&e!=null&&e!="null"&&e!="undefined"&&(i.classList.add("d-none"),o.classList.remove("d-none"),l.classList.remove("d-none")))}const dn=(n,r,s,a)=>{localStorage.getItem("Token"),d("log","hash=>"+n);let e=s!="index"?" / "+F(s):"";document.title=a+" - "+F(r)+e,cn(r,Kr);let i=r!="Home"&&s!="index"?s:r,o=document.getElementById("app");if(o&&(o.innerHTML="",n))return o.appendChild(Zr(i))};function cn(n,r){var s=localStorage.getItem("Token");d("log","token="+s);let a=r.length;for(let e=0;e<a;e++)n===r[e]&&d("log","Accceso: "+n+"="+r[e]),n===r[e]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");n=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function pn(n){const r=document.createElement("div");return r.innerHTML=n,r}function vn(n,r){(n==""||n=="undefined")&&(window.location.href=r)}function d(n,r){if(rn==en)switch(n){case"log":console.log(r);break;case"warn":console.warn(r);break;case"error":console.error(r);break;default:console.log(r);break}}function F(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function D(n,r){if(n.length>0)for(let e=0;e<n.length;e++)if(console.log("load",r+e),document.getElementById(r+e))console.log("Reload Ok: "+r+e);else if(console.log(r+e,n[e]),document.createStyleSheet)document.createStyleSheet(n[e]);else{var s="@import url('"+n[e]+"');",a=document.createElement("link");a.id=r+e,a.rel="stylesheet",a.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(a)}}function C(n,r){for(let s=0;s<n.length;s++){console.log("delete",r+s);let a=document.getElementById(r+s);a&&document.getElementsByTagName("head")[0].removeChild(a)}}function y(n,r,s){if(n.length>0)for(let e=0;e<n.length;e++){console.log("load",r+e);let i=document.getElementById(r+e);if(i&&document.body.removeChild(i),s=="load")if(document.getElementById(r+e))console.log("Reload Ok: "+r+e);else{console.log(r+e,n[e]);var a=document.createElement("script");a.id=r+e,a.src=n[e],document.body.appendChild(a)}}}function mn(n,r){if(n.length>0)for(let a=0;a<n.length;a++)if(console.log("load",r+a),document.getElementById(r+a))console.log("Reload Ok: "+r+a);else{console.log(r+a,n[a]);var s=document.createElement("script");s.id=r+a,s.src=n[a],document.body.appendChild(s)}}function gn(n,r){for(let s=0;s<n.length;s++){console.log("delete",r+s);let a=document.getElementById(r+s);a&&document.body.removeChild(a)}}function un(){const n=document.querySelector("#footer_page");n.innerHTML=nn+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.'}function fn(){let n=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var a=document.createElement("div");a.id="load",a.innerHTML=s,n.appendChild(a),setTimeout(()=>{let e=document.getElementById(a.id);e&&n.removeChild(e)},5e3)}function bn(){const{mod:n,ext:r}=m();let s=n!="Home"&&r!="index"?r:n;var a=Q[s];n!="dashboard"&&X=="firebase"&&n!="logout"&&n!="noauth"&&r=="index"&&a!=null&&fn()}async function hn(n,r){if(X!="firebase"){if(n=="Home"){const{version:s}=await U(`${r}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const a=await U(an);if(a&&a!=null){const{ultimate:e}=a.data[0];s!=e&&console.log(`Actualizar version ${n} (${s} => ${e})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}function yn(n,r,s){setTimeout(()=>{const a=document.querySelector("#menuList");let e="";if(a){for(let i=0;i<G.length;i++){const{txt:o,icon:l,link:c}=G[i];if((s=="app"||s=="dashboard")&&c!="/#/app"){const t=c=="/"+n||o=="Dashboard"&&r=="app/index"?'class="active"':"";e+=`<li ${t}><a href="${c}"><i class="${l}"></i> ${o}</a></li>`}}a.innerHTML=e}},100)}const kn=m(),{host:xn,dominio:wn,path_url:In,hostDev:Ln,typeBack:jn}=kn;console.log("/* javascript login | VARIABLES CONSTANTES*/");let N=E+"/login/";xn==Ln&&jn!="firebase"&&console.log("api_login="+N);function Sn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",Pn),console.log("btnLogin Activado"))}function Pn(n){n.preventDefault(),console.log("Validación de Datos");let r=document.getElementById("username").value,s=document.getElementById("password").value;var a={username:r,password:s};const e=N+"index.php";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(i=>i.json()).then(i=>{const{data:o}=i;d("log",i),d("log","getToken:"+o.token),localStorage.setItem("Token",o.token);let l=localStorage.getItem("Token");if(d("log","Res-Token:"+l),l!=null&&l!="undefined")location.href=wn+In+"#/dashboard";else{let c=document.getElementById("msj-error");c.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(i=>{console.log(i);let o=document.getElementById("msj-error");o.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const Rn=()=>{const n=N+"";fetch(n).then(r=>r.json()).then(r=>{d("log",r)}).catch(r=>console.log(r)),setTimeout(function(){Sn()},1e3)};function Tn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}m();function An(n){let r=document.querySelector(".body");r&&(n!=""&&n!="Home"?r.style.display="none":r.style.display="inherit")}function Dn(n,r){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",r+"assets/login/vendor/bootstrap/css/bootstrap.min.css",r+"assets/login/vendor/font-awesome/css/font-awesome.min.css",r+"assets/login/css/font.css",r+"assets/login/css/style.green.css",r+"assets/login/css/custom.css"],a=[r+"assets/login/vendor/popper.js/umd/popper.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",r+"assets/login/vendor/jquery.cookie/jquery.cookie.js",r+"assets/login/vendor/chart.js/Chart.min.js",r+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",r+"assets/login/js/front.js"];n=="app"||n=="dashboard"?(console.log("cssLoadMod-loadStyle",n),D(s,"appCS-"),y(a,"appJS-","load")):(console.log("cssLoadMod-delStyle",n),C(s,"appCS-"),y(a,"appJS-","del"));const e=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",r+"assets/tema/css/bootstrap.min.css",r+"assets/tema/css/all.min.css",r+"assets/tema/css/animate.min.css",r+"assets/tema/css/simple-line-icons.min.css",r+"assets/tema/css/owl.carousel.min.css",r+"assets/tema/css/owl.theme.default.min.css",r+"assets/tema/css/magnific-popup.min.css",r+"assets/tema/css/theme.css",r+"assets/tema/css/theme-elements.css",r+"assets/tema/css/theme-blog.css",r+"assets/tema/css/theme-shop.css",r+"assets/tema/css/settings.css",r+"assets/tema/css/layers.css",r+"assets/tema/css/navigation.css",r+"assets/tema/css/demo-business-consulting.css",r+"assets/tema/css/skin-business-consulting.css",r+"assets/tema/css/style.css",r+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[r+"assets/tema/js/jquery.appear.min.js",r+"assets/tema/js/jquery.easing.min.js",r+"assets/tema/js/jquery.cookie.min.js",r+"assets/tema/js/popper.min.js",r+"assets/tema/js/bootstrap.min.js",r+"assets/tema/js/common.min.js",r+"assets/tema/js/jquery.validate.min.js",r+"assets/tema/js/jquery.easypiechart.min.js",r+"assets/tema/js/jquery.gmap.min.js",r+"assets/tema/js/jquery.lazyload.min.js",r+"assets/tema/js/jquery.isotope.min.js",r+"assets/tema/js/owl.carousel.min.js",r+"assets/tema/js/jquery.magnific-popup.min.js",r+"assets/tema/js/jquery.vide.min.js",r+"assets/tema/js/vivus.min.js",r+"assets/tema/js/theme.js",r+"assets/tema/js/jquery.themepunch.tools.min.js",r+"assets/tema/js/jquery.themepunch.revolution.min.js",r+"assets/tema/js/demo-business-consulting.js",r+"assets/tema/js/custom.js",r+"assets/tema/js/theme.init.js"];n!="Home"?(C(e,"homeCS-"),gn(i,"homeJS-")):(D(e,"homeCS-"),mn(i,"homeJS-"));const o=["//fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es",r+"assets/font-awesome-4.7.0/css/font-awesome.css",r+"assets/vcard/css/style2.css",r+"assets/vcard/css/examples.css",r+"assets/vcard/css/webhost.css"],l=["https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw",r+"assets/vcard/js/gmaps.js"];n=="vcard"?(console.log("cssLoadMod-loadStyle",n),D(o,"vcardCS-"),y(l,"vcardJS-","load")):(console.log("cssLoadMod-delStyle",n),C(s,"vcardCS-"),y(a,"vcardJS-","del"))}console.log("Firebase SDK");var Cn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const q=wr(Cn),O=br(q),Z=Lr(q);Ir(q);function En(n){console.log("saveUser");var r={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};jr(z(Z,"vcard_signup/"+n.uid),r)}function Nn(n){const r=document.querySelector("#photo"),s=document.querySelector("#nombre_session"),a=document.querySelector("#email_session"),e=document.querySelector("#id_code_google"),i=z(Z,"vcard_signup/");Sr(i,o=>{const l=o.val();for(let c in l){const t=l[c];if(t.uid==n.uid){console.log(t);const g='<img src="'+(t.foto==null?page_url+"assets/img/sinfoto.png":t.foto)+'" class="img-fluid rounded-circle">',u=t.usuario==null?t.email:t.usuario,L=t.email,j=t.uid;r.innerHTML=g,s.innerHTML=u,a.innerHTML=L,e.innerHTML=j}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const J=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const r=document.querySelector("#btnRegis"),s=document.querySelector("#btnLogin"),a=document.querySelector(".registro-page"),e=document.querySelector(".login-page"),i=document.querySelector(".dashboard");n?(e.style.display="none",a.style.display="none",i.style.display="block"):(e.style.display="block",i.style.display="none",r&&r.addEventListener("click",()=>{a.style.display="block",e.style.display="none"}),s&&s.addEventListener("click",()=>{a.style.display="none",e.style.display="block"}))};function rr(n,r){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:r==="success"?"green":r==="warning"?"orange":r==="info"?"blue":"red"},onClick:function(){}}).showToast()}function qn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async r=>{r.preventDefault();const s=new hr;try{const a=await yr(O,s);console.log(a),console.log("google sign in"),localStorage.setItem("Token",a.user.accessToken);let e=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+e),rr("Welcome "+a.user.displayName,"success")}catch(a){console.log(a)}})}function On(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async r=>{r.preventDefault();try{await kr(O),console.log("Logout/Salir"),localStorage.clear();var s=localStorage.getItem("Token");s==null&&console.warn("TOKEN CLEAR"),rr("Signup out","info")}catch(a){console.log(a)}})}function _n(){console.log("Cargando App..."),qn(),On(),xr(O,async n=>{if(n){J(n),Nn(n);try{En(n)}catch(r){console.log(r)}}else J(n)}),un()}const v=()=>{_n()};async function $n(){const n=await W("Multiportal","https://vcardapp-js.firebaseio.com/vcard_vcard.json");console.log("Usuario",n);const r=await W(n.idemp,"https://vcardapp-js.firebaseio.com/vcard_vcard.json");console.log("Empresa",r),Mn("inicio")}function Mn(n){n!="inicio"?$("#close").show():$("#close").hide(),n=="inicio"?$("#inicio").fadeIn():$("#inicio").hide(),n=="contacto"?$("#contacto").fadeIn():$("#contacto").hide(),n=="ubicacion"?$("#ubicacion").fadeIn():$("#ubicacion").hide(),n=="compartir"?$("#compartir").fadeIn():$("#compartir").hide(),n=="guardar"?$("#guardar").fadeIn():$("#guardar").hide(),n=="acceso"?$("#acceso").fadeIn():$("#acceso").hide()}async function W(n,r){const a=await(await fetch(r)).json();let e=null;for(const i in a)(a[i].nombre===n||a[i].ID===n)&&(e=a[i]);return e}function Bn(){setTimeout(()=>{$n()},500)}function Hn(n){const{route:r,hash:s,mod:a,ext:e,id:i,base_url:o}=n;d("log","route="+r),bn(),a&&(An(a),Dn(a,o)),r=="dashboard/index"&&v(),r=="app/index"&&v(),r=="app/perfil"&&v(),r=="app/tarjetas"&&v(),r=="app/empresas"&&v(),r=="vcard/index"&&Bn(),r=="login/index"&&Rn(),r=="logout/index"&&Tn(),(a=="app"||a=="dashboard")&&yn(s,r,a)}function m(){var n=window,r=document,s=n.location,a=new Date,e=a.getDate();e=e<10?"0"+e:e;var i=a.getMonth()+1;i=i<10?"0"+i:i;var o=a.getFullYear(),l=o+"-"+i+"-"+e;const{protocol:c,host:t,origin:I,pathname:g,hash:u,href:L,search:j}=s,S=I+"/",er=I,ar=L,sr=j,P=g.replace("/",""),R=S+P,_=t=="localhost"||t!=x&&t!=w?P+b:b,ir=t=="localhost:9001"?"../":"./",or=S+_,tr=screen.width,lr=screen.height;var M="default",dr="temas/"+M+"/",cr=sn(),B=on(u,b);let{mod:f,ext:p,id:pr}=tn(B);var H="/"+p,V=f+H,vr=f||"",mr=p&&p!="index"?"/"+p:"",gr="#/"+vr+mr,ur=R+A+V+".html",fr=R+A+"404/index.html";return{w:n,d:r,loc:s,dt:a,day:e,mon:i,year:o,fecha:l,title:Tr,typeBack:Ar,typeDev:Dr,path_hash:b,path_src:Y,path_page:A,hostDev:x,hostPre:w,protocol:c,host:t,dominio:S,dominio1:er,pathname:g,hash:u,URL:ar,quest:sr,path_url:P,path_root:_,path_build:ir,base_url:R,page_url:or,screenw:tr,screenh:lr,tema:M,path_tema:dr,pag_name:cr,vars_Url:B,mod:f,ext:p,id:pr,ext2:H,route:V,hash2:gr,url_mod:ur,url404:fr,apiVer:Cr}}function nr(){const n=m();d("log",n);const{hash:r,mod:s,ext:a,page_url:e,base_url:i,title:o}=n;dn(r,s,a,o),Hn(n),ln(r,s,K),vn(s,e),hn(s,i)}function Vn(){console.log("Run function inicio"),nr()}window.addEventListener("hashchange",()=>{d("warn","Event Listener"),nr()});Vn();
