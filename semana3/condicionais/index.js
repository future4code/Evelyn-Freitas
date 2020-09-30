// Exercícios de interpretação de código - Resolução do 1°
/* 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Esse código é sobre imprimir números pares e ímpares. 
Ao por um número ímpar, o console imprime que não passou no teste.
Ao por um número par, o console imprime que passou no teste. 
*/

// Exercícios de interpretação de código - Resolução do 2°
/* 
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

O código acima serve para imprimir o preço de cada fruta.
Se for escolhida a opção Maçã, irá imprimir: O preço da fruta  Maçã  é  R$  2.25
E no caso em que se tira o break, o programa continua rodando, então ele imprime a resposta do default.
*/

// Exercícios de interpretação de código - Resolução do 3°
/* 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

A primeira linha pede para que o usuário digite o primeiro número.
Ao escolher dez como número, o console irá imprimir que o número passou no teste, pois 10 é maior que 0.
Ao escolher - 10, o console irá imprimir que a mensagem não foi definida para quando um número for menor que zero. 
Neste caso de erro, para consertá-lo, será necessário colocar o >> let mensagem fora do escopo do if, 
já que o mesmo já tem uma condição para funcionar. 
Então só é necessário tirar o let do escopo e a mensagem para um número abaixo de zero irá rodar normal.
*/

// Exercícios de escrita de código - Resolução do 4°
// const idadeUsuario = Number(prompt("Qual a sua idade?"));
// console.log(idadeUsuario);

// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir");
// } else {
//     console.log("Você não pode dirigir");
// }

// Exercícios de escrita de código - Resolução do 5°
// const turnoEstudo = prompt("Em qual turno você estuda? Digite, por favor: M (matutino) ou V (Vespertino) ou N (Noturno).").toLowerCase();

// if (turnoEstudo === "m") {
//     console.log("Bom dia!");
// } else if (turnoEstudo === "v") {
//     console.log("Boa tarde!");
// } else {
//     console.log("Boa noite!")
// }
// Exercícios de escrita de código - Resolução do 6°
// let turnoEstudo = prompt("Em qual turno você estuda? Digite, por favor: M (matutino) ou V (Vespertino) ou N (Noturno).").toLowerCase();

// switch (turnoEstudo) {
//     case 'm':
//         console.log("Bom dia!")
//         break;
//     case 'v':
//         console.log("Boa tarde!")
//         break;
//     case 'n':
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("Não conheço esse turno!")
//         break;
// }

// Exercícios de escrita de código - Resolução do 7°
// let generoFilme = prompt("Qual gênero de filme você quer assistir?").toLowerCase();
// let precoIngresso = Number(prompt("Qual o preço do ingresso?"));
// let confirmacaoFilme = prompt("Confirma a escolha do filme?").toLowerCase();

// if ((generoFilme === "fantasia") && (precoIngresso < 15) && (confirmacaoFilme === "sim")) {
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme :(");
// }

// Desafio - Resolução 1°

// const generoFilme = prompt("Qual gênero de filme você quer assistir?").toLowerCase();
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"));
// const confirmacaoFilme = prompt("Confirma a escolha do filme?").toLowerCase();
// const comprarSnack = prompt("Quer comprar algum snack?").toLowerCase();

// if ((generoFilme === "fantasia") && (precoIngresso < 15) && (confirmacaoFilme === "sim") && (comprarSnack === "sim")) {
//     let snack = prompt("Qual snack você vai querer comprar?").toLowerCase();
//     console.log("Bom filme!");
//     console.log("Aproveite seu(a) " + snack + "!");
// } else {
//     console.log("Escolha outro filme :(");
// }

// Desafio - Resolução 2° - Incompleto

const nomeUsuario = prompt("Digite seu nome completo: ").toLowerCase();
const tipoJogo = prompt("Qual o tipo de jogo? Digite: IN (Internacional) ou DO (Doméstico).").toLowerCase();
const etapaJogo = prompt("Qual a etapa do jogo? Digite: SF (Semi-Final) ou DT (Terceiro Lugar) ou FI (Final).").toLowerCase();
const categoria = Number(prompt("Escolha a categoria: 1, 2, 3 ou 4."));
const quantidadeIngresso = prompt("Quantos ingressos você deseja comprar?").toLowerCase();
let valorIngressoCategoria1 = [1.320, 660, 1.980];
let valorIngressoCategoria2 = [880, 440, 1.320];
let valorIngressoCategoria3 = [550, 330, 880];
let valorIngressoCategoria4 = [220, 170, 330];
let cotacaoDolar = 4.10;

if (tipoJogo === DO) {
    switch () {
        case 'nomeUsuario':
            console.log("Nome do cliente: " + nomeUsuario)
            break;
        
        case 'tipoJogo':
            console.log("Tipo do jogo: " + tipoJogo)
            break;
        
        case 'etapaJogo':
            console.log("Etapa do jogo: " + etapaJogo)
            break;
        
        case 'categoria':
            console.log("Categoria: " + categoria)
            break;
        
        case 'quantidadeIngresso':
            console.log("Quantidade: " + quantidadeIngresso)
            break;

        default:
            console.log ("Nenhum dado confere :(")
            break;
    }
} else {
    switch () {
        case [0]:
            console.log("Nome do cliente: " + [0])
            break;
        
        case [1]:
            console.log("Tipo do jogo: " + [1])
            break;
        
        case [2]:
            console.log("Etapa do jogo: " [2])
            break;
        
        case [3]:
            console.log("Categoria: " + [3])
            break;
        
        case [4]:
            console.log("Quantidade: " + ([4] * cotacaoDolar))
            break;

        default:
            console.log ("Nenhum dado confere :(")
            break;
    }
}   