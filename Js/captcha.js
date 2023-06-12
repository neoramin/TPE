"use strict";


let textCaptcha = document.querySelector("#txt-random");
let input = document.querySelector("#captcha-form");
let btn = document.querySelector("#comprobar");
let verificacionText = document.querySelector("#verificacion");

btn.addEventListener("click", comprobar_captcha);

let numeroRandom = Math.floor((Math.random()*9999)+1);

function crear_numero() {
    textCaptcha.innerHTML = numeroRandom;
}

crear_numero();

function comprobar_captcha() {
    if (numeroRandom == input.value) {
        verificacionText.innerHTML = "Correcto.";
        verificacionText.classList.add("ok");
        verificacionText.classList.remove("fail");
    }else{
        verificacionText.innerHTML = "Incorrecto.";
        verificacionText.classList.add("fail");
        verificacionText.classList.remove("ok");
    }
}