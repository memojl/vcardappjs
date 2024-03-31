import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, db, saveUser, saveData, loginCheck } from "../../app/services/firebase";
import { variables } from "../../app/core/lib";
import { consoleLocal } from "../../app/functions";

import { loginApp } from '../../app/hooks/googleLogin';
import { logoutApp } from '../../app/hooks/logout';

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext } = variables;

function app(){console.log('Cargando App...');
    //consoleLocal('log',db);
    loginApp();
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            consoleLocal('log',user);
            loginCheck(user);
            try {
                saveUser(user);
                logoutApp();
            } catch (error) {
                console.log(error);
            }
        } else {
            loginCheck(user);
        }
    });
}

export const loadApp = () => {
    app();
}