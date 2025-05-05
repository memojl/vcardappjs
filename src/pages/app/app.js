import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, db, saveUser, getData, saveData, getUserSesion, loginCheck, listar_vcard } from "../../app/services/firebase";
import { variables } from "../../app/core/lib";
import { consoleLocal, footer } from "../../app/functions";

import { loginApp } from '../../app/hooks/googleLogin';
import { logoutApp } from '../../app/hooks/logout';

/* VARIABLES CONSTANTES*/
//const { host, dominio, mod, ext } = variables;

function app(){console.log('Cargando App...');
    const {mod} = variables();
    //consoleLocal('log',db);
    loginApp();
    logoutApp();    
    onAuthStateChanged(auth, async (user) => {
        if (user) { console.log(mod);
            //consoleLocal('log',user);
            loginCheck(user);
            getUserSesion(user);
            if(mod=='app' || mod=='dashboard'){
                setTimeout(() => {listar_vcard();}, 500);
            }
            
            try {
                saveUser(user);
            } catch (error) {
                console.log(error);
            }
        } else {
            loginCheck(user);
        }
    });


    footer();
}

export const loadApp = () => {
    app();
}