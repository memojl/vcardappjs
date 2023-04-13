const {host} = window.location;
/*VARIABLES DE ENTORNO*/
export const title = 'VcardApp';
//export const proyecto = 'vcardappjs'; //PROYECTO
export const path_hash = '#/'; //PATH HASH
export const path_src = 'src/'; //PATH RESOURCE 
export const path_page = path_src + 'pages/'; //PATH PAGE
export const typeDev = 'vite'; //vite or webpack
export const hostDev = (typeDev == 'vite') ? '127.0.0.1:5173' : 'localhost:9001';
export const hostPre = (typeDev == 'vite') ? '127.0.0.1:4173' : 'localhost';
/* URL-API */
export const Api = (host!=hostDev)?'https://apirestm.webcindario.com/api':'http://localhost/MisSitios/apirestm/api';
export const apiVer = Api + '/v2/api_version';/* URL-LINKS */