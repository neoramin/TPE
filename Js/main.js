document.addEventListener("DOMContentLoaded", function(){
  "use strict";

  let navBtn = document.querySelector("#nav-btn");
  navBtn.addEventListener("click", toggleNav);

  function toggleNav() {
    let navMobile = document.querySelector(".nav-mobile");
    navMobile.classList.toggle("oculto");
  }

});