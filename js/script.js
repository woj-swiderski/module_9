'use strict'

// const msg = document.getElementById('msg');
// msg.innerHTML = document.getElementsByClassName("fas fa-bars").length;

let menuIsHidden = false;
document.getElementsByClassName("fas fa-bars")[0].addEventListener('click', menuHider);

function menuHider(){
    const a_menu = document.getElementById('menu');

    if (menuIsHidden) {
        a_menu.style.display = 'block';
        menuIsHidden = false;
    }
    else {
        a_menu.style.display = 'none';
        menuIsHidden = true;
    }
}