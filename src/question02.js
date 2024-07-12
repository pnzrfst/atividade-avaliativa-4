
import leia from "readline-sync"
/*Questão 02
Escreva um algoritmo para verificar se palavra é um palíndromo.
Uma palavra palíndromo é uma palavra que é igual, lendo ela de trás para frente.
Novamente, lembrando que uma string é um vetor de caracteres.

Opcional, você pode criar uma lógica para verificar se um texto é palíndromo também. 
Para isso, você deve ignorar espaços. 
Segue abaixo, uma forma de remover espaços com JavaScript.

var str = "   Exemplo de string com espaços   ";
var novaStr = str.replaceAll(" ", "")
Exemplos de Palíndromos

- ovo
- ana
- reviver
- a torre da derrota
- o lobo ama o bolo
*/

var palavraUser = leia.question("digite algo: ").toLowerCase();
var ehPalindromo = true;

for (var i = 0; i < palavraUser.length / 2; i++) {
    if (palavraUser[i] !== palavraUser[palavraUser.length - 1 - i]) {
        ehPalindromo = false;
        break;
    }
}

if (ehPalindromo) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}

