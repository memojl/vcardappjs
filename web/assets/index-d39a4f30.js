import{getAuth as fn,GoogleAuthProvider as bn,signInWithPopup as hn,signOut as yn,onAuthStateChanged as xn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as kn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as wn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as Ln,set as In,ref as J,onValue as Sn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();let jn=window.location;const{pathname:Pn,host:R}=jn;R!=="localhost"&&R!=="localhost:5173"&&R!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Pn+"sw.js").then(function(r){console.log("Service Worker registro correcto con scope: ",r.scope)}).catch(function(r){console.log("Service Worker registro fallo: ",r)});const{host:y}=window.location,Rn="Vcard",Tn="firebase",b="#/",Y="src/",T=Y+"pages/",qn="vite",x="localhost:5173",k="localhost",q=y==x||y==k?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",Dn=q+"/v2/api_version";console.log(y+"=="+x,y+"=="+k);console.warn("Api="+q);const An=`<div class="container text-center">\r
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
`,Cn=`<div class="container text-center">\r
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
`,Nn=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,On=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,En=`<div class="container text-center">\r
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
`,Mn=`<!--DASHBOARD-->\r
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
          <li class="breadcrumb-item active">Dashboard</li>\r
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
`,_n=`<!--DASHBOARD-->\r
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
`,Bn=`<!--DASHBOARD-->\r
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
                      value="bloques/files/images/photos/sinfoto.png">\r
                    <img id="ima" src="bloques/files/images/photos/sinfoto.png" style="width:150px;" title="sinfoto.png">\r
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
`,Hn=`<!--DASHBOARD-->\r
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
                                  <input type="hidden" class="form-control" id="cover" name="cover" value="bloques/files/images/photos/sinfoto.png">\r
                                  <img id="ima" src="bloques/files/images/photos/sinfoto.png" style="width:150px;" title="sinfoto.png">\r
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
`,Gn=`<!--DASHBOARD-->\r
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
                                 <img id="ima" src="./bloques/files/images/photos/sinlogo.jpg" style="width:150px;border-radius:0%;-moz-border-radius:0%;-webkit-border-radius:0%;" title="sinfoto.png">\r
                                 <div id="upload"><a href="javascript:up(1);">Cambiar Logo</a></div>\r
                             </div>\r
                           </div>                     \r
     \r
                           <div class="form-group">   \r
                             <label for="coverbg">Fondo</label>\r
                             <div id="imagen2">\r
                                 <input type="hidden" class="form-control" id="coverbg" name="coverbg" value="sinbg.jpg">\r
                                 <img id="ima2" src="./bloques/files/images/photos/sinbg.jpg" style="width:150px;" title="sinfoto.png">\r
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
`,Un="<!--HOME-->",Vn=`<!--DASHBOARD-->\r
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
      <!--section class="">\r
          <ul class="list-group posts">\r
          </ul>\r
        </section-->\r
      <section class="no-padding-bottom"></section>\r
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
`,Fn="<h1>Mi tarjeta</h1>",$n=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Jn=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Yn="<h1>Categorias</h1>",zn=`<div class="container text-center">\r
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
</nav>`,Wn=["dashboard","settings","perfil","tarjetas","empresas"],Kn={forget:An,login:Cn,logout:Nn,noauth:On,registro:En,dashboard:Mn,settings:_n,perfil:Bn,tarjetas:Hn,empresas:Gn},z={Home:Un,app:Vn,vcard:Fn,nosotros:h+$n,productos:h+Jn,categorias:h+Yn,contacto:h+zn},W={...z,...Kn},B=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/app/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/app/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/app/empresas"}],Qn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Xn=r=>{var n=W[r];return n=n??Qn,dr(n)},H=async r=>{try{const n=await fetch(r);if(n.status==200){const a=await n.json();if(a)return a}else console.log("Error 404")}catch(n){console.log(n)}},{hash:Vr,host:Zn,year:nr,hostDev:rr,typeBack:K,apiVer:er}=v();function sr(){var r=self.location.href,n=r.lastIndexOf("/"),a=r.substring(n+1,r.length);return a}function ar(r,n){var a=r.replace("/"+n,""),s=a.split("/"),e=window.location.search.substring(1),i=e.split("&");return e==""&&(i=["mod="+s[1],"ext="+s[2],"id="+s[3]]),i}function ir(r){for(var n=0;n<r.length;n++){var a=r[n].split("=");if(a[0]=="mod")var s=a[1];if(a[0]=="ext")var e=a[1];if(a[0]=="id")var i=a[1]}return s=s==""?"Home":s.replace("?",""),e=e==""||e=="undefined"?"index":e,i=i==""||i=="undefined"?"":i,{mod:s,ext:e,id:i}}function or(r,n,a,s){let e=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),o=document.querySelector(".user-activo"),t=document.querySelector(".user-logout");a[n]&&(i.classList.remove("d-none"),o.classList.add("d-none"),t.classList.add("d-none"),e!=null&&e!=null&&e!="null"&&e!="undefined"&&(i.classList.add("d-none"),o.classList.remove("d-none"),t.classList.remove("d-none")))}const tr=(r,n,a,s)=>{localStorage.getItem("Token"),d("log","hash=>"+r);let e=a!="index"?" / "+G(a):"";document.title=s+" - "+G(n)+e,lr(n,Wn);let i=n!="Home"&&a!="index"?a:n,o=document.getElementById("app");if(o&&(o.innerHTML="",r))return o.appendChild(Xn(i))};function lr(r,n){var a=localStorage.getItem("Token");d("log","token="+a);let s=n.length;for(let e=0;e<s;e++)r===n[e]&&d("log","Accceso: "+r+"="+n[e]),r===n[e]&&(a==null||a=="undefined")&&(window.location.href="#/noauth");r=="login"&&a!=null&&a!="undefined"&&(window.location.href="#/dashboard")}function dr(r){const n=document.createElement("div");return n.innerHTML=r,n}function cr(r,n){(r==""||r=="undefined")&&(window.location.href=n)}function d(r,n){if(Zn==rr)switch(r){case"log":console.log(n);break;case"warn":console.warn(n);break;case"error":console.error(n);break;default:console.log(n);break}}function G(r){return r[0].toUpperCase()+r.slice(1).toLowerCase()}function U(r,n){if(r.length>0)for(let e=0;e<r.length;e++)if(console.log("load",n+e),document.getElementById(n+e))console.log("Reload Ok: "+n+e);else if(console.log(n+e,r[e]),document.createStyleSheet)document.createStyleSheet(r[e]);else{var a="@import url('"+r[e]+"');",s=document.createElement("link");s.id=n+e,s.rel="stylesheet",s.href="data:text/css,"+escape(a),document.getElementsByTagName("head")[0].appendChild(s)}}function V(r,n){for(let a=0;a<r.length;a++){console.log("delete",n+a);let s=document.getElementById(n+a);s&&document.getElementsByTagName("head")[0].removeChild(s)}}function F(r,n,a){if(r.length>0)for(let e=0;e<r.length;e++){console.log("load",n+e);let i=document.getElementById(n+e);if(i&&document.body.removeChild(i),a=="load")if(document.getElementById(n+e))console.log("Reload Ok: "+n+e);else{console.log(n+e,r[e]);var s=document.createElement("script");s.id=n+e,s.src=r[e],document.body.appendChild(s)}}}function pr(r,n){if(r.length>0)for(let s=0;s<r.length;s++)if(console.log("load",n+s),document.getElementById(n+s))console.log("Reload Ok: "+n+s);else{console.log(n+s,r[s]);var a=document.createElement("script");a.id=n+s,a.src=r[s],document.body.appendChild(a)}}function mr(r,n){for(let a=0;a<r.length;a++){console.log("delete",n+a);let s=document.getElementById(n+a);s&&document.body.removeChild(s)}}function vr(){const r=document.querySelector("#footer_page");r.innerHTML=nr+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.'}function gr(){let r=document.getElementsByTagName("body")[0],a=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var s=document.createElement("div");s.id="load",s.innerHTML=a,r.appendChild(s),setTimeout(()=>{let e=document.getElementById(s.id);e&&r.removeChild(e)},5e3)}function ur(){const{mod:r,ext:n}=v();let a=r!="Home"&&n!="index"?n:r;var s=W[a];r!="dashboard"&&K=="firebase"&&r!="logout"&&r!="noauth"&&n=="index"&&s!=null&&gr()}async function fr(r,n){if(K!="firebase"){if(r=="Home"){const{version:a}=await H(`${n}assets/pwa/manifest.json`);console.log(`Version Actual: ${a}`);const s=await H(er);if(s&&s!=null){const{ultimate:e}=s.data[0];a!=e&&console.log(`Actualizar version ${r} (${a} => ${e})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}function br(r,n){setTimeout(()=>{const a=document.querySelector("#menuList");let s="";if(a){for(let e=0;e<B.length;e++){const{txt:i,icon:o,link:t}=B[e];if((n=="app"||n=="dashboard")&&t!="/#/app"){const c=t=="/"+r?'class="active"':"";s+=`<li ${c}><a href="${t}"><i class="${o}"></i> ${i}</a></li>`}}a.innerHTML=s}},100)}const hr=v(),{host:yr,dominio:xr,path_url:kr,hostDev:wr,typeBack:Lr}=hr;console.log("/* javascript login | VARIABLES CONSTANTES*/");let D=q+"/login/";yr==wr&&Lr!="firebase"&&console.log("api_login="+D);function Ir(){const r=document.getElementById("form-login");r!=null&&(r.addEventListener("submit",Sr),console.log("btnLogin Activado"))}function Sr(r){r.preventDefault(),console.log("Validación de Datos");let n=document.getElementById("username").value,a=document.getElementById("password").value;var s={username:n,password:a};const e=D+"index.php";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(i=>i.json()).then(i=>{const{data:o}=i;d("log",i),d("log","getToken:"+o.token),localStorage.setItem("Token",o.token);let t=localStorage.getItem("Token");if(d("log","Res-Token:"+t),t!=null&&t!="undefined")location.href=xr+kr+"#/dashboard";else{let c=document.getElementById("msj-error");c.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(i=>{console.log(i);let o=document.getElementById("msj-error");o.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const jr=()=>{const r=D+"";fetch(r).then(n=>n.json()).then(n=>{d("log",n)}).catch(n=>console.log(n)),setTimeout(function(){Ir()},1e3)};function Pr(){console.log("Logout/Salir"),localStorage.clear();var r=localStorage.getItem("Token");r==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}v();function Rr(r){let n=document.querySelector(".body");n&&(r!=""&&r!="Home"?n.style.display="none":n.style.display="inherit")}function Tr(r,n){const a=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",n+"assets/login/vendor/bootstrap/css/bootstrap.min.css",n+"assets/login/vendor/font-awesome/css/font-awesome.min.css",n+"assets/login/css/font.css",n+"assets/login/css/style.green.css",n+"assets/login/css/custom.css"],s=[n+"assets/login/vendor/popper.js/umd/popper.min.js",n+"assets/login/vendor/bootstrap/js/bootstrap.min.js",n+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",n+"assets/login/vendor/jquery.cookie/jquery.cookie.js",n+"assets/login/vendor/chart.js/Chart.min.js",n+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",n+"assets/login/js/front.js"];r=="app"||r=="dashboard"?(console.log("cssLoadMod-loadStyle",r),U(a,"appCS-"),F(s,"appJS-","load")):(console.log("cssLoadMod-delStyle",r),V(a,"appCS-"),F(s,"appJS-","del"));const e=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",n+"assets/tema/css/bootstrap.min.css",n+"assets/tema/css/all.min.css",n+"assets/tema/css/animate.min.css",n+"assets/tema/css/simple-line-icons.min.css",n+"assets/tema/css/owl.carousel.min.css",n+"assets/tema/css/owl.theme.default.min.css",n+"assets/tema/css/magnific-popup.min.css",n+"assets/tema/css/theme.css",n+"assets/tema/css/theme-elements.css",n+"assets/tema/css/theme-blog.css",n+"assets/tema/css/theme-shop.css",n+"assets/tema/css/settings.css",n+"assets/tema/css/layers.css",n+"assets/tema/css/navigation.css",n+"assets/tema/css/demo-business-consulting.css",n+"assets/tema/css/skin-business-consulting.css",n+"assets/tema/css/style.css",n+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[n+"assets/tema/js/jquery.appear.min.js",n+"assets/tema/js/jquery.easing.min.js",n+"assets/tema/js/jquery.cookie.min.js",n+"assets/tema/js/popper.min.js",n+"assets/tema/js/bootstrap.min.js",n+"assets/tema/js/common.min.js",n+"assets/tema/js/jquery.validate.min.js",n+"assets/tema/js/jquery.easypiechart.min.js",n+"assets/tema/js/jquery.gmap.min.js",n+"assets/tema/js/jquery.lazyload.min.js",n+"assets/tema/js/jquery.isotope.min.js",n+"assets/tema/js/owl.carousel.min.js",n+"assets/tema/js/jquery.magnific-popup.min.js",n+"assets/tema/js/jquery.vide.min.js",n+"assets/tema/js/vivus.min.js",n+"assets/tema/js/theme.js",n+"assets/tema/js/jquery.themepunch.tools.min.js",n+"assets/tema/js/jquery.themepunch.revolution.min.js",n+"assets/tema/js/demo-business-consulting.js",n+"assets/tema/js/custom.js",n+"assets/tema/js/theme.init.js"];r!="Home"?(V(e,"homeCS-"),mr(i,"homeJS-")):(U(e,"homeCS-"),pr(i,"homeJS-"))}console.log("Firebase SDK");var qr={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const A=kn(qr),C=fn(A),Q=Ln(A);wn(A);function Dr(r){console.log("saveUser");var n={uid:r.uid,usuario:r.displayName,email:r.email,foto:r.photoURL};In(J(Q,"vcard_signup/"+r.uid),n)}function Ar(r){const n=document.querySelector("#photo"),a=document.querySelector("#nombre_session"),s=document.querySelector("#email_session"),e=document.querySelector("#id_code_google"),i=J(Q,"vcard_signup/");Sn(i,o=>{const t=o.val();for(let c in t){const l=t[c];if(l.uid==r.uid){console.log(l);const g='<img src="'+(l.foto==null?page_url+"bloques/files/images/photos/sinfoto.png":l.foto)+'" class="img-fluid rounded-circle">',u=l.usuario==null?l.email:l.usuario,L=l.email,I=l.uid;n.innerHTML=g,a.innerHTML=u,s.innerHTML=L,e.innerHTML=I}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const $=r=>{console.log("loginCheck"),document.querySelector("#logout-1");const n=document.querySelector("#btnRegis"),a=document.querySelector("#btnLogin"),s=document.querySelector(".registro-page"),e=document.querySelector(".login-page"),i=document.querySelector(".dashboard");r?(e.style.display="none",s.style.display="none",i.style.display="block"):(e.style.display="block",i.style.display="none",n&&n.addEventListener("click",()=>{s.style.display="block",e.style.display="none"}),a&&a.addEventListener("click",()=>{s.style.display="none",e.style.display="block"}))};function X(r,n){Toastify({text:r,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:n==="success"?"green":n==="warning"?"orange":n==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Cr(){const r=document.querySelector("#googleLogin");r&&r.addEventListener("click",async n=>{n.preventDefault();const a=new bn;try{const s=await hn(C,a);console.log(s),console.log("google sign in"),localStorage.setItem("Token",s.user.accessToken);let e=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+e),X("Welcome "+s.user.displayName,"success")}catch(s){console.log(s)}})}function Nr(){const r=document.querySelector("#logout");r&&r.addEventListener("click",async n=>{n.preventDefault();try{await yn(C),console.log("Logout/Salir"),localStorage.clear();var a=localStorage.getItem("Token");a==null&&console.warn("TOKEN CLEAR"),X("Signup out","info")}catch(s){console.log(s)}})}function Or(){console.log("Cargando App..."),Cr(),Nr(),xn(C,async r=>{if(r){$(r),Ar(r);try{Dr(r)}catch(n){console.log(n)}}else $(r)}),vr()}const m=()=>{Or()};function Er(r){const{route:n,hash:a,mod:s,ext:e,id:i,base_url:o}=r;d("log","route="+n),ur(),s&&(Rr(s),Tr(s,o)),n=="dashboard/index"&&m(),n=="app/index"&&m(),n=="app/perfil"&&m(),n=="app/tarjetas"&&m(),n=="app/empresas"&&m(),n=="login/index"&&jr(),n=="logout/index"&&Pr(),(s=="app"||s=="dashboard")&&br(a,s)}function v(){var r=window,n=document,a=r.location,s=new Date,e=s.getDate();e=e<10?"0"+e:e;var i=s.getMonth()+1;i=i<10?"0"+i:i;var o=s.getFullYear(),t=o+"-"+i+"-"+e;const{protocol:c,host:l,origin:w,pathname:g,hash:u,href:L,search:I}=a,S=w+"/",nn=w,rn=L,en=I,j=g.replace("/",""),P=S+j,N=l=="localhost"||l!=x&&l!=k?j+b:b,sn=l=="localhost:9001"?"../":"./",an=S+N,on=screen.width,tn=screen.height;var O="default",ln="temas/"+O+"/",dn=sr(),E=ar(u,b);let{mod:f,ext:p,id:cn}=ir(E);var M="/"+p,_=f+M,pn=f||"",mn=p&&p!="index"?"/"+p:"",vn="#/"+pn+mn,gn=P+T+_+".html",un=P+T+"404/index.html";return{w:r,d:n,loc:a,dt:s,day:e,mon:i,year:o,fecha:t,title:Rn,typeBack:Tn,typeDev:qn,path_hash:b,path_src:Y,path_page:T,hostDev:x,hostPre:k,protocol:c,host:l,dominio:S,dominio1:nn,pathname:g,hash:u,URL:rn,quest:en,path_url:j,path_root:N,path_build:sn,base_url:P,page_url:an,screenw:on,screenh:tn,tema:O,path_tema:ln,pag_name:dn,vars_Url:E,mod:f,ext:p,id:cn,ext2:M,route:_,hash2:vn,url_mod:gn,url404:un,apiVer:Dn}}function Z(){const r=v();d("log",r);const{hash:n,mod:a,ext:s,page_url:e,base_url:i,title:o}=r;tr(n,a,s,o),Er(r),or(n,a,z),cr(a,e),fr(a,i)}function Mr(){console.log("Run function inicio"),Z()}window.addEventListener("hashchange",()=>{d("warn","Event Listener"),Z()});Mr();
