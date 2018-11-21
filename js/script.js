'use strict'

// const msg = document.getElementById('msg');
// msg.innerHTML = document.getElementsByClassName("fas fa-bars").length;



let menuIsHidden = false;
document.getElementsByClassName("fas fa-bars")[0].addEventListener('click', menuHider);

window.onload = function(){
    const site = window.location.href;
    document.getElementById('msg').innerHTML = site + ' ' + site.indexOf('index.html');
    if (site.indexOf('index.html') != -1) {
        document.getElementById('general').style.borderLeft = '4px solid #f58220'; 
    }
}



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