/*
$(document).ready(function () {
    console.log('<--Tema jQuery-->');
    let nav = $('.header-body nav'); console.log(nav);
    let btn = $('.header-body .header-btn-collapse-nav'); console.log(btn);
    
    btn.click(function(){console.log('Click');
        let div = $('.header-body');
        setTimeout(() => {
            let show = $('.header-body .show'); console.log(show);
            let h = (show[0]) ? '251px':'auto';
            div.css('height', h);
        }, 500);
    });
});
*/


function btnHome(){
    let nav = document.querySelector('nav'); console.log(nav);
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

setTimeout(() => {
    btnHome();    
}, 500);
