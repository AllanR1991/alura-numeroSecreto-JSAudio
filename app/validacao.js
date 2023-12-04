function verificaSeOChutePossuiUmValorValido(chute){
    
    const respostaDaVoz = document.createElement('div');
    /**
     * Converte numero para inteiro;
     */
    const numero = +chute;

    if(chuteInvalido(numero)){
        respostaDaVoz.classList.add('aviso');
        respostaDaVoz.innerHTML = `A expressão falada, não é um número!!!`;
        elementoChute.append(respostaDaVoz);
        return;
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)){
        respostaDaVoz.innerHTML = `Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`;
        elementoChute.append(respostaDaVoz);
        return;
    }

    if( numero === numeroSecreto){
        
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        respostaDaVoz.innerHTML = `O número secreto é Menor <i class="fa-solid fa-circle-arrow-down fa-beat"></i>`;
        elementoChute.append(respostaDaVoz);
    }else{
        respostaDaVoz.innerHTML = `O número secreto é maior <i class="fa-solid fa-circle-arrow-up fa-beat"></i>`;
        elementoChute.append(respostaDaVoz);
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero> maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=>{
    if(e.target.id == 'jogar-novamente'){
        /**
         * "window" representa a janela aberta no navegador. Já "location", nessa linguagem, contém informações sobre a URL atual. Por último, "reload()" é usado para recarregar a página.
        */
        window.location.reload()
    }
})