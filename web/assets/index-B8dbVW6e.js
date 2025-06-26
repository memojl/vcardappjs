import{getAuth as Ar,signOut as yr,GoogleAuthProvider as qr,signInWithPopup as Cr,onAuthStateChanged as Dr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as Er}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Nr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as Or,ref as er,onValue as kr,set as $r}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const{host:pr}=window.location,Mr="Vcard",Br="firebase",D="#/",xr="src/",J=xr+"pages/",Hr="vite",rr="localhost:5173",nr="localhost",Gr="https://vcardapp-js.firebaseio.com",N=Gr,Fr=N+"/v2/api_version";console.log(pr+"=="+rr,pr+"=="+nr);console.warn("Api="+N);const Ur=`<div class="container text-center">\r
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
    </div-->`,Wr=`<div class="layerLoading">\r
    <!--h1>Logout</h1-->\r
    <img src="./assets/img/loader-green.gif">\r
    <p>Cerrando sesión...</p>\r
    <a href="/">Inicio</a>\r
</div>`,Jr=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
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
  </div-->`,Kr=`<!--DASHBOARD-->\r
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
`,Zr=`<!--DASHBOARD-->\r
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
`,rn="<!--HOME-->",nn=`<!--DASHBOARD-->\r
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
  </div-->`,an=`<div id="container">\r
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
</div>`,en=`<div id="container">\r
    <div id="head">\r
        <!--img id="logo" src="./assets/img/sinlogo.png" onerror="this.src='./assets/img/sinlogo.png'" alt="logo"-->\r
    </div>\r
    <div id="portada"></div>\r
    <div id="base">\r
        <div id="td1">\r
            <div id="contenedorfoto">\r
                <div id="fotoperfil" style="background:url('');background-repeat: no-repeat; background-size:cover; background-position: center;"></div>				\r
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
</div>`,sn=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,tn=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,on="<h1>Categorias</h1>",ln=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,E=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,dn=["dashboard","settings","perfil","tarjetas","empresas"],cn={forget:Ur,login:Vr,logout:Wr,noauth:Jr,registro:Yr,dashboard:zr,settings:Kr,perfil:Qr,tarjetas:Zr,empresas:Xr},wr={Home:rn,app:nn,vcard:an,profile:en,nosotros:E+sn,productos:E+tn,categorias:E+on,contacto:E+ln},Lr={...wr,...cn},vr=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/dashboard/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/dashboard/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/dashboard/empresas"}],pn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,vn=n=>{var r=Lr[n];return r=r??pn,Ln(r)},{host:mn,year:un,hostDev:gn,typeBack:fn}=f();function bn(){var n=self.location.href,r=n.lastIndexOf("/"),e=n.substring(r+1,n.length);return e}function hn(n,r){var e=n.replace("/"+r,""),a=e.split("/"),s=window.location.search.substring(1),i=s.split("&");return s==""&&(i=["mod="+a[1],"ext="+a[2],"id="+a[3]]),i}function yn(n,r){const e=r?r.split("/"):n.split("/");console.log(e);var a=e[1]===""?"Home":e[1],s=e[2]===""||e[2]===void 0?"index":e[2],i=e[3]===""||e[3]===void 0?"":e[3];return{mod:a,ext:s,id:i}}function kn(n,r,e,a){let s=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),t=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");e[r]&&(i.classList.remove("d-none"),t.classList.add("d-none"),l.classList.add("d-none"),s!=null&&s!=null&&s!="null"&&s!="undefined"&&(i.classList.add("d-none"),t.classList.remove("d-none"),l.classList.remove("d-none")))}const xn=(n,r,e,a,s)=>{localStorage.getItem("Token"),O("log","hash=>"+n);let i=r=="vcard"?"":Y(r),t=e!="index"?""+Y(e):"",l=a!=""?" / "+Y(a):"";document.title=s+" - "+i+t+l,wn(r,dn);let c=r!="Home"&&e!="index"?e:r,o=document.getElementById("app");if(o)return o.innerHTML="",o.appendChild(vn(c))};function wn(n,r){var e=localStorage.getItem("Token");O("log","token="+e);let a=r.length;for(let s=0;s<a;s++)n===r[s]&&O("log","Accceso: "+n+"="+r[s]),n===r[s]&&(e==null||e=="undefined")&&(window.location.href="#/noauth");n=="login"&&e!=null&&e!="undefined"&&(window.location.href="#/dashboard")}function Ln(n){const r=document.createElement("div");return r.innerHTML=n,r}function In(n,r){(n==""||n=="undefined")&&(window.location.href=r)}function O(n,r){if(mn==gn)switch(n){case"log":console.log(r);break;case"warn":console.warn(r);break;case"error":console.error(r);break;default:console.log(r);break}}function Y(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function z(n,r){if(n.length>0){for(let s=0;s<n.length;s++)if(!document.getElementById(r+s))if(document.createStyleSheet)document.createStyleSheet(n[s]);else{var e="@import url('"+n[s]+"');",a=document.createElement("link");a.id=r+s,a.rel="stylesheet",a.href="data:text/css,"+escape(e),document.getElementsByTagName("head")[0].appendChild(a)}}}function K(n,r){for(let e=0;e<n.length;e++){let a=document.getElementById(r+e);a&&document.getElementsByTagName("head")[0].removeChild(a)}}function mr(n,r,e){if(n.length>0)for(let s=0;s<n.length;s++){let i=document.getElementById(r+s);if(i&&document.body.removeChild(i),e=="load"&&!document.getElementById(r+s)){var a=document.createElement("script");a.id=r+s,a.src=n[s],document.body.appendChild(a)}}}function ur(n,r){if(n.length>0){for(let a=0;a<n.length;a++)if(!document.getElementById(r+a)){var e=document.createElement("script");e.id=r+a,e.src=n[a],document.body.appendChild(e)}}}function gr(n,r){for(let e=0;e<n.length;e++){let a=document.getElementById(r+e);a&&document.body.removeChild(a)}}function Sn(){const n=document.querySelector("#footer_page");n&&(n.innerHTML=un+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.')}function _n(){let n=document.getElementsByTagName("body")[0],e=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var a=document.createElement("div");a.id="load",a.innerHTML=e,n.appendChild(a),setTimeout(()=>{let s=document.getElementById(a.id);s&&n.removeChild(s)},5e3)}function Pn(){const{mod:n,ext:r}=f();let e=n!="Home"&&r!="index"?r:n;var a=Lr[e];n!="dashboard"&&fn=="firebase"&&n!="logout"&&n!="noauth"&&r=="index"&&a!=null&&_n()}async function jn(n,r){console.warn("Only Firebase")}function Tn(n,r,e){setTimeout(()=>{const a=document.querySelector("#menuList");let s="";if(a){for(let i=0;i<vr.length;i++){const{txt:t,icon:l,link:c}=vr[i];if((e=="app"||e=="dashboard")&&c!="/#/app"){const o=c=="/"+n||t=="Dashboard"&&r=="app/index"?'class="active"':"";s+=`<li ${o}><a href="${c}"><i class="${l}"></i> ${t}</a></li>`}}a.innerHTML=s}},100)}var Rn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const sr=Er(Rn),M=Ar(sr),ir=Or(sr);Nr(sr);function An(n){return new Promise((r,e)=>{const a=er(ir,n+"/");kr(a,s=>{const i=s.val();r(i)},e)})}function qn(n){console.log("saveUser");var r={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};$r(er(ir,"vcard_signup/"+n.uid),r)}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const fr=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const r=document.querySelector("#btnRegis"),e=document.querySelector("#btnLogin"),a=document.querySelector(".registro-page"),s=document.querySelector(".login-page"),i=document.querySelector(".dashboard");n?(s.style.display="none",a.style.display="none",i.style.display="block"):(s.style.display="block",i.style.display="none",r&&r.addEventListener("click",()=>{a.style.display="block",s.style.display="none"}),e&&e.addEventListener("click",()=>{a.style.display="none",s.style.display="block"}))};function Cn(n){const r=document.querySelector("#photo"),e=document.querySelector("#nombre_session"),a=document.querySelector("#email_session"),s=document.querySelector("#id_code_google"),i=er(ir,"vcard_signup/");kr(i,t=>{const l=t.val();for(let c in l){const o=l[c];if(o.uid==n.uid){console.log(o);const p='<img src="'+(o.foto==null?page_url+"assets/img/sinfoto.png":o.foto)+'" class="img-fluid rounded-circle">',d=o.usuario==null?o.email:o.usuario,w=o.email,b=o.uid;r.innerHTML=p,e.innerHTML=d,a.innerHTML=w,s.innerHTML=b}}})}async function Dn(){console.log("Listar tarjetas");var n="";let r="assets/img/sinfoto.png";const e=document.querySelector("#lista"),a=await An("vcard_vcard");console.log(a);for(const[s,i]of Object.entries(a)){const{ID:t,cover:l,profile:c,nombre:o,puesto:v,f_create:p,visible:d}=i;d==1&&(console.log("Validando imagen para:",l),n+=`
    <div class="public-user-block block">
      <div class="row d-flex align-items-center">                   
        <div class="col-lg-4 d-flex align-items-center">
          <div class="order">${t}</div>
          <div class="avatar" style="background:url(${r});background-repeat:no-repeat;background-size:cover;background-position:center;"></div>
          
          <a href="/profile/${c}" class="name">
            <strong class="d-block">${o}</strong>
            <span class="d-block">${c}</span>
          </a>
        </div>
        <div class="col-lg-4 text-center">
          <div class="contributions">${v}</div>
        </div>
        <div class="col-lg-4">
          <div class="details d-flex">
            <div class="item"><i class="fa fa-calendar"></i><strong>${p}</strong></div>
            <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
            <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
            <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
          </div>
        </div>
      </div>
    </div>`,e.innerHTML=n)}}function Ir(n,r){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:"green"},onClick:function(){}}).showToast()}function En(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async r=>{r.preventDefault();try{await yr(M),console.log("Logout/Salir"),localStorage.clear();var e=localStorage.getItem("Token");e==null&&console.warn("TOKEN CLEAR"),Ir("Sesión cerrada","success")}catch(a){console.log(a)}})}function Nn(){const n=document.referrer;try{yr(M),console.log("Logout/Salir",n),localStorage.clear();var r=localStorage.getItem("Token");r==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="/"},3e3))}catch(e){console.log(e)}}function On(n){let r=document.querySelector(".body");r&&(n!=""&&n!="Home"?r.style.display="none":r.style.display="inherit")}function $n(n,r){const e=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",r+"assets/login/vendor/bootstrap/css/bootstrap.min.css",r+"assets/login/vendor/font-awesome/css/font-awesome.min.css",r+"assets/login/css/font.css",r+"assets/login/css/style.green.css",r+"assets/login/css/custom.css"],a=[r+"assets/login/vendor/popper.js/umd/popper.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",r+"assets/login/vendor/jquery.cookie/jquery.cookie.js",r+"assets/login/vendor/chart.js/Chart.min.js",r+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",r+"assets/login/js/front.js"];n=="app"||n=="dashboard"||n=="registro"?(console.log("cssLoadMod-loadStyle",n),z(e,"appCS-"),mr(a,"appJS-","load")):(console.log("cssLoadMod-delStyle",n),K(e,"appCS-"),mr(a,"appJS-","del"));const s=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",r+"assets/tema/css/bootstrap.min.css",r+"assets/tema/css/all.min.css",r+"assets/tema/css/animate.min.css",r+"assets/tema/css/simple-line-icons.min.css",r+"assets/tema/css/owl.carousel.min.css",r+"assets/tema/css/owl.theme.default.min.css",r+"assets/tema/css/magnific-popup.min.css",r+"assets/tema/css/theme.css",r+"assets/tema/css/theme-elements.css",r+"assets/tema/css/theme-blog.css",r+"assets/tema/css/theme-shop.css",r+"assets/tema/css/settings.css",r+"assets/tema/css/layers.css",r+"assets/tema/css/navigation.css",r+"assets/tema/css/demo-business-consulting.css",r+"assets/tema/css/skin-business-consulting.css",r+"assets/tema/css/style.css",r+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[r+"assets/tema/js/jquery.appear.min.js",r+"assets/tema/js/jquery.easing.min.js",r+"assets/tema/js/jquery.cookie.min.js",r+"assets/tema/js/popper.min.js",r+"assets/tema/js/bootstrap.min.js",r+"assets/tema/js/common.min.js",r+"assets/tema/js/jquery.validate.min.js",r+"assets/tema/js/jquery.easypiechart.min.js",r+"assets/tema/js/jquery.gmap.min.js",r+"assets/tema/js/jquery.lazyload.min.js",r+"assets/tema/js/jquery.isotope.min.js",r+"assets/tema/js/owl.carousel.min.js",r+"assets/tema/js/jquery.magnific-popup.min.js",r+"assets/tema/js/jquery.vide.min.js",r+"assets/tema/js/vivus.min.js",r+"assets/tema/js/theme.js",r+"assets/tema/js/jquery.themepunch.tools.min.js",r+"assets/tema/js/jquery.themepunch.revolution.min.js",r+"assets/tema/js/demo-business-consulting.js",r+"assets/tema/js/custom.js",r+"assets/tema/js/theme.init.js"];n!="Home"?(K(s,"homeCS-"),gr(i,"homeJS-")):(z(s,"homeCS-"),ur(i,"homeJS-"));const t=["https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es",r+"assets/font-awesome-4.7.0/css/font-awesome.css",r+"assets/vcard/css/style2.css",r+"assets/vcard/css/examples.css",r+"assets/vcard/css/webhost.css"],l=["https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw",r+"assets/vcard/js/gmaps.js"];n!="vcard"?(K(t,"vcardCS-"),gr(l,"vcardJS-")):(z(t,"vcardCS-"),ur(l,"vcardJS-"))}function Mn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async r=>{r.preventDefault();const e=new qr;try{const a=await Cr(M,e);console.log(a),console.log("google sign in"),localStorage.setItem("Token",a.user.accessToken);let s=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+s),Ir("Welcome "+a.user.displayName,"success")}catch(a){console.log(a)}})}function Bn(){console.log("Cargando App...");const{mod:n}=f();Mn(),En(),Dr(M,async r=>{if(r){console.log(n),fr(r),Cn(r),(n=="app"||n=="dashboard")&&setTimeout(()=>{Dn()},500);try{qn(r)}catch(e){console.log(e)}}else fr(r)}),Sn()}const g=()=>{Bn()},{dominio:Hn}=f();async function br(n,r){const a=await(await fetch(r)).json();let s=null;for(const i in a)(a[i].profile===n||a[i].ID===n)&&(s=a[i]);return s}function ar(n){n!="inicio"?$("#close").show():$("#close").hide(),n=="inicio"?$("#inicio").fadeIn():$("#inicio").hide(),n=="contacto"?$("#contacto").fadeIn():$("#contacto").hide(),n=="ubicacion"?$("#ubicacion").fadeIn():$("#ubicacion").hide(),n=="compartir"?$("#compartir").fadeIn():$("#compartir").hide(),n=="guardar"?$("#guardar").fadeIn():$("#guardar").hide(),n=="acceso"?$("#acceso").fadeIn():$("#acceso").hide()}function Gn(n){{$("#inputCopiar").select();var r=document.execCommand("copy");r?(console.log("Texto Copiado"),document.getElementById("aviso").innerHTML='<div class="alert alert-success">Texto Copiado!</div>'):console.log("> No copy to clipboard")}}function Fn(){const n=document.querySelector("#footerbar");n&&n.addEventListener("click",r=>{const e=r.target.id.replace("btn","").replace("1","").toLowerCase();e&&e!=""&&ar(e)})}function Un(n,r,e){var a=new Image;a.src=n,a.addEventListener("load",()=>{const s=e==0?"Logo":"Foto de perfil";console.log("(1)Success: "+s),e==0?r.src=n:r.style.backgroundImage=`url('${n}')`}),a.addEventListener("error",()=>{const s=`${Hn}assets/img/sinfoto.png`;e==0?r.src=s:r.style.backgroundImage=`url('${s}')`;const i=e==0?"logo":"foto de perfil";console.warn("(1)Error: Fallo carga de "+i)})}function hr(n,r,e,a){var s=new Image;s.src=n,s.addEventListener("load",()=>{const i=a==0?"Logo":"Foto de perfil";console.log("(2)Success: "+i),a==0?e.src=n:e.style.backgroundImage=`url('${n}')`}),s.addEventListener("error",()=>{const i=a==0?"logo":"foto de perfil";r&&r!=""?Un(r,e,a):console.error("(2)Error: Fallo carga de "+i)})}const{dominio:Q,id:Z,URL:X}=f();async function Vn(){const n=encodeURIComponent(X);console.log(n);const r=await br(Z,N+"/vcard_vcard.json");if(console.log("Usuario",r),r==null){document.querySelector("#container").style.display="none";return}const{nombre:e,profile:a,puesto:s,descripcion:i,fb:t,tw:l,ins:c,lk:o,web:v,email:p,cell:d,tel_ofi:w,cover:b,idemp:h,visible:or,direc:L}=r,y=await br(h,N+"/vcard_vcard_empresas.json");console.log("Empresa",y);const{bg_color:k,coverbg:I,empresa:S}=y;ar("inicio"),Fn();const x=document.querySelector("#head");x&&(x.style.backgroundColor=k,x.innerHTML=`<img id="logo" src="${Q}assets/img/sinlogo.png" onerror="this.src='${Q}assets/img/sinlogo.png'" alt="logo">`);const B=Z=="multiportal"?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpprRNyywxrgFdZ7rLvnq-6jEgWCBq_4Js3A&s":null;hr(y.cover,B,document.querySelector("#logo"),0);const H=Z=="multiportal"?"https://multiportal.webcindario.com/assets/img/Multiportal.logo2023.png":null;hr(b,H,document.querySelector("#fotoperfil"),1),document.querySelector("#tit").innerHTML=e,document.querySelector("#puesto").innerHTML=s,document.querySelector("#des").innerHTML=i;const G=document.querySelector("#medios"),_=d?`<a href="tel:${d}"><i class="fa fa-phone"></i><span>Llamar</span></a>`:"",F=d?`<a target="_blank" href="https://wa.me/+52${d}"><i class="fa fa-whatsapp"></i><span>WhatsApp</span></a>`:"",U=p?`<a href="mailto:${p}"><i class="fa fa-envelope-o"></i><span>E-mail</span></a>`:"",V=v?`<a href="${v}" target="_blank" id="empresaweb">${S}</a>`:"";G.innerHTML=_+F+U+V,document.querySelector("#promo").src=`${Q}assets/vcard/img/concepto1.jpg`;const u=document.querySelector("#redes"),m=t?`
  <a href="${t}" target="_blank" aria-label="Facebook" class="icon-rrss">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`:"",W=l?`
  <a href="${l}" target="_blank" aria-label="Twitter" class="icon-rrss">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`:"",P=o?`
  <a href="${o}" target="_blank" aria-label="LinkedIn" class="icon-rrss">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`:"",j=c?`
  <a href="${c}" target="_blank" aria-label="Instagram" class="icon-rrss">
    <i class="fa fa-instagram"></i>
    <span>Instagram</span>
  </a>`:"";u.innerHTML=`<div id="medios">${m} ${W} ${P} ${j}</div>`;const T=document.querySelector("#a-cell");d?T.setAttribute("href","tel:"+d):T.style.display="none";const R=document.querySelector("#a-wa");d?R.setAttribute("href","https://wa.me/+52"+d):R.style.display="none";const A=document.querySelector("#a-sms");d?A.setAttribute("href","sms:"+d):A.style.display="none";const q=document.querySelector("#a-email");p?q.setAttribute("href","mailto:"+p):q.style.display="none";const C=document.querySelector("#a-web");v?C.setAttribute("href",v):C.style.display="none";const lr=document.querySelector("#ubi");lr.innerHTML=L?`<p style="font-size: 18px;"><b>Dirección:</b> ${L}</p>
  <div id="map"></div>`:"<p>No hay dirección disponible.</p>";const _r=document.querySelector(".share"),Pr=`
  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${n}&t=Vcard+${a}" aria-label="Facebook" class="icon-access">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`,jr=`
  <a target="_blank" href="//twitter.com/share?url=${n}&text=Vcard+${a}" aria-label="Twitter" class="icon-access">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`,Tr=`
  <a target="_blank" href="//www.linkedin.com/shareArticle?mini=true&url=${n}&title=${a}&ro=false&summary=&source=" aria-label="LinkedIn" class="icon-access">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`,Rr=`
  <a target="_blank" href="https://api.whatsapp.com/send?text=Accede+a+la+tarjeta+digital+desde+el+siguiente+enlace:+${n}" aria-label="whatsapp" class="icon-access">
    <i class="fa fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>`;_r.innerHTML=`${Pr}${jr}${Tr}${Rr}`,document.querySelector("#inputCopiar").value=X;const dr=document.querySelector("#viewcopy");dr&&dr.addEventListener("click",()=>{Gn()}),document.querySelector("#sendEmail").href="mailto:?body="+X,document.querySelector("#saveCard").href=`files/vcf/${a}.vcf`;const cr=document.querySelector("#close");cr&&cr.addEventListener("click",()=>{ar("inicio")})}function Wn(){setTimeout(()=>{Vn()},500)}function Jn(n){const{route:r,hash:e,mod:a,base_url:s}=n;O("log","route="+r),Pn(),a&&(On(a),$n(a,s)),r=="dashboard/index"&&g(),r=="registro/index"&&g(),r=="app/index"&&g(),r=="dashboard/perfil"&&g(),r=="dashboard/tarjetas"&&g(),r=="dashboard/empresas"&&g(),(r=="vcard/index"||r=="vcard/profile")&&Wn(),r=="logout/index"&&Nn(),(a=="app"||a=="dashboard")&&Tn(e,r,a)}function f(){var n=window,r=document,e=n.location,a=new Date,s=a.getDate();s=s<10?"0"+s:s;var i=a.getMonth()+1;i=i<10?"0"+i:i;var t=a.getFullYear(),l=t+"-"+i+"-"+s;const{protocol:c,host:o,origin:v,pathname:p,hash:d,href:w,search:b}=e,h=v+"/",or=v,L=w,y=b,k=p.replace("/",""),I=h+k,S=o=="localhost"||o!=rr&&o!=nr?k+D:D,x=o=="localhost:9001"?"../":"./",B=h+S,H=screen.width,G=screen.height;var _="default",F="temas/"+_+"/",U=bn(),V=hn(d,D);let{mod:u,ext:m,id:W}=yn(p,d);var P="/"+m,j=u+P,T=u||"",R=m&&m!="index"?"/"+m:"",A="#/"+T+R,q=I+J+j+".html",C=I+J+"404/index.html";return{w:n,d:r,loc:e,dt:a,day:s,mon:i,year:t,fecha:l,title:Mr,typeBack:Br,typeDev:Hr,path_hash:D,path_src:xr,path_page:J,hostDev:rr,hostPre:nr,protocol:c,host:o,dominio:h,dominio1:or,pathname:p,hash:d,URL:L,quest:y,path_url:k,path_root:S,path_build:x,base_url:I,page_url:B,screenw:H,screenh:G,tema:_,path_tema:F,pag_name:U,vars_Url:V,mod:u,ext:m,id:W,ext2:P,route:j,hash2:A,url_mod:q,url404:C,apiVer:Fr}}function tr(){const n=f();console.log(n);const{hash:r,mod:e,ext:a,id:s,page_url:i,title:t}=n;xn(r,e,a,s,t),Jn(n),kn(r,e,wr),In(e,i),jn()}function Yn(){console.log("Run function inicio"),tr()}window.addEventListener("hashchange",()=>{tr()});document.addEventListener("click",n=>{const{target:r}=n;r.matches("nav li a")&&(n.preventDefault(),Sr())});const Sr=n=>{n=n||window.event,n.preventDefault(),window.history.pushState({},"",n.target.href),tr()};window.route=Sr;Yn();
