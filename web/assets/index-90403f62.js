import{getAuth as xr,GoogleAuthProvider as wr,signInWithPopup as Ir,signOut as Lr,onAuthStateChanged as jr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as Sr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Pr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as $r,set as Ar,ref as X,onValue as Tr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();let Rr=window.location;const{pathname:Cr,host:P}=Rr;P!=="localhost"&&P!=="localhost:5173"&&P!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Cr+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:H}=window.location,Er="Vcard",Dr="firebase",k="#/",Z="src/",A=Z+"pages/",qr="vite",C="localhost:5173",E="localhost",Or="https://vcardapp-js.firebaseio.com",f=Or,_r=f+"/v2/api_version";console.log(H+"=="+C,H+"=="+E);console.warn("Api="+f);const Nr=`<div class="container text-center">\r
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
`,Mr=`<div class="container text-center">\r
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
`,Br=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Gr=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Hr=`<div class="container text-center">\r
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
  </div-->`,Ur=`<!--DASHBOARD-->\r
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
`,Fr=`<!--DASHBOARD-->\r
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
`,Wr=`<!--DASHBOARD-->\r
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
`,zr=`<!--DASHBOARD-->\r
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
`,Jr="<!--HOME-->",Yr=`<!--DASHBOARD-->\r
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
  </div-->`,Kr=`<div id="container">\r
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
        <a href="/#/vcard" id="btnContacto" name="contacto"><i class="fa fa-user"></i></a>\r
        <a href="/#/vcard" id="btnUbicacion" name="ubicacion"><i class="fa fa-map-marker"></i></a>\r
        <a href="javascript:accion('compartir')"><i class="fa fa-share-alt"></i></a>\r
        <a href="javascript:accion('guardar')"><i class="fa fa-save"></i></a>\r
        <a href="javascript:accion('acceso')"><i class="fa fa-lock"></i></a>\r
        <!--a href="javascript:accion('contacto')"><i class="fa fa-user"></i></a>\r
        <a href="javascript:accion('ubicacion')"><i class="fa fa-map-marker"></i></a>\r
        <a href="javascript:accion('compartir')"><i class="fa fa-share-alt"></i></a>\r
        <a href="javascript:accion('guardar')"><i class="fa fa-save"></i></a>\r
        <a href="javascript:accion('acceso')"><i class="fa fa-lock"></i></a-->\r
    </div>\r
</div>`,Qr=`<div id="container">\r
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
            <div id="puesto" class="row-div"><?php echo $puesto;?></div>\r
            <div id="des" class="row-div"><?php echo $des;?></div>\r
            <div id="medios">\r
               <a href="tel:'.$cell.'"><i class="fa fa-phone"></i><span>Llamar</span></a>\r
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
            <div id="close">Cerrar <i class="fa fa-times"></i></div>\r
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
        <a id="btnContacto" name="contacto"><i class="fa fa-user"></i></a>\r
        <a id="btnUbicacion" name="ubicacion"><i class="fa fa-map-marker"></i></a>\r
        <a id="btnCompartir" name="compartir"><i class="fa fa-share-alt"></i></a>\r
        <a id="btnGuardar" name="guardar"><i class="fa fa-save"></i></a>\r
        <a id="btnAcceso" name="acceso"><i class="fa fa-lock"></i></a>\r
    </div>\r
</div>`,Xr=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Zr=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,rn="<h1>Categorias</h1>",nn=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,x=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,an=["dashboard","settings","perfil","tarjetas","empresas"],en={forget:Nr,login:Mr,logout:Br,noauth:Gr,registro:Hr,dashboard:Vr,settings:Ur,perfil:Fr,tarjetas:Wr,empresas:zr},rr={Home:Jr,app:Yr,vcard:Kr,profile:Qr,nosotros:x+Xr,productos:x+Zr,categorias:x+rn,contacto:x+nn},nr={...rr,...en},V=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/app/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/app/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/app/empresas"}],sn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,on=n=>{var r=nr[n];return r=r??sn,bn(r)},U=async n=>{try{const r=await fetch(n);if(r.status==200){const s=await r.json();if(s)return s}else console.log("Error 404")}catch(r){console.log(r)}},{hash:Qn,host:tn,year:ln,hostDev:dn,typeBack:ar,apiVer:cn}=m();function pn(){var n=self.location.href,r=n.lastIndexOf("/"),s=n.substring(r+1,n.length);return s}function vn(n,r){var s=n.replace("/"+r,""),e=s.split("/"),a=window.location.search.substring(1),i=a.split("&");return a==""&&(i=["mod="+e[1],"ext="+e[2],"id="+e[3]]),i}function mn(n){for(var r=0;r<n.length;r++){var s=n[r].split("=");if(s[0]=="mod")var e=s[1];if(s[0]=="ext")var a=s[1];if(s[0]=="id")var i=s[1]}return e=e==""?"Home":e.replace("?",""),a=a==""||a=="undefined"?"index":a,i=i==""||i=="undefined"?"":i,{mod:e,ext:a,id:i}}function un(n,r,s,e){let a=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),o=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");s[r]&&(i.classList.remove("d-none"),o.classList.add("d-none"),l.classList.add("d-none"),a!=null&&a!=null&&a!="null"&&a!="undefined"&&(i.classList.add("d-none"),o.classList.remove("d-none"),l.classList.remove("d-none")))}const gn=(n,r,s,e)=>{localStorage.getItem("Token"),c("log","hash=>"+n);let a=s!="index"?" / "+F(s):"";document.title=e+" - "+F(r)+a,fn(r,an);let i=r!="Home"&&s!="index"?s:r;console.log(i,r,s);let o=document.getElementById("app");if(o&&(o.innerHTML="",n))return o.appendChild(on(i))};function fn(n,r){var s=localStorage.getItem("Token");c("log","token="+s);let e=r.length;for(let a=0;a<e;a++)n===r[a]&&c("log","Accceso: "+n+"="+r[a]),n===r[a]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");n=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function bn(n){const r=document.createElement("div");return r.innerHTML=n,r}function hn(n,r){(n==""||n=="undefined")&&(window.location.href=r)}function c(n,r){if(tn==dn)switch(n){case"log":console.log(r);break;case"warn":console.warn(r);break;case"error":console.error(r);break;default:console.log(r);break}}function F(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function T(n,r){if(n.length>0)for(let a=0;a<n.length;a++)if(console.log("load",r+a),document.getElementById(r+a))console.log("Reload Ok: "+r+a);else if(console.log(r+a,n[a]),document.createStyleSheet)document.createStyleSheet(n[a]);else{var s="@import url('"+n[a]+"');",e=document.createElement("link");e.id=r+a,e.rel="stylesheet",e.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(e)}}function R(n,r){for(let s=0;s<n.length;s++){console.log("delete",r+s);let e=document.getElementById(r+s);e&&document.getElementsByTagName("head")[0].removeChild(e)}}function W(n,r,s){if(n.length>0)for(let a=0;a<n.length;a++){console.log("load",r+a);let i=document.getElementById(r+a);if(i&&document.body.removeChild(i),s=="load")if(document.getElementById(r+a))console.log("Reload Ok: "+r+a);else{console.log(r+a,n[a]);var e=document.createElement("script");e.id=r+a,e.src=n[a],document.body.appendChild(e)}}}function z(n,r){if(n.length>0)for(let e=0;e<n.length;e++)if(console.log("load",r+e),document.getElementById(r+e))console.log("Reload Ok: "+r+e);else{console.log(r+e,n[e]);var s=document.createElement("script");s.id=r+e,s.src=n[e],document.body.appendChild(s)}}function J(n,r){for(let s=0;s<n.length;s++){console.log("delete",r+s);let e=document.getElementById(r+s);e&&document.body.removeChild(e)}}function yn(){const n=document.querySelector("#footer_page");n.innerHTML=ln+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.'}function kn(){let n=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var e=document.createElement("div");e.id="load",e.innerHTML=s,n.appendChild(e),setTimeout(()=>{let a=document.getElementById(e.id);a&&n.removeChild(a)},5e3)}function xn(){const{mod:n,ext:r}=m();let s=n!="Home"&&r!="index"?r:n;var e=nr[s];n!="dashboard"&&ar=="firebase"&&n!="logout"&&n!="noauth"&&r=="index"&&e!=null&&kn()}async function wn(n,r){if(ar!="firebase"){if(n=="Home"){const{version:s}=await U(`${r}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const e=await U(cn);if(e&&e!=null){const{ultimate:a}=e.data[0];s!=a&&console.log(`Actualizar version ${n} (${s} => ${a})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}function In(n,r,s){setTimeout(()=>{const e=document.querySelector("#menuList");let a="";if(e){for(let i=0;i<V.length;i++){const{txt:o,icon:l,link:d}=V[i];if((s=="app"||s=="dashboard")&&d!="/#/app"){const t=d=="/"+n||o=="Dashboard"&&r=="app/index"?'class="active"':"";a+=`<li ${t}><a href="${d}"><i class="${l}"></i> ${o}</a></li>`}}e.innerHTML=a}},100)}const Ln=m(),{host:jn,dominio:Sn,path_url:Pn,hostDev:$n,typeBack:An}=Ln;console.log("/* javascript login | VARIABLES CONSTANTES*/");let D=f+"/login/";jn==$n&&An!="firebase"&&console.log("api_login="+D);function Tn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",Rn),console.log("btnLogin Activado"))}function Rn(n){n.preventDefault(),console.log("Validación de Datos");let r=document.getElementById("username").value,s=document.getElementById("password").value;var e={username:r,password:s};const a=D+"index.php";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json()).then(i=>{const{data:o}=i;c("log",i),c("log","getToken:"+o.token),localStorage.setItem("Token",o.token);let l=localStorage.getItem("Token");if(c("log","Res-Token:"+l),l!=null&&l!="undefined")location.href=Sn+Pn+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(i=>{console.log(i);let o=document.getElementById("msj-error");o.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const Cn=()=>{const n=D+"";fetch(n).then(r=>r.json()).then(r=>{c("log",r)}).catch(r=>console.log(r)),setTimeout(function(){Tn()},1e3)};function En(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}m();function Dn(n){let r=document.querySelector(".body");r&&(n!=""&&n!="Home"?r.style.display="none":r.style.display="inherit")}function qn(n,r){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",r+"assets/login/vendor/bootstrap/css/bootstrap.min.css",r+"assets/login/vendor/font-awesome/css/font-awesome.min.css",r+"assets/login/css/font.css",r+"assets/login/css/style.green.css",r+"assets/login/css/custom.css"],e=[r+"assets/login/vendor/popper.js/umd/popper.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",r+"assets/login/vendor/jquery.cookie/jquery.cookie.js",r+"assets/login/vendor/chart.js/Chart.min.js",r+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",r+"assets/login/js/front.js"];n=="app"||n=="dashboard"?(console.log("cssLoadMod-loadStyle",n),T(s,"appCS-"),W(e,"appJS-","load")):(console.log("cssLoadMod-delStyle",n),R(s,"appCS-"),W(e,"appJS-","del"));const a=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",r+"assets/tema/css/bootstrap.min.css",r+"assets/tema/css/all.min.css",r+"assets/tema/css/animate.min.css",r+"assets/tema/css/simple-line-icons.min.css",r+"assets/tema/css/owl.carousel.min.css",r+"assets/tema/css/owl.theme.default.min.css",r+"assets/tema/css/magnific-popup.min.css",r+"assets/tema/css/theme.css",r+"assets/tema/css/theme-elements.css",r+"assets/tema/css/theme-blog.css",r+"assets/tema/css/theme-shop.css",r+"assets/tema/css/settings.css",r+"assets/tema/css/layers.css",r+"assets/tema/css/navigation.css",r+"assets/tema/css/demo-business-consulting.css",r+"assets/tema/css/skin-business-consulting.css",r+"assets/tema/css/style.css",r+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[r+"assets/tema/js/jquery.appear.min.js",r+"assets/tema/js/jquery.easing.min.js",r+"assets/tema/js/jquery.cookie.min.js",r+"assets/tema/js/popper.min.js",r+"assets/tema/js/bootstrap.min.js",r+"assets/tema/js/common.min.js",r+"assets/tema/js/jquery.validate.min.js",r+"assets/tema/js/jquery.easypiechart.min.js",r+"assets/tema/js/jquery.gmap.min.js",r+"assets/tema/js/jquery.lazyload.min.js",r+"assets/tema/js/jquery.isotope.min.js",r+"assets/tema/js/owl.carousel.min.js",r+"assets/tema/js/jquery.magnific-popup.min.js",r+"assets/tema/js/jquery.vide.min.js",r+"assets/tema/js/vivus.min.js",r+"assets/tema/js/theme.js",r+"assets/tema/js/jquery.themepunch.tools.min.js",r+"assets/tema/js/jquery.themepunch.revolution.min.js",r+"assets/tema/js/demo-business-consulting.js",r+"assets/tema/js/custom.js",r+"assets/tema/js/theme.init.js"];n!="Home"?(R(a,"homeCS-"),J(i,"homeJS-")):(T(a,"homeCS-"),z(i,"homeJS-"));const o=["https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es",r+"assets/font-awesome-4.7.0/css/font-awesome.css",r+"assets/vcard/css/style2.css",r+"assets/vcard/css/examples.css",r+"assets/vcard/css/webhost.css"],l=["https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw",r+"assets/vcard/js/gmaps.js"];n!="vcard"?(R(o,"vcardCS-"),J(l,"vcardJS-")):(T(o,"vcardCS-"),z(l,"vcardJS-"))}console.log("Firebase SDK");var On={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const q=Sr(On),O=xr(q),er=$r(q);Pr(q);function _n(n){console.log("saveUser");var r={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};Ar(X(er,"vcard_signup/"+n.uid),r)}function Nn(n){const r=document.querySelector("#photo"),s=document.querySelector("#nombre_session"),e=document.querySelector("#email_session"),a=document.querySelector("#id_code_google"),i=X(er,"vcard_signup/");Tr(i,o=>{const l=o.val();for(let d in l){const t=l[d];if(t.uid==n.uid){console.log(t);const b='<img src="'+(t.foto==null?page_url+"assets/img/sinfoto.png":t.foto)+'" class="img-fluid rounded-circle">',h=t.usuario==null?t.email:t.usuario,w=t.email,I=t.uid;r.innerHTML=b,s.innerHTML=h,e.innerHTML=w,a.innerHTML=I}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const Y=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const r=document.querySelector("#btnRegis"),s=document.querySelector("#btnLogin"),e=document.querySelector(".registro-page"),a=document.querySelector(".login-page"),i=document.querySelector(".dashboard");n?(a.style.display="none",e.style.display="none",i.style.display="block"):(a.style.display="block",i.style.display="none",r&&r.addEventListener("click",()=>{e.style.display="block",a.style.display="none"}),s&&s.addEventListener("click",()=>{e.style.display="none",a.style.display="block"}))};function sr(n,r){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:r==="success"?"green":r==="warning"?"orange":r==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Mn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async r=>{r.preventDefault();const s=new wr;try{const e=await Ir(O,s);console.log(e),console.log("google sign in"),localStorage.setItem("Token",e.user.accessToken);let a=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+a),sr("Welcome "+e.user.displayName,"success")}catch(e){console.log(e)}})}function Bn(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async r=>{r.preventDefault();try{await Lr(O),console.log("Logout/Salir"),localStorage.clear();var s=localStorage.getItem("Token");s==null&&console.warn("TOKEN CLEAR"),sr("Signup out","info")}catch(e){console.log(e)}})}function Gn(){console.log("Cargando App..."),Mn(),Bn(),jr(O,async n=>{if(n){Y(n),Nn(n);try{_n(n)}catch(r){console.log(r)}}else Y(n)}),yn()}const g=()=>{Gn()};function v(n){n!="inicio"?$("#close").show():$("#close").hide(),n=="inicio"?$("#inicio").fadeIn():$("#inicio").hide(),n=="contacto"?$("#contacto").fadeIn():$("#contacto").hide(),n=="ubicacion"?$("#ubicacion").fadeIn():$("#ubicacion").hide(),n=="compartir"?$("#compartir").fadeIn():$("#compartir").hide(),n=="guardar"?$("#guardar").fadeIn():$("#guardar").hide(),n=="acceso"?$("#acceso").fadeIn():$("#acceso").hide()}async function K(n,r){const e=await(await fetch(r)).json();let a=null;for(const i in e)(e[i].profile===n||e[i].ID===n)&&(a=e[i]);return a}const{host:Xn,dominio:Zn,mod:ra,ext:na,id:Q}=m();async function Hn(){console.log(Q);const n=await K(Q,f+"/vcard_vcard.json");console.log("Usuario",n);const{nombre:r,puesto:s,descripcion:e}=n,a=await K(n.idemp,f+"/vcard_vcard_empresas.json");console.log("Empresa",a),v("inicio"),document.querySelector("#tit").innerHTML=r,document.querySelector("#puesto").innerHTML=s,document.querySelector("#des").innerHTML=e;const i=document.querySelector("#close");i&&i.addEventListener("click",()=>{v("inicio")});const o=document.querySelector("#btnContacto");o&&o.addEventListener("click",()=>{v(o.name)});const l=document.querySelector("#btnUbicacion");l&&l.addEventListener("click",()=>{v(l.name)});const d=document.querySelector("#btnCompartir");d&&d.addEventListener("click",()=>{v(d.name)});const t=document.querySelector("#btnGuardar");t&&t.addEventListener("click",()=>{v(t.name)});const p=document.querySelector("#btnAcceso");p&&p.addEventListener("click",()=>{v(p.name)})}function Vn(){setTimeout(()=>{Hn()},500)}function Un(n){const{route:r,hash:s,mod:e,ext:a,id:i,base_url:o}=n;c("log","route="+r),xn(),e&&(Dn(e),qn(e,o)),r=="dashboard/index"&&g(),r=="app/index"&&g(),r=="app/perfil"&&g(),r=="app/tarjetas"&&g(),r=="app/empresas"&&g(),(r=="vcard/index"||r=="vcard/profile")&&Vn(),r=="login/index"&&Cn(),r=="logout/index"&&En(),(e=="app"||e=="dashboard")&&In(s,r,e)}function m(){var n=window,r=document,s=n.location,e=new Date,a=e.getDate();a=a<10?"0"+a:a;var i=e.getMonth()+1;i=i<10?"0"+i:i;var o=e.getFullYear(),l=o+"-"+i+"-"+a;const{protocol:d,host:t,origin:p,pathname:b,hash:h,href:w,search:I}=s,L=p+"/",or=p,tr=w,lr=I,j=b.replace("/",""),S=L+j,_=t=="localhost"||t!=C&&t!=E?j+k:k,dr=t=="localhost:9001"?"../":"./",cr=L+_,pr=screen.width,vr=screen.height;var N="default",mr="temas/"+N+"/",ur=pn(),M=vn(h,k);let{mod:y,ext:u,id:gr}=mn(M);var B="/"+u,G=y+B,fr=y||"",br=u&&u!="index"?"/"+u:"",hr="#/"+fr+br,yr=S+A+G+".html",kr=S+A+"404/index.html";return{w:n,d:r,loc:s,dt:e,day:a,mon:i,year:o,fecha:l,title:Er,typeBack:Dr,typeDev:qr,path_hash:k,path_src:Z,path_page:A,hostDev:C,hostPre:E,protocol:d,host:t,dominio:L,dominio1:or,pathname:b,hash:h,URL:tr,quest:lr,path_url:j,path_root:_,path_build:dr,base_url:S,page_url:cr,screenw:pr,screenh:vr,tema:N,path_tema:mr,pag_name:ur,vars_Url:M,mod:y,ext:u,id:gr,ext2:B,route:G,hash2:hr,url_mod:yr,url404:kr,apiVer:_r}}function ir(){const n=m();c("log",n);const{hash:r,mod:s,ext:e,page_url:a,base_url:i,title:o}=n;gn(r,s,e,o),Un(n),un(r,s,rr),hn(s,a),wn(s,i)}function Fn(){console.log("Run function inicio"),ir()}window.addEventListener("hashchange",()=>{c("warn","Event Listener"),ir()});Fn();
