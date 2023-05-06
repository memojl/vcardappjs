<?php include 'profile/admin/lib.php';?>
<!DOCTYPE html>
<html data-style-switcher-options="{'changeLogo': false, 'borderRadius': 0, 'colorPrimary': '#4dbb6d', 'colorSecondary': '#eef4f2', 'colorTertiary': '#e2fdea', 'colorQuaternary': '#101019'}">
  <head>
    <!-- Basic -->
    <!--Caracteres-->
    <meta charset="iso-8859-1">
    <!--meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home | VcardApp -  Tarjetas de Contacto Digital</title>
    <!--Responsive Meta-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- META-TAGS generadas por http://metatags.miarroba.es -->
    <META NAME="DC.Language" SCHEME="RFC1766" CONTENT="Spanish">
    <META NAME="AUTHOR" CONTENT="Guillermo Jimenez">
    <META NAME="REPLY-TO" CONTENT="multiportal@outlook.com">
    <LINK REV="made" href="mailto:multiportal@outlook.com">
    <META NAME="DESCRIPTION" CONTENT="PHP Onix es un CMS gestor de contenidos para tu web.">
    <META NAME="KEYWORDS" CONTENT="cms,contenido,web,landingpage,p&aacute;gina web">
    <!-- LINK-ICON -->
    <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">
    <link rel="icon" type="image/x-icon" href="./favicon.ico">
    <link rel="manifest" href="./assets/pwa/manifest.json">
    <meta name="VCARDS-APP" content="Add to Home">
    <link  rel = "apple-touch-icon"  tallas = "57x57"  href = "./assets/pwa/icon/apple-icon-57x57.png" >
    <link  rel = "apple-touch-icon"  tallas = "60x60"  href = "./assets/pwa/icon/apple-icon-60x60.png" >
    <link  rel = "apple-touch-icon "  tamanos = " 72x72 "  href = "./assets/pwa/icon/apple-icon-72x72.png " >
    <link  rel = "apple-touch-icon "  tamanos = "76x76"  href = "./assets/pwa/icon/apple-icon-76x76.png" >
    <link  rel = "apple-touch-icon "  tamanos = " 114x114 "  href = "./assets/pwa/icon/apple-icon-114x114.png ">
    <link  rel = "apple-touch-icon"  tallas = "120x120"  href = "./assets/pwa/icon/apple-icon-120x120.png" >
    <link  rel = "apple-touch-icon"  tallas = "144x144"  href = "./assets/pwa/icon/apple-icon-144x144.png" >
    <link  rel = "apple-touch-icon "  tamanos = " 152x152 "  href = "./assets/pwa/icon/apple-icon-152x152.png" >
    <link  rel = "apple-touch-icon "  tamanos = "180x180"  href = "./assets/pwa/icon/apple-icon-180x180.png" >
    <link  rel = "icon"  type = "image/png"  tallas = "16x16"  href = "./assets/pwa/icon/favicon-16x16.png" >
    <link  rel = "icon"  type = "image/png"  tamanos = "32x32"  href = "./assets/pwa/icon/favicon-32x32.png" >
    <link  rel = "icon"  type = "image/png"  tallas = "96x96"  href = "./assets/pwa/icon/favicon-96x96.png" >
    <link  rel = "icon"  type = "image/png"  tamanos = "192x192"  href = "./assets/pwa/icon/android-icon-192x192.png" >
    <!-- link  rel = "manifest" href="/manifest.json" --> 
    <meta  name ="msapplication-TileColor"  content = "#ffffff" >
    <meta  name = "msapplication-TileImage"  content = "./assets/pwa/icon/ms-icon-144x144.png" >
    <meta  name = "theme-color"  content = "#ffffff" >
    <!-- iconos -->
    <link rel="apple-touch-icon" href="./assets/pwa/icon/apple-icon-180x180.png">
    <link rel="shortcut icon" sizes="16x16" href="./assets/pwa/icon/favicon-16x16.png">
    <link rel="shortcut icon" sizes="196x196" href="./assets/pwa/icon/favicon-96x96.png">
    <link rel="apple-touch-icon-precomposed" href="./assets/pwa/icon/apple-icon-152x152.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <!-- Web Fonts  -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700" rel="stylesheet" type="text/css">
    <!-- Vendor CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/all.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/animate.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/simple-line-icons.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/owl.carousel.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="./temas/vcard2/css/magnific-popup.min.css">
    <!-- Theme CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/theme.css">
    <link rel="stylesheet" href="./temas/vcard2/css/theme-elements.css">
    <link rel="stylesheet" href="./temas/vcard2/css/theme-blog.css">
    <link rel="stylesheet" href="./temas/vcard2/css/theme-shop.css">
    <!-- Current Page CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/settings.css">
    <link rel="stylesheet" href="./temas/vcard2/css/layers.css">
    <link rel="stylesheet" href="./temas/vcard2/css/navigation.css">
    <!-- Demo CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/demo-business-consulting.css">
    <!-- Skin CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/skin-business-consulting.css">
    <script src="./temas/vcard2/js/style.switcher.localstorage.js"></script> 
    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="./temas/vcard2/css/custom.css">
    <!-- Head Libs -->
    <script src="./temas/vcard2/js/modernizr.min.js"></script>
    <link rel="stylesheet" href="./temas/vcard2/css/style.css">
    <link href="./assets/css/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <!--GOOGLE ANALITYCS-->
    <!--Google Analytics--><!--FIN GOOGLE ANALITYCS-->
  </head>
  <body>
    <div class="body">
      <header id="header" class="header-transparent header-transparent-dark-bottom-border header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
        <div class="header-body border-top-0 bg-dark box-shadow-none">
          <div class="header-container container">
            <div class="header-row">
              <div class="header-column">
                <div class="header-row">
                  <div class="header-logo">
                    <a href="./index.php">
                    <img alt="Porto" width="90" src="./temas/vcard2/images/logo_vcard.min.png">
                    </a>
                  </div>
                </div>
              </div>
              <div class="header-column justify-content-end">
                <div class="header-row">
                  <div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
                    <div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
                      <nav class="collapse">
                        <ul class="nav nav-pills" id="mainNav">
                          <!-- menu.json -->
                          <!--1-Home-->
                          <li class="">
                            <a class=" active nav-link" href="./index.php">Inicio</a><!--0-->
                          </li>
                          <!-- /menu.json -->
                          <li><a class="nav-link bg-link" href="./app/registro"><i class="fa fa-edit"></i> Registrate</a></li>
                          <li><a class="nav-link" href="./app"><i class="fa fa-sign-in"></i> App</a></li>
                        </ul>
                      </nav>
                    </div>
                    <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                    <i class="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div role="main" class="main">
        <!-- banner -->
        <!-- slider_vcard2.json -->
        <div class="slider-container rev_slider_wrapper" style="height: 100%;">
          <div id="revolutionSlider" class="slider rev_slider manual" data-version="5.4.8">
            <ul>
              <li data-transition="fade">
                <img src="./temas/vcard2/img/slide-1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" class="rev-slidebg">
                <h1 class="tp-caption custom-secondary-font font-weight-bold text-color-light" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[-80,-80,-80,-40]" data-start="800" data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 32px;">La soluci&oacute;n</h1>
                <div class="tp-caption custom-secondary-font font-weight-bold text-color-light" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[-42,-42,-42,2]" data-start="800" data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 42px;">para llegar a m&aacute;s clientes</div>
                <a href="./app/registro" class="btn btn-primary tp-caption text-uppercase text-color-light custom-border-radius" data-hash data-hash-offset="85" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[60,60,60,100]" data-start="1500" style="font-size: 12px; padding: 15px 6px;" data-transform_in="y:[-300%]; opacity:0; s:500;"><i class="fa fa-edit"></i> Registrate</a>
              </li>
              <li data-transition="fade">
                <img src="./temas/vcard2/img/slide-2.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" class="rev-slidebg">
                <h1 class="tp-caption custom-secondary-font font-weight-bold text-color-light" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[-80,-80,-80,-40]" data-start="800" data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 32px;">Mantente en</h1>
                <div class="tp-caption custom-secondary-font font-weight-bold text-color-light" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[-42,-42,-42,2]" data-start="800" data-transform_in="y:[-300%];opacity:0;s:500;" style="font-size: 42px;">contacto con tus clientes</div>
                <a href="./app/registro" class="btn btn-primary tp-caption text-uppercase text-color-light custom-border-radius" data-hash data-hash-offset="85" data-x="['left','left','left','left']" data-hoffset="[30,30,30,30]" data-y="center" data-voffset="[60,60,60,100]" data-start="1500" style="font-size: 12px; padding: 15px 6px;" data-transform_in="y:[-300%]; opacity:0; s:500;"><i class="fa fa-edit"></i> Registrate</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- //banner -->
        <section class="looking-for custom-position-1 custom-md-border-top">
          <div class="container sec-b">
            <div class="row align-items-center">
              <div class="col-md-6 col-lg-7">
                <div class="looking-for-box">
                  <h2>- <span class="text-1 custom-secondary-font">Tarjeta de contacto digital</span><br>
                    Consulta Plan Business
                  </h2>
                  <p>Una estrategia digital del futuro hoy <b>Vcards</b></p>
                </div>
              </div>
              <div class="col-md-3 d-flex justify-content-md-end mb-4 mb-md-0">
                <a class="text-decoration-none" href="tel:(01)4424350334" target="_blank" title="Llamanos">
                <span class="custom-call-to-action">
                <span class="action-title text-color-primary">Llamanos</span>
                <span class="action-info text-color-light">(01)4424350334</span>
                </span>
                </a>
              </div>
              <div class="col-md-3 col-lg-2">
                <a class="text-decoration-none" href="mailto:multiportal@outlook.com" target="_blank" title="Email">
                <span class="custom-call-to-action">
                <span class="action-title text-color-primary">Email</span>
                <span class="action-info text-color-light">multiportal@outlook.com</span>
                </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Vendor -->
    <script src="./temas/vcard2/js/jquery.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.appear.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.easing.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.cookie.min.js"></script>		
    <!--script src="./temas/vcard2/js/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src="./temas/vcard2/less/skin-business-consulting.less"></script-->		
    <script src="./temas/vcard2/js/popper.min.js"></script>		
    <script src="./temas/vcard2/js/bootstrap.min.js"></script>		
    <script src="./temas/vcard2/js/common.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.validate.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.easypiechart.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.gmap.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.lazyload.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.isotope.min.js"></script>		
    <script src="./temas/vcard2/js/owl.carousel.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.magnific-popup.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.vide.min.js"></script>		
    <script src="./temas/vcard2/js/vivus.min.js"></script>
    <!-- Theme Base, Components and Settings -->
    <script src="./temas/vcard2/js/theme.js"></script>
    <!-- Current Page Vendor and Views -->
    <script src="./temas/vcard2/js/jquery.themepunch.tools.min.js"></script>		
    <script src="./temas/vcard2/js/jquery.themepunch.revolution.min.js"></script>
    <!-- Current Page Vendor and Views -->
    <script src="./temas/vcard2/js/view.contact.js"></script>
    <!-- Demo -->
    <script src="./temas/vcard2/js/demo-business-consulting.js"></script>
    <!-- Theme Custom -->
    <script src="./temas/vcard2/js/custom.js"></script>
    <!-- Theme Initialization Files -->
    <script src="./temas/vcard2/js/theme.init.js"></script>
    <!--a href="./temas/vcard2/index.html" class="go-to-demos"><i class="fas fa-arrow-left"></i> More Demos</a-->
    <?php if($host!='localhost'){ssl();}?>
  </body>
</html>