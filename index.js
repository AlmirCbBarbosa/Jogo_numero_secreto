import { NumeroAleatorio } from "./NumeroAleatorio.js";

const ENTRADA_PALPITE = document.querySelector('#formulario__entradaPalpite');
const MENSAGEM_ERRO = document.querySelector('#formulario__mensagemErro');
const INFORMACAO_PALPITE = document.querySelector('#formulario__palpites');
const PALPITES_ANTERIORES = document.querySelector('#mensagemInformacao__palpites');
const BOTAO_ENVIAR = document.querySelector('#formulario__botaoEnviar');

let numeroSecreto = NumeroAleatorio();
let numeroTentativa = 10;
let continuarJogar = false;

ENTRADA_PALPITE.focus();

BOTAO_ENVIAR.addEventListener('click', (evento)=>{
    evento.preventDefault();
    
    let palpite = ENTRADA_PALPITE.value;

    if(numeroTentativa == 0){
        alert("Você perdeu!! Suas Tentativas acabaram.");
    }
    else if(palpite.toString() == ""){
        window.alert('Digite um número entre 0 e 100!');
    }
    else if(parseInt(palpite) == numeroSecreto){
       window.alert('Você acertou!') 
    }
    else if(palpite > numeroSecreto){
        numeroTentativa -= 1;
        MENSAGEM_ERRO.innerText = `O número secreto é menor que ${palpite}. Você tem ${numeroTentativa} tentativas.`
        MENSAGEM_ERRO.classList.add('formulario__mensagem--vermelho');         
        ENTRADA_PALPITE.focus();
        PALPITES_ANTERIORES.innerText += ` ${palpite.toString()},`;
        
    }
    else if(palpite < numeroSecreto){
        numeroTentativa -= 1;
        MENSAGEM_ERRO.innerText = `O número secreto é maior que ${palpite}. Você tem ${numeroTentativa} tentativas.`
        MENSAGEM_ERRO.classList.add('formulario__mensagem--vermelho');
        ENTRADA_PALPITE.focus();
        PALPITES_ANTERIORES.innerText += ` ${palpite.toString()},`;        
    }
});
