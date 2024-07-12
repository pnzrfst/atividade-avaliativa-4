

import leia from "readline-sync"

/*Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem.
Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/

var texto = leia.question("Digite um texto: ");

var contadorVogais = 0;
var vogal = "a, e, i, o, u"

for(var i = 0; i < texto.length; i++){  
   for(var j = 0; j < vogal.length; j++){
    if(texto[i] === vogal[j]){
        contadorVogais++
    }
   } 
}

console.log(`foram encontradas ${contadorVogais} vogais`)