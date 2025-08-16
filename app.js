// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
    let nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado == '') { 
        alert("Por favor, insira um nome.");
    } else {
        nomes.push(nomeDigitado);
    } 
    limparCampo();
    atualizarLista();
} 



function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for(let i = 0; i < nomes.length; i++ ){
        let item = document.createElement("li");
        item.textContent = nomes[i];
        lista.appendChild(item)
    }
}


