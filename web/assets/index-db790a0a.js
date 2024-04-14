import{getAuth as un,GoogleAuthProvider as vn,signInWithPopup as fn,signOut as hn,onAuthStateChanged as bn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as yn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as kn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as wn,set as jn,ref as G,onValue as Sn}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();let xn=window.location;const{pathname:Ln,host:q}=xn;q!=="localhost"&&q!=="localhost:5173"&&q!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Ln+"sw.js").then(function(e){console.log("Service Worker registro correcto con scope: ",e.scope)}).catch(function(e){console.log("Service Worker registro fallo: ",e)});const{host:b}=window.location,In="Vcard",qn="firebase",f="#/",J="src/",T=J+"pages/",Tn="vite",y="localhost:5173",k="localhost",R=b==y||b==k?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",An=R+"/v2/api_version";console.log(b+"=="+y,b+"=="+k);console.warn("Api="+R);const Rn=`<div class="container text-center">\r
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
`,Pn=`<div class="container text-center">\r
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
`,En=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Cn=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Bn=`<div class="container text-center">\r
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
`,Dn=`<!--DASHBOARD-->\r
<div class="dashboard">\r
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
        <a href="/#/app/perfil">\r
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
        <li><a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a></li>\r
        <li><a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a></li>\r
        <li><a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a></li>\r
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
<!--//DASHBOARD-->`,Mn=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,Nn=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div\r
          class="search-inner d-flex align-items-center justify-content-center"\r
        >\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input\r
                type="search"\r
                id="q"\r
                placeholder="Busque una profesión o negocio"\r
              />\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div\r
        class="container-fluid d-flex align-items-center justify-content-between"\r
      >\r
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
            <i class="fa fa-navicon"></i\r
            ><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link"\r
              ><i class="icon-magnifying-glass-browser"></i\r
            ></a>\r
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
            <a id="logout" href="#" class="nav-link"\r
              ><span class="d-none d-sm-inline">Salir </span\r
              ><i class="icon-logout"></i\r
            ></a>\r
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
            <img\r
              src="./assets/img/sinfoto.png"\r
              class="img-fluid rounded-circle"\r
            />\r
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
      <ul class="list-unstyled">\r
        <li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a>\r
        </li>\r
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
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por\r
            <a target="_blank" href="http://multiportal.com.mx"\r
              >[:MULTIPORTAL:]</a\r
            >.\r
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
`,On="<!--HOME-->",Hn=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div\r
          class="search-inner d-flex align-items-center justify-content-center"\r
        >\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input\r
                type="search"\r
                id="q"\r
                placeholder="Busque una profesión o negocio"\r
              />\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div\r
        class="container-fluid d-flex align-items-center justify-content-between"\r
      >\r
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
            <i class="fa fa-navicon"></i\r
            ><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link"\r
              ><i class="icon-magnifying-glass-browser"></i\r
            ></a>\r
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
            <a id="logout" href="#" class="nav-link"\r
              ><span class="d-none d-sm-inline">Salir </span\r
              ><i class="icon-logout"></i\r
            ></a>\r
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
            <img\r
              src="./assets/img/sinfoto.png"\r
              class="img-fluid rounded-circle"\r
            />\r
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
      <ul class="list-unstyled">\r
        <li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a>\r
        </li>\r
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
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por\r
            <a target="_blank" href="http://multiportal.com.mx"\r
              >[:MULTIPORTAL:]</a\r
            >.\r
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
`,Vn=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Un=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,$n="<h1>Categorias</h1>",Fn=`<div class="container text-center">\r
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
</nav>`,_n=["dashboard","perfil"],Gn={forget:Rn,login:Pn,logout:En,noauth:Cn,registro:Bn,dashboard:Dn,settings:Mn,perfil:Nn},W={Home:On,app:Hn,nosotros:h+Vn,productos:h+Un,categorias:h+$n,contacto:h+Fn},K={...W,...Gn},Jn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Wn=e=>{var n=K[e];return n=n??Jn,ae(n)},H=async e=>{try{const n=await fetch(e);if(n.status==200){const s=await n.json();if(s)return s}else console.log("Error 404")}catch(n){console.log(n)}},{hash:Me,host:Kn,hostDev:zn,typeBack:Yn,apiVer:Qn}=m();function Xn(){var e=self.location.href,n=e.lastIndexOf("/"),s=e.substring(n+1,e.length);return s}function Zn(e,n){var s=e.replace("/"+n,""),a=s.split("/"),r=window.location.search.substring(1),o=r.split("&");return r==""&&(o=["mod="+a[1],"ext="+a[2],"id="+a[3]]),o}function ne(e){for(var n=0;n<e.length;n++){var s=e[n].split("=");if(s[0]=="mod")var a=s[1];if(s[0]=="ext")var r=s[1];if(s[0]=="id")var o=s[1]}return a=a==""?"Home":a.replace("?",""),r=r==""||r=="undefined"?"index":r,o=o==""||o=="undefined"?"":o,{mod:a,ext:r,id:o}}function ee(e,n,s,a){let r=localStorage.getItem("Token");document.querySelector("#menuweb");let o=document.querySelector(".user-login"),t=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");s[n]&&(o.classList.remove("d-none"),t.classList.add("d-none"),l.classList.add("d-none"),r!=null&&r!=null&&r!="null"&&r!="undefined"&&(o.classList.add("d-none"),t.classList.remove("d-none"),l.classList.remove("d-none")))}const re=(e,n,s,a)=>{localStorage.getItem("Token"),c("log","hash=>"+e);let r=s!="index"?" / "+V(s):"";document.title=a+" - "+V(n)+r,se(n,_n);let o=n!="Home"&&s!="index"?s:n,t=document.getElementById("app");if(t&&(t.innerHTML="",e))return t.appendChild(Wn(o))};function se(e,n){var s=localStorage.getItem("Token");c("log","token="+s);let a=n.length;for(let r=0;r<a;r++)e===n[r]&&c("log","Accceso: "+e+"="+n[r]),e===n[r]&&(s==null||s=="undefined")&&(window.location.href="#/noauth");e=="login"&&s!=null&&s!="undefined"&&(window.location.href="#/dashboard")}function ae(e){const n=document.createElement("div");return n.innerHTML=e,n}function oe(e,n){(e==""||e=="undefined")&&(window.location.href=n)}function c(e,n){if(Kn==zn)switch(e){case"log":console.log(n);break;case"warn":console.warn(n);break;case"error":console.error(n);break;default:console.log(n);break}}function V(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}function U(e,n){if(e.length>0)for(let r=0;r<e.length;r++)if(console.log("load",n+r),document.getElementById(n+r))console.log("Reload Ok: "+n+r);else if(console.log(n+r,e[r]),document.createStyleSheet)document.createStyleSheet(e[r]);else{var s="@import url('"+e[r]+"');",a=document.createElement("link");a.id=n+r,a.rel="stylesheet",a.href="data:text/css,"+escape(s),document.getElementsByTagName("head")[0].appendChild(a)}}function $(e,n){for(let s=0;s<e.length;s++){console.log("delete",n+s);let a=document.getElementById(n+s);a&&document.getElementsByTagName("head")[0].removeChild(a)}}function F(e,n,s){if(e.length>0)for(let r=0;r<e.length;r++){console.log("load",n+r);let o=document.getElementById(n+r);if(o&&document.body.removeChild(o),s=="load")if(document.getElementById(n+r))console.log("Reload Ok: "+n+r);else{console.log(n+r,e[r]);var a=document.createElement("script");a.id=n+r,a.src=e[r],document.body.appendChild(a)}}}function te(e,n){if(e.length>0)for(let a=0;a<e.length;a++)if(console.log("load",n+a),document.getElementById(n+a))console.log("Reload Ok: "+n+a);else{console.log(n+a,e[a]);var s=document.createElement("script");s.id=n+a,s.src=e[a],document.body.appendChild(s)}}function ie(e,n){for(let s=0;s<e.length;s++){console.log("delete",n+s);let a=document.getElementById(n+s);a&&document.body.removeChild(a)}}function le(){let e=document.getElementsByTagName("body")[0],s=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var a=document.createElement("div");a.id="load",a.innerHTML=s,e.appendChild(a),setTimeout(()=>{let r=document.getElementById(a.id);r&&e.removeChild(r)},5e3)}function ce(){const{mod:e,ext:n}=m();let s=e!="Home"&&n!="index"?n:e;var a=K[s];e!="logout"&&e!="noauth"&&n=="index"&&a!=null&&le()}async function de(e,n){if(Yn!="firebase"){if(e=="Home"){const{version:s}=await H(`${n}assets/pwa/manifest.json`);console.log(`Version Actual: ${s}`);const a=await H(Qn);if(a&&a!=null){const{ultimate:r}=a.data[0];s!=r&&console.log(`Actualizar version ${e} (${s} => ${r})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}const ge=m(),{host:me,dominio:pe,path_url:ue,hostDev:ve,typeBack:fe}=ge;console.log("/* javascript login | VARIABLES CONSTANTES*/");let P=R+"/login/";me==ve&&fe!="firebase"&&console.log("api_login="+P);function he(){const e=document.getElementById("form-login");e!=null&&(e.addEventListener("submit",be),console.log("btnLogin Activado"))}function be(e){e.preventDefault(),console.log("Validación de Datos");let n=document.getElementById("username").value,s=document.getElementById("password").value;var a={username:n,password:s};const r=P+"index.php";fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(o=>o.json()).then(o=>{const{data:t}=o;c("log",o),c("log","getToken:"+t.token),localStorage.setItem("Token",t.token);let l=localStorage.getItem("Token");if(c("log","Res-Token:"+l),l!=null&&l!="undefined")location.href=pe+ue+"#/dashboard";else{let d=document.getElementById("msj-error");d.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(o=>{console.log(o);let t=document.getElementById("msj-error");t.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const ye=()=>{const e=P+"";fetch(e).then(n=>n.json()).then(n=>{c("log",n)}).catch(n=>console.log(n)),setTimeout(function(){he()},1e3)};function ke(){console.log("Logout/Salir"),localStorage.clear();var e=localStorage.getItem("Token");e==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}m();function we(e){let n=document.querySelector(".body");n&&(e!=""&&e!="Home"?n.style.display="none":n.style.display="inherit")}function je(e,n){const s=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",n+"assets/login/vendor/bootstrap/css/bootstrap.min.css",n+"assets/login/vendor/font-awesome/css/font-awesome.min.css",n+"assets/login/css/font.css",n+"assets/login/css/style.green.css",n+"assets/login/css/custom.css"],a=[n+"assets/login/vendor/popper.js/umd/popper.min.js",n+"assets/login/vendor/bootstrap/js/bootstrap.min.js",n+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",n+"assets/login/vendor/jquery.cookie/jquery.cookie.js",n+"assets/login/vendor/chart.js/Chart.min.js",n+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",n+"assets/login/js/front.js"];e=="app"?(console.log("cssLoadMod-loadStyle",e),U(s,"appCS-"),F(a,"appJS-","load")):(console.log("cssLoadMod-delStyle",e),$(s,"appCS-"),F(a,"appJS-","del"));const r=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",n+"assets/tema/css/bootstrap.min.css",n+"assets/tema/css/all.min.css",n+"assets/tema/css/animate.min.css",n+"assets/tema/css/simple-line-icons.min.css",n+"assets/tema/css/owl.carousel.min.css",n+"assets/tema/css/owl.theme.default.min.css",n+"assets/tema/css/magnific-popup.min.css",n+"assets/tema/css/theme.css",n+"assets/tema/css/theme-elements.css",n+"assets/tema/css/theme-blog.css",n+"assets/tema/css/theme-shop.css",n+"assets/tema/css/settings.css",n+"assets/tema/css/layers.css",n+"assets/tema/css/navigation.css",n+"assets/tema/css/demo-business-consulting.css",n+"assets/tema/css/skin-business-consulting.css",n+"assets/tema/css/style.css",n+"assets/font-awesome-4.7.0/css/font-awesome.css"],o=[n+"assets/tema/js/jquery.appear.min.js",n+"assets/tema/js/jquery.easing.min.js",n+"assets/tema/js/jquery.cookie.min.js",n+"assets/tema/js/popper.min.js",n+"assets/tema/js/bootstrap.min.js",n+"assets/tema/js/common.min.js",n+"assets/tema/js/jquery.validate.min.js",n+"assets/tema/js/jquery.easypiechart.min.js",n+"assets/tema/js/jquery.gmap.min.js",n+"assets/tema/js/jquery.lazyload.min.js",n+"assets/tema/js/jquery.isotope.min.js",n+"assets/tema/js/owl.carousel.min.js",n+"assets/tema/js/jquery.magnific-popup.min.js",n+"assets/tema/js/jquery.vide.min.js",n+"assets/tema/js/vivus.min.js",n+"assets/tema/js/theme.js",n+"assets/tema/js/jquery.themepunch.tools.min.js",n+"assets/tema/js/jquery.themepunch.revolution.min.js",n+"assets/tema/js/demo-business-consulting.js",n+"assets/tema/js/custom.js",n+"assets/tema/js/theme.init.js"];e!="Home"?($(r,"homeCS-"),ie(o,"homeJS-")):(U(r,"homeCS-"),te(o,"homeJS-"))}console.log("Firebase SDK");var Se={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const E=yn(Se),C=un(E),z=wn(E);kn(E);function xe(e){console.log("saveUser");var n={uid:e.uid,usuario:e.displayName,email:e.email,foto:e.photoURL};jn(G(z,"vcard_signup/"+e.uid),n)}function Le(e){const n=document.querySelector("#photo"),s=document.querySelector("#nombre_session"),a=document.querySelector("#email_session"),r=document.querySelector("#id_code_google"),o=G(z,"vcard_signup/");Sn(o,t=>{const l=t.val();for(let d in l){const i=l[d];if(i.uid==e.uid){console.log(i);const p='<img src="'+(i.foto==null?page_url+"bloques/files/images/photos/sinfoto.png":i.foto)+'" class="img-fluid rounded-circle">',u=i.usuario==null?i.email:i.usuario,j=i.email,S=i.uid;n.innerHTML=p,s.innerHTML=u,a.innerHTML=j,r.innerHTML=S}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const _=e=>{console.log("loginCheck"),document.querySelector("#logout-1");const n=document.querySelector("#btnRegis"),s=document.querySelector("#btnLogin"),a=document.querySelector(".registro-page"),r=document.querySelector(".login-page"),o=document.querySelector(".dashboard");e?(r.style.display="none",a.style.display="none",o.style.display="block"):(r.style.display="block",o.style.display="none",n&&n.addEventListener("click",()=>{a.style.display="block",r.style.display="none"}),s&&s.addEventListener("click",()=>{a.style.display="none",r.style.display="block"}))};function Y(e,n){Toastify({text:e,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:n==="success"?"green":n==="warning"?"orange":n==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Ie(){const e=document.querySelector("#googleLogin");e&&e.addEventListener("click",async n=>{n.preventDefault();const s=new vn;try{const a=await fn(C,s);console.log(a),console.log("google sign in"),localStorage.setItem("Token",a.user.accessToken);let r=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+r),Y("Welcome "+a.user.displayName,"success")}catch(a){console.log(a)}})}function qe(){const e=document.querySelector("#logout");e&&e.addEventListener("click",async n=>{n.preventDefault();try{await hn(C),console.log("Logout/Salir"),localStorage.clear();var s=localStorage.getItem("Token");s==null&&console.warn("TOKEN CLEAR"),Y("Signup out","info")}catch(a){console.log(a)}})}function Te(){console.log("Cargando App..."),Ie(),qe(),bn(C,async e=>{if(e){c("log",e),_(e),Le(e);try{xe(e)}catch(n){console.log(n)}}else _(e)})}const A=()=>{Te()};function Ae(e){const{route:n,mod:s,id:a,base_url:r}=e;c("log","route="+n),ce(),s&&(we(s),je(s,r)),n=="app/index"&&A(),n=="app/perfil"&&A(),n=="login/index"&&ye(),n=="logout/index"&&ke(),(n=="dashboard/index"||s=="dashboard"||s=="links")&&A()}function m(){var e=window,n=document,s=e.location,a=new Date,r=a.getDate();r=r<10?"0"+r:r;var o=a.getMonth()+1;o=o<10?"0"+o:o;var t=a.getFullYear(),l=t+"-"+o+"-"+r;const{protocol:d,host:i,origin:w,pathname:p,hash:u,href:j,search:S}=s,x=w+"/",X=w,Z=j,nn=S,L=p.replace("/",""),I=x+L,B=i=="localhost"||i!=y&&i!=k?L+f:f,en=i=="localhost:9001"?"../":"./",rn=x+B,sn=screen.width,an=screen.height;var D="default",on="temas/"+D+"/",tn=Xn(),M=Zn(u,f);let{mod:v,ext:g,id:ln}=ne(M);var N="/"+g,O=v+N,cn=v||"",dn=g&&g!="index"?"/"+g:"",gn="#/"+cn+dn,mn=I+T+O+".html",pn=I+T+"404/index.html";return{w:e,d:n,loc:s,dt:a,day:r,mon:o,year:t,fecha:l,title:In,typeBack:qn,typeDev:Tn,path_hash:f,path_src:J,path_page:T,hostDev:y,hostPre:k,protocol:d,host:i,dominio:x,dominio1:X,pathname:p,hash:u,URL:Z,quest:nn,path_url:L,path_root:B,path_build:en,base_url:I,page_url:rn,screenw:sn,screenh:an,tema:D,path_tema:on,pag_name:tn,vars_Url:M,mod:v,ext:g,id:ln,ext2:N,route:O,hash2:gn,url_mod:mn,url404:pn,apiVer:An}}function Q(){const e=m();c("log",e);const{hash:n,mod:s,ext:a,page_url:r,base_url:o,title:t}=e;re(n,s,a,t),Ae(e),ee(n,s,W),oe(s,r),de(s,o)}function Re(){console.log("Run function inicio"),Q()}window.addEventListener("hashchange",()=>{c("warn","Event Listener"),Q()});Re();
