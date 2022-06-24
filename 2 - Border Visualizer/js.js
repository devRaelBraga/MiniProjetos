forma = document.querySelector(".forma");

var tl = document.querySelector(".TL");
var tr = document.querySelector(".TR");
var bl = document.querySelector(".BL");
var br = document.querySelector(".BR");

tl.addEventListener("keypress", atualiza);
tr.addEventListener("keypress", atualiza);
bl.addEventListener("keypress", atualiza);
br.addEventListener("keypress", atualiza);

function atualiza(){
    forma.style.borderTopLeftRadius = tl.value + "px";
    forma.style.borderBottomLeftRadius = bl.value + "px";
    forma.style.borderTopRightRadius = tr.value + "px";
    forma.style.borderBottomRightRadius = br.value + "px"; 
}

