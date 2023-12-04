//Api de reconhecimento de voz -> https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//Web Speech API -> https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz/task/108215
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute= document.querySelector('#chute');
const body = document.querySelector('body');


function onSpeak(evento) {
    chute = evento.results[0][0].transcript;
    console.log(chute);      
    apenasNumero = chute.split(' ')[1];
    if(apenasNumero == isNaN || !+apenasNumero){
        apenasNumero = 'Numero não identificado!';
    }
    if(chute == 'game over'){
        telaGameOver();
        return
    }
    
    exibeChuteNaTela(apenasNumero);
    verificaSeOChutePossuiUmValorValido(apenasNumero);
}

function exibeChuteNaTela(chute){
    
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `

}

function telaGameOver(){    
    body.innerHTML = `
    <h1>Game Over</h1>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    body.style.backgroundColor = "black";
}

/*
    Definindo a linguagem do reconhecimento de voz;
*/
recognition.lang = 'pt-Br';
/*
    Inicializando o reconhecimento de voz, ativando o mic
*/
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', ()=>{
    recognition.start();
})
