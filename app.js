//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
    let nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado == '') { 
        alert("Por favor, insira um nome.");
    } else {
        nomes.push(nomeDigitado);
    } 
    limparCampo();
} 
 
function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}

