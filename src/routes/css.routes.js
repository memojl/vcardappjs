import {loadStyle,delStyle,loadScript,delScript} from "../app/functions";

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
    //app ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //const prefixApp = 'app-';
    const cssApp = [
        'https://fonts.googleapis.com/css?family=Muli:300,400,700',
        base_url + 'assets/login/vendor/bootstrap/css/bootstrap.min.css',
        base_url + 'assets/login/css/font.css',
        base_url + 'assets/login/css/style.green.css',
        base_url + 'assets/login/css/custom.css',
        base_url + 'assets/dashboard/xeria/assets/css/bootstrap.css',
        base_url + 'assets/dashboard/xeria/assets/css/app.css'
    ];
    if (mod != 'app') {
        delStyle(cssApp.length, 'appCS-');
    } else {
        loadStyle(cssApp, 'appCS-');
    }

    //dashboard ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //const prefixDash = 'dash-';
    const dashCss = [
        base_url + 'assets/dashboard/xeria/assets/css/bootstrap.css',
        base_url + 'assets/dashboard/xeria/assets/css/app.css'
    ];
    if (mod == 'dashboard') {
        //loadStyle(dashCss, prefixDash);
    } else {
        //delStyle(dashCss.length, prefixDash);
    }

    //login +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //const prefixLogin = 'login-';
    const loginCss = [
        'https://fonts.googleapis.com/css?family=Muli:300,400,700',
        base_url + 'assets/login/vendor/bootstrap/css/bootstrap.min.css',
        base_url + 'assets/login/css/font.css',
        base_url + 'assets/login/css/style.green.css',
        base_url + 'assets/login/css/custom.css'
    ];
    if (mod != 'login' && mod != 'registro') {
        //delStyle(loginCss.length, prefixLogin);
    } else {
        //loadStyle(loginCss, prefixLogin);
    }

    //home ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //const prefixHome = 'home-';
    const homeCss = [
        //base_url + 'assets/tema/css/demo-business-consulting.css',
        //base_url + 'assets/tema/css/skin-business-consulting.css',
        //base_url + 'assets/tema/css/style.css',
    ];
    const homeJS = [
        base_url + 'assets/tema/js/theme.js',
        base_url + 'assets/tema/js/jquery.themepunch.tools.min.js',
        base_url + 'assets/tema/js/jquery.themepunch.revolution.min.js',
        base_url + 'assets/tema/js/demo-business-consulting.js',
        base_url + 'assets/tema/js/custom.js',
        base_url + 'assets/tema/js/theme.init.js'
    ];
    if (mod != 'Home') {
        delStyle(homeCss.length, 'homeCS-');
        delScript(homeJS.length, 'homeJS-');
    } else {
        loadStyle(homeCss, 'homeCS-');
        loadScript(homeJS, 'homeJS-');
    }
}