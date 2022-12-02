var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    console.log("fui clicado");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json")

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
      
        var pacientes = JSON.parse(resposta);
                       
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            console.log(adicionaPacienteNaTabela);
        });
    })

    xhr.send();
})

