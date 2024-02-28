let listaNumeroGerado = [];
let numMax = 10;
let numeroSecreto = gerarNumero();
let tentativas=0;
let chute;

trocarTextoNaTela('h1', 'Boas vindas!');
trocarTextoNaTela('p', "Escolha um numero de 1 a " + numMax);

console.log(numeroSecreto + " numero secreto");

function gerarNumero(){
    let numeroGerado = parseInt(Math.random()*numMax+1);
    let tamanhoListaGerados = listaNumeroGerado.length;
    
    if(tamanhoListaGerados==numMax){
        listaNumeroGerado=[];
    }
    if (listaNumeroGerado.includes(numeroGerado)){
        return gerarNumero();
    }else{
        listaNumeroGerado.push(numeroGerado);
        console.log(listaNumeroGerado);
        return numeroGerado;
    }
}

function trocarTextoNaTela(tag, texto){
    document.querySelector(tag).innerHTML= texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1});
}

function limparChute(){
    chute = document.querySelector('.container__input');
    chute.value= "";
}


function verificarChute(){
    tentativas++;

    chute = document.querySelector('.container__input').value;
    let maiorMenor = chute > numeroSecreto ? 'MENOR' : 'MAIOR';
    let numTentativas = tentativas == 1 ? 'tentativa':'tentativas'
    console.log(chute + " chute");
    
    
    if(chute == numeroSecreto){
        trocarTextoNaTela("h1", "Uau, VOCÊ acertou!!");
        trocarTextoNaTela("p" , " O número secreto é "+ numeroSecreto + ". Foi usado "+ tentativas +" "+ numTentativas);
        limparChute();
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        trocarTextoNaTela("h1", "OPS :( ");
        trocarTextoNaTela("p", " O número secreto é " + maiorMenor + " que " + chute + ".");
        limparChute();
    }
}

function jogandoNovamente(){
    tentativas = 0;
    numeroSecreto = gerarNumero();
    console.log(numeroSecreto + " numero secreto");

    limparChute()
    trocarTextoNaTela('h1', 'Boas vindas!');
    trocarTextoNaTela('p', "Escolha um numero de 1 a " + numMax);
    
    document.getElementById('reiniciar').setAttribute('disabled', true);
}