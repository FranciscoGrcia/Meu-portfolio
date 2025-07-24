var fecharMenu = document.getElementById("fecharMenu");
var navLinks = document.getElementById("nav-links");


var abrirMenu = document.getElementById("abrirMenu");
let a = document.querySelector(".abrirMenu");

a.onclick = function () {
    navLinks.style.width = "200px";
}

abrirMenu.onclick = function () {
    navLinks.style.width = "200px";
}

fecharMenu.onclick = function () {
    navLinks.style.width = "0px";
}
