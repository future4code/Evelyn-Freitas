/* Resolução do exercício de interpretação de código
Resolução do 1°:

a = 10
b = 10

console.log(b)
Aqui o console exibe o valor de b -> 10
b = 5
console.log(a, b)
Aqui o console exibe o valor de a e b, após a mudança na variável b -> 10 5
*/

/* Resolução do exercício de interpretação de código
Resolução do 2°:

a = 10
b = 20 
c = a -> Aqui o valor de c passa a ser o valor de a -> 10
b = c -> Aqui o valor de b passa a ser o valor de c = a, ou seja -> 10
a = b -> Aqui o valor de a passa a ser o valor de b que era 20 e passou a ser -> 10

console.log(a, b, c)
Aqui o console apresenta -> 10 10 10

*/

// Exercício de escrita de código - Resolução 1°:

let variavelNome;
let variavelIdade;
console.log(typeof variavelNome);
console.log(typeof variavelIdade);
// Reflexão: O console me entregou -> undefined <- para ambas variáveis (na cor branca), afinal nenhum valor foi atribuído as elas.

prompt("Qual o seu nome?");
console.log(variavelNome);
prompt("Qual a sua idade?");
console.log(variavelIdade);
//Reflexão: Não recebi nenhum erro, recebi a mesma resposta do comando anterior -> undefined <- para ambas as variáveis (na cor cinza).

variavelNome = undefined;
variavelIdade = undefined;
console.log(variavelNome);
console.log(variavelNome);
//Reflexão: Continuo a receber a mesma resposta, afinal o valor, mesmo colocando como undefined, continua sendo indefinido.

let nomeUsuario = prompt("Qual o seu nome?");
let idadeUsuario = prompt("Qual sua idade?");
console.log("Olá,", nomeUsuario, "você tem", idadeUsuario, "anos");

// Exercício de escrita de código - Resolução do 2°:

let nomeDoUsuario = prompt("1. Qual o seu nome?");
console.log("1. Qual o seu nome?");
console.log("Resposta:", nomeDoUsuario);
let enderecoDoUsuario = prompt("2. Qual o seu endereço?");
console.log("2. Qual o seu endereço?");
console.log("Resposta:", enderecoDoUsuario);
let corFavoritaUsuario = prompt("3. Qual a sua cor favorita?");
console.log("3. Qual a sua cor favorita?");
console.log("Resposta:", corFavoritaUsuario);
let serieFavoritaUsuario = prompt("4. Qual a sua série favorita?");
console.log("4. Qual a sua série favorita?");
console.log("Resposta:", serieFavoritaUsuario);
let jogoFavoritoUsuario = prompt("5. Qual o seu jogo favorito?");
console.log("5. Qual o seu jogo favorito?");
console.log("Resposta:", jogoFavoritoUsuario);

/* Retorno do console:
index.js:56 1. Qual o seu nome?
index.js:57 Resposta: Evelyn
index.js:59 2. Qual o seu endereço?
index.js:60 Resposta: Rua do Cardeal, 146
index.js:62 3. Qual a sua cor favorita?
index.js:63 Resposta: Preto
index.js:65 4. Qual a sua série favorita?
index.js:66 Resposta: The Handmaid's Tale
index.js:68 5. Qual o seu jogo favorito?
index.js:69 Resposta: The Last Of Us */

// Exercício de escrita de código - Resolução do 3°:

let arrayComidaFavorita = ["Frango a parmegiana", "Batata Frita", "Chocolate", "Cheesecake de Chocolate", "Torta Holandesa"];
console.log("Essas são minhas comidas favoritas: ");
console.log(arrayComidaFavorita[0])
console.log(arrayComidaFavorita[1]);
console.log(arrayComidaFavorita[2]);
console.log(arrayComidaFavorita[3]);
console.log(arrayComidaFavorita[4]);

/* Retorno do console:
Essas são minhas comidas favoritas: 
index.js:87 Frango a parmegiana
index.js:88 Batata Frita
index.js:89 Chocolate
index.js:90 Cheesecake de Chocolate
index.js:91 Torta Holandesa
*/

let arrayPerguntas = ["Você almoçou hoje?", "Você comeu chocolate hoje?", "Você assistiu a aula hoje?"];
let arrayRespostas = [false, false, true];
console.log(arrayPerguntas[0], arrayRespostas[0]);
console.log(arrayPerguntas[1], arrayRespostas[1]);
console.log(arrayPerguntas[2], arrayRespostas[2]);

/* Retorno do console:
index.js:104 Você almoçou hoje? false
index.js:105 Você comeu chocolate hoje? false
index.js:106 Você assistiu a aula hoje? true
*/