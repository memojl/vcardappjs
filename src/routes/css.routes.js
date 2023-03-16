import { loadStyle, delStyle } from "../app/functions";

export function cssLoadMod(mod,base_url){
    //dashboard
    const prefixDash = 'dash-';
    const dashCss = [
        base_url + 'assets/dashboard/xeria/assets/css/bootstrap.css', 
        base_url + 'assets/dashboard/xeria/assets/css/app.css'
    ];

    if(mod=='dashboard'){
        loadStyle(dashCss,prefixDash);
    }else{
        delStyle(dashCss.length,prefixDash);
    }

     //login
     const prefixLogin = 'login-';
     const loginCss = [
        base_url + 'assets/login/vendor/bootstrap/css/bootstrap.min.css',
        base_url + 'assets/login/css/font.css', 
        base_url + 'https://fonts.googleapis.com/css?family=Muli:300,400,700',
        base_url + 'assets/login/css/style.green.css', 
        base_url + 'assets/login/css/custom.css'
     ];
 
     if(mod!='login' && mod!='registro'){
        delStyle(loginCss.length,prefixLogin);
     }else{
        loadStyle(loginCss,prefixLogin);

     }
}