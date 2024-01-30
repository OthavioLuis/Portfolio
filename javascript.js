const switcher = document.querySelector('.botao');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('tema-white');
    let body = document.body
    if (body.classList.contains('tema-white')) {
        switcher.src = "img/lanterna-false.png"
    } else {
        switcher.src = "img/lanterna-true.png"
    }
});

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