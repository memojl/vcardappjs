(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();let pe=window.location;const{pathname:ve,host:V}=pe;V!=="localhost"&&V!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(ve+"sw.js").then(function(e){console.log("Service Worker registro correcto con scope: ",e.scope)}).catch(function(e){console.log("Service Worker registro fallo: ",e)});const{host:ge}=window.location,me="VcardApp",fe="firebase",T="#/",Z="src/",O=Z+"pages/",he="vite",M="127.0.0.1:5173",z="127.0.0.1:4173",U=ge!=M?"https://apirestm.webcindario.com/api":"http://localhost/MisSitios/apirestm/api",be=U+"/v2/api_version",ye=`<div id="appDash">\r
<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Dashboard</h4>\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->\r
</div>`,we=`<div id="appDash">\r
<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Dashboard</h4>\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->\r
</div>`,xe=`<!--LOGIN-->\r
<div class="login-page" style="display: none;">\r
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
                                    <input id="login-email" type="text" name="loginUsername" required\r
                                        data-msg="Please enter your username" class="input-material">\r
                                    <label for="login-email" class="label-material">Email</label>\r
                                </div>\r
                                <div class="form-group">\r
                                    <input id="login-password" type="password" name="loginPassword" required\r
                                        data-msg="Please enter your password" class="input-material">\r
                                    <label for="login-password" class="label-material">Contraseña</label>\r
                                </div>\r
                                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>\r
                                <button type="button" class="btn btn-info btn-block" id="googleLogin">Ingresar con Google</button>\r
                            </form>\r
                            <a href="#/" class="forgot-pass">Inicio</a> | \r
                            <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
                            <br>\r
                            <small>No tienes cuenta?</small>\r
                            <a href="#/registro" class="signup">Registrate</a>\r
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
<!--//LOGIN-->`,ke=`  <!--REGISTRO-->\r
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
                                      <input id="register-email" type="email" name="registerEmail" required\r
                                          data-msg="Please enter a valid email address" class="input-material">\r
                                      <label for="register-email" class="label-material">Email </label>\r
                                  </div>\r
                                  <div class="form-group-material">\r
                                      <input id="register-password" type="password" name="registerPassword" required\r
                                          data-msg="Please enter your password" class="input-material">\r
                                      <label for="register-password" class="label-material">Contraseña </label>\r
                                  </div>\r
                                  <div class="form-group terms-conditions text-center">\r
                                      <input id="register-agree" name="registerAgree" type="checkbox" required value="1"\r
                                          data-msg="Your agreement is required" class="checkbox-template">\r
                                      <label for="register-agree"><a target="_blank" href="privacidad.html">Políticas de\r
                                              Privacidad</a></label>\r
                                  </div>\r
                                  <div class="form-group text-center">\r
                                      <button type="submit" class="btn btn-primary btn-block">Registrar</button>\r
                                      <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                                      <button type="button" class="btn btn-info btn-block"\r
                                          id="googleRegister">Registrarse con Google</button>\r
                                  </div>\r
                              </form>\r
                              <small>&iquest;Ya tienes una cuenta? </small><a href="./" class="signup">Login</a>\r
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
  <!--//REGISTRO-->`,Se=`<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Settings</h4>\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->`,$e=`<div class="container text-center">\r
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
`,Ce=`<!--LOGIN-->\r
<div class="login-page">\r
    <div class="container d-flex align-items-center">\r
        <div class="form-holder has-shadow">\r
            <div class="row">\r
                <!-- Logo & Information Panel-->\r
                <div class="col-lg-6">\r
                    <div class="info d-flex-logo align-items-center">\r
                        <div class="content">\r
                            <div class="logo">\r
                                <img src="./assets/img/logo_vcard.min.png" alt="">\r
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
                            <form id="form-login" action="#/login" class="form-validate mb-4">\r
                                <div id="msj-error" class="mb-3"></div>\r
                                <div class="form-group">\r
                                    <input id="username" type="text" required data-msg="Ingresa tu Usuario" placeholder="*Usuario" autocomplete="off" class="input-material">\r
                                </div>\r
                                <div class="form-group">\r
                                    <input id="password" type="password" required data-msg="Ingresa tu Contraseña" placeholder="*Contraseña" autocomplete="off" class="input-material">\r
                                </div>\r
                                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>\r
                                <button type="button" class="btn btn-info btn-block" id="googleLogin">Ingresar con Google</button>\r
                            </form>\r
                            <a href="#/" class="forgot-pass">Inicio</a> | \r
                            <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
                            <br>\r
                            <small>No tienes cuenta?</small>\r
                            <a href="#/registro" class="signup">Registrate</a>\r
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
<!--//LOGIN-->`,Ie=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,_e=`<!--\r
<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Registro</h5>\r
                <div class="card-body">\r
                    <form id="form-registro" action="#/registro" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="text" class="form-control" id="username"\r
                                placeholder="*Agregue un nombre de usuario" autocomplete="off" required>\r
                        </div>\r
                        <div class="mb-3">\r
                            <input type="password" class="form-control" id="password" placeholder="*Agregue Password"\r
                                required>\r
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
-->\r
\r
<!--REGISTRO-->\r
<div class="registro-page">\r
    <div class="container d-flex align-items-center">\r
        <div class="form-holder has-shadow">\r
            <div class="row">\r
                <!-- Logo & Information Panel-->\r
                <div class="col-lg-6">\r
                    <div class="info d-flex-logo align-items-center">\r
                        <div class="content">\r
                            <div class="logo">\r
                                <img src="./assets/img/logo_vcard.min.png" alt="">\r
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
                            <form id="form-registro" action="#/registro" class="text-left form-validate">\r
                                <div id="msj-error" class="mb-3"></div>\r
                                <div class="form-group">\r
                                    <input id="username" type="text" required data-msg="Ingresa tu Usuario"\r
                                        placeholder="*Usuario" autocomplete="off" class="input-material">\r
                                </div>\r
                                <div class="form-group">\r
                                    <input id="password" type="password" required data-msg="Ingresa tu Contraseña"\r
                                        placeholder="*Contraseña" autocomplete="off" class="input-material">\r
                                </div>\r
                                <div class="form-group terms-conditions text-center">\r
                                    <input id="register-agree" name="registerAgree" type="checkbox" required value="1"\r
                                        data-msg="Your agreement is required" class="checkbox-template">\r
                                    <label for="register-agree"><a target="_blank" href="privacidad.html">Políticas de\r
                                            Privacidad</a></label>\r
                                </div>\r
                                <div class="form-group text-center">\r
                                    <button type="submit" class="btn btn-primary btn-block">Registrar</button>\r
                                    <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                                    <button type="button" class="btn btn-info btn-block" id="googleRegister">Registrarse\r
                                        con Google</button>\r
                                </div>\r
                            </form>\r
                            <a href="#/" class="forgot-pass">Inicio</a>\r
                            <br>\r
                            <small>&iquest;Ya tienes una cuenta? </small><a href="#/login" class="signup">Login</a>\r
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
<!--//REGISTRO-->`,Le=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Ee=`<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Cuenta</h4>\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->`,je=`<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Empresas</h4>\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->`,qe=`<!-- ============================================================== -->\r
<!-- Start Page Content here -->\r
<!-- ============================================================== -->\r
\r
<!--div class="content-page"-->\r
<div class="content">\r
\r
    <!-- Start Content-->\r
    <div class="container-fluid">\r
\r
        <div class="row">\r
            <div class="col-12">\r
                <h4 class="my-4">Tarjetas</h4>\r
                <div class="card-deck-wrapper">\r
                    <div class="card-deck">\r
                        <div class="card">\r
                            <img class="card-img-top img-fluid"\r
                                src="./assets/dashboard/xeria/assets/images/small/img-4.jpg" alt="Card image cap">\r
                            <div class="card-body">\r
                                <h5 class="card-title">Card title</h5>\r
                                <p class="card-text">This is a longer card with supporting text below as\r
                                    a natural lead-in to additional content. This content is a little\r
                                    bit longer.</p>\r
                                <p class="card-text">\r
                                    <small class="text-muted">Last updated 3 mins ago</small>\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <div class="card">\r
                            <img class="card-img-top img-fluid"\r
                                src="./assets/dashboard/xeria/assets/images/small/img-5.jpg" alt="Card image cap">\r
                            <div class="card-body">\r
                                <h5 class="card-title">Card title</h5>\r
                                <p class="card-text">This card has supporting text below as a natural\r
                                    lead-in to additional content.</p>\r
                                <p class="card-text">\r
                                    <small class="text-muted">Last updated 3 mins ago</small>\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                        <div class="card">\r
                            <img class="card-img-top img-fluid"\r
                                src="./assets/dashboard/xeria/assets/images/small/img-6.jpg" alt="Card image cap">\r
                            <div class="card-body">\r
                                <h5 class="card-title">Card title</h5>\r
                                <p class="card-text">This is a wider card with supporting text below as\r
                                    a natural lead-in to additional content. This card has even longer\r
                                    content than the first to show that equal height action.</p>\r
                                <p class="card-text">\r
                                    <small class="text-muted">Last updated 3 mins ago</small>\r
                                </p>\r
                            </div>\r
                        </div>\r
\r
                    </div> <!-- end card-deck-->\r
                </div> <!-- end card-deck-wrapper-->\r
            </div> <!-- end col-->\r
        </div>\r
        <!-- end row -->\r
\r
    </div> <!-- container -->\r
\r
</div> <!-- content -->\r
<!--/div-->\r
\r
<!-- ============================================================== -->\r
<!-- End Page content -->\r
<!-- ============================================================== -->`,G=`      <!-- Right Sidebar -->\r
      <div class="right-bar">\r
        <div class="rightbar-title">\r
            <a href="javascript:void(0);" class="right-bar-toggle float-right">\r
                <i class="mdi mdi-close"></i>\r
            </a>\r
            <h5 class="m-0 text-white">Mi Cuenta</h5>\r
        </div>\r
        <div id="slimscroll-menu" class="slimscroll-menu">\r
            <!-- User box -->\r
            <div class="user-box">\r
                <div class="user-img">\r
                    <img src="./assets/img/sinfoto.png" alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">\r
                    <a href="javascript:void(0);" class="user-edit"><i class="mdi mdi-pencil"></i></a>\r
                </div>\r
        \r
                <h5><a class="profile_name" href="javascript: void(0);">Marcia J. Melia</a> </h5>\r
                <p class="text-muted mb-0"><small class="job">Product Owner</small></p>\r
            </div>\r
\r
            <!-- Settings -->\r
            <hr class="mt-0" />\r
            <div class="row">\r
                <div class="col-6 text-center btn-set hand">\r
                    <h4 class="mb-1 mt-0"><i class="la la-cube"></i></h4>\r
                    <p class="m-0">Settings</p>\r
                </div>\r
                <div id="logout" class="col-6 text-center log-out hand">\r
                    <h4 class="mb-1 mt-0"><i class="fe-log-out"></i></h4>\r
                    <p class="m-0">Salir</p>\r
                </div>\r
                <!--div class="col-6 text-center">\r
                    <a target="_parent" href="http://127.0.0.1:5173/#/logout">\r
                        <h4 class="mb-1 mt-0"><i class="fe-log-out"></i></h4>\r
                        <p class="m-0">Salir</p>    \r
                    </a>\r
                </div-->\r
            </div>\r
            <hr class="mb-0" />\r
\r
        </div> <!-- end slimscroll-menu-->\r
    </div>\r
    <!-- /Right-bar -->\r
\r
    <!-- Right bar overlay-->\r
    <div class="rightbar-overlay"></div>`,W=`            <!-- ========== Left Sidebar Start ========== -->\r
            <div class="left-side-menu">\r
\r
                <div class="slimscroll-menu">\r
\r
                    <!--- Sidemenu -->\r
                    <div id="sidebar-menu">\r
\r
                        <ul class="metismenu" id="side-menu">\r
\r
                            <li class="menu-title">MENU</li>\r
\r
                            <li>\r
                                <a href="./#/dashboard">\r
                                    <i class="fas fa-tachometer-alt"></i>\r
                                    <span> Dashboard </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="./#/dashboard/tarjetas">\r
                                    <i class="far fa-address-card"></i>\r
                                    <span> Mis tarjetas </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="./#/dashboard/empresas">\r
                                    <i class="fas fa-industry"></i>\r
                                    <span> Mis empresas </span>\r
                                </a>\r
                            </li>\r
\r
                            <!--li>\r
                                <a href="javascript: void(0);">\r
                                    <i class="la la-cube"></i>\r
                                    <span> Configuraciones</span>\r
                                    <span class="menu-arrow"></span>\r
                                </a>\r
                                <ul class="nav-second-level" aria-expanded="false">\r
                                    <li>\r
                                        <a href="apps-calendar.html">Calendar</a>\r
                                    </li>\r
                                    <li>\r
                                        <a href="apps-contacts.html">Contacts</a>\r
                                    </li>\r
                                    <li>\r
                                        <a href="apps-tickets.html">Tickets</a>\r
                                    </li>\r
                                </ul>\r
                            </li-->\r
\r
                        </ul>\r
\r
                    </div>\r
                    <!-- End Sidebar -->\r
\r
                    <div class="clearfix"></div>\r
\r
                </div>\r
                <!-- Sidebar -left -->\r
\r
            </div>\r
            <!-- Left Sidebar End -->`,K=`          <!-- Topbar Start -->\r
          <div class="navbar-custom">\r
            <ul class="list-unstyled topnav-menu float-right mb-0">\r
\r
                <li class="d-none d-sm-block">\r
                    <form class="app-search">\r
                        <div class="app-search-box">\r
                            <div class="input-group">\r
                                <input type="text" class="form-control" placeholder="Search...">\r
                                <div class="input-group-append">\r
                                    <button class="btn" type="submit">\r
                                        <i class="fe-search"></i>\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </form>\r
                </li>\r
    \r
                <li class="dropdown notification-list">\r
                    <a class="nav-link dropdown-toggle waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">\r
                        <i class="fe-bell noti-icon"></i>\r
                        <span class="badge badge-danger rounded-circle noti-icon-badge">5</span>\r
                    </a>\r
                    <div class="dropdown-menu dropdown-menu-right dropdown-lg">\r
\r
                        <!-- item-->\r
                        <div class="dropdown-item noti-title">\r
                            <h5 class="m-0 text-white">\r
                                <span class="float-right">\r
                                    <a href="" class="text-white">\r
                                        <small>Clear All</small>\r
                                    </a>\r
                                </span>Notification\r
                            </h5>\r
                        </div>\r
\r
                        <div class="slimscroll noti-scroll">\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item active">\r
                                <div class="notify-icon">\r
                                    <img src="./assets/dashboard/xeria/assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>\r
                                <p class="notify-details">Cristina Pride</p>\r
                                <p class="text-muted mb-0 user-msg">\r
                                    <small>Hi, How are you? What about our next meeting</small>\r
                                </p>\r
                            </a>\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                                <div class="notify-icon bg-primary">\r
                                    <i class="mdi mdi-comment-account-outline"></i>\r
                                </div>\r
                                <p class="notify-details">Caleb Flakelar commented on Admin\r
                                    <small class="text-muted">1 min ago</small>\r
                                </p>\r
                            </a>\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                                <div class="notify-icon">\r
                                    <img src="./assets/dashboard/xeria/assets/images/users/user-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>\r
                                <p class="notify-details">Karen Robinson</p>\r
                                <p class="text-muted mb-0 user-msg">\r
                                    <small>Wow ! this admin looks good and awesome design</small>\r
                                </p>\r
                            </a>\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                                <div class="notify-icon bg-warning">\r
                                    <i class="mdi mdi-account-plus"></i>\r
                                </div>\r
                                <p class="notify-details">New user registered.\r
                                    <small class="text-muted">5 hours ago</small>\r
                                </p>\r
                            </a>\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                                <div class="notify-icon bg-info">\r
                                    <i class="mdi mdi-comment-account-outline"></i>\r
                                </div>\r
                                <p class="notify-details">Caleb Flakelar commented on Admin\r
                                    <small class="text-muted">4 days ago</small>\r
                                </p>\r
                            </a>\r
\r
                            <!-- item-->\r
                            <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                                <div class="notify-icon bg-secondary">\r
                                    <i class="mdi mdi-heart text-danger"></i>\r
                                </div>\r
                                <p class="notify-details">Carlos Crouch liked\r
                                    <b>Admin</b>\r
                                    <small class="text-dark">13 days ago</small>\r
                                </p>\r
                            </a>\r
                        </div>\r
\r
                        <!-- All-->\r
                        <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">\r
                            View all\r
                            <i class="fi-arrow-right"></i>\r
                        </a>\r
\r
                    </div>\r
                </li>\r
\r
                <li class="dropdown notification-list">\r
                    <a class="nav-link right-bar-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">\r
                        <img src="./assets/dashboard/xeria/assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle">\r
                        <span class="pro-user-name ml-1">\r
                            Marcia J. <i class="mdi mdi-chevron-down"></i> \r
                        </span>\r
                    </a>\r
                  <!--\r
                    <div class="dropdown-menu dropdown-menu-right profile-dropdown ">\r
                        <!-- item\r
                        <div class="dropdown-item noti-title">\r
                            <h5 class="m-0 text-white">\r
                                ¡Bienvenido!\r
                            </h5>\r
                        </div>\r
\r
                        <!-- item\r
                        <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                            <i class="fe-user"></i>\r
                            <span>Mi Cuenta</span>\r
                        </a>\r
\r
                        <!-- item\r
                        <a href="javascript:void(0);" class="dropdown-item notify-item">\r
                            <i class="fe-settings"></i>\r
                            <span>Settings</span>\r
                        </a>\r
\r
                        <div class="dropdown-divider"></div>\r
\r
                        <!-- item\r
                        <a href="javascript:void(0);" class="dropdown-item notify-item log-out">\r
                            <i class="fe-log-out"></i>\r
                            <span>Logout</span>\r
                        </a>\r
\r
                    </div>\r
                  -->\r
                </li>\r
\r
                <!--li class="dropdown notification-list">\r
                    <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect waves-light">\r
                        <i class="fe-settings noti-icon"></i>\r
                    </a>\r
                </li-->\r
\r
\r
            </ul>\r
\r
            <!-- LOGO -->\r
            <div class="logo-box">\r
                <a href="index.html" class="logo text-center">\r
                    <span class="logo-lg">\r
                        <img src="./assets/dashboard/xeria/assets/images/logo-light.png" alt="" height="16">\r
                        <!-- <span class="logo-lg-text-light">Xeria</span> -->\r
                    </span>\r
                    <span class="logo-sm">\r
                        <!-- <span class="logo-sm-text-dark">X</span> -->\r
                        <img src="./assets/dashboard/xeria/assets/images/logo-sm.png" alt="" height="18">\r
                    </span>\r
                </a>\r
            </div>\r
\r
            <ul class="list-unstyled topnav-menu topnav-menu-left m-0">\r
                <li>\r
                    <button class="button-menu-mobile waves-effect waves-light">\r
                        <span></span>\r
                        <span></span>\r
                        <span></span>\r
                    </button>\r
                </li>\r
    \r
            </ul>\r
        </div>\r
        <!-- end Topbar -->`,X=`              <!-- Footer Start -->\r
              <footer class="footer">\r
                <div class="container-fluid">\r
                    <div class="row">\r
                        <div id="year" class="col-md-6">\r
                            2019 &copy; Xeria theme \r
                        </div>\r
                        <div class="col-md-6">\r
                            <!--div class="text-md-right footer-links d-none d-sm-block">\r
                                <a href="javascript:void(0);">About Us</a>\r
                                <a href="javascript:void(0);">Help</a>\r
                                <a href="javascript:void(0);">Contact Us</a>\r
                            </div-->\r
                        </div>\r
                    </div>\r
                </div>\r
            </footer>\r
            <!-- end Footer -->`,De=`<div class="body">\r
    <header id="header" class="header-transparent header-transparent-dark-bottom-border header-effect-shrink"\r
        data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">\r
        <div class="header-body border-top-0 bg-dark box-shadow-none">\r
            <div class="header-container container">\r
                <div class="header-row">\r
                    <div class="header-column">\r
                        <div class="header-row">\r
                            <div class="header-logo">\r
                                <a href="#/">\r
                                    <img alt="Porto" width="90" src="./assets/tema/img/logo_vcard.min.png">\r
                                </a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <div class="header-column justify-content-end">\r
                        <div class="header-row">\r
                            <div\r
                                class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">\r
                                <div\r
                                    class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">\r
                                    <nav class="collapse">\r
                                        <ul class="nav nav-pills" id="mainNav">\r
                                            <!-- menu.json -->\r
                                            <!--1-Home-->\r
                                            <li class="">\r
                                                <a class=" active nav-link" href="#/">Inicio</a>\r
                                                <!--0-->\r
                                            </li>\r
                                            <!-- /menu.json -->\r
                                            <li>\r
                                                <a class="nav-link bg-link" href="#/registro">\r
                                                    <i class="fa fa-edit"></i> Registrate\r
                                                </a>\r
                                            </li>\r
                                            <li class="user-login">\r
                                                <a class="nav-link" href="#/login">\r
                                                    <i class="fa fa-sign-in"></i> Login\r
                                                </a>\r
                                            </li>\r
                                            <li class="user-activo">\r
                                                <a class="nav-link bg-link" href="#/dashboard">\r
                                                    <i class="fa fa-edit"></i> Dashboard\r
                                                </a>\r
                                            </li>\r
                                            <li class="user-logout">\r
                                                <a class="nav-link bg-link" href="#/logout">\r
                                                    <i class="fa fa-edit"></i> Salir\r
                                                </a>\r
                                            </li>\r
                                        </ul>\r
                                    </nav>\r
                                </div>\r
                                <button class="btn header-btn-collapse-nav" data-toggle="collapse"\r
                                    data-target=".header-nav-main nav">\r
                                    <i class="fas fa-bars"></i>\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </header>\r
    <div role="main" class="main">\r
        <!-- banner -->\r
        <!-- slider_vcard2.json -->\r
        <div class="slider-container rev_slider_wrapper" style="height: 100%;">\r
            <div id="revolutionSlider" class="slider rev_slider manual" data-version="5.4.8">\r
                <ul>\r
                    <li data-transition="fade" style="visibility: visible;">\r
                        <img src="./assets/tema/img/slide-1.jpg" alt="" data-bgposition="center center"\r
                            data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" class="rev-slidebg">\r
                        <h1 class="tp-caption custom-secondary-font font-weight-bold text-color-light"\r
                            data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center"\r
                            data-voffset="[-80,-80,-80,-40]" data-start="800"\r
                            data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 32px;">La soluci&oacute;n\r
                        </h1>\r
                        <div class="tp-caption custom-secondary-font font-weight-bold text-color-light"\r
                            data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center"\r
                            data-voffset="[-42,-42,-42,2]" data-start="800"\r
                            data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 42px;">para llegar a\r
                            m&aacute;s clientes</div>\r
                        <a href="#/registro"\r
                            class="btn btn-primary tp-caption text-uppercase text-color-light custom-border-radius"\r
                            data-hash data-hash-offset="85" data-x="['left','left','left','left']"\r
                            data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[60,60,60,100]" data-start="1500"\r
                            style="font-size: 12px; padding: 15px 6px;"\r
                            data-transform_in="y:[-300%]; opacity:0; s:500;"><i class="fa fa-edit"></i> Registrate</a>\r
                    </li>\r
                    <!--li data-transition="fade">\r
                        <img src="./assets/tema/img/slide-2.jpg" alt="" data-bgposition="center center"\r
                            data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" class="rev-slidebg">\r
                        <h1 class="tp-caption custom-secondary-font font-weight-bold text-color-light"\r
                            data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center"\r
                            data-voffset="[-80,-80,-80,-40]" data-start="800"\r
                            data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 32px;">Mantente en</h1>\r
                        <div class="tp-caption custom-secondary-font font-weight-bold text-color-light"\r
                            data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center"\r
                            data-voffset="[-42,-42,-42,2]" data-start="800"\r
                            data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 42px;">contacto con tus\r
                            clientes</div>\r
                        <a href="#/registro"\r
                            class="btn btn-primary tp-caption text-uppercase text-color-light custom-border-radius"\r
                            data-hash data-hash-offset="85" data-x="['left','left','left','left']"\r
                            data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[60,60,60,100]" data-start="1500"\r
                            style="font-size: 12px; padding: 15px 6px;"\r
                            data-transform_in="y:[-300%]; opacity:0; s:500;"><i class="fa fa-edit"></i> Registrate</a>\r
                    </li-->\r
                </ul>\r
            </div>\r
        </div>\r
        <!-- //banner -->\r
        <section class="looking-for custom-position-1 custom-md-border-top">\r
            <div class="container sec-b">\r
                <div class="row align-items-center">\r
                    <div class="col-md-6 col-lg-7">\r
                        <div class="looking-for-box">\r
                            <h2>- <span class="text-1 custom-secondary-font">Tarjeta de contacto digital</span><br>\r
                                Consulta Plan Business\r
                            </h2>\r
                            <p>Una estrategia digital del futuro hoy <b>Vcards</b></p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-3 d-flex justify-content-md-end mb-4 mb-md-0">\r
                        <a class="text-decoration-none" href="tel:(01)4424350334" target="_blank" title="Llamanos">\r
                            <span class="custom-call-to-action">\r
                                <span class="action-title text-color-primary">Llamanos</span>\r
                                <span class="action-info text-color-light">(01)4424350334</span>\r
                            </span>\r
                        </a>\r
                    </div>\r
                    <div class="col-md-3 col-lg-2">\r
                        <a class="text-decoration-none" href="mailto:multiportal@outlook.com" target="_blank"\r
                            title="Email">\r
                            <span class="custom-call-to-action">\r
                                <span class="action-title text-color-primary">Email</span>\r
                                <span class="action-info text-color-light">multiportal@outlook.com</span>\r
                            </span>\r
                        </a>\r
                    </div>\r
                </div>\r
            </div>\r
        </section>\r
    </div>\r
</div>`,ee={Home:De},Pe={dashboard:'<!-- Begin page --><div id="wrapper">'+K+W+'<div class="content-page">'+ye+X+"</div></div><!-- END wrapper -->"+G,app:'<!-- Begin page --><div id="wrapper" class="dashboard" style="display: none;">'+K+W+'<div class="content-page">'+we+X+"</div></div><!-- END wrapper -->"+G+xe+ke,tarjetas:qe,empresas:je,cuenta:Ee,settings:Se,forget:$e,login:Ce,logout:Ie,registro:_e,noauth:Le},te={...ee,...Pe},Te=["dashboard","tarjetas","empresas","cuenta","settings"],Ae=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,Re=e=>{var t=te[e];return t=t??Ae,Xe(t)},Be=async(e,t,n,r)=>{const a=`${e}/${t}`;let o=localStorage.getItem("Token");o=o&&o!=null?o:"";const c={...r,token:o},u=r!=null?JSON.stringify(c):"",p=await fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:u});if(!p.ok)console.error("Error 404(Fetch): "),p=="Unauthorized"?console.error("Error 401(Fetch): "):p=="Forbidden"?console.error("Error 403(Fetch): "):p=="Not Found"&&console.error("Error 404(Fetch): ");else return await p.json()},Oe=async(e,t)=>{const{data:n}=await Be(e,"profile/index.php","POST","");switch(t){case"InfoUser":return n.InfoUser;case"InfoToken":return n.InfoToken;default:return n}},Q=async e=>{try{const t=await fetch(e);if(t.status==200){const n=await t.json();if(n)return n}else console.log("Error 404")}catch(t){console.log(t)}},{host:Me,hostDev:Ue,typeBack:Fe,apiVer:He}=L();function Ne(){var e=self.location.href,t=e.lastIndexOf("/"),n=e.substring(t+1,e.length);return n}function Ve(e,t){var n=e.replace("/"+t,""),r=n.split("/"),a=window.location.search.substring(1),o=a.split("&");return a==""&&(o=["mod="+r[1],"ext="+r[2],"id="+r[3]]),o}function ze(e){for(var t=0;t<e.length;t++){var n=e[t].split("=");if(n[0]=="mod")var r=n[1];if(n[0]=="ext")var a=n[1];if(n[0]=="id")var o=n[1]}return r=r==""?"Home":r.replace("?",""),a=a==""||a=="undefined"?"index":a,o=o==""||o=="undefined"?"":o,{mod:r,ext:a,id:o}}function Ge(e,t,n,r){let a=localStorage.getItem("Token");document.querySelector("#menuweb");let o=document.querySelector(".user-login"),c=document.querySelector(".user-activo"),u=document.querySelector(".user-logout");n[t]&&(o.classList.remove("d-none"),c.classList.add("d-none"),u.classList.add("d-none"),a!=null&&a!=null&&a!="null"&&a!="undefined"&&(o.classList.add("d-none"),c.classList.remove("d-none"),u.classList.remove("d-none")))}const We=(e,t,n,r)=>{var a=localStorage.getItem("Token");x("log","hash=>"+e);let o=n!="index"?" / "+Y(n):"";document.title=r+" - "+Y(t)+o,Ke(t,Te);let c=t!="Home"&&n!="index"?n:t,u=t=="dashboard"&&n!="index"?"appDash":"app";console.log(u);let v=document.getElementById(u);if(v){if(v.innerHTML="",e)return v.appendChild(Re(c))}else a!=null&&a!="undefined"?window.location.href="#/dashboard":window.location.href="#/"};function Ke(e,t){var n=localStorage.getItem("Token");x("log","token="+n);let r=t.length;for(let a=0;a<r;a++)e===t[a]&&x("log","Accceso: "+e+"="+t[a]),e===t[a]&&(n==null||n=="undefined")&&(window.location.href="#/noauth");e=="login"&&n!=null&&n!="undefined"&&(window.location.href="#/dashboard")}function Xe(e){const t=document.createElement("div");return t.innerHTML=e,t}function Qe(e,t){(e==""||e=="undefined")&&(window.location.href=t)}function x(e,t){if(Me==Ue)switch(e){case"log":console.log(t);break;case"warn":console.warn(t);break;case"error":console.error(t);break;default:console.log(t);break}}function Y(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}function A(e,t){if(e.length>0)for(let a=0;a<e.length;a++)if(document.getElementById(t+a))x("log","Ok: dash-"+a);else if(document.createStyleSheet)document.createStyleSheet(e[a]);else{var n="@import url('"+e[a]+"');",r=document.createElement("link");r.id=t+a,r.rel="stylesheet",r.href="data:text/css,"+escape(n),document.getElementsByTagName("head")[0].appendChild(r)}}function R(e,t){for(let n=0;n<e;n++){let r=document.getElementById(t+n);r&&document.getElementsByTagName("head")[0].removeChild(r)}}function Ye(){let e=document.getElementsByTagName("body")[0],n=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var r=document.createElement("div");r.id="load",r.innerHTML=n,e.appendChild(r),setTimeout(()=>{let a=document.getElementById(r.id);a&&e.removeChild(a)},1500)}function Je(){const{mod:e,ext:t}=L();let n=e!="Home"&&t!="index"?t:e;var r=te[n];e!="logout"&&e!="noauth"&&t=="index"&&r!=null&&Ye()}async function Ze(e){if(Fe!="firebase"){const{version:t}=await Q(`${e}assets/pwa/manifest.json`);console.log(`Version Actual: ${t}`);const n=await Q(He);if(n&&n!=null){const{ultimate:r}=n.data[0];t!=r&&console.log(`Actualizar version (${t} => ${r})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}const et=L(),{host:tt,dominio:nt,path_url:rt,hostDev:at}=et;console.log("/* javascript login | VARIABLES CONSTANTES*/");let F=U+"/login/";tt==at&&console.log("api_login="+F);function ot(){const e=document.getElementById("form-login");e!=null&&(e.addEventListener("submit",st),console.log("btnLogin Activado"))}function st(e){e.preventDefault(),console.log("Validación de Datos");let t=document.getElementById("username").value,n=document.getElementById("password").value;var r={username:t,password:n};const a=F+"index.php";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(o=>o.json()).then(o=>{const{data:c}=o;x("log",o),x("log","getToken:"+c.token),localStorage.setItem("Token",c.token);let u=localStorage.getItem("Token");x("log","Res-Token:"+u),u!=null&&u!="undefined"?location.href=nt+rt+"#/dashboard":J(!1,0)}).catch(o=>{J(o,1)})}const J=(e,t)=>{e&&console.log(e);let n=document.getElementById("msj-error");n.innerHTML=`<div class="alert alert-danger" role="alert">${t==1?"<b>Error:</b>":""} Usuario o Contraseña Incorrectos</div>`},it=()=>{const e=F+"";fetch(e).then(t=>t.json()).then(t=>{x("log",t)}).catch(t=>console.log(t)),setTimeout(function(){ot()},1e3)};function lt(){console.log("Logout/Salir"),localStorage.clear();var e=localStorage.getItem("Token");e==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}function ne(){(function(e){var t=function(){};t.prototype.initTooltipPlugin=function(){e.fn.tooltip&&e('[data-toggle="tooltip"]').tooltip()},t.prototype.initPopoverPlugin=function(){e.fn.popover&&e('[data-toggle="popover"]').popover()},t.prototype.initToastPlugin=function(){e.fn.toast&&e('[data-toggle="toast"]').toast()},t.prototype.initSlimScrollPlugin=function(){e.fn.slimScroll&&e(".slimscroll").slimScroll({height:"auto",position:"right",size:"8px",touchScrollStep:20,color:"#9ea5ab"})},t.prototype.initFormValidation=function(){e(".needs-validation").on("submit",function(n){return e(this).addClass("was-validated"),e(this)[0].checkValidity()===!1?(n.preventDefault(),n.stopPropagation(),!1):!0})},t.prototype.initCustomModalPlugin=function(){e('[data-plugin="custommodal"]').on("click",function(n){n.preventDefault();var r=new Custombox.modal({content:{target:e(this).attr("href"),effect:e(this).attr("data-animation")},overlay:{color:e(this).attr("data-overlayColor")}});r.open()})},t.prototype.initCounterUp=function(){e(this).attr("data-delay")&&e(this).attr("data-delay"),e(this).attr("data-time")&&e(this).attr("data-time"),e('[data-plugin="counterup"]').each(function(n,r){e(this).counterUp({delay:100,time:1200})})},t.prototype.initPeityCharts=function(){e('[data-plugin="peity-pie"]').each(function(n,r){var a=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("pie",{fill:a,width:o,height:c})}),e('[data-plugin="peity-donut"]').each(function(n,r){var a=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("donut",{fill:a,width:o,height:c})}),e('[data-plugin="peity-donut-alt"]').each(function(n,r){e(this).peity("donut")}),e('[data-plugin="peity-line"]').each(function(n,r){e(this).peity("line",e(this).data())}),e('[data-plugin="peity-bar"]').each(function(n,r){var a=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("bar",{fill:a,width:o,height:c})})},t.prototype.initKnob=function(){e('[data-plugin="knob"]').each(function(n,r){e(this).knob()})},t.prototype.initTippyTooltips=function(){e('[data-plugin="tippy"]').length>0&&tippy('[data-plugin="tippy"]')},t.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initSlimScrollPlugin(),this.initFormValidation(),this.initCustomModalPlugin(),this.initCounterUp(),this.initPeityCharts(),this.initKnob(),this.initTippyTooltips()},e.Components=new t,e.Components.Constructor=t})(window.jQuery),function(e){var t=function(){this.$body=e("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-toggle="remove"]',this.$portletRefresher='.card a[data-toggle="reload"]'};t.prototype.init=function(){var n=this;e(document).on("click",this.$portletCloser,function(r){r.preventDefault();var a=e(this).closest(n.$portletIdentifier),o=a.parent();a.remove(),o.children().length==0&&o.remove()}),e(document).on("click",this.$portletRefresher,function(r){r.preventDefault();var a=e(this).closest(n.$portletIdentifier);a.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');var o=a.find(".card-disabled");setTimeout(function(){o.fadeOut("fast",function(){o.remove()})},500+300*(Math.random()*5))})},e.Portlet=new t,e.Portlet.Constructor=t}(window.jQuery),function(e){var t=function(){this.$body=e("body"),this.$window=e(window)};t.prototype._resetSidebarScroll=function(){e(".slimscroll-menu").slimscroll({height:"auto",position:"right",size:"8px",color:"#9ea5ab",wheelStep:5,touchScrollStep:20})},t.prototype.initMenu=function(){var n=this;e(".button-menu-mobile").on("click",function(r){r.preventDefault(),n.$body.toggleClass("sidebar-enable"),n.$window.width()>=768?n.$body.toggleClass("enlarged"):n.$body.removeClass("enlarged"),n._resetSidebarScroll()}),e("#side-menu").metisMenu(),n._resetSidebarScroll(),e(".right-bar-toggle").on("click",function(r){e("body").toggleClass("right-bar-enabled")}),e(document).on("click","body",function(r){e(r.target).closest(".right-bar-toggle, .right-bar").length>0||e(r.target).closest(".left-side-menu, .side-nav").length>0||e(r.target).hasClass("button-menu-mobile")||e(r.target).closest(".button-menu-mobile").length>0||(e("body").removeClass("right-bar-enabled"),e("body").removeClass("sidebar-enable"))}),e("#side-menu a").each(function(){var r=window.location.href.split(/[?#]/)[0];this.href==r&&(e(this).addClass("active"),e(this).parent().addClass("active"),e(this).parent().parent().addClass("in"),e(this).parent().parent().prev().addClass("active"),e(this).parent().parent().parent().addClass("active"),e(this).parent().parent().parent().parent().addClass("in"),e(this).parent().parent().parent().parent().parent().addClass("active"))}),e(".navbar-toggle").on("click",function(r){e(this).toggleClass("open"),e("#navigation").slideToggle(400)}),e(window).on("load",function(){e("#status").fadeOut(),e("#preloader").delay(350).fadeOut("slow")})},t.prototype.initLayout=function(){this.$window.width()>=768&&this.$window.width()<=1028?this.$body.addClass("enlarged"):this.$body.data("keep-enlarged")!=!0&&this.$body.removeClass("enlarged")},t.prototype.init=function(){var n=this;this.initLayout(),e.Portlet.init(),this.initMenu(),e.Components.init(),n.$window.on("resize",function(r){r.preventDefault(),n.initLayout(),n._resetSidebarScroll()})},e.App=new t,e.App.Constructor=t}(window.jQuery),function(e){e.App.init()}(window.jQuery),Waves.init()}const ct=L(),{host:re,dominio:_t,path_url:Lt,base_url:Et,screenw:dt,mod:jt,hostDev:ae,year:ut}=ct;async function pt(){ne();let e=document.querySelector(".log-out");e!=null&&e.addEventListener("click",()=>{setTimeout(()=>{window.location.href="#/logout"},1e3)});let t=document.querySelector(".btn-set");t!=null&&t.addEventListener("click",()=>{window.location.href="#/dashboard/settings"});let n=document.querySelector(".user-edit");n!=null&&n.addEventListener("click",()=>{window.location.href="#/dashboard/cuenta"});let r=document.querySelector("#year");r&&(r.innerHTML=ut+" &copy; Xeria theme");let a=document.querySelectorAll(".arrow");for(var o=0;o<a.length;o++)a[o].addEventListener("click",g=>{g.target.parentElement.parentElement.classList.toggle("showMenu")});let c=document.querySelector(".sidebar"),u=document.querySelector(".bx-menu");if(u){let g=localStorage.getItem("bar");g=="true"&&c.classList.toggle("close"),u.addEventListener("click",()=>{let m=c.classList.toggle("close");localStorage.setItem("bar",m),g=localStorage.getItem("bar")}),console.log("Bar-Load:",g)}dt<=740&&c&&side.classList.add("close");const v=document.querySelector(".profile_name"),p=document.querySelector(".pro-user-name"),k=document.querySelector(".job");let q=re==ae?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+q),v!=null&&k!=null&&p!=null){const{email:g,username:m,nombre:B,foto:D,puesto:E,status:P}=await Oe(U,"InfoUser");v&&(v.innerHTML=m),p&&(p.innerHTML=m+' <i class="mdi mdi-chevron-down"></i>'),k&&(k.innerHTML=E)}setTimeout(()=>{let g=document.querySelector(".slimscroll-menu");g&&(g.style.height="350px");let m=document.querySelector("#slimscroll-menu");m&&(m.style.height="250px")},100)}function vt(){setTimeout(function(){re==ae&&console.log("btnSidebar Activado"),pt()},500)}function gt(){const{mod:e}=L();var t={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};firebase.initializeApp(t),firebase.analytics();const n=firebase.database(),r=firebase.auth();firebase.firestore(),console.log("Modulo=>"+e),n.ref().child("vcard_config"),n.ref().child("vcard_signup");var a=n.ref().child("vcard_vcard"),o=n.ref().child("vcard_user"),c=n.ref().child("vcard_vcard_empresas");const u=document.querySelectorAll(".dashboard"),v=document.querySelectorAll(".login-page"),p=document.querySelectorAll(".registro-page"),k=i=>{i?(u.forEach(s=>s.style.display="block"),v.forEach(s=>s.style.display="none"),p.forEach(s=>s.style.display="none")):(u.forEach(s=>s.style.display="none"),e=="registro"?(p.forEach(s=>s.style.display="block"),v.forEach(s=>s.style.display="none")):(p.forEach(s=>s.style.display="none"),v.forEach(s=>s.style.display="block")))};document.querySelector("#logout").addEventListener("click",i=>{i.preventDefault(),r.signOut().then(()=>{console.log("signup out"),localStorage.clear(),navigator.serviceWorker.getRegistrations().then(function(s){for(let l of s)l.unregister()})})});const g=document.querySelector("#registro-form");g.addEventListener("submit",i=>{i.preventDefault();const s="Sin Nombre",l=g["register-email"].value,d=g["register-password"].value;var f={displayName:s,email:l,photoURL:null};r.createUserWithEmailAndPassword(l,d).then(h=>{console.log("Datos user: "+f),g.reset()})});const m=document.querySelector("#login-form");m.addEventListener("submit",i=>{i.preventDefault();const s=m["login-email"].value,l=m["login-password"].value;r.signInWithEmailAndPassword(s,l).then(d=>{m.reset()})}),r.onAuthStateChanged(i=>{i?(console.log("signin:"+i.email),k(i)):(console.log("signout"),k(i))}),document.querySelector("#googleLogin").addEventListener("click",i=>{i.preventDefault(),m.reset(),E()}),document.querySelector("#googleRegister").addEventListener("click",i=>{i.preventDefault(),m.reset(),E()});function E(){const i=new firebase.auth.GoogleAuthProvider;r.signInWithPopup(i).then(s=>{console.log(s),console.log("google sign in")}).catch(s=>{console.log(s)})}function P(){var i="";a.orderByChild("orden").limitToFirst(10).on("child_added",function(l){var d=l.val();const{ID:f,cover:h,profile:b,nombre:w,puesto:_,f_create:S,visible:I}=d;if(I==1){i+=`
  <div class="public-user-block block">
    <div class="row d-flex align-items-center">                   
      <div class="col-lg-4 d-flex align-items-center">
        <div class="order">${f}</div>
        <div class="avatar" style="background:url(${h});background-repeat:no-repeat;background-size:cover;background-position:center;"></div>
        <a href="${page_url}../profile/${b}" class="name">
          <strong class="d-block">${w}</strong>
          <span class="d-block">${b}</span>
        </a>
      </div>
      <div class="col-lg-4 text-center">
        <div class="contributions">${_}</div>
      </div>
      <div class="col-lg-4">
        <div class="details d-flex">
          <div class="item"><i class="fa fa-calendar"></i><strong>${S}</strong></div>
          <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
          <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
          <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
        </div>
      </div>
    </div>
  </div>`;const C=document.querySelector("#lista");C.innerHTML=i}})}e=="Home"&&P();let y=!0,j=1;$("#app-modulo").on("click",".btn-add",function(){$("#form1").trigger("reset"),fecha_hora_create(1),console.log("Boton Agregar activado");let i=a.orderByChild("ID");console.log(i),i.on("value",function(d){var f=d.val();let h=Object.values(f),b=h.length-1,w=h[b],_=parseInt(w.ID)+1;$("#ID").val(_);let S=parseInt(w.orden)-1;console.log(S),$("#orden").val(S)});let s=document.querySelector("#id_code_google");$("#uid").val(s.textContent);let l=document.querySelector("#email_session");$("#user").val(l.textContent),$("#cover").val(page_url+"bloques/files/images/photos/sinfoto.png"),$("#ima").attr("src",page_url+"bloques/files/images/photos/sinfoto.png"),y=!1}),$("#app-modulo").on("click",".btn-edit",function(){$("#form1").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement.parentElement;let s=$(i).attr("vcardId");a.child(s).once("value",function(l){valor=l.val(),$("#cardId").val(s),$("#ID").val(valor.ID),$("#orden").val(valor.orden),$("#uid").val(valor.uid),$("#f_create").val(valor.f_create),$("#user").val(valor.user),$("#descripcion").val(valor.descripcion),$("#profile").val(valor.profile),$("#nombre").val(valor.nombre),$("#puesto").val(valor.puesto),$("#email").val(valor.email),$("#cell").val(valor.cell),$("#tel_ofi").val(valor.tel_ofi),$("#idemp").val(valor.idemp),$("#web").val(valor.web),$("#fb").val(valor.fb),$("#lk").val(valor.lk),$("#ins").val(valor.ins),$("#visible").val(valor.visible),$("#cover").val(valor.cover),$("#ima").attr("src",valor.cover)}),y=!0}),e=="tarjetas"&&$("#app-modulo").on("#form1").submit(function(i){i.preventDefault(),console.log("Form1");var s=$("#cardId").val();console.log(s);var l="";const d={ID:$("#ID").val(),orden:$("#orden").val(),uid:$("#uid").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),user:$("#user").val(),descripcion:$("#descripcion").val(),cover:$("#cover").val(),profile:$("#profile").val(),nombre:$("#nombre").val(),puesto:$("#puesto").val(),email:$("#email").val(),web:$("#web").val(),cell:$("#cell").val(),tel_ofi:$("#tel_ofi").val(),idemp:$("#idemp").val(),fb:$("#fb").val(),lk:$("#lk").val(),ins:$("#ins").val(),visible:$("#visible").val()};console.log(d),y==!1?(l="Guardado",a.push(d)):(l="Actualizado",a.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form1").trigger("reset"),$("#addVcard").modal("hide"),y=!1}),$("#app-modulo").on("click",".btn-delete",function(){var i=e=="tarjetas"?"Tarjeta":"Empresa";const s=$(this)[0].parentElement.parentElement.parentElement;let l=$(s).attr("vcardId");console.log(l),Swal.fire({title:"Esta seguro de eliminar esta "+i+"?",text:"¡Está operación no se puede revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Borrar"}).then(d=>{d.value&&(refTable=e=="tarjetas"?a:c,refTable.child(l).remove(),Swal.fire("¡Eliminado!","La "+i+" ha sido eliminada.","success"))})}),$(document).on("click","#Aceptar",function(i){i.preventDefault();const s="https://cloudvcardjs.000webhostapp.com/";var l=new FormData;l.append("userfile",$("input[name=userfile]")[0].files[0]),$.ajax({url:s+"bloques/files/admin/backend.php?mod="+e+"&action=subir_cover",crossDomain:!0,type:"POST",data:l,processData:!1,contentType:!1,cache:!1,beforeSend:function(d){$("#imagen").html("Subiendo Imagen")},success:function(d){$("#imagen").html(d),$(".alert-dismissible").delay(3e3).fadeOut("slow"),console.log("Subido Correctamente")}})}),$(document).on("click","#Aceptar2",function(i){i.preventDefault();const s="https://cloudvcardjs.000webhostapp.com/";var l=new FormData;l.append("userfile2",$("input[name=userfile2]")[0].files[0]),$.ajax({url:s+"bloques/files/admin/backend.php?mod="+e+"&action=subir_coverbg",crossDomain:!0,type:"POST",data:l,processData:!1,contentType:!1,cache:!1,beforeSend:function(d){$("#imagen2").html("Subiendo Imagen")},success:function(d){$("#imagen2").html(d),$(".alert-dismissible").delay(3e3).fadeOut("slow"),console.log("Subido Correctamente")}})}),$("#q").keyup(function(i){if($("#q").val()){let s=$("#q").val();const l=document.querySelector("#lista");$.ajax({url:page_url+"bloques/files/admin/backend.php?action=buscar",type:"POST",data:{q:s},success:function(d){console.log(d),l.innerHTML=d}})}}),$("#searchForm").submit(function(i){i.preventDefault();const s=document.querySelector(".search-panel");s.style.display="none"}),$("#app-modulo").on("click",".btnAdd",function(){$("#form2").trigger("reset"),fecha_hora_create(1),console.log("Boton Agregar activado"),c.orderByChild("ID").on("value",function(l){var d=l.val();let f=Object.values(d),h=f.length-1,b=f[h],w=parseInt(b.ID)+1;$("#ID").val(w)});let s=document.querySelector("#id_code_google");$("#uid").val(s.textContent),$("#cover").val(page_url+"bloques/files/images/photos/sinlogo.jpg"),$("#coverbg").val(page_url+"bloques/files/images/photos/sinbg.jpg"),$("#ima").attr("src",page_url+"bloques/files/images/photos/sinlogo.jpg"),$("#ima2").attr("src",page_url+"bloques/files/images/photos/sinbg.jpg"),y=!1}),$("#app-modulo").on("click",".btnEditar",function(){console.log("bol="+j),$("#form2").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement.parentElement;let s=$(i).attr("vcardId");c.child(s).once("value",function(l){valor=l.val(),console.log(valor),$("#cardId").val(s),$("#ID").val(valor.ID),$("#uid").val(valor.uid),$("#f_create").val(valor.f_create),$("#empresa").val(valor.empresa),$("#bg_color").val(valor.bg_color),$("#visible").val(valor.visible),$("#cover").val(valor.cover),$("#coverbg").val(valor.coverbg),$("#ima").attr("src",valor.cover),$("#ima2").attr("src",valor.coverbg)}),y=!0}),e=="empresas"&&$("#app-modulo").on("#form2").submit(function(i){i.preventDefault();var s=$("#cardId").val();console.log(s);var l="";const d={ID:$("#ID").val(),uid:$("#uid").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),cover:$("#cover").val(),coverbg:$("#coverbg").val(),empresa:$("#empresa").val(),bg_color:$("#bg_color").val(),visible:$("#visible").val()};console.log(d),y==!1?(l="Guardado",c.push(d)):(l="Actualizado",c.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form2").trigger("reset"),$("#empresaModal").modal("hide"),y=!1}),$("#app-modulo").on("click",".btnEditar3",function(){console.log("Bol="+j),$("#form3").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement;let s=$(i).attr("vcardId");console.log(s),s==""&&fecha_hora_create(1);const l=document.querySelector(".contributions").textContent;console.log(l);const d=document.querySelector(".h5").textContent;console.log(d);const f=document.querySelector("#email_session").textContent;console.log(f);const h=document.querySelector("#ava").getAttribute("src");if(console.log(h),s!=""){const b=document.querySelector("#f_c").textContent;console.log(b),$("#f_create").val(b);const w=document.querySelector("#direc1").textContent;console.log(w),$("#direc").val(w);const _=document.querySelector("#tel1").textContent;console.log(_),$("#tel").val(_);const S=document.querySelector("#level1").textContent;console.log(S),$("#level").val(S);const I=document.querySelector("#tipoc1").textContent;console.log(I),$("#tipoc").val(I);const C=document.querySelector("#codi1").textContent;console.log(C),$("#codi").val(C)}$("#cardId").val(s),$("#uid").val(l),$("#nombre").val(d),$("#email").val(f),$("#cover").val(h),$("#ima").attr("src",h)}),e=="perfil"&&$("#app-modulo").on("#form3").submit(function(i){i.preventDefault();var s=$("#cardId").val();console.log(s);var l="";const d={foto:$("#cover").val(),uid:$("#uid").val(),email:$("#email").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),usuario:$("#nombre").val(),direccion:$("#direc").val(),tel:$("#tel").val(),level:$("#level").val(),tipoc:$("#tipoc").val(),codi:$("#codi").val()};console.log(d),s==""?(l="Guardado",o.push(d)):(l="Actualizado",o.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form2").trigger("reset"),$("#myModal").modal("hide"),y=!1})}const mt=L(),{host:ft,dominio:qt,path_url:Dt,base_url:Pt,screenw:Tt,mod:At,hostDev:ht,year:bt}=mt;async function yt(){ne();let e=document.querySelector(".btn-set");e!=null&&e.addEventListener("click",()=>{window.location.href="#/app/settings"});let t=document.querySelector(".user-edit");t!=null&&t.addEventListener("click",()=>{window.location.href="#/app/cuenta"});let n=document.querySelector("#year");n&&(n.innerHTML=bt+" &copy; Xeria theme"),setTimeout(()=>{let r=document.querySelector(".slimscroll-menu");r&&(r.style.height="350px");let a=document.querySelector("#slimscroll-menu");a&&(a.style.height="250px")},100)}function wt(){setTimeout(function(){ft==ht&&console.log("btnSidebar Activado"),yt(),gt()},500)}function xt(e,t){const n="app-",r=["https://fonts.googleapis.com/css?family=Muli:300,400,700",t+"assets/login/vendor/bootstrap/css/bootstrap.min.css",t+"assets/login/css/font.css",t+"assets/login/css/style.green.css",t+"assets/login/css/custom.css",t+"assets/dashboard/xeria/assets/css/bootstrap.css",t+"assets/dashboard/xeria/assets/css/app.css"];e=="app"?A(r,n):R(r.length,n);const a="dash-",o=[t+"assets/dashboard/xeria/assets/css/bootstrap.css",t+"assets/dashboard/xeria/assets/css/app.css"];e=="dashboard"?A(o,a):R(o.length,a);const c="login-",u=["https://fonts.googleapis.com/css?family=Muli:300,400,700",t+"assets/login/vendor/bootstrap/css/bootstrap.min.css",t+"assets/login/css/font.css",t+"assets/login/css/style.green.css",t+"assets/login/css/custom.css"];e!="login"&&e!="registro"?R(u.length,c):A(u,c);const v="home-",p=[t+"assets/tema/css/demo-business-consulting.css",t+"assets/tema/css/skin-business-consulting.css",t+"assets/tema/css/style.css"];e!="Home"?R(p.length,v):A(p,v)}function kt(){document.querySelector("nav");let e=document.querySelector(".header-body .header-btn-collapse-nav");e&&e.addEventListener("click",()=>{console.log("Click");let t=document.querySelector(".header-body"),r=document.querySelector(".header-body .show")?"auto":"251px";t.style.height=r})}function St(){setTimeout(()=>{kt()},500)}function $t(e){const{route:t,mod:n,base_url:r}=e;x("log","route="+t),n&&(xt(n,r),Je()),t=="Home/index"&&St(),t=="login/index"&&it(),t=="logout/index"&&lt(),t=="dashboard/index"&&vt(),t=="app/index"&&wt()}function L(){var e=window,t=document,n=e.location,r=new Date,a=r.getDate();a=a<10?"0"+a:a;var o=r.getMonth()+1;o=o<10?"0"+o:o;var c=r.getFullYear(),u=c+"-"+o+"-"+a;const{protocol:v,host:p,origin:k,pathname:q,hash:g,href:m,search:B}=n,D=k+"/",E=k,P=m,y=B,j=q.replace("/",""),i=D+j,s=p=="localhost"||p!=M&&p!=z?j+T:T,l=p=="localhost:9001"?"../":"./",d=D+s,f=screen.width,h=screen.height;var b="default",w="temas/"+b+"/",_=Ne(),S=Ve(g,T);let{mod:I,ext:C,id:se}=ze(S);var H="/"+C,N=I+H,ie=I||"",le=C&&C!="index"?"/"+C:"",ce="#/"+ie+le,de=i+O+N+".html",ue=i+O+"404/index.html";return{w:e,d:t,loc:n,dt:r,day:a,mon:o,year:c,fecha:u,title:me,typeBack:fe,typeDev:he,path_hash:T,path_src:Z,path_page:O,hostDev:M,hostPre:z,protocol:v,host:p,dominio:D,dominio1:E,pathname:q,hash:g,URL:P,quest:y,path_url:j,path_root:s,path_build:l,base_url:i,page_url:d,screenw:f,screenh:h,tema:b,path_tema:w,pag_name:_,vars_Url:S,mod:I,ext:C,id:se,ext2:H,route:N,hash2:ce,url_mod:de,url404:ue,apiVer:be}}function oe(){const e=L();x("log",e);const{hash:t,mod:n,ext:r,page_url:a,base_url:o,title:c}=e;We(t,n,r,c),$t(e),Ge(t,n,ee),Qe(n,a),Ze(o)}function Ct(){console.log("Run function inicio"),oe()}window.addEventListener("hashchange",()=>{x("warn","Event Listener"),oe()});Ct();
