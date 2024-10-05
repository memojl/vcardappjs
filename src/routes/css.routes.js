import {loadStyle,delStyle,loadScript,delScript,loadDelScript,loadDelStyle} from "../app/functions";

export function classBody(mod){
    let cBody=document.querySelector('.body');
    if(cBody){
        if(mod!='' && mod!='Home'){
            cBody.style.display = 'none';
        }else{
            cBody.style.display = 'inherit';
        }
    }
}

export function cssLoadMod(mod, dominio) {
    //app / dashboard  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const appCS = [
        'https://fonts.googleapis.com/css?family=Muli:300,400,700',
        'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css',
        dominio + 'assets/login/vendor/bootstrap/css/bootstrap.min.css',
        dominio + 'assets/login/vendor/font-awesome/css/font-awesome.min.css',
        dominio + 'assets/login/css/font.css',
        dominio + 'assets/login/css/style.green.css',
        dominio + 'assets/login/css/custom.css'
        //dominio + 'assets/dashboard/xeria/assets/css/bootstrap.css',
        //dominio + 'assets/dashboard/xeria/assets/css/app.css'
    ];
    const appJS = [
        //dominio + 'assets/login/vendor/jquery/jquery.min.js',
        //dominio + 'assets/login/vendor/bootstrap/js/bootstrap.bundle.min.js',
        dominio + 'assets/login/vendor/popper.js/umd/popper.min.js',
        dominio + 'assets/login/vendor/bootstrap/js/bootstrap.min.js',
        dominio + 'assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js',
        dominio + 'assets/login/vendor/jquery.cookie/jquery.cookie.js',
        dominio + 'assets/login/vendor/chart.js/Chart.min.js',
        dominio + 'assets/login/vendor/jquery-validation/jquery.validate.min.js',
        'https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js',
        'https://cdn.jsdelivr.net/npm/toastify-js',
        dominio + 'assets/login/js/front.js',
    ];
    if (mod == 'app' || mod == 'dashboard') {
        console.log('cssLoadMod-loadStyle',mod);
        loadStyle(appCS, 'appCS-');
        loadDelScript(appJS, 'appJS-','load');        
    } else {
        console.log('cssLoadMod-delStyle',mod);
        delStyle(appCS, 'appCS-');
        loadDelScript(appJS, 'appJS-','del');
    }

    //home ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const homeCS = [
        'https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700',
        dominio + 'assets/tema/css/bootstrap.min.css',
        dominio + 'assets/tema/css/all.min.css',
        dominio + 'assets/tema/css/animate.min.css',
        dominio + 'assets/tema/css/simple-line-icons.min.css',
        dominio + 'assets/tema/css/owl.carousel.min.css',
        dominio + 'assets/tema/css/owl.theme.default.min.css',
        dominio + 'assets/tema/css/magnific-popup.min.css',
        dominio + 'assets/tema/css/theme.css',
        dominio + 'assets/tema/css/theme-elements.css',
        dominio + 'assets/tema/css/theme-blog.css',
        dominio + 'assets/tema/css/theme-shop.css',
        dominio + 'assets/tema/css/settings.css',
        dominio + 'assets/tema/css/layers.css',
        dominio + 'assets/tema/css/navigation.css',
        dominio + 'assets/tema/css/demo-business-consulting.css',
        dominio + 'assets/tema/css/skin-business-consulting.css',
        dominio + 'assets/tema/css/style.css',
        dominio + 'assets/font-awesome-4.7.0/css/font-awesome.css',
    ];
    const homeJS = [
        //dominio + 'assets/tema/js/jquery.min.js',	
        dominio + 'assets/tema/js/jquery.appear.min.js',	
        dominio + 'assets/tema/js/jquery.easing.min.js',	
        dominio + 'assets/tema/js/jquery.cookie.min.js',	
        dominio + 'assets/tema/js/popper.min.js',		
        dominio + 'assets/tema/js/bootstrap.min.js',		
        dominio + 'assets/tema/js/common.min.js',		
        dominio + 'assets/tema/js/jquery.validate.min.js',		
        dominio + 'assets/tema/js/jquery.easypiechart.min.js',		
        dominio + 'assets/tema/js/jquery.gmap.min.js',		
        dominio + 'assets/tema/js/jquery.lazyload.min.js',		
        dominio + 'assets/tema/js/jquery.isotope.min.js',		
        dominio + 'assets/tema/js/owl.carousel.min.js',		
        dominio + 'assets/tema/js/jquery.magnific-popup.min.js',		
        dominio + 'assets/tema/js/jquery.vide.min.js',		
        dominio + 'assets/tema/js/vivus.min.js',
        dominio + 'assets/tema/js/theme.js',
        dominio + 'assets/tema/js/jquery.themepunch.tools.min.js',
        dominio + 'assets/tema/js/jquery.themepunch.revolution.min.js',
        dominio + 'assets/tema/js/demo-business-consulting.js',
        dominio + 'assets/tema/js/custom.js',
        dominio + 'assets/tema/js/theme.init.js'
    ];
    if (mod != 'Home') {
        delStyle(homeCS, 'homeCS-');
        delScript(homeJS, 'homeJS-');
    } else {
        loadStyle(homeCS, 'homeCS-');
        loadScript(homeJS, 'homeJS-');
    }

    // profile vcard ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const vcardCS = [
        'https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es',
        dominio + 'assets/font-awesome-4.7.0/css/font-awesome.css',
        dominio + 'assets/vcard/css/style2.css',
        dominio + 'assets/vcard/css/examples.css',
        dominio + 'assets/vcard/css/webhost.css'
    ];
    const vcardJS = [
        //dominio + 'assets/vcard/js/app.js',
        'https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw',
        dominio + 'assets/vcard/js/gmaps.js'
    ];
    if (mod != 'vcard') {
        delStyle(vcardCS, 'vcardCS-');
        delScript(vcardJS, 'vcardJS-');
    } else {
        loadStyle(vcardCS, 'vcardCS-');
        loadScript(vcardJS, 'vcardJS-');
    }
 
    //404 / Not Auth ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

}