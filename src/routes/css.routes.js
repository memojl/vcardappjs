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

export function cssLoadMod(mod, base_url) {
    //app / dashboard  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const appCS = [
        'https://fonts.googleapis.com/css?family=Muli:300,400,700',
        'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css',
        base_url + 'assets/login/vendor/bootstrap/css/bootstrap.min.css',
        base_url + 'assets/login/vendor/font-awesome/css/font-awesome.min.css',
        base_url + 'assets/login/css/font.css',
        base_url + 'assets/login/css/style.green.css',
        base_url + 'assets/login/css/custom.css'
        //base_url + 'assets/dashboard/xeria/assets/css/bootstrap.css',
        //base_url + 'assets/dashboard/xeria/assets/css/app.css'
    ];
    const appJS = [
        //base_url + 'assets/login/vendor/jquery/jquery.min.js',
        //base_url + 'assets/login/vendor/bootstrap/js/bootstrap.bundle.min.js',
        base_url + 'assets/login/vendor/popper.js/umd/popper.min.js',
        base_url + 'assets/login/vendor/bootstrap/js/bootstrap.min.js',
        base_url + 'assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js',
        base_url + 'assets/login/vendor/jquery.cookie/jquery.cookie.js',
        base_url + 'assets/login/vendor/chart.js/Chart.min.js',
        base_url + 'assets/login/vendor/jquery-validation/jquery.validate.min.js',
        'https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js',
        'https://cdn.jsdelivr.net/npm/toastify-js',
        base_url + 'assets/login/js/front.js',
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
    const homeCss = [
        'https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700',
        base_url + 'assets/tema/css/bootstrap.min.css',
        base_url + 'assets/tema/css/all.min.css',
        base_url + 'assets/tema/css/animate.min.css',
        base_url + 'assets/tema/css/simple-line-icons.min.css',
        base_url + 'assets/tema/css/owl.carousel.min.css',
        base_url + 'assets/tema/css/owl.theme.default.min.css',
        base_url + 'assets/tema/css/magnific-popup.min.css',
        base_url + 'assets/tema/css/theme.css',
        base_url + 'assets/tema/css/theme-elements.css',
        base_url + 'assets/tema/css/theme-blog.css',
        base_url + 'assets/tema/css/theme-shop.css',
        base_url + 'assets/tema/css/settings.css',
        base_url + 'assets/tema/css/layers.css',
        base_url + 'assets/tema/css/navigation.css',
        base_url + 'assets/tema/css/demo-business-consulting.css',
        base_url + 'assets/tema/css/skin-business-consulting.css',
        base_url + 'assets/tema/css/style.css',
        base_url + 'assets/font-awesome-4.7.0/css/font-awesome.css',
    ];
    const homeJS = [
        //base_url + 'assets/tema/js/jquery.min.js',	
        base_url + 'assets/tema/js/jquery.appear.min.js',	
        base_url + 'assets/tema/js/jquery.easing.min.js',	
        base_url + 'assets/tema/js/jquery.cookie.min.js',	
        base_url + 'assets/tema/js/popper.min.js',		
        base_url + 'assets/tema/js/bootstrap.min.js',		
        base_url + 'assets/tema/js/common.min.js',		
        base_url + 'assets/tema/js/jquery.validate.min.js',		
        base_url + 'assets/tema/js/jquery.easypiechart.min.js',		
        base_url + 'assets/tema/js/jquery.gmap.min.js',		
        base_url + 'assets/tema/js/jquery.lazyload.min.js',		
        base_url + 'assets/tema/js/jquery.isotope.min.js',		
        base_url + 'assets/tema/js/owl.carousel.min.js',		
        base_url + 'assets/tema/js/jquery.magnific-popup.min.js',		
        base_url + 'assets/tema/js/jquery.vide.min.js',		
        base_url + 'assets/tema/js/vivus.min.js',
        base_url + 'assets/tema/js/theme.js',
        base_url + 'assets/tema/js/jquery.themepunch.tools.min.js',
        base_url + 'assets/tema/js/jquery.themepunch.revolution.min.js',
        base_url + 'assets/tema/js/demo-business-consulting.js',
        base_url + 'assets/tema/js/custom.js',
        base_url + 'assets/tema/js/theme.init.js'
    ];
    if (mod != 'Home') {
        delStyle(homeCss, 'homeCS-');
        delScript(homeJS, 'homeJS-');
    } else {
        loadStyle(homeCss, 'homeCS-');
        loadScript(homeJS, 'homeJS-');
    }

    // profile vcard ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const vcardCS = [
        '//fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300&amp;lang=es',
        base_url + 'assets/font-awesome-4.7.0/css/font-awesome.css',
        base_url + 'assets/vcard/css/style2.css',
        base_url + 'assets/vcard/css/examples.css',
        base_url + 'assets/vcard/css/webhost.css'
    ];
    const vcardJS = [
        //base_url + 'assets/vcard/js/app2.js',
        'https://maps.google.com/maps/api/js?key=AIzaSyBiB2Ny_sdk1kyc8tVK64NfxQ1b0yQoaWw',
        base_url + 'assets/vcard/js/gmaps.js'
    ];
    if (mod == 'vcard') {
        console.log('cssLoadMod-loadStyle',mod);
        loadStyle(vcardCS, 'vcardCS-');
        loadDelScript(vcardJS, 'vcardJS-','load');        
    } else {
        console.log('cssLoadMod-delStyle',mod);
        delStyle(appCS, 'vcardCS-');
        loadDelScript(appJS, 'vcardJS-','del');
    }

    //404 / Not Auth ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

}