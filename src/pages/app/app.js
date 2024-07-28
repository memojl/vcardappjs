import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, db, saveUser, getData, saveData, getUserSesion, loginCheck } from "../../app/services/firebase";
import { variables } from "../../app/core/lib";
import { consoleLocal, footer } from "../../app/functions";

import { loginApp } from '../../app/hooks/googleLogin';
import { logoutApp } from '../../app/hooks/logout';

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext } = variables;

function app(){console.log('Cargando App...');
    //consoleLocal('log',db);
    loginApp();
    logoutApp();    
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            //consoleLocal('log',user);
            loginCheck(user);
            getUserSesion(user);
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