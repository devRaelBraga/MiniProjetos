var button = document.querySelector("#input-bin");

button.addEventListener("keydown", function(){
    var bin = button.value;

    var decimal = 0;
    var aux = 1;

    for(var i = bin.length -1 ; i>=0; i--){ 
        if(bin[i] == "1"){
            decimal += aux;
            aux = aux*2;

        } else if(bin[i] == "0"){
            aux = aux*2;
        }else{
            var aviso = document.querySelector("#aviso");
            aviso.classList.remove("invisivel");
            setTimeout(function(){
                aviso.classList.add("invisivel");
                var out = document.querySelector("#out");   
                out.textContent = "----";
            }, 1200);

        }
            


    }
    var out = document.querySelector("#out");
    out.textContent = decimal;
});