"use strict";

//declaramos variables
let textCaptcha = document.querySelector("#txt-random");//<p></p>
let input = document.querySelector("#captcha-form");//<input>
let btn = document.querySelector("#comprobar");//<button></button>
let verificacionText = document.querySelector("#verificacion");//<p>Incorrecto</p>

btn.addEventListener("click", comprobar_captcha);//evento de "click" en el botón

let numeroRandom = Math.floor((Math.random()*9999)+1);//genera número al azar

function crear_numero() {
    textCaptcha.innerHTML = numeroRandom;//agregar al texto tu numero random
}

crear_numero();

function comprobar_captcha() {
    if (numeroRandom == input.value) {//si numeroRandom es igual al valor del input
        verificacionText.innerHTML = "Correcto.";
        verificacionText.classList.add("ok");
        verificacionText.classList.remove("fail");
    }else{//sino
        verificacionText.innerHTML = "Incorrecto.";
        verificacionText.classList.add("fail");
        verificacionText.classList.remove("ok");
    }
}//:)