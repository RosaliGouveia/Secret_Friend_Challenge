//Variaveis para os arrays 
let listaDeAmigos = [];
let numerosUsados = [];



function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo'); 
    let listaAmigos = document.getElementById('listaAmigos');
    let nome = nomeDigitado.value.trim(); 
    let tamanhoNome = nome.length; 

    if (tamanhoNome < 4) { 
        alert('Digite um nome válido!');
        limparCampo(nomeDigitado);
    } else if (listaDeAmigos.includes(nome)) { 
        alert('Este nome já foi digitado!');
        limparCampo(nomeDigitado); 
    } else {
        listaDeAmigos.push(nome); 
        let itemLi = document.createElement('li'); 
        itemLi.textContent = nome; 
        listaAmigos.appendChild(itemLi); 
    }

    limparCampo(nomeDigitado);
}


function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Por favor digite ao menos 2 nomes para fazer o sorteio!');
    } else {
        let sorteio = document.getElementById('resultado');
        sorteio.innerHTML = ''; 
        let quantidadeAmigos = listaDeAmigos.length;
        let listaAmigos = document.getElementById('listaAmigos');

        
        if (numerosUsados.length >= quantidadeAmigos) {
            alert('Todos os amigos já foram sorteados! Vamos recomeçar!');
            reinicia();
            return;
        }

        let numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);

        
        while (numerosUsados.includes(numeroSorteado)) {
            numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);
        }

        
        if (!numerosUsados.includes(numeroSorteado)) {
            numerosUsados.push(numeroSorteado);
            let resultado = document.createElement('li');
            resultado.textContent = listaDeAmigos[numeroSorteado];
            sorteio.appendChild(resultado);
        }
    }
}


function limparCampo(campo) {
    campo.value = '';
}


function reinicia() {
    listaDeAmigos = [];
    numerosUsados = [];
    document.getElementById('listaAmigos').innerHTML = ''; 
    document.getElementById('resultado').innerHTML = ''; 
}