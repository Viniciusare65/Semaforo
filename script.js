const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const automatic = document.getElementById("automatic");


function vermelho() {
    img.src = './img/vermelho.png';
}

function amarelo() {
    img.src = './img/amarelo.png';
}

function verde() {
    img.src = './img/verde.png';
}

function automatico() {

}

red.addEventListener('click', vermelho);
yellow.addEventListener('click', amarelo);
green.addEventListener('click', verde);
automatic.addEventListener('click', automatico);