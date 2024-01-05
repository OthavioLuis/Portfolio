var bt1 = document.getElementById('bt1');
var bt2 = document.getElementById('bt2');
const body = document.getElementById('body');

function dia() {
    bt1.style.display = 'none';
    bt2.style.display = 'block';
    body.style.backgroundImage = "linear-gradient(to bottom, rgb(212, 212, 212), rgb(140, 140, 140))";
};
function noite() {
    bt1.style.display = 'block';
    bt2.style.display = 'none';
    body.style.backgroundImage = '';
};



function menuAparecer() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
};