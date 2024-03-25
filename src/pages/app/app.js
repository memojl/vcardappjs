import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, db, saveUser, saveData } from "../../app/services/firebase";
import { variables } from "../../app/core/lib";
import { consoleLocal } from "../../app/functions";

import {loginApp} from '../../app/hooks/googleLogin';

/* VARIABLES CONSTANTES*/
const { host, dominio, mod, ext } = variables;

function app(){console.log('Cargando App...');
    consoleLocal('log',db);
    loginApp()
    onAuthStateChanged(auth, async (user) => {
        if (user) {consoleLocal('log',user);
            try {
                saveUser(user);
            } catch (error) {
                console.log(error);
            }
        } else {

        }
    });
}

export const loadApp = () => {
    app();
}