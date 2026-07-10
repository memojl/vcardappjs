import{getAuth as qr,signOut as yr,GoogleAuthProvider as Dr,signInWithPopup as Cr,onAuthStateChanged as Er}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as Or}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Nr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as $r,ref as ar,onValue as kr,set as Mr}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const{host:pr}=window.location,Br="Vcard",Hr="firebase",T="#/",xr="src/",z=xr+"pages/",Gr="vite",Z="localhost:5173",rr="localhost",Ur="https://vcardapp-js.firebaseio.com",R=Ur,Vr=R+"/v2/api_version";console.log(pr+"=="+Z,pr+"=="+rr);console.warn("Api="+R);const Fr=`<div class="container text-center">\r
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
    </div-->`,Yr=`<div class="layerLoading">\r
    <!--h1>Logout</h1-->\r
    <img src="./assets/img/loader-green.gif">\r
    <p>Cerrando sesión...</p>\r
    <a href="/">Inicio</a>\r
</div>`,Jr=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="/" class="alert-link">Volver al Inicio</a>\r
</div>`,zr=`<!--DASHBOARD-->\r
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
        <a href="#/dashboard/perfil">\r
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
  </div-->`,Qr=`<!--DASHBOARD-->\r
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
`,rn=`<!--DASHBOARD-->\r
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
`,nn="<!--HOME-->",an=`<!--DASHBOARD-->\r
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
        <a href="#/dashboard/perfil">\r
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
  </div-->`,en=`<div id="container">\r
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
</div>`,sn=`<div id="container">\r
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
</div>`,tn=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,on=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,ln="<h1>Categorias</h1>",dn=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,j=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
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
</nav>`,cn=["dashboard","settings","perfil","tarjetas","empresas"],pn={forget:Fr,login:Wr,logout:Yr,noauth:Jr,registro:zr,dashboard:Kr,settings:Qr,perfil:Xr,tarjetas:Zr,empresas:rn},wr={Home:nn,app:an,vcard:en,profile:sn,nosotros:j+tn,productos:j+on,categorias:j+ln,contacto:j+dn},Ir={...wr,...pn},vr=[{txt:"Dashboard",icon:"icon-dashboard",link:"/#/app"},{txt:"Dashboard",icon:"icon-dashboard",link:"/#/dashboard"},{txt:"Perfil",icon:"fa fa-user",link:"/#/dashboard/perfil"},{txt:"Mis tarjetas",icon:"fa fa-vcard",link:"/#/dashboard/tarjetas"},{txt:"Mis empresas",icon:"fa fa-industry",link:"/#/dashboard/empresas"}],vn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,mn=n=>{var r=Ir[n];return r=r??vn,Ln(r)},{host:un,year:gn,hostDev:fn,typeBack:bn}=w();function hn(){var n=self.location.href,r=n.lastIndexOf("/"),a=n.substring(r+1,n.length);return a}function yn(n,r){var a=n.replace("/"+r,""),s=a.split("/"),e=window.location.search.substring(1),i=e.split("&");return e==""&&(i=["mod="+s[1],"ext="+s[2],"id="+s[3]]),i}function kn(n,r){const a=r?r.split("/"):n.split("/");console.log(a);var s=a[1]===""?"Home":a[1],e=a[2]===""||a[2]===void 0?"index":a[2],i=a[3]===""||a[3]===void 0?"":a[3];return{mod:s,ext:e,id:i}}function xn(n,r,a,s){let e=localStorage.getItem("Token");document.querySelector("#menuweb");let i=document.querySelector(".user-login"),t=document.querySelector(".user-activo"),l=document.querySelector(".user-logout");a[r]&&(i.classList.remove("d-none"),t.classList.add("d-none"),l.classList.add("d-none"),e!=null&&e!=null&&e!="null"&&e!="undefined"&&(i.classList.add("d-none"),t.classList.remove("d-none"),l.classList.remove("d-none")))}const wn=(n,r,a,s,e)=>{localStorage.getItem("Token"),A("log","hash=>"+n);let i=r=="vcard"?"":K(r),t=a!="index"?""+K(a):"",l=s!=""?" / "+K(s):"";document.title=e+" - "+i+t+l,In(r,cn);let d=r!="Home"&&a!="index"?a:r,o=document.getElementById("app");if(o)return o.innerHTML="",o.appendChild(mn(d))};function In(n,r){var a=localStorage.getItem("Token");A("log","token="+a);let s=r.length;for(let e=0;e<s;e++)n===r[e]&&A("log","Accceso: "+n+"="+r[e]),n===r[e]&&(a==null||a=="undefined")&&(window.location.href="#/noauth");n=="login"&&a!=null&&a!="undefined"&&(window.location.href="#/dashboard")}function Ln(n){const r=document.createElement("div");return r.innerHTML=n,r}function Sn(n,r){(n==""||n=="undefined")&&(window.location.href=r)}function A(n,r){if(un==fn)switch(n){case"log":console.log(r);break;case"warn":console.warn(r);break;case"error":console.error(r);break;default:console.log(r);break}}function K(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function Q(n,r){if(n.length>0){for(let e=0;e<n.length;e++)if(!document.getElementById(r+e))if(document.createStyleSheet)document.createStyleSheet(n[e]);else{var a="@import url('"+n[e]+"');",s=document.createElement("link");s.id=r+e,s.rel="stylesheet",s.href="data:text/css,"+escape(a),document.getElementsByTagName("head")[0].appendChild(s)}}}function X(n,r){for(let a=0;a<n.length;a++){let s=document.getElementById(r+a);s&&document.getElementsByTagName("head")[0].removeChild(s)}}function mr(n,r,a){if(n.length>0)for(let e=0;e<n.length;e++){let i=document.getElementById(r+e);if(i&&document.body.removeChild(i),a=="load"&&!document.getElementById(r+e)){var s=document.createElement("script");s.id=r+e,s.src=n[e],document.body.appendChild(s)}}}function ur(n,r){if(n.length>0){for(let s=0;s<n.length;s++)if(!document.getElementById(r+s)){var a=document.createElement("script");a.id=r+s,a.src=n[s],document.body.appendChild(a)}}}function gr(n,r){for(let a=0;a<n.length;a++){let s=document.getElementById(r+a);s&&document.body.removeChild(s)}}function _n(){const n=document.querySelector("#footer_page");n&&(n.innerHTML=gn+' &copy; VcardAppJS V.3.0.1 (Vite - MandragoraJS). Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.')}function Pn(){let n=document.getElementsByTagName("body")[0],a=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var s=document.createElement("div");s.id="load",s.innerHTML=a,n.appendChild(s),setTimeout(()=>{let e=document.getElementById(s.id);e&&n.removeChild(e)},5e3)}function Tn(){const{mod:n,ext:r}=w();let a=n!="Home"&&r!="index"?r:n;var s=Ir[a];n!="dashboard"&&bn=="firebase"&&n!="logout"&&n!="noauth"&&r=="index"&&s!=null&&Pn()}async function jn(n,r){console.warn("Only Firebase")}function Rn(n,r,a){setTimeout(()=>{const s=document.querySelector("#menuList");let e="";if(s){for(let i=0;i<vr.length;i++){const{txt:t,icon:l,link:d}=vr[i];if((a=="app"||a=="dashboard")&&d!="/#/app"){const o=d=="/"+n||t=="Dashboard"&&r=="app/index"?'class="active"':"";e+=`<li ${o}><a href="${d}"><i class="${l}"></i> ${t}</a></li>`}}s.innerHTML=e}},100)}function An(n,r){var a=new Image;a.src=n,a.addEventListener("load",()=>{console.log("Imagen cargada.")}),a.addEventListener("error",()=>{console.warn("Error: Fallo carga de imagen.",n),r.style.backgroundImage="url(assets/img/no-disponible.jpg)"})}var qn={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const er=Or(qn),q=qr(er),sr=$r(er);Nr(er);function Dn(n){return new Promise((r,a)=>{const s=ar(sr,n+"/");kr(s,e=>{const i=e.val();r(i)},a)})}function Cn(n){console.log("saveUser");var r={uid:n.uid,usuario:n.displayName,email:n.email,foto:n.photoURL};Mr(ar(sr,"vcard_signup/"+n.uid),r)}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const fr=n=>{console.log("loginCheck"),document.querySelector("#logout-1");const r=document.querySelector("#btnRegis"),a=document.querySelector("#btnLogin"),s=document.querySelector(".registro-page"),e=document.querySelector(".login-page"),i=document.querySelector(".dashboard");n?(e.style.display="none",s.style.display="none",i.style.display="block"):(e.style.display="block",i.style.display="none",r&&r.addEventListener("click",()=>{s.style.display="block",e.style.display="none"}),a&&a.addEventListener("click",()=>{s.style.display="none",e.style.display="block"}))};function En(n){const r=document.querySelector("#photo"),a=document.querySelector("#nombre_session"),s=document.querySelector("#email_session"),e=document.querySelector("#id_code_google"),i=ar(sr,"vcard_signup/");kr(i,t=>{const l=t.val();for(let d in l){const o=l[d];if(o.uid==n.uid){console.log(o);const v='<img src="'+(o.foto==null?page_url+"assets/img/sinfoto.png":o.foto)+'" class="img-fluid rounded-circle">',p=o.usuario==null?o.email:o.usuario,u=o.email,c=o.uid;r.innerHTML=v,a.innerHTML=p,s.innerHTML=u,e.innerHTML=c}}})}async function On(){console.log("Listar tarjetas");let n="",r="assets/img/sinfoto.png";const a=document.querySelector("#lista"),s=await Dn("vcard_vcard"),e=Object.entries(s).map(([i,t])=>({key:i,...t}));console.log(e);for(let i=0;i<e.length;i++){const{ID:t,cover:l,profile:d,nombre:o,puesto:m,f_create:v,visible:p}=e[i];p==1&&(n+=`
    <div class="public-user-block block">
      <div class="row d-flex align-items-center">                   
        <div class="col-lg-4 d-flex align-items-center">
          <div class="order">${t}</div>
          <div class="avatar" id="${t}" style="background:url(${l||r});"></div>
          <a href="#/vcard/profile/${d}" class="name">
            <strong class="d-block">${o}</strong>
            <span class="d-block">${d}</span>
          </a>
        </div>
        <div class="col-lg-4 text-center">
          <div class="contributions">${m}</div>
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
    </div>`,a.innerHTML=n)}for(let i=0;i<e.length;i++){const{ID:t,cover:l,visible:d}=e[i];if(d==1&&l!=""){let o=document.getElementById(t);An(l,o)}}}function Lr(n,r){Toastify({text:n,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:"green"},onClick:function(){}}).showToast()}function Nn(){const n=document.querySelector("#logout");n&&n.addEventListener("click",async r=>{r.preventDefault();try{await yr(q),console.log("Logout/Salir"),localStorage.clear();var a=localStorage.getItem("Token");a==null&&console.warn("TOKEN CLEAR"),Lr("Sesión cerrada","success")}catch(s){console.log(s)}})}function $n(){const n=document.referrer;try{yr(q),console.log("Logout/Salir",n),localStorage.clear();var r=localStorage.getItem("Token");r==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="/"},3e3))}catch(a){console.log(a)}}function Mn(n){let r=document.querySelector(".body");r&&(n!=""&&n!="Home"?r.style.display="none":r.style.display="inherit")}function Bn(n,r){const a=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",r+"assets/login/vendor/bootstrap/css/bootstrap.min.css",r+"assets/login/vendor/font-awesome/css/font-awesome.min.css",r+"assets/login/css/font.css",r+"assets/login/css/style.green.css",r+"assets/login/css/custom.css"],s=[r+"assets/login/vendor/popper.js/umd/popper.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap.min.js",r+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",r+"assets/login/vendor/jquery.cookie/jquery.cookie.js",r+"assets/login/vendor/chart.js/Chart.min.js",r+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",r+"assets/login/js/front.js"];n=="app"||n=="dashboard"||n=="registro"?(console.log("cssLoadMod-loadStyle",n),Q(a,"appCS-"),mr(s,"appJS-","load")):(console.log("cssLoadMod-delStyle",n),X(a,"appCS-"),mr(s,"appJS-","del"));const e=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",r+"assets/tema/css/bootstrap.min.css",r+"assets/tema/css/all.min.css",r+"assets/tema/css/animate.min.css",r+"assets/tema/css/simple-line-icons.min.css",r+"assets/tema/css/owl.carousel.min.css",r+"assets/tema/css/owl.theme.default.min.css",r+"assets/tema/css/magnific-popup.min.css",r+"assets/tema/css/theme.css",r+"assets/tema/css/theme-elements.css",r+"assets/tema/css/theme-blog.css",r+"assets/tema/css/theme-shop.css",r+"assets/tema/css/settings.css",r+"assets/tema/css/layers.css",r+"assets/tema/css/navigation.css",r+"assets/tema/css/demo-business-consulting.css",r+"assets/tema/css/skin-business-consulting.css",r+"assets/tema/css/style.css",r+"assets/font-awesome-4.7.0/css/font-awesome.css"],i=[r+"assets/tema/js/jquery.appear.min.js",r+"assets/tema/js/jquery.easing.min.js",r+"assets/tema/js/jquery.cookie.min.js",r+"assets/tema/js/popper.min.js",r+"assets/tema/js/bootstrap.min.js",r+"assets/tema/js/common.min.js",r+"assets/tema/js/jquery.validate.min.js",r+"assets/tema/js/jquery.easypiechart.min.js",r+"assets/tema/js/jquery.gmap.min.js",r+"assets/tema/js/jquery.lazyload.min.js",r+"assets/tema/js/jquery.isotope.min.js",r+"assets/tema/js/owl.carousel.min.js",r+"assets/tema/js/jquery.magnific-popup.min.js",r+"assets/tema/js/jquery.vide.min.js",r+"assets/tema/js/vivus.min.js",r+"assets/tema/js/theme.js",r+"assets/tema/js/jquery.themepunch.tools.min.js",r+"assets/tema/js/jquery.themepunch.revolution.min.js",r+"assets/tema/js/demo-business-consulting.js",r+"assets/tema/js/custom.js",r+"assets/tema/js/theme.init.js"];n!="Home"?(X(e,"homeCS-"),gr(i,"homeJS-")):(Q(e,"homeCS-"),ur(i,"homeJS-"));const t=["https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es",r+"assets/font-awesome-4.7.0/css/font-awesome.css",r+"assets/vcard/css/style2.css",r+"assets/vcard/css/examples.css",r+"assets/vcard/css/webhost.css"],l=["https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw",r+"assets/vcard/js/gmaps.js"];n!="vcard"?(X(t,"vcardCS-"),gr(l,"vcardJS-")):(Q(t,"vcardCS-"),ur(l,"vcardJS-"))}function Hn(){const n=document.querySelector("#googleLogin");n&&n.addEventListener("click",async r=>{r.preventDefault();const a=new Dr;try{const s=await Cr(q,a);console.log(s),console.log("google sign in"),localStorage.setItem("Token",s.user.accessToken);let e=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+e),Lr("Welcome "+s.user.displayName,"success")}catch(s){console.log(s)}})}function Gn(){console.log("Cargando App...");const{mod:n}=w();Hn(),Nn(),Er(q,async r=>{if(r){console.log(n),fr(r),En(r),n=="app"&&setTimeout(()=>{window.location.href="#/dashboard"},2e3),(n=="app"||n=="dashboard")&&setTimeout(()=>{On()},500);try{Cn(r)}catch(a){console.log(a)}}else fr(r)}),_n()}const x=()=>{Gn()};w();async function br(n,r){const s=await(await fetch(r)).json();let e=null;for(const i in s)(s[i].profile===n||s[i].ID===n)&&(e=s[i]);return e}function nr(n){n!="inicio"?$("#close").show():$("#close").hide(),n=="inicio"?$("#inicio").fadeIn():$("#inicio").hide(),n=="contacto"?$("#contacto").fadeIn():$("#contacto").hide(),n=="ubicacion"?$("#ubicacion").fadeIn():$("#ubicacion").hide(),n=="compartir"?$("#compartir").fadeIn():$("#compartir").hide(),n=="guardar"?$("#guardar").fadeIn():$("#guardar").hide(),n=="acceso"?$("#acceso").fadeIn():$("#acceso").hide()}function Un(n){{$("#inputCopiar").select();var r=document.execCommand("copy");r?(console.log("Texto Copiado"),document.getElementById("aviso").innerHTML='<div class="alert alert-success">Texto Copiado!</div>'):console.log("> No copy to clipboard")}}function Vn(){const n=document.querySelector("#footerbar");n&&n.addEventListener("click",r=>{const a=r.target.id.replace("btn","").replace("1","").toLowerCase();a&&a!=""&&nr(a)})}function hr(n,r){var a=new Image;a.src=n,a.addEventListener("load",()=>{console.log("Imagen cargada."),r.style.backgroundImage=`url('${n}')`}),a.addEventListener("error",()=>{console.warn("Error: Fallo carga de imagen.",n)})}async function Fn(){const{dominio:n,id:r,URL:a}=w(),s=await br(r,R+"/vcard_vcard.json");if(console.log("Usuario",s),s==null){document.querySelector("#container").style.display="none";return}const{nombre:e,profile:i,puesto:t,descripcion:l,fb:d,tw:o,ins:m,lk:v,web:p,email:u,cell:c,tel_ofi:I,cover:D,idemp:C,visible:E,direc:b}=s,h=await br(C,R+"/vcard_vcard_empresas.json");console.log("Empresa",h);const{bg_color:L,logo:O,portada:N,empresa:M}=h,g=encodeURIComponent(a);if(console.log(g),!E){console.warn("!Usuario no activo");return}nr("inicio"),Vn();const y=document.querySelector("#head");y&&(y.style.backgroundColor=L,y.innerHTML=`<img id="logo" src="${O}" onerror="this.src='assets/img/sinlogo.png'" alt="logo">`);const B=document.querySelector("#portada");console.log("Validando foto de portada"),hr(N,B);const H=document.querySelector("#fotoperfil");console.log("Validando foto de perfil"),hr(D,H),document.querySelector("#tit").innerHTML=e,document.querySelector("#puesto").innerHTML=t,document.querySelector("#des").innerHTML=l;const G=document.querySelector("#medios"),k=c?`<a href="tel:${c}"><i class="fa fa-phone"></i><span>Llamar</span></a>`:"",f=c?`<a target="_blank" href="https://wa.me/+52${c}"><i class="fa fa-whatsapp"></i><span>WhatsApp</span></a>`:"",U=u?`<a href="mailto:${u}"><i class="fa fa-envelope-o"></i><span>E-mail</span></a>`:"",S=p?`<a href="${p}" target="_blank" id="empresaweb">${M}</a>`:"";G.innerHTML=k+f+U+S,document.querySelector("#promo").src=`${n}assets/vcard/img/concepto1.jpg`;const _=document.querySelector("#redes"),V=d?`
  <a href="${d}" target="_blank" aria-label="Facebook" class="icon-rrss">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`:"",F=o?`
  <a href="${o}" target="_blank" aria-label="Twitter" class="icon-rrss">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`:"",W=v?`
  <a href="${v}" target="_blank" aria-label="LinkedIn" class="icon-rrss">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`:"",Y=m?`
  <a href="${m}" target="_blank" aria-label="Instagram" class="icon-rrss">
    <i class="fa fa-instagram"></i>
    <span>Instagram</span>
  </a>`:"";_.innerHTML=`<div id="medios">${V} ${F} ${W} ${Y}</div>`;const P=document.querySelector("#a-cell");c?P.setAttribute("href","tel:"+c):P.style.display="none";const J=document.querySelector("#a-wa");c?J.setAttribute("href","https://wa.me/+52"+c):J.style.display="none";const tr=document.querySelector("#a-sms");c?tr.setAttribute("href","sms:"+c):tr.style.display="none";const or=document.querySelector("#a-email");u?or.setAttribute("href","mailto:"+u):or.style.display="none";const lr=document.querySelector("#a-web");p?lr.setAttribute("href",p):lr.style.display="none";const _r=document.querySelector("#ubi");_r.innerHTML=b?`<p style="font-size: 18px;"><b>Dirección:</b> ${b}</p>
  <div id="map"></div>`:"<p>No hay dirección disponible.</p>";const Pr=document.querySelector(".share"),Tr=`
  <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${g}&t=Vcard+${i}" aria-label="Facebook" class="icon-access">
    <i class="fa fa-facebook"></i>
    <span>Facebook</span>
  </a>`,jr=`
  <a target="_blank" href="//twitter.com/share?url=${g}&text=Vcard+${i}" aria-label="Twitter" class="icon-access">
    <i class="fa fa-twitter"></i>
    <span>Twitter</span>
  </a>`,Rr=`
  <a target="_blank" href="//www.linkedin.com/shareArticle?mini=true&url=${g}&title=${i}&ro=false&summary=&source=" aria-label="LinkedIn" class="icon-access">
    <i class="fa fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>`,Ar=`
  <a target="_blank" href="https://api.whatsapp.com/send?text=Accede+a+la+tarjeta+digital+desde+el+siguiente+enlace:+${g}" aria-label="whatsapp" class="icon-access">
    <i class="fa fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>`;Pr.innerHTML=`${Tr}${jr}${Rr}${Ar}`,document.querySelector("#inputCopiar").value=a;const dr=document.querySelector("#viewcopy");dr&&dr.addEventListener("click",()=>{Un()}),document.querySelector("#sendEmail").href="mailto:?body="+a,document.querySelector("#saveCard").href=`files/vcf/${i}.vcf`;const cr=document.querySelector("#close");cr&&cr.addEventListener("click",()=>{nr("inicio")})}function Wn(){setTimeout(()=>{Fn()},1e3)}function Yn(n){const{route:r,hash:a,mod:s,base_url:e}=n;A("log","route="+r),Tn(),s&&(Mn(s),Bn(s,e)),r=="dashboard/index"&&x(),r=="registro/index"&&x(),r=="app/index"&&x(),r=="dashboard/perfil"&&x(),r=="dashboard/tarjetas"&&x(),r=="dashboard/empresas"&&x(),(r=="vcard/index"||r=="vcard/profile")&&Wn(),r=="logout/index"&&$n(),(s=="app"||s=="dashboard")&&Rn(a,r,s)}function w(){var n=window,r=document,a=n.location,s=new Date,e=s.getDate();e=e<10?"0"+e:e;var i=s.getMonth()+1;i=i<10?"0"+i:i;var t=s.getFullYear(),l=t+"-"+i+"-"+e;const{protocol:d,host:o,origin:m,pathname:v,hash:p,href:u,search:c}=a,I=m+"/",D=m,C=u,E=c,b=v.replace("/",""),h=I+b,L=o=="localhost"||o!=Z&&o!=rr?b+T:T,O=o=="localhost:9001"?"../":"./",N=I+L,M=screen.width,g=screen.height;var y="default",B="temas/"+y+"/",H=hn(),G=yn(p,T);let{mod:k,ext:f,id:U}=kn(v,p);var S="/"+f,_=k+S,V=k||"",F=f&&f!="index"?"/"+f:"",W="#/"+V+F,Y=h+z+_+".html",P=h+z+"404/index.html";return{w:n,d:r,loc:a,dt:s,day:e,mon:i,year:t,fecha:l,title:Br,typeBack:Hr,typeDev:Gr,path_hash:T,path_src:xr,path_page:z,hostDev:Z,hostPre:rr,protocol:d,host:o,dominio:I,dominio1:D,pathname:v,hash:p,URL:C,quest:E,path_url:b,path_root:L,path_build:O,base_url:h,page_url:N,screenw:M,screenh:g,tema:y,path_tema:B,pag_name:H,vars_Url:G,mod:k,ext:f,id:U,ext2:S,route:_,hash2:W,url_mod:Y,url404:P,apiVer:Vr}}function ir(){const n=w();console.log(n);const{hash:r,mod:a,ext:s,id:e,page_url:i,title:t}=n;wn(r,a,s,e,t),Yn(n),xn(r,a,wr),Sn(a,i),jn()}function Jn(){console.log("Run function inicio"),ir()}window.addEventListener("hashchange",()=>{ir()});document.addEventListener("click",n=>{const{target:r}=n;r.matches("nav li a")&&(n.preventDefault(),Sr())});const Sr=n=>{n=n||window.event,n.preventDefault(),window.history.pushState({},"",n.target.href),ir()};window.route=Sr;Jn();
