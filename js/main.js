var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exit");
var elNav = document.querySelector(".nav");


elButton.addEventListener("click", function(evt) {

    elButtonMenu.classList.toggle("menu__none")
    elButtonExit.classList.toggle("menu__exit")
    elNav.classList.toggle("nav__block")
})