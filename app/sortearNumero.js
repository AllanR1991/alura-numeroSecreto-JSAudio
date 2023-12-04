const maiorValor = 1000;
const menorValor = 1;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;

console.log('Número Secreto: ' , numeroSecreto);

