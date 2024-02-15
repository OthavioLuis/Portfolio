const switcher = document.querySelector('.botao');
let caixaDisplay = document.querySelector('#boxDisplay');
let box1 = document.querySelector('.box01');
let box2 = document.querySelector('.box02');
let box3 = document.querySelector('.box03');
let box4 = document.querySelector('.box04');
let box5 = document.querySelector('.box05');
let box6 = document.querySelector('.box06');
let box7 = document.querySelector('.box07');
let box8 = document.querySelector('.box08');

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

function sairBox() {
    caixaDisplay.style.display = 'none'
    box1.style.display = 'none'
    box2.style.display = 'none'
    box3.style.display = 'none'
    box4.style.display = 'none'
    box5.style.display = 'none'
    box6.style.display = 'none'
    box7.style.display = 'none'
    box8.style.display = 'none'
}

function aparecerCaixa1() {
    caixaDisplay.style.display = 'flex'
    box1.style.display = 'block'
}
function aparecerCaixa2() {
    caixaDisplay.style.display = 'flex'
    box2.style.display = 'block'
}
function aparecerCaixa3() {
    caixaDisplay.style.display = 'flex'
    box3.style.display = 'block'
}
function aparecerCaixa4() {
    caixaDisplay.style.display = 'flex'
    box4.style.display = 'block'
}
function aparecerCaixa5() {
    caixaDisplay.style.display = 'flex'
    box5.style.display = 'block'
}
function aparecerCaixa6() {
    caixaDisplay.style.display = 'flex'
    box6.style.display = 'block'
}
function aparecerCaixa7() {
    caixaDisplay.style.display = 'flex'
    box7.style.display = 'block'
}
function aparecerCaixa8() {
    caixaDisplay.style.display = 'flex'
    box8.style.display = 'block'
}
