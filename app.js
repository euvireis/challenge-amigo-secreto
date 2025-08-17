// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");

function adicionarAmigo() {
    let nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado == '') { 
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeDigitado);
    } 
    limparCampo();
    atualizarLista();
} 



function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}

function atualizarLista() {
    lista.innerHTML = ""
    for(let i = 0; i < amigos.length; i++ ){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item)
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, insira um nome.");
    } else {
       let indice = Math.floor(Math.random() * amigos.length);
       let nomeSorteado = amigos[indice];
        let nomeResultado = document.getElementById("resultado");
        nomeResultado.innerHTML = (`O amigo escolhido foi: ${nomeSorteado}`);
        lista.innerHTML = ""
    }
}



