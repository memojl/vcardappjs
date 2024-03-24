import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { db } from "../../app/services/firebase";
import { variables } from "../../app/core/lib";
import { consoleLocal } from "../../app/functions";
/* VARIABLES CONSTANTES*/
const { host, dominio, path_url, hostDev } = variables;

function app(){console.log('Cargando App...');
    consoleLocal('db',db);
}

export const loadApp = () => {
    app();
}