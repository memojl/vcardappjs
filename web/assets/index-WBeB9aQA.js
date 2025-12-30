import{getAuth as Rr,signOut as br,GoogleAuthProvider as Ar,signInWithPopup as qr,onAuthStateChanged as Dr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as Cr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Er}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as Or,ref as ar,onValue as hr,set as Nr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&e(t)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const{host:dr}=window.location,$r="Vcard",Mr="firebase",D="#/",yr="src/",J=yr+"pages/",Br="vite",Z="localhost:5173",rr="localhost",Hr="https://vcardapp-js.firebaseio.com",E=Hr,Gr=E+"/v2/api_version";console.log(dr+"=="+Z,dr+"=="+rr);console.warn("Api="+E);const Vr=`<div class="container text-center">\r
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
        <a href="/">Inicio</a> | <a href="#/login">Login</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,Ur=`<!--DASHBOARD-->\r
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
            <a href="#/app" class="navbar-brand">\r
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
          <a href="#/app/perfil">\r
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
            <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
                  <a href="/" class="forgot-pass">Inicio</a> |\r
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
                  <a href="/" class="forgot-pass">Inicio</a> |\r
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
    </div-->`,Fr=`<div class="layerLoading">\r
    <!--h1>Logout</h1-->\r
    <img src="./assets/img/loader-green.gif">\r
    <p>Cerrando sesión...</p>\r
    <a href="/">Inicio</a>\r
</div>`,Wr=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="/" class="alert-link">Volver al Inicio</a>\r
</div>`,Yr=`<!--DASHBOARD-->\r
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
            <a href="#/app" class="navbar-brand">\r
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
          <a href="#/app/perfil">\r
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
            <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
                  <h1>Registro</h1>\r
                </div>\r
                <p>"Conectando negocios y profesionales"</p>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Form Panel    -->\r
          <div class="col-lg-6">\r
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
                      id="googleLogin"\r
                      >\r
                    Registrarse con Google\r
                    </button>\r
                  </div>\r
                </form>\r
                <div>\r
                  <a href="/" class="forgot-pass">Inicio</a> |\r
                  <small>¿Ya tienes una cuenta? </small><a href="#/app" id="btnLogin" class="signup">Login</a>\r
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
                  <a href="/" class="forgot-pass">Inicio</a> |\r
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
    </div-->`,Jr=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
          <div id="lista" class="col-lg-10"></div>\r
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
                <a href="/" class="forgot-pass">Inicio</a> |\r
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
                <a href="/" class="forgot-pass">Inicio</a> |\r
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
  </div-->`,zr=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
`,Kr=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
          <li class="breadcrumb-item"><a href="#/dashboard">Dashboard</a></li>\r
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
`,Qr=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
             <li class="breadcrumb-item"><a href="#/dashboard">Dashboard</a></li>\r
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
`,Xr=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
         <li class="breadcrumb-item"><a href="#/dashboard">Dashboard</a></li>\r
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
`,Zr="<!--HOME-->",rn=`<!--DASHBOARD-->\r
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
          <a href="#/app" class="navbar-brand">\r
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
        <a href="#/app/perfil">\r
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
          <a href="#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
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
          <div id="lista" class="col-lg-10"></div>\r
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
                <a href="/" class="forgot-pass">Inicio</a> |\r
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
                <a href="/" class="forgot-pass">Inicio</a> |\r
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
  </div-->`,nn=`<div id="container">\r
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
        <a href="#/vcard" id="btnContacto" name="contacto"><i class="fa fa-user"></i></a>\r
        <a href="#/vcard" id="btnUbicacion" name="ubicacion"><i class="fa fa-map-marker"></i></a>\r
        <a href="javascript:accion('compartir')"><i class="fa fa-share-alt"></i></a>\r
        <a href="javascript:accion('guardar')"><i class="fa fa-save"></i></a>\r
        <a href="javascript:accion('acceso')"><i class="fa fa-lock"></i></a>\r
        <!--a href="javascript:accion('contacto')"><i class="fa fa-user"></i></a>\r
        <a href="javascript:accion('ubicacion')"><i class="fa fa-map-marker"></i></a>\r
        <a href="javascript:accion('compartir')"><i class="fa fa-share-alt"></i></a>\r
        <a href="javascript:accion('guardar')"><i class="fa fa-save"></i></a>\r
        <a href="javascript:accion('acceso')"><i class="fa fa-lock"></i></a-->\r
    </div>\r
</div>`,an=`<div id="container">\r
    <div id="head">\r
        <!--img id="logo" src="./assets/img/sinlogo.png" onerror="this.src='./assets/img/sinlogo.png'" alt="logo"-->\r
    </div>\r
    <div id="portada"></div>\r
    <div id="base">\r
        <div id="td1">\r
            <div id="contenedorfoto">\r
                <div id="fotoperfil" style="background:url('assets/img/sinfoto.png');"></div>				\r
            </div>\r
            <h1 id="tit"></h1>\r
            <div id="puesto" class="row-div"></div>\r
            <div id="des" class="row-div"></div>\r
            <div id="medios"></div>\r
            <div id="redes"></div>\r
        </div>\r
        <div id="td2">\r
            <div id="close">Cerrar <i class="fa fa-times"></i></div>\r
            <div id="inicio">\r
                <h1><i class="fa fa-home"></i> Inicio</h1>\r
                <div>\r
                    <img id="promo" src="" class="img-responsive">\r
                    <a href="#/app/registro">¡Registrate Ahora!</a>\r
                </div>	\r
            </div>\r
            <div id="contacto">\r
                <h1><i class="fa fa-user"></i> Datos de Contacto</h1>\r
                <div>\r
                    <p>Puedes contactar directamente pulsando el icono deseado.</p>\r
                    <p class="text-left"><b>MOVIL:</b> <span></span></p>\r
                    <div id="accesos">\r
                        <a id="a-cell" aria-label="Llamar" class="icon-access">\r
                            <i class="fa fa-mobile"></i>\r
                            <span>Llamar</span>\r
                        </a>\r
                        <a id="a-wa" target="_blank" aria-label="WhatsApp" class="icon-access">\r
                            <i class="fa fa-whatsapp"></i>\r
                            <span>WhatsApp</span>\r
                        </a>\r
                        <a id="a-sms" aria-label="sms" class="icon-access">\r
                            <i class="fa fa-commenting"></i>\r
                            <span>SMS</span>\r
                        </a>\r
                    </div>\r
                    <p class="text-left"><b>EMAIL:</b> <span id="p-e"></span></p>\r
                    <div id="accesos">\r
                        <a id="a-email" aria-label="Email" class="icon-access">\r
                            <i class="fa fa-envelope-o"></i>\r
                            <span>Email</span>\r
                        </a>\r
                    </div>\r
                    <p class="text-left"><b>WEB:</b> <span></span></p>\r
                    <div id="accesos">\r
                        <a id="a-web" target="_blank" aria-label="Web" class="icon-access">\r
                            <i class="fa fa-globe"></i>\r
                            <span>Web</span>\r
                        </a>	\r
                    </div>\r
                </div>\r
            </div>\r
            <div id="ubicacion">\r
                <h1><i class="fa fa-map-marker"></i> Ubicación</h1>\r
                <div id="ubi"></div>\r
                <!--UBICACION-->\r
            </div>\r
            <div id="compartir">\r
                <h1><i class="fa fa-share-alt"></i> Compartir</h1>\r
                <div>\r
                    <p>Puedes compartir esta tarjeta fácilmente en cualquiera de los sistemas informados que tengas habilitados en tu dispositivo.</p>\r
                    <p>COMPARTIR EN REDES SOCIALES:</p>\r
                    <div id="accesos" class="share">\r
                        <!--\r
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
                        -->\r
                    </div>\r
                    <p>OTROS MÉTODOS PARA COMPARTIR:</p>\r
                    <div id="accesos">\r
                        <a id="viewcopy" aria-label="Copiar" class="icon-access">\r
                            <i class="fa fa-copy"></i>\r
                            <span>Copiar enlace</span>\r
                        </a>\r
                        <a id="sendEmail" aria-label="Email" class="icon-access">\r
                            <i class="fa fa-envelope-o"></i>\r
                            <span>Enviar email</span>\r
                        </a>\r
                        <div style="position:fixed; bottom:0px">\r
                            <input id="inputCopiar" type="text" value="">\r
                        </div>\r
                    </div>\r
                    <div id="aviso"></div>\r
                </div>\r
            </div>\r
            <div id="guardar">\r
                <h1><i class="fa fa-save"></i> Guardar</h1>\r
                <div>\r
                    <p>Elije como guardar la tarjeta de contacto.</p>\r
                    <div id="accesos">\r
                        <a id="saveCard" download aria-label="Guardar" class="icon-access">\r
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
                        <a href="#/app/" aria-label="Panel" class="icon-access">\r
                            <i class="fa fa-dashboard"></i>\r
                            <span>Panel</span>\r
                        </a>\r
                        <a href="#/app/tarjetas" aria-label="MisTarjetas" class="icon-access">\r
                            <i class="fa fa-vcard"></i>\r
                            <span>Tarjetas</span>\r
                        </a>\r
                    </div>\r
                    <p>No tienes cuenta registrate <a href="#/app/registro">Aquí</a></p>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div id="footerbar">\r
        <a id="btnContacto" name="contacto"><i id="contacto1" class="fa fa-user"></i></a>\r
        <a id="btnUbicacion" name="ubicacion"><i id="ubicacion1" class="fa fa-map-marker"></i></a>\r
        <a id="btnCompartir" name="compartir"><i id="compartir1" class="fa fa-share-alt"></i></a>\r
        <a id="btnGuardar" name="guardar"><i id="guardar1" class="fa fa-save"></i></a>\r
        <a id="btnAcceso" name="acceso"><i id="acceso1" class="fa fa-lock"></i></a>\r
    </div>\r
</div>`,en=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,sn=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,tn="<h1>Categorias</h1>",on=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,C=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,ln=["dashboard","settings","perfil","tarjetas","empresas"],dn={forget:Vr,login:Ur,logout:Fr,noauth:Wr,registro:Yr,dashboard:Jr,settings:zr,perfil:Kr,tarjetas:Qr,empresas:Xr},kr={Home:Zr,app:rn,vcard:nn,profile:an,nosotros:C+en,productos:C+sn,categorias:C+tn,contacto:C+on},xr={...kr,...dn},cr=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/dashboard/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/dashboard/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/dashboard/empresas"}],cn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,pn=n=>{var r=xr[n];return r=r??cn,wn(r)},{host:vn,year:mn,hostDev:un,typeBack:gn}=f();function fn(){var n=self.location.href,r=n.lastIndexOf("/"),a=n.substring(r+1,n.length);return a}function bn(n,r){var a=n.replace("/"+r,""),e=a.split("/"),s=window.location.search.substring(1),i=s.split("&");return s==""&&(i=["mod="+e[1],"ext="+e[2],"id="+e[3]]),i}function hn(n,r){const a=r?r.split("/"):n.split("/");console.log(a);var e=a[1]===""?"Home":a[1],s=a[2]===""||a[2]===void 0?"index":a[2],i=a[3]===""||a[3]===void 0?"":a[3];return{mod:e,ext:s,id:i}}function yn(n,r,a,e){let s=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),t=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");a[r]&&(i.classList.remove("d-none"),t.classList.add("d-none"),l.classList.add("d-none"),s!=null&&s!=null&&s!="null"&&s!="undefined"&&(i.classList.add("d-none"),t.classList.remove("d-none"),l.classList.remove("d-none")))}const kn=(n,r,a,e,s)=>{localStorage.getItem("Token"),O("log","hash=>"+n);let i=r=="vcard"?"":z(r),t=a!="index"?""+z(a):"",l=e!=""?" / "+z(e):"";document.title=s+" - "+i+t+l,xn(r,ln);let c=r!="Home"&&a!="index"?a:r,o=document.getElementById("app");if(o)return o.innerHTML="",o.appendChild(pn(c))};function xn(n,r){var a=localStorage.getItem("Token");O("log","token="+a);let e=r.length;for(let s=0;s<e;s++)n===r[s]&&O("log","Accceso: "+n+"="+r[s]),n===r[s]&&(a==null||a=="undefined")&&(window.location.href="#/noauth");n=="login"&&a!=null&&a!="undefined"&&(window.location.href="#/dashboard")}function wn(n){const r=document.createElement("div");return r.innerHTML=n,r}function In(n,r){(n==""||n=="undefined")&&(window.location.href=r)}function O(n,r){if(vn==un)switch(n){case"log":console.log(r);break;case"warn":console.warn(r);break;case"error":console.error(r);break;default:console.log(r);break}}function z(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function K(n,r){if(n.length>0){for(let s=0;s<n.length;s++)if(!document.getElementById(r+s))if(document.createStyleSheet)document.createStyleSheet(n[s]);else{var a="@import url('"+n[s]+"');",e=document.createElement("link");e.id=r+s,e.rel="stylesheet",e.href="data:text/css,"+escape(a),document.getElementsByTagName("head")[0].appendChild(e)}}}function Q(n,r){for(let a=0;a<n.length;a++){let e=document.getElementById(r+a);e&&document.getElementsByTagName("head")[0].removeChild(e)}}function pr(n,r,a){if(n.length>0)for(let s=0;s<n.length;s++){let i=document.getElementById(r+s);if(i&&document.body.removeChild(i),a=="load"&&!document.getElementById(r+s)){var e=document.createElement("script");e.id=r+s,e.src=n[s],document.body.appendChild(e)}}}function vr(n,r){if(n.length>0){for(let e=0;e<n.length;e++)if(!document.getElementById(r+e)){var a=document.createElement("script");a.id=r+e,a.src=n[e],document.body.appendChild(a)}}}function mr(n,r){for(let a=0;a<n.length;a++){let e=document.getElementById(r+a);e&&document.body.removeChild(e)}}function Ln(){const n=document.querySelector("#footer_page");n&&(n.innerHTML=mn+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.')}function Sn(){let n=document.getElementsByTagName("body")[0],a=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var e=document.createElement("div");e.id="load",e.innerHTML=a,n.appendChild(e),setTimeout(()=>{let s=document.getElementById(e.id);s&&n.removeChild(s)},5e3)}function _n(){const{mod:n,ext:r}=f();let a=n!="Home"&&r!="index"?r:n;var e=xr[a];n!="dashboard"&&gn=="firebase"&&n!="logout"&&n!="noauth"&&r=="index"&&e!=null&&Sn()}async function Pn(n,r){console.warn("Only Firebase")}function Tn(n,r,a){setTimeout(()=>{const e=document.querySelector("#menuList");let s="";if(e){for(let i=0;i<cr.length;i++){const{txt:t,icon:l,link:c}=cr[i];if((a=="app"||a=="dashboard")&&c!="/#/app"){const o=c=="/"+n||t=="Dashboard"&&r=="app/index"?'class="active"':"";s+=`<li ${o}><a href="${c}"><i class="${l}"></i> ${t}</a></li>`}}e.innerHTML=s}},100)}async function jn(n){try{return(await fetch(n,{method:"HEAD"})).ok}catch(r){return console.error("Error validando imagen:",r),!1}}var Rn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const er=Cr(Rn),N=Rr(er),sr=Or(er);Er(er);function An(n){return new Promise((r,a)=>{const e=ar(sr,n+"/");hr(e,s=>{const i=s.val();r(i)},a)})}function qn(n){console.log("saveUser");var r={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};Nr(ar(sr,"vcard_signup/"+n.uid),r)}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const ur=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const r=document.querySelector("#btnRegis"),a=document.querySelector("#btnLogin"),e=document.querySelector(".registro-page"),s=document.querySelector(".login-page"),i=document.querySelector(".dashboard");n?(s.style.display="none",e.style.display="none",i.style.display="block"):(s.style.display="block",i.style.display="none",r&&r.addEventListener("click",()=>{e.style.display="block",s.style.display="none"}),a&&a.addEventListener("click",()=>{e.style.display="none",s.style.display="block"}))};function Dn(n){const r=document.querySelector("#photo"),a=document.querySelector("#nombre_session"),e=document.querySelector("#email_session"),s=document.querySelector("#id_code_google"),i=ar(sr,"vcard_signup/");hr(i,t=>{const l=t.val();for(let c in l){const o=l[c];if(o.uid==n.uid){console.log(o);const v='<img src="'+(o.foto==null?page_url+"assets/img/sinfoto.png":o.foto)+'" class="img-fluid rounded-circle">',d=o.usuario==null?o.email:o.usuario,w=o.email,b=o.uid;r.innerHTML=v,a.innerHTML=d,e.innerHTML=w,s.innerHTML=b}}})}async function Cn(){console.log("Listar tarjetas");let n="",r="assets/img/sinfoto.png";const a=document.querySelector("#lista"),e=await An("vcard_vcard"),s=Object.entries(e).map(([i,t])=>({key:i,...t}));console.log(s);for(let i=0;i<s.length;i++){const{ID:t,cover:l,profile:c,nombre:o,puesto:p,f_create:v,visible:d}=s[i];d==1&&(n+=`
    <div class="public-user-block block">
      <div class="row d-flex align-items-center">                   
        <div class="col-lg-4 d-flex align-items-center">
          <div class="order">${t}</div>
          <div class="avatar" id="${t}" style="background:url(${l||r});"></div>
          <a href="#/vcard/profile/${c}" class="name">
            <strong class="d-block">${o}</strong>
            <span class="d-block">${c}</span>
          </a>
        </div>
        <div class="col-lg-4 text-center">
          <div class="contributions">${p}</div>
        </div>
        <div class="col-lg-4">
          <div class="details d-flex">
            <div class="item"><i class="fa fa-calendar"></i><strong>${v}</strong></div>
            <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
            <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
            <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
          </div>
        </div>
      </div>
    </div>`,a.innerHTML=n)}for(let i=0;i<s.length;i++){const{ID:t,cover:l,visible:c}=s[i];if(c==1){const o=await jn(l);if(!o){console.warn("Validando imagen para:",l,o);let p=document.getElementById(t);console.log(p,t),p.style.background="url(assets/img/no-disponible.jpg)"}}}}function wr(n,r){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:"green"},onClick:function(){}}).showToast()}function En(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async r=>{r.preventDefault();try{await br(N),console.log("Logout/Salir"),localStorage.clear();var a=localStorage.getItem("Token");a==null&&console.warn("TOKEN CLEAR"),wr("Sesión cerrada","success")}catch(e){console.log(e)}})}function On(){const n=document.referrer;try{br(N),console.log("Logout/Salir",n),localStorage.clear();var r=localStorage.getItem("Token");r==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="/"},3e3))}catch(a){console.log(a)}}function Nn(n){let r=document.querySelector(".body");r&&(n!=""&&n!="Home"?r.style.display="none":r.style.display="inherit")}function $n(n,r){const a=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",r+"assets/login/vendor/bootstrap/css/bootstrap.min.css",r+"assets/login/vendor/font-awesome/css/font-awesome.min.css",r+"assets/login/css/font.css",r+"assets/login/css/style.green.css",r+"assets/login/css/custom.css"],e=[r+"assets/login/vendor/popper.js/umd/popper.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",r+"assets/login/vendor/jquery.cookie/jquery.cookie.js",r+"assets/login/vendor/chart.js/Chart.min.js",r+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",r+"assets/login/js/front.js"];n=="app"||n=="dashboard"||n=="registro"?(console.log("cssLoadMod-loadStyle",n),K(a,"appCS-"),pr(e,"appJS-","load")):(console.log("cssLoadMod-delStyle",n),Q(a,"appCS-"),pr(e,"appJS-","del"));const s=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",r+"assets/tema/css/bootstrap.min.css",r+"assets/tema/css/all.min.css",r+"assets/tema/css/animate.min.css",r+"assets/tema/css/simple-line-icons.min.css",r+"assets/tema/css/owl.carousel.min.css",r+"assets/tema/css/owl.theme.default.min.css",r+"assets/tema/css/magnific-popup.min.css",r+"assets/tema/css/theme.css",r+"assets/tema/css/theme-elements.css",r+"assets/tema/css/theme-blog.css",r+"assets/tema/css/theme-shop.css",r+"assets/tema/css/settings.css",r+"assets/tema/css/layers.css",r+"assets/tema/css/navigation.css",r+"assets/tema/css/demo-business-consulting.css",r+"assets/tema/css/skin-business-consulting.css",r+"assets/tema/css/style.css",r+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[r+"assets/tema/js/jquery.appear.min.js",r+"assets/tema/js/jquery.easing.min.js",r+"assets/tema/js/jquery.cookie.min.js",r+"assets/tema/js/popper.min.js",r+"assets/tema/js/bootstrap.min.js",r+"assets/tema/js/common.min.js",r+"assets/tema/js/jquery.validate.min.js",r+"assets/tema/js/jquery.easypiechart.min.js",r+"assets/tema/js/jquery.gmap.min.js",r+"assets/tema/js/jquery.lazyload.min.js",r+"assets/tema/js/jquery.isotope.min.js",r+"assets/tema/js/owl.carousel.min.js",r+"assets/tema/js/jquery.magnific-popup.min.js",r+"assets/tema/js/jquery.vide.min.js",r+"assets/tema/js/vivus.min.js",r+"assets/tema/js/theme.js",r+"assets/tema/js/jquery.themepunch.tools.min.js",r+"assets/tema/js/jquery.themepunch.revolution.min.js",r+"assets/tema/js/demo-business-consulting.js",r+"assets/tema/js/custom.js",r+"assets/tema/js/theme.init.js"];n!="Home"?(Q(s,"homeCS-"),mr(i,"homeJS-")):(K(s,"homeCS-"),vr(i,"homeJS-"));const t=["https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es",r+"assets/font-awesome-4.7.0/css/font-awesome.css",r+"assets/vcard/css/style2.css",r+"assets/vcard/css/examples.css",r+"assets/vcard/css/webhost.css"],l=["https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw",r+"assets/vcard/js/gmaps.js"];n!="vcard"?(Q(t,"vcardCS-"),mr(l,"vcardJS-")):(K(t,"vcardCS-"),vr(l,"vcardJS-"))}function Mn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async r=>{r.preventDefault();const a=new Ar;try{const e=await qr(N,a);console.log(e),console.log("google sign in"),localStorage.setItem("Token",e.user.accessToken);let s=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+s),wr("Welcome "+e.user.displayName,"success")}catch(e){console.log(e)}})}function Bn(){console.log("Cargando App...");const{mod:n}=f();Mn(),En(),Dr(N,async r=>{if(r){console.log(n),ur(r),Dn(r),(n=="app"||n=="dashboard")&&setTimeout(()=>{Cn()},500);try{qn(r)}catch(a){console.log(a)}}else ur(r)}),Ln()}const g=()=>{Bn()};f();async function gr(n,r){const e=await(await fetch(r)).json();let s=null;for(const i in e)(e[i].profile===n||e[i].ID===n)&&(s=e[i]);return s}function nr(n){n!="inicio"?$("#close").show():$("#close").hide(),n=="inicio"?$("#inicio").fadeIn():$("#inicio").hide(),n=="contacto"?$("#contacto").fadeIn():$("#contacto").hide(),n=="ubicacion"?$("#ubicacion").fadeIn():$("#ubicacion").hide(),n=="compartir"?$("#compartir").fadeIn():$("#compartir").hide(),n=="guardar"?$("#guardar").fadeIn():$("#guardar").hide(),n=="acceso"?$("#acceso").fadeIn():$("#acceso").hide()}function Hn(n){{$("#inputCopiar").select();var r=document.execCommand("copy");r?(console.log("Texto Copiado"),document.getElementById("aviso").innerHTML='<div class="alert alert-success">Texto Copiado!</div>'):console.log("> No copy to clipboard")}}function Gn(){const n=document.querySelector("#footerbar");n&&n.addEventListener("click",r=>{const a=r.target.id.replace("btn","").replace("1","").toLowerCase();a&&a!=""&&nr(a)})}function fr(n,r){var a=new Image;a.src=n,a.addEventListener("load",()=>{console.log("Imagen cargada."),r.style.backgroundImage=`url('${n}')`}),a.addEventListener("error",()=>{console.warn("Error: Fallo carga de imagen.",n)})}const{dominio:Vn,id:Un,URL:X}=f();async function Fn(){const n=encodeURIComponent(X);console.log(n);const r=await gr(Un,E+"/vcard_vcard.json");if(console.log("Usuario",r),r==null){document.querySelector("#container").style.display="none";return}const{nombre:a,profile:e,puesto:s,descripcion:i,fb:t,tw:l,ins:c,lk:o,web:p,email:v,cell:d,tel_ofi:w,cover:b,idemp:h,visible:tr,direc:I}=r,L=await gr(h,E+"/vcard_vcard_empresas.json");console.log("Empresa",L);const{bg_color:y,logo:k,portada:S,empresa:M}=L;nr("inicio"),Gn();const x=document.querySelector("#head");x&&(x.style.backgroundColor=y,x.innerHTML=`<img id="logo" src="${k}" onerror="this.src='assets/img/sinlogo.png'" alt="logo">`);const B=document.querySelector("#portada");console.log("Validando foto de portada"),fr(S,B);const H=document.querySelector("#fotoperfil");console.log("Validando foto de perfil"),fr(b,H),document.querySelector("#tit").innerHTML=a,document.querySelector("#puesto").innerHTML=s,document.querySelector("#des").innerHTML=i;const _=document.querySelector("#medios"),G=d?`<a href="tel:${d}"><i class="fa fa-phone"></i><span>Llamar</span></a>`:"",V=d?`<a target="_blank" href="https://wa.me/+52${d}"><i class="fa fa-whatsapp"></i><span>WhatsApp</span></a>`:"",U=v?`<a href="mailto:${v}"><i class="fa fa-envelope-o"></i><span>E-mail</span></a>`:"",u=p?`<a href="${p}" target="_blank" id="empresaweb">${M}</a>`:"";_.innerHTML=G+V+U+u,document.querySelector("#promo").src=`${Vn}assets/vcard/img/concepto1.jpg`;const m=document.querySelector("#redes"),F=t?`
  <a href="${t}" target="_blank" aria-label="Facebook" class="icon-rrss">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`:"",P=l?`
  <a href="${l}" target="_blank" aria-label="Twitter" class="icon-rrss">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`:"",T=o?`
  <a href="${o}" target="_blank" aria-label="LinkedIn" class="icon-rrss">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`:"",W=c?`
  <a href="${c}" target="_blank" aria-label="Instagram" class="icon-rrss">
    <i class="fa fa-instagram"></i>
    <span>Instagram</span>
  </a>`:"";m.innerHTML=`<div id="medios">${F} ${P} ${T} ${W}</div>`;const j=document.querySelector("#a-cell");d?j.setAttribute("href","tel:"+d):j.style.display="none";const R=document.querySelector("#a-wa");d?R.setAttribute("href","https://wa.me/+52"+d):R.style.display="none";const A=document.querySelector("#a-sms");d?A.setAttribute("href","sms:"+d):A.style.display="none";const q=document.querySelector("#a-email");v?q.setAttribute("href","mailto:"+v):q.style.display="none";const Y=document.querySelector("#a-web");p?Y.setAttribute("href",p):Y.style.display="none";const Lr=document.querySelector("#ubi");Lr.innerHTML=I?`<p style="font-size: 18px;"><b>Dirección:</b> ${I}</p>
  <div id="map"></div>`:"<p>No hay dirección disponible.</p>";const Sr=document.querySelector(".share"),_r=`
  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${n}&t=Vcard+${e}" aria-label="Facebook" class="icon-access">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`,Pr=`
  <a target="_blank" href="//twitter.com/share?url=${n}&text=Vcard+${e}" aria-label="Twitter" class="icon-access">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`,Tr=`
  <a target="_blank" href="//www.linkedin.com/shareArticle?mini=true&url=${n}&title=${e}&ro=false&summary=&source=" aria-label="LinkedIn" class="icon-access">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`,jr=`
  <a target="_blank" href="https://api.whatsapp.com/send?text=Accede+a+la+tarjeta+digital+desde+el+siguiente+enlace:+${n}" aria-label="whatsapp" class="icon-access">
    <i class="fa fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>`;Sr.innerHTML=`${_r}${Pr}${Tr}${jr}`,document.querySelector("#inputCopiar").value=X;const or=document.querySelector("#viewcopy");or&&or.addEventListener("click",()=>{Hn()}),document.querySelector("#sendEmail").href="mailto:?body="+X,document.querySelector("#saveCard").href=`files/vcf/${e}.vcf`;const lr=document.querySelector("#close");lr&&lr.addEventListener("click",()=>{nr("inicio")})}function Wn(){setTimeout(()=>{Fn()},500)}function Yn(n){const{route:r,hash:a,mod:e,base_url:s}=n;O("log","route="+r),_n(),e&&(Nn(e),$n(e,s)),r=="dashboard/index"&&g(),r=="registro/index"&&g(),r=="app/index"&&g(),r=="dashboard/perfil"&&g(),r=="dashboard/tarjetas"&&g(),r=="dashboard/empresas"&&g(),(r=="vcard/index"||r=="vcard/profile")&&Wn(),r=="logout/index"&&On(),(e=="app"||e=="dashboard")&&Tn(a,r,e)}function f(){var n=window,r=document,a=n.location,e=new Date,s=e.getDate();s=s<10?"0"+s:s;var i=e.getMonth()+1;i=i<10?"0"+i:i;var t=e.getFullYear(),l=t+"-"+i+"-"+s;const{protocol:c,host:o,origin:p,pathname:v,hash:d,href:w,search:b}=a,h=p+"/",tr=p,I=w,L=b,y=v.replace("/",""),k=h+y,S=o=="localhost"||o!=Z&&o!=rr?y+D:D,M=o=="localhost:9001"?"../":"./",x=h+S,B=screen.width,H=screen.height;var _="default",G="temas/"+_+"/",V=fn(),U=bn(d,D);let{mod:u,ext:m,id:F}=hn(v,d);var P="/"+m,T=u+P,W=u||"",j=m&&m!="index"?"/"+m:"",R="#/"+W+j,A=k+J+T+".html",q=k+J+"404/index.html";return{w:n,d:r,loc:a,dt:e,day:s,mon:i,year:t,fecha:l,title:$r,typeBack:Mr,typeDev:Br,path_hash:D,path_src:yr,path_page:J,hostDev:Z,hostPre:rr,protocol:c,host:o,dominio:h,dominio1:tr,pathname:v,hash:d,URL:I,quest:L,path_url:y,path_root:S,path_build:M,base_url:k,page_url:x,screenw:B,screenh:H,tema:_,path_tema:G,pag_name:V,vars_Url:U,mod:u,ext:m,id:F,ext2:P,route:T,hash2:R,url_mod:A,url404:q,apiVer:Gr}}function ir(){const n=f();console.log(n);const{hash:r,mod:a,ext:e,id:s,page_url:i,title:t}=n;kn(r,a,e,s,t),Yn(n),yn(r,a,kr),In(a,i),Pn()}function Jn(){console.log("Run function inicio"),ir()}window.addEventListener("hashchange",()=>{ir()});document.addEventListener("click",n=>{const{target:r}=n;r.matches("nav li a")&&(n.preventDefault(),Ir())});const Ir=n=>{n=n||window.event,n.preventDefault(),window.history.pushState({},"",n.target.href),ir()};window.route=Ir;Jn();
