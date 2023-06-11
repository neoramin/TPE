"use strict"

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-vaciartabla").addEventListener("click", vaciartabla);
document.querySelector("#btn-agregar3").addEventListener("click", agregar3);



let nombres = [{ "artista": artista, },

{ "cancion": cancion },
{ "rate": rate }];

nombres = [{ "artista": "artista" },

{ "cancion": cancion }, { "rate": " rate" }];

let usuario = [];

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
  //borro todo lo que haya
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

function vaciartabla() {
  let tabla = document.querySelector("#tabla");
  tabla.innerHTML = "";
  tabla.innerHTML = tabla.innerHTML + " <tr>" + "<th>" + "artista" + "</th>" + "<th>" + "artista" + "</th>" + "<th>" + "cancion" + "</th>" + "</tr>";
}

function agregar3() {
  for (let i = 0; i < 3; i++) {
    agregar();

  }

}
