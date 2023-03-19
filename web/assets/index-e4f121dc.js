(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();let ln=window.location;const{pathname:dn,host:O}=ln;O!=="localhost"&&O!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(dn+"sw.js").then(function(n){console.log("Service Worker registro correcto con scope: ",n.scope)}).catch(function(n){console.log("Service Worker registro fallo: ",n)});const{host:cn}=window.location,pn="VcardApp",y="#/",B="src/",j=B+"pages/",H="127.0.0.1:5173",un="127.0.0.1:4173",U=cn!=H?"https://apirestm.webcindario.com/api":"http://localhost/MisSitios/apirestm/api",gn=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,hn=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,mn=`<div class="container text-center">\r
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
`,vn=`<!--LOGIN-->\r
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
<!--//LOGIN-->`,fn=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,bn=`<!--\r
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
<!--//REGISTRO-->`,yn=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,wn=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,xn=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,kn=`<!-- ============================================================== -->\r
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
<!-- ============================================================== -->`,g=`      <!-- Right Sidebar -->\r
      <div class="right-bar">\r
        <div class="rightbar-title">\r
            <a href="javascript:void(0);" class="right-bar-toggle float-right">\r
                <i class="mdi mdi-close"></i>\r
            </a>\r
            <h5 class="m-0 text-white">Mi Cuenta</h5>\r
        </div>\r
        <div class="slimscroll-menu">\r
            <!-- User box -->\r
            <div class="user-box">\r
                <div class="user-img">\r
                    <img src="./assets/img/sinfoto.png" alt="user-img" title="Mat Helme" class="rounded-circle img-fluid">\r
                    <a href="javascript:void(0);" class="user-edit"><i class="mdi mdi-pencil"></i></a>\r
                </div>\r
        \r
                <h5><a href="javascript: void(0);">Marcia J. Melia</a> </h5>\r
                <p class="text-muted mb-0"><small>Product Owner</small></p>\r
            </div>\r
\r
            <!-- Settings -->\r
            <hr class="mt-0" />\r
            <div class="row">\r
                <div class="col-6 text-center btn-set hand">\r
                    <h4 class="mb-1 mt-0"><i class="la la-cube"></i></h4>\r
                    <p class="m-0">Settings</p>\r
                </div>\r
                <div class="col-6 text-center log-out hand">\r
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
    <div class="rightbar-overlay"></div>`,h=`            <!-- ========== Left Sidebar Start ========== -->\r
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
                                <a href="/#/dashboard">\r
                                    <i class="fas fa-tachometer-alt"></i>\r
                                    <span> Dashboard </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="/#/dashboard/tarjetas">\r
                                    <i class="far fa-address-card"></i>\r
                                    <span> Mis tarjetas </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="/#/dashboard/empresas">\r
                                    <i class="fas fa-industry"></i>\r
                                    <span> Mis empresas </span>\r
                                </a>\r
                            </li>\r
\r
                            <li>\r
                                <a href="/#/dashboard/cuenta">\r
                                    <i class="fas fa-user"></i>\r
                                    <span> Mi cuenta </span>\r
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
            <!-- Left Sidebar End -->`,m=`          <!-- Topbar Start -->\r
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
        <!-- end Topbar -->`,v=`              <!-- Footer Start -->\r
              <footer class="footer">\r
                <div class="container-fluid">\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            2019 &copy; Xeria theme by <a href="">Coderthemes</a> \r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="text-md-right footer-links d-none d-sm-block">\r
                                <a href="javascript:void(0);">About Us</a>\r
                                <a href="javascript:void(0);">Help</a>\r
                                <a href="javascript:void(0);">Contact Us</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </footer>\r
            <!-- end Footer -->`,Sn=`<div class="body">\r
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
</div>`,F={Home:Sn},Cn={dashboard:'<!-- Begin page --><div id="wrapper">'+m+h+'<div class="content-page">'+gn+v+"<div></div><!-- END wrapper -->"+g,settings:'<!-- Begin page --><div id="wrapper">'+m+h+'<div class="content-page">'+hn+v+"</div></div><!-- END wrapper -->"+g,cuenta:'<!-- Begin page --><div id="wrapper">'+m+h+'<div class="content-page">'+wn+v+"<div></div><!-- END wrapper -->"+g,empresas:'<!-- Begin page --><div id="wrapper">'+m+h+'<div class="content-page">'+xn+v+"</div></div><!-- END wrapper -->"+g,tarjetas:'<!-- Begin page --><div id="wrapper">'+m+h+'<div class="content-page">'+kn+v+"<div></div><!-- END wrapper -->"+g,forget:mn,login:vn,logout:fn,registro:bn,noauth:yn},z={...F,...Cn},Ln=["dashboard","settings"],jn=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,En=n=>{var t=z[n];return t=t??jn,Mn(t)};function Pn(){var n=self.location.href,t=n.lastIndexOf("/"),r=n.substring(t+1,n.length);return r}function In(n,t){var r=n.replace("/"+t,""),e=r.split("/"),a=window.location.search.substring(1),s=a.split("&");return a==""&&(s=["mod="+e[1],"ext="+e[2],"id="+e[3]]),s}function Tn(n){for(var t=0;t<n.length;t++){var r=n[t].split("=");if(r[0]=="mod")var e=r[1];if(r[0]=="ext")var a=r[1];if(r[0]=="id")var s=r[1]}return e=e==""?"Home":e.replace("?",""),a=a==""||a=="undefined"?"index":a,s=s==""||s=="undefined"?"":s,{mod:e,ext:a,id:s}}function _n(n,t,r,e){let a=localStorage.getItem("Token");document.querySelector("#menuweb");let s=document.querySelector(".user-login"),i=document.querySelector(".user-activo"),o=document.querySelector(".user-logout");r[t]&&(s.classList.remove("d-none"),i.classList.add("d-none"),o.classList.add("d-none"),a!=null&&a!=null&&a!="null"&&a!="undefined"&&(s.classList.add("d-none"),i.classList.remove("d-none"),o.classList.remove("d-none")))}const An=(n,t,r,e)=>{d("log","hash=>"+n);let a=r!="index"?" / "+q(r):"";document.title=e+" - "+q(t)+a,Rn(t,Ln);let s=t!="Home"&&r!="index"?r:t,i=document.getElementById("app");if(i.innerHTML="",n)return i.appendChild(En(s))};function Rn(n,t){var r=localStorage.getItem("Token");d("log","token="+r);let e=t.length;for(let a=0;a<e;a++)n===t[a]&&d("log","Accceso: "+n+"="+t[a]),n===t[a]&&(r==null||r=="undefined")&&(window.location.href="#/noauth");n=="login"&&r!=null&&r!="undefined"&&(window.location.href="#/dashboard")}function Mn(n){const t=document.createElement("div");return t.innerHTML=n,t}function Dn(n,t){(n==""||n=="undefined")&&(window.location.href=t)}function d(n,t){const{host:r,hostDev:e}=p();if(r==e)switch(n){case"log":console.log(t);break;case"warn":console.warn(t);break;case"error":console.error(t);break;default:console.log(t);break}}function q(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function E(n,t){const{host:r,hostDev:e}=p();if(n.length>0)for(let i=0;i<n.length;i++)if(document.getElementById(t+i))r==e&&console.log("Ok: dash-"+i);else if(r==e&&console.log(n[i]),document.createStyleSheet)document.createStyleSheet(n[i]);else{var a="@import url('"+n[i]+"');",s=document.createElement("link");s.id=t+i,s.rel="stylesheet",s.href="data:text/css,"+escape(a),document.getElementsByTagName("head")[0].appendChild(s)}}function P(n,t){for(let r=0;r<n;r++){let e=document.getElementById(t+r);e&&(console.log(e),document.getElementsByTagName("head")[0].removeChild(e))}}function On(){let n=document.getElementsByTagName("body")[0],r=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var e=document.createElement("div");e.id="load",e.innerHTML=r,n.appendChild(e),setTimeout(()=>{let a=document.getElementById(e.id);a&&n.removeChild(a)},1500)}function qn(){const{mod:n,ext:t}=p();let r=n!="Home"&&t!="index"?t:n;var e=z[r];n!="logout"&&n!="noauth"&&e!=null&&On()}function Nn(){let n=document.querySelector("nav");console.log(n);let t=document.querySelector(".header-body .header-btn-collapse-nav");t&&t.addEventListener("click",()=>{console.log("Click");let r=document.querySelector(".header-body"),a=document.querySelector(".header-body .show")?"auto":"251px";r.style.height=a})}function Bn(){setTimeout(()=>{Nn()},500)}const Hn=p(),{host:Un,dominio:Fn,path_url:zn,hostDev:Vn}=Hn;console.log("/* javascript login | VARIABLES CONSTANTES*/");let I=U+"/login/";Un==Vn&&console.log("api_login="+I);function Wn(){const n=document.getElementById("form-login");n!=null&&(n.addEventListener("submit",Kn),console.log("btnLogin Activado"))}function Kn(n){n.preventDefault(),console.log("Validación de Datos");let t=document.getElementById("username").value,r=document.getElementById("password").value;var e={username:t,password:r};const a=I+"index.php";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>s.json()).then(s=>{const{data:i}=s;d("log",s),d("log","getToken:"+i.token),localStorage.setItem("Token",i.token);let o=localStorage.getItem("Token");d("log","Res-Token:"+o),o!=null&&o!="undefined"?location.href=Fn+zn+"#/dashboard":N(!1,0)}).catch(s=>{N(s,1)})}const N=(n,t)=>{n&&console.log(n);let r=document.getElementById("msj-error");r.innerHTML=`<div class="alert alert-danger" role="alert">${t==1?"<b>Error:</b>":""} Usuario o Contraseña Incorrectos</div>`},Qn=()=>{const n=I+"";fetch(n).then(t=>t.json()).then(t=>{d("log",t)}).catch(t=>console.log(t)),setTimeout(function(){Wn()},1e3)};function Gn(){console.log("Logout/Salir"),localStorage.clear();var n=localStorage.getItem("Token");n==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}const Jn=async(n,t,r,e)=>{const a=`${n}/${t}`;let s=localStorage.getItem("Token");s=s&&s!=null?s:"";const i={...e,token:s},o=e!=null?JSON.stringify(i):"",l=await fetch(a,{method:r,headers:{"Content-Type":"application/json"},body:o});if(!l.ok)console.error("Error 404(Fetch): "),l=="Unauthorized"?console.error("Error 401(Fetch): "):l=="Forbidden"?console.error("Error 403(Fetch): "):l=="Not Found"&&console.error("Error 404(Fetch): ");else return await l.json()},Xn=async(n,t)=>{const{data:r}=await Jn(n,"profile/index.php","POST","");switch(t){case"InfoUser":return r.InfoUser;case"InfoToken":return r.InfoToken;default:return r}};function Yn(){(function(n){var t=function(){};t.prototype.initTooltipPlugin=function(){n.fn.tooltip&&n('[data-toggle="tooltip"]').tooltip()},t.prototype.initPopoverPlugin=function(){n.fn.popover&&n('[data-toggle="popover"]').popover()},t.prototype.initToastPlugin=function(){n.fn.toast&&n('[data-toggle="toast"]').toast()},t.prototype.initSlimScrollPlugin=function(){n.fn.slimScroll&&n(".slimscroll").slimScroll({height:"auto",position:"right",size:"8px",touchScrollStep:20,color:"#9ea5ab"})},t.prototype.initFormValidation=function(){n(".needs-validation").on("submit",function(r){return n(this).addClass("was-validated"),n(this)[0].checkValidity()===!1?(r.preventDefault(),r.stopPropagation(),!1):!0})},t.prototype.initCustomModalPlugin=function(){n('[data-plugin="custommodal"]').on("click",function(r){r.preventDefault();var e=new Custombox.modal({content:{target:n(this).attr("href"),effect:n(this).attr("data-animation")},overlay:{color:n(this).attr("data-overlayColor")}});e.open()})},t.prototype.initCounterUp=function(){n(this).attr("data-delay")&&n(this).attr("data-delay"),n(this).attr("data-time")&&n(this).attr("data-time"),n('[data-plugin="counterup"]').each(function(r,e){n(this).counterUp({delay:100,time:1200})})},t.prototype.initPeityCharts=function(){n('[data-plugin="peity-pie"]').each(function(r,e){var a=n(this).attr("data-colors")?n(this).attr("data-colors").split(","):[],s=n(this).attr("data-width")?n(this).attr("data-width"):20,i=n(this).attr("data-height")?n(this).attr("data-height"):20;n(this).peity("pie",{fill:a,width:s,height:i})}),n('[data-plugin="peity-donut"]').each(function(r,e){var a=n(this).attr("data-colors")?n(this).attr("data-colors").split(","):[],s=n(this).attr("data-width")?n(this).attr("data-width"):20,i=n(this).attr("data-height")?n(this).attr("data-height"):20;n(this).peity("donut",{fill:a,width:s,height:i})}),n('[data-plugin="peity-donut-alt"]').each(function(r,e){n(this).peity("donut")}),n('[data-plugin="peity-line"]').each(function(r,e){n(this).peity("line",n(this).data())}),n('[data-plugin="peity-bar"]').each(function(r,e){var a=n(this).attr("data-colors")?n(this).attr("data-colors").split(","):[],s=n(this).attr("data-width")?n(this).attr("data-width"):20,i=n(this).attr("data-height")?n(this).attr("data-height"):20;n(this).peity("bar",{fill:a,width:s,height:i})})},t.prototype.initKnob=function(){n('[data-plugin="knob"]').each(function(r,e){n(this).knob()})},t.prototype.initTippyTooltips=function(){n('[data-plugin="tippy"]').length>0&&tippy('[data-plugin="tippy"]')},t.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initSlimScrollPlugin(),this.initFormValidation(),this.initCustomModalPlugin(),this.initCounterUp(),this.initPeityCharts(),this.initKnob(),this.initTippyTooltips()},n.Components=new t,n.Components.Constructor=t})(window.jQuery),function(n){var t=function(){this.$body=n("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-toggle="remove"]',this.$portletRefresher='.card a[data-toggle="reload"]'};t.prototype.init=function(){var r=this;n(document).on("click",this.$portletCloser,function(e){e.preventDefault();var a=n(this).closest(r.$portletIdentifier),s=a.parent();a.remove(),s.children().length==0&&s.remove()}),n(document).on("click",this.$portletRefresher,function(e){e.preventDefault();var a=n(this).closest(r.$portletIdentifier);a.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');var s=a.find(".card-disabled");setTimeout(function(){s.fadeOut("fast",function(){s.remove()})},500+300*(Math.random()*5))})},n.Portlet=new t,n.Portlet.Constructor=t}(window.jQuery),function(n){var t=function(){this.$body=n("body"),this.$window=n(window)};t.prototype._resetSidebarScroll=function(){n(".slimscroll-menu").slimscroll({height:"auto",position:"right",size:"8px",color:"#9ea5ab",wheelStep:5,touchScrollStep:20})},t.prototype.initMenu=function(){var r=this;n(".button-menu-mobile").on("click",function(e){e.preventDefault(),r.$body.toggleClass("sidebar-enable"),r.$window.width()>=768?r.$body.toggleClass("enlarged"):r.$body.removeClass("enlarged"),r._resetSidebarScroll()}),n("#side-menu").metisMenu(),r._resetSidebarScroll(),n(".right-bar-toggle").on("click",function(e){n("body").toggleClass("right-bar-enabled")}),n(document).on("click","body",function(e){n(e.target).closest(".right-bar-toggle, .right-bar").length>0||n(e.target).closest(".left-side-menu, .side-nav").length>0||n(e.target).hasClass("button-menu-mobile")||n(e.target).closest(".button-menu-mobile").length>0||(n("body").removeClass("right-bar-enabled"),n("body").removeClass("sidebar-enable"))}),n("#side-menu a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(n(this).addClass("active"),n(this).parent().addClass("active"),n(this).parent().parent().addClass("in"),n(this).parent().parent().prev().addClass("active"),n(this).parent().parent().parent().addClass("active"),n(this).parent().parent().parent().parent().addClass("in"),n(this).parent().parent().parent().parent().parent().addClass("active"))}),n(".navbar-toggle").on("click",function(e){n(this).toggleClass("open"),n("#navigation").slideToggle(400)}),n(window).on("load",function(){n("#status").fadeOut(),n("#preloader").delay(350).fadeOut("slow")})},t.prototype.initLayout=function(){this.$window.width()>=768&&this.$window.width()<=1028?this.$body.addClass("enlarged"):this.$body.data("keep-enlarged")!=!0&&this.$body.removeClass("enlarged")},t.prototype.init=function(){var r=this;this.initLayout(),n.Portlet.init(),this.initMenu(),n.Components.init(),r.$window.on("resize",function(e){e.preventDefault(),r.initLayout(),r._resetSidebarScroll()})},n.App=new t,n.App.Constructor=t}(window.jQuery),function(n){n.App.init()}(window.jQuery),Waves.init()}const Zn=p(),{host:V,dominio:it,path_url:ot,base_url:lt,screenw:$n,mod:dt,hostDev:W}=Zn;async function nt(){Yn();let n=document.querySelector(".log-out");n!=null&&n.addEventListener("click",()=>{window.location.href="#/logout"});let t=document.querySelector(".btn-set");t!=null&&t.addEventListener("click",()=>{window.location.href="#/dashboard/settings"});let r=document.querySelectorAll(".arrow");for(var e=0;e<r.length;e++)r[e].addEventListener("click",l=>{l.target.parentElement.parentElement.classList.toggle("showMenu")});let a=document.querySelector(".sidebar"),s=document.querySelector(".bx-menu");if(s!=null){let l=localStorage.getItem("bar");l=="true"&&a.classList.toggle("close"),s.addEventListener("click",()=>{let c=a.classList.toggle("close");localStorage.setItem("bar",c),l=localStorage.getItem("bar")}),console.log("Bar-Load:",l)}$n<=740&&a&&side.classList.add("close");const i=document.querySelector(".profile_name"),o=document.querySelector(".job");let f=V==W?": DASHBOARD-GET PROFILE":"";if(console.log("AUTORIZADO"+f),i!=null&&o!=null){const{email:l,username:c,nombre:w,foto:x,puesto:k,status:T}=await Xn(U,"InfoUser");i!=null&&(i.innerHTML=c),o!=null&&(o.innerHTML=k)}}function tt(){setTimeout(function(){V==W&&console.log("btnSidebar Activado"),nt()},500)}function rt(n,t){const r="dash-",e=[t+"assets/dashboard/xeria/assets/css/bootstrap.css",t+"assets/dashboard/xeria/assets/css/app.css"];n=="dashboard"?E(e,r):P(e.length,r);const a="login-",s=["https://fonts.googleapis.com/css?family=Muli:300,400,700",t+"assets/login/vendor/bootstrap/css/bootstrap.min.css",t+"assets/login/css/font.css",t+"assets/login/css/style.green.css",t+"assets/login/css/custom.css"];n!="login"&&n!="registro"?P(s.length,a):E(s,a);const i="home-",o=[t+"assets/tema/css/demo-business-consulting.css",t+"assets/tema/css/skin-business-consulting.css",t+"assets/tema/css/style.css"];n!="Home"?P(o.length,i):E(o,i)}function et(n){const{route:t,mod:r,base_url:e}=n;d("log","route="+t),r&&(rt(r,e),qn()),t=="Home/index"&&Bn(),t=="login/index"&&Qn(),t=="logout/index"&&Gn(),(t=="dashboard/index"||r=="dashboard")&&tt()}function p(){var n=window,t=document,r=n.location,e=new Date,a=e.getDate();a=a<10?"0"+a:a;var s=e.getMonth()+1;s=s<10?"0"+s:s;var i=e.getFullYear(),o=i+"-"+s+"-"+a;const{protocol:f,host:l,origin:c,pathname:w,hash:x,href:k,search:T}=r,S=c+"/",Q=c,G=k,J=T,C=w.replace("/",""),L=S+C,_=l=="localhost"?C+y:y,X=l=="localhost:9001"?"../":"./",Y=S+_,Z=screen.width;var A="default",$="temas/"+A+"/",nn=Pn(),R=In(x,y);let{mod:b,ext:u,id:tn}=Tn(R);var M="/"+u,D=b+M,rn=b||"",en=u&&u!="index"?"/"+u:"",an="#/"+rn+en,sn=L+j+D+".html",on=L+j+"404/index.html";return{w:n,d:t,loc:r,dt:e,day:a,mon:s,year:i,fecha:o,title:pn,path_hash:y,path_src:B,path_page:j,hostDev:H,hostPre:un,protocol:f,host:l,dominio:S,dominio1:Q,pathname:w,hash:x,URL:G,quest:J,path_url:C,path_root:_,path_build:X,base_url:L,page_url:Y,screenw:Z,tema:A,path_tema:$,pag_name:nn,vars_Url:R,mod:b,ext:u,id:tn,ext2:M,route:D,hash2:an,url_mod:sn,url404:on}}function K(){const n=p();d("log",n);const{hash:t,mod:r,ext:e,id:a,route:s,page_url:i,title:o}=n;An(t,r,e,o),et(n),_n(t,r,F),Dn(r,i)}function at(){console.log("Run function inicio"),K()}window.addEventListener("hashchange",()=>{d("warn","Event Listener"),K()});at();
