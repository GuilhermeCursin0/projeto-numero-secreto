/*
    Desafios
    Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

// 1  imc = peso/ altura^2
function calculaImc(peso, altura){
    if (altura > 3){
        return peso/(altura*altura)*10**4;

    }else{
        return peso/(altura*altura); 
    }
}
// 2 - Fatorial de um numero dado
function fatorial(num){
    let resultado= 1;
    let contador= 1;
    while(contador<=num){
        resultado=resultado*contador;
        contador++
    }
    return resultado;
}

// Outra Forma de fazer fatorial
    function fato(xx) { 
        let fat = xx; 
        if (fat == 1){ 
            return fat; 
        } else { 
            return fat * fato (xx - 1); 
        }
    }
//

// 3 - Converte valor em dolar para um valor em real
function cambioDolarReal(dolar){
    return dolar*4.80;
}

// 4 - Calcula area e perimetro
function areaPerimetro(altura, largura){
    let area = altura*largura;
    let perimetro = (altura+largura)*2;
    alert('Area = '+ area +"  Perimetro = " + perimetro);
}

// 5 - Calcula Area circulo
function areaCirculo(raio){
    let area = 3.14*raio**2;
    console.log(area);
}

// 6 - Imprime no console a tabuada de um numero dado
function tabuada(valor){
    let cont=1;
    while(cont<=10){
        console.log(cont +" x " + valor + " = "+cont*valor);
        cont++;
    }
}