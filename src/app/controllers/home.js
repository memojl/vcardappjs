import { consoleLocal } from "../functions";

function btnHome(){
    let nav = document.querySelector('nav'); consoleLocal('log',nav);
    let btn = document.querySelector('.header-body .header-btn-collapse-nav'); //console.log(btn); 
    if(btn){
        btn.addEventListener("click", () => {console.log('Click');
            let div = document.querySelector('.header-body'); //console.log(div);
            let show = document.querySelector('.header-body .show'); //console.log(show);
            let h = (show) ? 'auto':'251px';
            div.style.height = h;
        });
    }    
}

export default function Home(){
    //Retardo para activar btnHome
    setTimeout(() => {
        btnHome();    
    }, 500);
}