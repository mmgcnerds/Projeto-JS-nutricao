var pacientes = document.querySelectorAll('.paciente');

for( var i = 0; i < pacientes.length ; i++ ){
    var paciente = pacientes[i]

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;


    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)
    

    if (!pesoEhValido){
        alert("peso INVALIDO")
        pesoEhValido = false
        tdpeso.textContent = "Peso invalido"
        paciente.classList.add("paciente-invalido")
    }

    if(!alturaEhValida){
        console.log("Altura INVALIDA, verifique se a unidade de medida esta em METROS")
        alturaEhValida = false
        tdAltura.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido")
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    } else {
        return false
    }
}

function calculaImc(peso,altura){
   
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
