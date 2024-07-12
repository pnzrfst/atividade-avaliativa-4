import leia from "readline-sync"


/*Você deve desenvolver um algoritmo para conversão de temperaturas.
 Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. 
 Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. 
 No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

Celsius para Fahrenheit = F = (C * 1.8) + 32 
Fahrenheit para Celsius = C = (F - 32) * (5/9)

Celsius para Kelvin = K = C + 273.15 
Kelvin para Celsius = C = K - 273.15

Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 
Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32*/

function converterTemperatura(valor, temperaturaOrigem, temperaturaConvert) {
    var temperaturaConvertida;

    if (temperaturaOrigem === 'Celsius') {
        if (temperaturaConvert === 'Fahrenheit') {
            temperaturaConvertida = (valor * 1.8) + 32;
        } else if (temperaturaDestino === 'Kelvin') {
            temperaturaConvertida = valor + 273.15;
        } else {
            temperaturaConvertida = valor; 
        }
    }

 
    else if (temperaturaOrigem === 'Fahrenheit') {
        if (temperaturaDestino === 'Celsius') {
            temperaturaConvertida = (valor - 32) * (5/9);
        } else if (temperaturaDestino === 'Kelvin') {
            temperaturaConvertida = (valor - 32) * (5/9) + 273.15;
        } else {
            temperaturaConvertida = valor; 
        }
    }


    else if (temperaturaOrigem === 'Kelvin') {
        if (temperaturaConvert === 'Celsius') {
            temperaturaConvertida = valor - 273.15;
        } else if (temperaturaConvert === 'Fahrenheit') {
            temperaturaConvertida = (valor - 273.15) * 1.8 + 32;
        } else {
            temperaturaConvertida = valor; 
        }
    }

    return temperaturaConvertida;
}


var temperaturaOrigem = leia.question("Digite a unidade de medida de origem (Celsius, Fahrenheit, Kelvin): ");
var temperatura = parseFloat(leia.question("Digite a temperatura: "));
var temperaturaConvert = leia.question("Digite a unidade de medida para conversão (Celsius, Fahrenheit, Kelvin): ");


var temperaturaConvertida = converterTemperatura(temperatura, temperaturaOrigem, temperaturaConvert);


console.log(`A temperatura convertida é ${temperaturaConvertida} ${temperaturaDestino}.`);