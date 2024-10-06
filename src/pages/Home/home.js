//import { consoleLocal } from "../functions";
import { variables } from "../../app/core/lib";

function pagHome(){
    const {hash} = variables();
    const menuPage = document.querySelector('#mainNav');
    if(menuPage && hash!=''){
        menuPage.innerHTML = `
        <!--1-Home-->
                          <li class="">
                            <a class="active nav-link" href="/">Inicio</a>
                            <!--0-->
                          </li>
                          <!-- /menu.json -->
                          <li>
                            <a class="nav-link bg-link" href="/#/registro">
                            <i class="fa fa-edit"></i>&nbsp;&nbsp;Registrate
                            </a>
                          </li>
                          <li class="user-login">
                            <a class="nav-link" href="/#/app">
                            <i class="fa fa-sign-in"></i>&nbsp;&nbsp;App
                            </a>
                          </li>
                          <li class="user-activo">
                            <a class="nav-link bg-link" href="/#/dashboard">
                            <i class="fa fa-edit"></i>&nbsp;&nbsp;Dashboard
                            </a>
                          </li>
                          <li class="user-logout">
                            <a class="nav-link bg-link" href="/#/logout">
                            <i class="fa fa-edit"></i>&nbsp;&nbsp;Salir
                            </a>
                          </li>`;
    }
}

export default function Home(){
    //Retardo para activar pagHome
    setTimeout(() => {
        pagHome();    
    }, 100);
}