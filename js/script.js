// Obtém a data atual
let dataAtual = new Date();

// Obtém o ano atual
let anoAtual = dataAtual.getFullYear();

// Exibe o ano atual
//console.log("Ano atual: " + anoAtual);

document.querySelector(".container-footer-copyright").innerHTML = "© Joyson Safety Systems / "+anoAtual;

function btnClean() {

    // Supondo que seus campos de entrada tenham a classe CSS 'campo-input'
    var camposInput = document.querySelectorAll('.control-form');

    camposInput.forEach(function(campo) {
    // Faça alguma coisa com cada campo de entrada, por exemplo, exibir o valor no console

    campo.value = '';
});

}

