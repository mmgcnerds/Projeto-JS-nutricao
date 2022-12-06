var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    console.log("fui clicado");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json")

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
 
            pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            console.log(adicionaPacienteNaTabela);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);         
            erroAjax.classList.remove("invisivel");
            
        }
    })

    xhr.send();
})

