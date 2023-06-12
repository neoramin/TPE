document.addEventListener("DOMContentLoaded", function(){
  "use strict"

  let formRecomendacion = document.querySelector("#formRecomendacionUser");
  formRecomendacion.addEventListener("submit", agregar);

  document.querySelector("#btn-vaciartabla").addEventListener("click", vaciarRecomendacionesUser);
  
  let cancionesUsuario = [{
    "artista": "Justin Bieber",
    "cancion": "Never say never",
    "rate": "60%"
  },{
    "artista": "Michael Jackson",
    "cancion": "Thriller",
    "rate": "97%"
  },{
    "artista": "Queen",
    "cancion": "Bohemian Rhapsody",
    "rate": "100%"
  }];
  mostrarTabla();
  
  function agregar(e) {
    e.preventDefault();
    let formData = new FormData(formRecomendacion);
    let recomendacion = {
      "artista": formData.get("artista"),
      "cancion": formData.get("cancion"),
      "rate": formData.get("rate")+"%"
    }
    let id = Number(e.submitter.id);
    for(let i = 1; i <= id; i++){
      cancionesUsuario.push(recomendacion);
    }

    mostrarTabla();
  }

  function vaciarRecomendacionesUser(){
    cancionesUsuario = [];
    console.log(cancionesUsuario);
    mostrarTabla();
  }
  
  function mostrarTabla(){
    let tb = document.querySelector("#tabla tbody");
    tb.innerHTML = "";
    
    cancionesUsuario.forEach( function(cancion){
      let fila = document.createElement("tr");
      for (const key in cancion) {
        let columna = document.createElement("td");
        columna.innerHTML = cancion[key];
        fila.appendChild(columna);
      }
      tb.appendChild(fila);
    })
  }
  
});