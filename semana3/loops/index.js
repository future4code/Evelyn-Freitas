// Exercícios de interpretação de código - Resolução do 1°

// let valor = 0;
// for(let i = 0; i < 5; i++) {
//   valor += i;
// }
//   console.log(valor);
/* 
O programa vai ler e depois imprimir no console o valor 10, pois o programa vai somar o valor + i + 1, 
ou seja, a lógica será a seguinte ->> 0 + 0 + 0 = 0 -> 0 + 0 + 1 = 1 -> 1 + 1 + 1 = 3 -> 3 + 2 + 1 = 6 -> 6 + 3 + 1 = 10  
Tendo o i (index) de 4, pois 4 < 5*/

// Exercícios de interpretação de código - Resolução do 2°
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero);
// 	}
// }
/* 
Neste programa ele imprime no console apenas os números maiores que 18,
ou seja, ele começa no 19 e vai até o 30.
Para acessar cada índice desse programa teremos que retirar a condicional if,
deixando apenas o console.log(numero); dentro do for.
*/

// Exercícios de interpretação de código - Desafio 1°
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
// let quantidadeAtual = 0;
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = ""
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "0";
//   }
//   console.log (linha);
//   quantidadeAtual++;
// }
/* 
Teríamos o resultado do número zero em cada linha, 
porém na primeira linha o mesmo teria apenas um 0, 
na segunda linha 00, na terceira 000 e na quarta
0000, somando então 4 linhas com a quantidade de 0 em string, 
por isso não haveria possibilidade de aumentar o número.
*/

//Exercícios de escrita de código - Resolução 3°
// a.
// let arrayOriginal = [2, 24, 38, 44, 50, 62, 33, 99, 75, 87];

// for (let array of arrayOriginal) {
//     console.log(array);
// }

// b.
// let arrayOriginal = [2, 24, 38, 44, 50, 62, 33, 99, 75, 87];
// for (let array of arrayOriginal) {
    
//     console.log(array / 100);
// }

// c.
// let arrayOriginal = [2, 24, 38, 44, 50, 62, 33, 99, 75, 87];
// let novoArray = [];

// for (let numerosPares of arrayOriginal) {
//     if (numerosPares % 2 === 0) {
//         novoArray.push(numerosPares);
//     }
// }
// console.log(novoArray);

// d. 
let arrayOriginal = String([2, 24, 38, 44, 50, 62, 33, 99, 75, 87]);
let arrayStrings = [
"O elemento do índex 0 é", 
"O elemento do índex 1 é", 
"O elemento do índex 2 é", 
"O elemento do índex 3 é", 
"O elemento do índex 4 é", 
"O elemento do índex 5 é", 
"O elemento do índex 6 é", 
"O elemento do índex 7 é", 
"O elemento do índex 8 é", 
"O elemento do índex 9 é"
]

for (let soma of arrayOriginal) {
    soma = arrayStrings + " " + arrayOriginal;
}
console.log(soma);
