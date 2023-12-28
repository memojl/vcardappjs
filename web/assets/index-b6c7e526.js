(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let he=window.location;const{pathname:be,host:G}=he;G!=="localhost"&&G!=="localhost:5173"&&G!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(be+"sw.js").then(function(e){console.log("Service Worker registro correcto con scope: ",e.scope)}).catch(function(e){console.log("Service Worker registro fallo: ",e)});const{host:H}=window.location,ye="VcardApp",we="firebase",O="#/",oe="src/",W=oe+"pages/",xe="vite",F="localhost:5173",N="localhost";console.log(H+"=="+F,H+"=="+N);const V=H==F||H==N?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api";console.warn("Api="+V);const Se=V+"/v2/api_version",ke=`<div id="appDash">\r
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
</div>`,Ce=`<div id="appDash">\r
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
</div>`,$e=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,Ie=`<!--LOGIN-->\r
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
                            <form id="form-login" class="form-validate mb-4">\r
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
<!--//LOGIN-->`,_e=`  <!--REGISTRO-->\r
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
  <!--//REGISTRO-->`,Le=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,Ee=`<div class="container text-center">\r
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
`,qe=`<!--LOGIN-->\r
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
<!--//LOGIN-->`,je=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,De=`<!--\r
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
<!--//REGISTRO-->`,Pe=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Te=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,Ae=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,Me=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,Q=`      <!-- Right Sidebar -->\r
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
                    <img id="foto1" src="./assets/img/sinfoto.png" alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">\r
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
    <div class="rightbar-overlay"></div>`,Y=`            <!-- ========== Left Sidebar Start ========== -->\r
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
<!--\r
                            <li>\r
                                <a href="./#/app">\r
                                    <i class="fas fa-tachometer-alt"></i>\r
                                    <span> Dashboard </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="./#/app/tarjetas">\r
                                    <i class="far fa-address-card"></i>\r
                                    <span> Mis tarjetas </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a class="btn-empresas">\r
                                    <i class="fas fa-industry"></i>\r
                                    <span> Mis empresas </span>\r
                                </a>\r
                            </li>\r
                        -->\r
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
            <!-- Left Sidebar End -->`,J=`          <!-- Topbar Start -->\r
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
                        <img id="foto" src="./assets/img/sinfoto.png" alt="user-image" class="rounded-circle">\r
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
        <!-- end Topbar -->`,Z=`              <!-- Footer Start -->\r
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
            <!-- end Footer -->`,Re=`<div class="body">\r
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
                                                <a class="nav-link bg-link" href="#/app">\r
                                                    <i class="fa fa-sign-in"></i> App\r
                                                </a>\r
                                            </li>                                            \r
                                            <li>\r
                                                <a class="nav-link bg-link" href="#/registro">\r
                                                    <i class="fa fa-edit"></i> Registrate\r
                                                </a>\r
                                            </li>\r
                                            <li class="user-login">\r
                                                <a class="nav-link bg-link" href="#/login">\r
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
</div>`,se={Home:Re},Be={dashboard:'<!-- Begin page --><div id="wrapper">'+J+Y+'<div class="content-page">'+ke+Z+"</div></div><!-- END wrapper -->"+Q,app:'<!-- Begin page --><div id="wrapper" class="dashboard" style="display: none;">'+J+Y+'<div class="content-page">'+Ce+Z+"</div></div><!-- END wrapper -->"+Q+Ie+_e,dash:$e,tarjetas:Me,empresas:Ae,cuenta:Te,settings:Le,forget:Ee,login:qe,logout:je,registro:De,noauth:Pe},ie={...se,...Be},Oe=["dashboard","tarjetas","empresas","cuenta","settings"],ee={dash:{txt:"Dashboard",icon:"fas fa-tachometer-alt"},tarjetas:{txt:"Mis tarjetas",icon:"far fa-address-card"},empresas:{txt:"Mis empresas",icon:"fas fa-industry"}},Ue=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,le=e=>{var t=ie[e];return t=t??Ue,Ze(t)},He=async(e,t,n,a)=>{const r=`${e}/${t}`;let o=localStorage.getItem("Token");o=o&&o!=null?o:"";const c={...a,token:o},g=a!=null?JSON.stringify(c):"",u=await fetch(r,{method:n,headers:{"Content-Type":"application/json"},body:g});if(!u.ok)console.error("Error 404(Fetch): "),u=="Unauthorized"?console.error("Error 401(Fetch): "):u=="Forbidden"?console.error("Error 403(Fetch): "):u=="Not Found"&&console.error("Error 404(Fetch): ");else return await u.json()},Fe=async(e,t)=>{const{data:n}=await He(e,"profile/index.php","POST","");switch(t){case"InfoUser":return n.InfoUser;case"InfoToken":return n.InfoToken;default:return n}},te=async e=>{try{const t=await fetch(e);if(t.status==200){const n=await t.json();if(n)return n}else console.log("Error 404")}catch(t){console.log(t)}},{hash:Ne,host:Ve,hostDev:ze,typeBack:Et,apiVer:Ge}=q();function We(){var e=self.location.href,t=e.lastIndexOf("/"),n=e.substring(t+1,e.length);return n}function Ke(e,t){var n=e.replace("/"+t,""),a=n.split("/"),r=window.location.search.substring(1),o=r.split("&");return r==""&&(o=["mod="+a[1],"ext="+a[2],"id="+a[3]]),o}function Xe(e){for(var t=0;t<e.length;t++){var n=e[t].split("=");if(n[0]=="mod")var a=n[1];if(n[0]=="ext")var r=n[1];if(n[0]=="id")var o=n[1]}return a=a==""?"Home":a.replace("?",""),r=r==""||r=="undefined"?"index":r,o=o==""||o=="undefined"?"":o,{mod:a,ext:r,id:o}}function Qe(e,t,n,a){let r=localStorage.getItem("Token");document.querySelector("#menuweb");let o=document.querySelector(".user-login"),c=document.querySelector(".user-activo"),g=document.querySelector(".user-logout");n[t]&&(o.classList.remove("d-none"),c.classList.add("d-none"),g.classList.add("d-none"),r!=null&&r!=null&&r!="null"&&r!="undefined"&&(o.classList.add("d-none"),c.classList.remove("d-none"),g.classList.remove("d-none")))}const Ye=(e,t,n,a)=>{localStorage.getItem("Token"),x("log","hash=>"+e);let r=n!="index"?" / "+ne(n):"";document.title=a+" - "+ne(t)+r,Je(t,Oe);let o=t!="Home"&&n!="index"?n:t;console.log(o,t,n);let c=document.getElementById("app");if(c&&(c.innerHTML="",e))return c.appendChild(le(o))};function Je(e,t){var n=localStorage.getItem("Token");x("log","token="+n);let a=t.length;for(let r=0;r<a;r++)e===t[r]&&x("log","Accceso: "+e+"="+t[r]),e===t[r]&&(n==null||n=="undefined")&&(window.location.href="#/noauth");e=="login"&&n!=null&&n!="undefined"&&(window.location.href="#/dashboard")}function Ze(e){const t=document.createElement("div");return t.innerHTML=e,t}function et(e,t){(e==""||e=="undefined")&&(window.location.href=t)}function x(e,t){if(Ve==ze)switch(e){case"log":console.log(t);break;case"warn":console.warn(t);break;case"error":console.error(t);break;default:console.log(t);break}}function ne(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}function A(e,t){if(e.length>0)for(let r=0;r<e.length;r++)if(document.getElementById(t+r))x("log","Ok: "+t+r);else if(document.createStyleSheet)document.createStyleSheet(e[r]);else{var n="@import url('"+e[r]+"');",a=document.createElement("link");a.id=t+r,a.rel="stylesheet",a.href="data:text/css,"+escape(n),document.getElementsByTagName("head")[0].appendChild(a)}}function M(e,t){for(let n=0;n<e;n++){let a=document.getElementById(t+n);a&&document.getElementsByTagName("head")[0].removeChild(a)}}function tt(){let e=document.getElementsByTagName("body")[0],n=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var a=document.createElement("div");a.id="load",a.innerHTML=n,e.appendChild(a),setTimeout(()=>{let r=document.getElementById(a.id);r&&e.removeChild(r)},1500)}function nt(){const{mod:e,ext:t}=q();let n=e!="Home"&&t!="index"?t:e;var a=ie[n];e!="logout"&&e!="noauth"&&t=="index"&&a!=null&&tt()}async function rt(e,t){if(e=="Home"){const{version:n}=await te(`${t}assets/pwa/manifest.json`);console.log(`Version Actual: ${n}`);const a=await te(Ge);if(a&&a!=null){const{ultimate:r}=a.data[0];n!=r&&console.log(`Actualizar version ${e} (${n} => ${r})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}function U(e){let t=e.getAttribute("data-menu");e.addEventListener("click",()=>{let n=document.getElementById("appDash");if(n&&(x("log","Click "+t),n.innerHTML="",Ne))return n.appendChild(le(t))})}const{host:at,dominio:ot,path_url:st,hostDev:it}=q();console.log("/* javascript login | VARIABLES CONSTANTES*/");let K=V+"/login/";at==it&&console.log("api_login="+K);function lt(){const e=document.getElementById("form-login");e!=null&&(e.addEventListener("submit",ct),console.log("btnLogin Activado"))}function ct(e){e.preventDefault(),console.log("Validación de Datos");let t=document.getElementById("username").value,n=document.getElementById("password").value;var a={username:t,password:n};const r=K+"index.php";fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(o=>o.json()).then(o=>{const{data:c}=o;x("log",o),x("log","getToken:"+c.token),localStorage.setItem("Token",c.token);let g=localStorage.getItem("Token");x("log","Res-Token:"+g),g!=null&&g!="undefined"?location.href=ot+st+"#/dashboard":re(!1,0)}).catch(o=>{re(o,1)})}const re=(e,t)=>{e&&console.log(e);let n=document.getElementById("msj-error");n.innerHTML=`<div class="alert alert-danger" role="alert">${t==1?"<b>Error:</b>":""} Usuario o Contraseña Incorrectos</div>`},dt=()=>{const e=K+"";fetch(e).then(t=>t.json()).then(t=>{x("log",t)}).catch(t=>console.log(t)),setTimeout(function(){lt()},1e3)};function ut(){console.log("Logout/Salir"),localStorage.clear();var e=localStorage.getItem("Token");e==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}function ce(){(function(e){var t=function(){};t.prototype.initTooltipPlugin=function(){e.fn.tooltip&&e('[data-toggle="tooltip"]').tooltip()},t.prototype.initPopoverPlugin=function(){e.fn.popover&&e('[data-toggle="popover"]').popover()},t.prototype.initToastPlugin=function(){e.fn.toast&&e('[data-toggle="toast"]').toast()},t.prototype.initSlimScrollPlugin=function(){e.fn.slimScroll&&e(".slimscroll").slimScroll({height:"auto",position:"right",size:"8px",touchScrollStep:20,color:"#9ea5ab"})},t.prototype.initFormValidation=function(){e(".needs-validation").on("submit",function(n){return e(this).addClass("was-validated"),e(this)[0].checkValidity()===!1?(n.preventDefault(),n.stopPropagation(),!1):!0})},t.prototype.initCustomModalPlugin=function(){e('[data-plugin="custommodal"]').on("click",function(n){n.preventDefault();var a=new Custombox.modal({content:{target:e(this).attr("href"),effect:e(this).attr("data-animation")},overlay:{color:e(this).attr("data-overlayColor")}});a.open()})},t.prototype.initCounterUp=function(){e(this).attr("data-delay")&&e(this).attr("data-delay"),e(this).attr("data-time")&&e(this).attr("data-time"),e('[data-plugin="counterup"]').each(function(n,a){e(this).counterUp({delay:100,time:1200})})},t.prototype.initPeityCharts=function(){e('[data-plugin="peity-pie"]').each(function(n,a){var r=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("pie",{fill:r,width:o,height:c})}),e('[data-plugin="peity-donut"]').each(function(n,a){var r=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("donut",{fill:r,width:o,height:c})}),e('[data-plugin="peity-donut-alt"]').each(function(n,a){e(this).peity("donut")}),e('[data-plugin="peity-line"]').each(function(n,a){e(this).peity("line",e(this).data())}),e('[data-plugin="peity-bar"]').each(function(n,a){var r=e(this).attr("data-colors")?e(this).attr("data-colors").split(","):[],o=e(this).attr("data-width")?e(this).attr("data-width"):20,c=e(this).attr("data-height")?e(this).attr("data-height"):20;e(this).peity("bar",{fill:r,width:o,height:c})})},t.prototype.initKnob=function(){e('[data-plugin="knob"]').each(function(n,a){e(this).knob()})},t.prototype.initTippyTooltips=function(){e('[data-plugin="tippy"]').length>0&&tippy('[data-plugin="tippy"]')},t.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initSlimScrollPlugin(),this.initFormValidation(),this.initCustomModalPlugin(),this.initCounterUp(),this.initPeityCharts(),this.initKnob(),this.initTippyTooltips()},e.Components=new t,e.Components.Constructor=t})(window.jQuery),function(e){var t=function(){this.$body=e("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-toggle="remove"]',this.$portletRefresher='.card a[data-toggle="reload"]'};t.prototype.init=function(){var n=this;e(document).on("click",this.$portletCloser,function(a){a.preventDefault();var r=e(this).closest(n.$portletIdentifier),o=r.parent();r.remove(),o.children().length==0&&o.remove()}),e(document).on("click",this.$portletRefresher,function(a){a.preventDefault();var r=e(this).closest(n.$portletIdentifier);r.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');var o=r.find(".card-disabled");setTimeout(function(){o.fadeOut("fast",function(){o.remove()})},500+300*(Math.random()*5))})},e.Portlet=new t,e.Portlet.Constructor=t}(window.jQuery),function(e){var t=function(){this.$body=e("body"),this.$window=e(window)};t.prototype._resetSidebarScroll=function(){e(".slimscroll-menu").slimscroll({height:"auto",position:"right",size:"8px",color:"#9ea5ab",wheelStep:5,touchScrollStep:20})},t.prototype.initMenu=function(){var n=this;e(".button-menu-mobile").on("click",function(a){a.preventDefault(),n.$body.toggleClass("sidebar-enable"),n.$window.width()>=768?n.$body.toggleClass("enlarged"):n.$body.removeClass("enlarged"),n._resetSidebarScroll()}),e("#side-menu").metisMenu(),n._resetSidebarScroll(),e(".right-bar-toggle").on("click",function(a){e("body").toggleClass("right-bar-enabled")}),e(document).on("click","body",function(a){e(a.target).closest(".right-bar-toggle, .right-bar").length>0||e(a.target).closest(".left-side-menu, .side-nav").length>0||e(a.target).hasClass("button-menu-mobile")||e(a.target).closest(".button-menu-mobile").length>0||(e("body").removeClass("right-bar-enabled"),e("body").removeClass("sidebar-enable"))}),e("#side-menu a").each(function(){var a=window.location.href.split(/[?#]/)[0];this.href==a&&(e(this).addClass("active"),e(this).parent().addClass("active"),e(this).parent().parent().addClass("in"),e(this).parent().parent().prev().addClass("active"),e(this).parent().parent().parent().addClass("active"),e(this).parent().parent().parent().parent().addClass("in"),e(this).parent().parent().parent().parent().parent().addClass("active"))}),e(".navbar-toggle").on("click",function(a){e(this).toggleClass("open"),e("#navigation").slideToggle(400)}),e(window).on("load",function(){e("#status").fadeOut(),e("#preloader").delay(350).fadeOut("slow")})},t.prototype.initLayout=function(){this.$window.width()>=768&&this.$window.width()<=1028?this.$body.addClass("enlarged"):this.$body.data("keep-enlarged")!=!0&&this.$body.removeClass("enlarged")},t.prototype.init=function(){var n=this;this.initLayout(),e.Portlet.init(),this.initMenu(),e.Components.init(),n.$window.on("resize",function(a){a.preventDefault(),n.initLayout(),n._resetSidebarScroll()})},e.App=new t,e.App.Constructor=t}(window.jQuery),function(e){e.App.init()}(window.jQuery),Waves.init()}const pt=q(),{host:de,dominio:qt,path_url:jt,base_url:Dt,screenw:vt,mod:Pt,hostDev:ue,year:gt}=pt;async function mt(){ce();let e=document.querySelector(".log-out");e!=null&&e.addEventListener("click",()=>{setTimeout(()=>{window.location.href="#/logout"},1e3)});let t=document.querySelector(".btn-set");t!=null&&t.addEventListener("click",()=>{window.location.href="#/dashboard/settings"});let n=document.querySelector(".user-edit");n!=null&&n.addEventListener("click",()=>{window.location.href="#/dashboard/cuenta"});let a=document.querySelector("#year");a&&(a.innerHTML=gt+" &copy; Xeria theme");let r=document.querySelectorAll(".arrow");for(var o=0;o<r.length;o++)r[o].addEventListener("click",f=>{f.target.parentElement.parentElement.classList.toggle("showMenu")});let c=document.querySelector(".sidebar"),g=document.querySelector(".bx-menu");if(g){let f=localStorage.getItem("bar");f=="true"&&c.classList.toggle("close"),g.addEventListener("click",()=>{let y=c.classList.toggle("close");localStorage.setItem("bar",y),f=localStorage.getItem("bar")}),console.log("Bar-Load:",f)}vt<=740&&c&&side.classList.add("close");const p=document.querySelector(".profile_name"),u=document.querySelector(".pro-user-name"),w=document.querySelector(".job");let L=de==ue?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+L),p!=null&&w!=null&&u!=null){const{email:f,username:y,nombre:P,foto:C,puesto:S,status:z}=await Fe(V,"InfoUser");p&&(p.innerHTML=y),u&&(u.innerHTML=y+' <i class="mdi mdi-chevron-down"></i>'),w&&(w.innerHTML=S)}setTimeout(()=>{let f=document.querySelector(".slimscroll-menu");f&&(f.style.height="350px");let y=document.querySelector("#slimscroll-menu");y&&(y.style.height="250px")},100)}function ft(){setTimeout(function(){de==ue&&console.log("btnSidebar Activado"),mt()},500)}function ht(e,t){const n="app-",a=["https://fonts.googleapis.com/css?family=Muli:300,400,700",t+"assets/login/vendor/bootstrap/css/bootstrap.min.css",t+"assets/login/css/font.css",t+"assets/login/css/style.green.css",t+"assets/login/css/custom.css"];e=="app"?A(a,n):M(a.length,n);const r="dash-",o=[t+"assets/dashboard/xeria/assets/css/bootstrap.css",t+"assets/dashboard/xeria/assets/css/app.css"];e=="dashboard"?A(o,r):M(o.length,r);const c="login-",g=["https://fonts.googleapis.com/css?family=Muli:300,400,700",t+"assets/login/vendor/bootstrap/css/bootstrap.min.css",t+"assets/login/css/font.css",t+"assets/login/css/style.green.css",t+"assets/login/css/custom.css"];e!="login"&&e!="registro"?M(g.length,c):A(g,c);const p="home-",u=[t+"assets/tema/css/demo-business-consulting.css",t+"assets/tema/css/skin-business-consulting.css",t+"assets/tema/css/style.css"];e!="Home"?M(u.length,p):A(u,p)}function ae(e,t,n){const a="dash-",r=[t+"assets/dashboard/xeria/assets/css/bootstrap.css",t+"assets/dashboard/xeria/assets/css/app.css"];e=="app"&&n?A(r,a):M(r.length,a)}function bt(){const{mod:e,base_url:t}=q(),n=t;var a={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};firebase.initializeApp(a),firebase.analytics();const r=firebase.database(),o=firebase.auth();firebase.firestore(),console.log("Modulo=>"+e),r.ref().child("vcard_config"),r.ref().child("vcard_signup");var c=r.ref().child("vcard_vcard"),g=r.ref().child("vcard_user"),p=r.ref().child("vcard_vcard_empresas");const u=document.querySelectorAll(".dashboard"),w=document.querySelectorAll(".right-bar"),L=document.querySelectorAll(".login-page"),f=document.querySelectorAll(".registro-page"),y=i=>{i?(u.forEach(s=>s.style.display="block"),w.forEach(s=>s.style.display="block"),L.forEach(s=>s.style.display="none"),f.forEach(s=>s.style.display="none")):(u.forEach(s=>s.style.display="none"),w.forEach(s=>s.style.display="none"),e=="registro"?(f.forEach(s=>s.style.display="block"),L.forEach(s=>s.style.display="none")):(f.forEach(s=>s.style.display="none"),L.forEach(s=>s.style.display="block")))},P=document.querySelector("#logout");P&&P.addEventListener("click",i=>{i.preventDefault(),o.signOut().then(()=>{console.log("signup out"),localStorage.clear();let s=localStorage.getItem("uid");ae(e,t,s),navigator.serviceWorker.getRegistrations().then(function(l){for(let d of l)d.unregister()})})});const C=document.querySelector("#registro-form");C&&C.addEventListener("submit",i=>{i.preventDefault();const s="Sin Nombre",l=C["register-email"].value,d=C["register-password"].value;var b={displayName:s,email:l,photoURL:null};o.createUserWithEmailAndPassword(l,d).then(h=>{console.log("Datos user: "+b),C.reset()})});const S=document.querySelector("#form-login");S&&S.addEventListener("submit",i=>{i.preventDefault();const s=S["login-email"].value,l=S["login-password"].value;o.signInWithEmailAndPassword(s,l).then(d=>{S.reset()})}),o.onAuthStateChanged(i=>{i?(console.log("User:",i),console.log("signin:"+i.email),localStorage.setItem("uid",i.uid),T(i.email),y(i),ae(e,t,i.uid)):(console.log("signout"),y(i))}),document.querySelector("#googleLogin").addEventListener("click",i=>{i.preventDefault(),S.reset(),j()}),document.querySelector("#googleRegister").addEventListener("click",i=>{i.preventDefault(),S.reset(),j()});function j(){const i=new firebase.auth.GoogleAuthProvider;o.signInWithPopup(i).then(s=>{console.log(s),console.log("google sign in")}).catch(s=>{console.log(s)})}function T(i){const s=document.querySelector("#foto"),l=document.querySelector("#foto1"),d=document.querySelector(".profile_name"),b=document.querySelector(".pro-user-name");r.ref("vcard_signup").on("child_added",function(h){var v=h.val(),m=v.foto==null?"./assets/img/sinfoto.png":v.foto,I=v.usuario==null?v.email:v.usuario;v.email==i&&(console.log("User Firebase:",v),s.setAttribute("src",m),l.setAttribute("src",m),d.innerHTML=I,b.innerHTML=v.email)})}function R(){var i="";c.orderByChild("orden").limitToFirst(10).on("child_added",function(l){var d=l.val();const{ID:b,cover:h,profile:v,nombre:m,puesto:I,f_create:_,visible:E}=d;if(E==1){i+=`
  <div class="public-user-block block">
    <div class="row d-flex align-items-center">                   
      <div class="col-lg-4 d-flex align-items-center">
        <div class="order">${b}</div>
        <div class="avatar" style="background:url(${h});background-repeat:no-repeat;background-size:cover;background-position:center;"></div>
        <a href="${n}../profile/${v}" class="name">
          <strong class="d-block">${m}</strong>
          <span class="d-block">${v}</span>
        </a>
      </div>
      <div class="col-lg-4 text-center">
        <div class="contributions">${I}</div>
      </div>
      <div class="col-lg-4">
        <div class="details d-flex">
          <div class="item"><i class="fa fa-calendar"></i><strong>${_}</strong></div>
          <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
          <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
          <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
        </div>
      </div>
    </div>
  </div>`;const D=document.querySelector("#lista");D.innerHTML=i}})}e=="Home"&&R();let k=!0,B=1;$("#app-modulo").on("click",".btn-add",function(){$("#form1").trigger("reset"),fecha_hora_create(1),console.log("Boton Agregar activado");let i=c.orderByChild("ID");console.log(i),i.on("value",function(d){var b=d.val();let h=Object.values(b),v=h.length-1,m=h[v],I=parseInt(m.ID)+1;$("#ID").val(I);let _=parseInt(m.orden)-1;console.log(_),$("#orden").val(_)});let s=document.querySelector("#id_code_google");$("#uid").val(s.textContent);let l=document.querySelector("#email_session");$("#user").val(l.textContent),$("#cover").val(n+"bloques/files/images/photos/sinfoto.png"),$("#ima").attr("src",n+"bloques/files/images/photos/sinfoto.png"),k=!1}),$("#app-modulo").on("click",".btn-edit",function(){$("#form1").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement.parentElement;let s=$(i).attr("vcardId");c.child(s).once("value",function(l){valor=l.val(),$("#cardId").val(s),$("#ID").val(valor.ID),$("#orden").val(valor.orden),$("#uid").val(valor.uid),$("#f_create").val(valor.f_create),$("#user").val(valor.user),$("#descripcion").val(valor.descripcion),$("#profile").val(valor.profile),$("#nombre").val(valor.nombre),$("#puesto").val(valor.puesto),$("#email").val(valor.email),$("#cell").val(valor.cell),$("#tel_ofi").val(valor.tel_ofi),$("#idemp").val(valor.idemp),$("#web").val(valor.web),$("#fb").val(valor.fb),$("#lk").val(valor.lk),$("#ins").val(valor.ins),$("#visible").val(valor.visible),$("#cover").val(valor.cover),$("#ima").attr("src",valor.cover)}),k=!0}),e=="tarjetas"&&$("#app-modulo").on("#form1").submit(function(i){i.preventDefault(),console.log("Form1");var s=$("#cardId").val();console.log(s);var l="";const d={ID:$("#ID").val(),orden:$("#orden").val(),uid:$("#uid").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),user:$("#user").val(),descripcion:$("#descripcion").val(),cover:$("#cover").val(),profile:$("#profile").val(),nombre:$("#nombre").val(),puesto:$("#puesto").val(),email:$("#email").val(),web:$("#web").val(),cell:$("#cell").val(),tel_ofi:$("#tel_ofi").val(),idemp:$("#idemp").val(),fb:$("#fb").val(),lk:$("#lk").val(),ins:$("#ins").val(),visible:$("#visible").val()};console.log(d),k==!1?(l="Guardado",c.push(d)):(l="Actualizado",c.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form1").trigger("reset"),$("#addVcard").modal("hide"),k=!1}),$("#app-modulo").on("click",".btn-delete",function(){var i=e=="tarjetas"?"Tarjeta":"Empresa";const s=$(this)[0].parentElement.parentElement.parentElement;let l=$(s).attr("vcardId");console.log(l),Swal.fire({title:"Esta seguro de eliminar esta "+i+"?",text:"¡Está operación no se puede revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Borrar"}).then(d=>{d.value&&(refTable=e=="tarjetas"?c:p,refTable.child(l).remove(),Swal.fire("¡Eliminado!","La "+i+" ha sido eliminada.","success"))})}),$(document).on("click","#Aceptar",function(i){i.preventDefault();const s="https://cloudvcardjs.000webhostapp.com/";var l=new FormData;l.append("userfile",$("input[name=userfile]")[0].files[0]),$.ajax({url:s+"bloques/files/admin/backend.php?mod="+e+"&action=subir_cover",crossDomain:!0,type:"POST",data:l,processData:!1,contentType:!1,cache:!1,beforeSend:function(d){$("#imagen").html("Subiendo Imagen")},success:function(d){$("#imagen").html(d),$(".alert-dismissible").delay(3e3).fadeOut("slow"),console.log("Subido Correctamente")}})}),$(document).on("click","#Aceptar2",function(i){i.preventDefault();const s="https://cloudvcardjs.000webhostapp.com/";var l=new FormData;l.append("userfile2",$("input[name=userfile2]")[0].files[0]),$.ajax({url:s+"bloques/files/admin/backend.php?mod="+e+"&action=subir_coverbg",crossDomain:!0,type:"POST",data:l,processData:!1,contentType:!1,cache:!1,beforeSend:function(d){$("#imagen2").html("Subiendo Imagen")},success:function(d){$("#imagen2").html(d),$(".alert-dismissible").delay(3e3).fadeOut("slow"),console.log("Subido Correctamente")}})}),$("#q").keyup(function(i){if($("#q").val()){let s=$("#q").val();const l=document.querySelector("#lista");$.ajax({url:n+"bloques/files/admin/backend.php?action=buscar",type:"POST",data:{q:s},success:function(d){console.log(d),l.innerHTML=d}})}}),$("#searchForm").submit(function(i){i.preventDefault();const s=document.querySelector(".search-panel");s.style.display="none"}),$("#app-modulo").on("click",".btnAdd",function(){$("#form2").trigger("reset"),fecha_hora_create(1),console.log("Boton Agregar activado"),p.orderByChild("ID").on("value",function(l){var d=l.val();let b=Object.values(d),h=b.length-1,v=b[h],m=parseInt(v.ID)+1;$("#ID").val(m)});let s=document.querySelector("#id_code_google");$("#uid").val(s.textContent),$("#cover").val(n+"bloques/files/images/photos/sinlogo.jpg"),$("#coverbg").val(n+"bloques/files/images/photos/sinbg.jpg"),$("#ima").attr("src",n+"bloques/files/images/photos/sinlogo.jpg"),$("#ima2").attr("src",n+"bloques/files/images/photos/sinbg.jpg"),k=!1}),$("#app-modulo").on("click",".btnEditar",function(){console.log("bol="+B),$("#form2").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement.parentElement;let s=$(i).attr("vcardId");p.child(s).once("value",function(l){valor=l.val(),console.log(valor),$("#cardId").val(s),$("#ID").val(valor.ID),$("#uid").val(valor.uid),$("#f_create").val(valor.f_create),$("#empresa").val(valor.empresa),$("#bg_color").val(valor.bg_color),$("#visible").val(valor.visible),$("#cover").val(valor.cover),$("#coverbg").val(valor.coverbg),$("#ima").attr("src",valor.cover),$("#ima2").attr("src",valor.coverbg)}),k=!0}),e=="empresas"&&$("#app-modulo").on("#form2").submit(function(i){i.preventDefault();var s=$("#cardId").val();console.log(s);var l="";const d={ID:$("#ID").val(),uid:$("#uid").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),cover:$("#cover").val(),coverbg:$("#coverbg").val(),empresa:$("#empresa").val(),bg_color:$("#bg_color").val(),visible:$("#visible").val()};console.log(d),k==!1?(l="Guardado",p.push(d)):(l="Actualizado",p.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form2").trigger("reset"),$("#empresaModal").modal("hide"),k=!1}),$("#app-modulo").on("click",".btnEditar3",function(){console.log("Bol="+B),$("#form3").trigger("reset"),fecha_hora_update(1),console.log("Boton Editar activado");const i=$(this)[0].parentElement.parentElement;let s=$(i).attr("vcardId");console.log(s),s==""&&fecha_hora_create(1);const l=document.querySelector(".contributions").textContent;console.log(l);const d=document.querySelector(".h5").textContent;console.log(d);const b=document.querySelector("#email_session").textContent;console.log(b);const h=document.querySelector("#ava").getAttribute("src");if(console.log(h),s!=""){const v=document.querySelector("#f_c").textContent;console.log(v),$("#f_create").val(v);const m=document.querySelector("#direc1").textContent;console.log(m),$("#direc").val(m);const I=document.querySelector("#tel1").textContent;console.log(I),$("#tel").val(I);const _=document.querySelector("#level1").textContent;console.log(_),$("#level").val(_);const E=document.querySelector("#tipoc1").textContent;console.log(E),$("#tipoc").val(E);const D=document.querySelector("#codi1").textContent;console.log(D),$("#codi").val(D)}$("#cardId").val(s),$("#uid").val(l),$("#nombre").val(d),$("#email").val(b),$("#cover").val(h),$("#ima").attr("src",h)}),e=="perfil"&&$("#app-modulo").on("#form3").submit(function(i){i.preventDefault();var s=$("#cardId").val();console.log(s);var l="";const d={foto:$("#cover").val(),uid:$("#uid").val(),email:$("#email").val(),f_create:$("#f_create").val(),f_update:$("#f_update").val(),usuario:$("#nombre").val(),direccion:$("#direc").val(),tel:$("#tel").val(),level:$("#level").val(),tipoc:$("#tipoc").val(),codi:$("#codi").val()};console.log(d),s==""?(l="Guardado",g.push(d)):(l="Actualizado",g.child(s).update(d)),console.log("Se ha "+l+" el registro"),$("#form2").trigger("reset"),$("#myModal").modal("hide"),k=!1})}const{host:yt,dominio:Tt,path_url:At,base_url:Mt,screenw:Rt,mod:Bt,hash:Ot,hostDev:wt,year:xt}=q();async function St(){ce();let e=document.querySelector("#side-menu");for(let p in ee){const{txt:u,icon:w}=ee[p];e.innerHTML+=`
      <li>
        <a class="link btn-${p}" data-menu="${p}">
          <i class="${w}"></i>
          <span> ${u} </span>
        </a>
      </li>`;var t=document.querySelector(".btn-"+p);t!=null&&U(t)}let n=document.querySelector(".btn-set");n!=null&&n.addEventListener("click",()=>{window.location.href="#/app/settings"});let a=document.querySelector(".user-edit");a!=null&&a.addEventListener("click",()=>{window.location.href="#/app/cuenta"});var r=document.querySelector(".btn-dash");r!=null&&U(r);let o=document.querySelector(".btn-tarjetas");o!=null&&U(o);let c=document.querySelector(".btn-empresas");c!=null&&U(c);let g=document.querySelector("#year");g&&(g.innerHTML=xt+" &copy; Xeria theme"),setTimeout(()=>{let p=document.querySelector(".slimscroll-menu");p&&(p.style.height="350px");let u=document.querySelector("#slimscroll-menu");u&&(u.style.height="250px")},100)}function kt(){setTimeout(function(){yt==wt&&console.log("btnSidebar Activado"),St(),bt()},500)}function Ct(){document.querySelector("nav");let e=document.querySelector(".header-body .header-btn-collapse-nav");e&&e.addEventListener("click",()=>{console.log("Click");let t=document.querySelector(".header-body"),a=document.querySelector(".header-body .show")?"auto":"251px";t.style.height=a})}function $t(){setTimeout(()=>{Ct()},500)}function It(e){const{route:t,mod:n,base_url:a}=e;x("log","route="+t),n&&(ht(n,a),nt()),t=="Home/index"&&$t(),t=="login/index"&&dt(),t=="logout/index"&&ut(),t=="dashboard/index"&&ft(),t=="app/index"&&kt()}function q(){var e=window,t=document,n=e.location,a=new Date,r=a.getDate();r=r<10?"0"+r:r;var o=a.getMonth()+1;o=o<10?"0"+o:o;var c=a.getFullYear(),g=c+"-"+o+"-"+r;const{protocol:p,host:u,origin:w,pathname:L,hash:f,href:y,search:P}=n,C=w+"/",S=w,z=y,X=P,j=L.replace("/",""),T=C+j,R=u=="localhost"||u!=F&&u!=N?j+O:O,k=u=="localhost:9001"?"../":"./",B=C+R,i=screen.width,s=screen.height;var l="default",d="temas/"+l+"/",b=We(),h=Ke(f,O);let{mod:v,ext:m,id:I}=Xe(h);var _="/"+m,E=v+_,D=v||"",ve=m&&m!="index"?"/"+m:"",ge="#/"+D+ve,me=T+W+E+".html",fe=T+W+"404/index.html";return{w:e,d:t,loc:n,dt:a,day:r,mon:o,year:c,fecha:g,title:ye,typeBack:we,typeDev:xe,path_hash:O,path_src:oe,path_page:W,hostDev:F,hostPre:N,protocol:p,host:u,dominio:C,dominio1:S,pathname:L,hash:f,URL:z,quest:X,path_url:j,path_root:R,path_build:k,base_url:T,page_url:B,screenw:i,screenh:s,tema:l,path_tema:d,pag_name:b,vars_Url:h,mod:v,ext:m,id:I,ext2:_,route:E,hash2:ge,url_mod:me,url404:fe,apiVer:Se}}function pe(){const e=q();x("log",e);const{hash:t,mod:n,ext:a,page_url:r,base_url:o,title:c}=e;Ye(t,n,a,c),It(e),Qe(t,n,se),et(n,r),rt(n,o)}function _t(){console.log("Run function inicio"),pe()}window.addEventListener("hashchange",()=>{x("warn","Event Listener"),pe()});_t();
