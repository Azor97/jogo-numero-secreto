const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.querySelector('#menorValor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maiorValor');
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto)