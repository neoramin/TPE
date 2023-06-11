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

//tabla dinamica//


document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-vaciartabla").addEventListener("click", vaciartabla);
document.querySelector("#btn-agregar3").addEventListener("click", agregar3);

let nombres = [{ "artista": artista, },

{ "cancion": cancion },
{ "rate": rate }];

nombres = [{ "artista": "artista" },

{ "cancion": cancion }, { "rate": " rate" }];

let usuario = [];
//agrega elementos
function agregar() {
  console.log("Funcion Agregar");

  let artista = document.querySelector('#artista').value;
  let cancion = document.querySelector('#cancion').value;
  let rate = document.querySelector('#rate').value;
  let renglon = {
    "artista": artista,
    "cancion": cancion,
    "rate": rate
  }
  usuario.push(renglon);

  let tabla = document.querySelector("#tabla");
  tabla.innerHTML = "";
  tabla.innerHTML = tabla.innerHTML + " <tr>" + "<th>" + "Artista" + "</th>" + "<th>" + "Cancion" + "</th>" + "<th>" + "Rate" + "</th>" + "</tr>";
  
  usuario.forEach(renglon => {


    tabla.innerHTML +=
      `<tr>
   <td>${renglon.artista}
  </td>
   <td>${renglon.cancion}
  </td>
  <td>${renglon.rate} %
  </td>
 </tr>` ;
  }
  );

}
//vacia la tabla
function vaciartabla() {
  let tabla = document.querySelector("#tabla");
  tabla.innerHTML = "";
  tabla.innerHTML = tabla.innerHTML + " <tr>" + "<th>" + "artista" + "</th>" + "<th>" + "artista" + "</th>" + "<th>" + "cancion" + "</th>" + "</tr>";
}
//agrega 3 elementos 

function agregar3() {
  for (let i = 0; i < 3; i++) {
    agregar();

  }

}
