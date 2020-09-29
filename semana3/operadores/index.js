// Exercícios de interpretação de código - Resolução do 1°

/* 
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;
Aqui temos a declaração das variáveis e seus respectivos valores

let resultado = bool1 && bool2;
Aqui temos mais uma variável declarada e seu valor.
console.log("a. ", resultado);
Aqui temos o resultado no console de bool1 (valor true) && bool2 (valor false) ->> a. false

resultado = bool1 && bool2 && bool3;
Aqui temos a variável resultado 'redeclarada' com seu novo valor.
console.log("b. ", resultado);
Aqui temos o resultado no console de bool1 (valor true) && bool2 (valor false) && bool3 (valor !bool2, ou seja, era false -> true) ->> b. false

resultado = !resultado && (bool1 || bool1);
Aqui vemos no console o resultado (!false -> true) && (true || true resultando em -> false), temos então ->> c. true 
console.log("c. ", resultado);

console.log("e. ", typeof resultado); 
Aqui temos o seguinte resultado no console -> boolean
*/

// Exercícios de interpretação de código - Resolução do 2°

/* 
let array;
console.log('a. ', array);
Aqui o console irá retornar ->> a. undefined
array = null;
console.log('b. ', array);
Aqui o console irá retornar ->> b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log('c. ', array.length);
Aqui o console irá retornar ->> 11;

let i = 0;
console.log('d. ', array[i]);
Aqui o console irá retornar ->> 3

array[i+1] = 19; ->> Aqui temos (index 3) + (posição +1, 'andou uma casa') -> 4 (seu valor alterado para 19) 
console.log('e. ', array);
Aqui o console irá retornar ->>  e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 

const valor = array[i+6]; ->> Aqui temos (index 3) + (posição +6, 'andou seis casa') -> 9
console.log('f. ', valor);
Aqui o console irá retornar ->>  f. 9
*/

// Exercícios de escrita de código - Resolução do 1°

let idadeUsuario = prompt("Qual a sua idade?");
console.log(Number(idadeUsuario));
let idadeMelhorAmigo = prompt("Qual a idade da sua melhor amiga ou amigo?");
console.log(Number(idadeMelhorAmigo));

let comparacaoIdade = idadeUsuario > idadeMelhorAmigo;
alert("Sua idade é maior do que a do seu melhor amigo(a)?" + " " + comparacaoIdade);
let diferencaIdade = idadeUsuario - idadeMelhorAmigo;
alert("A diferença de idade de vocês é de " + diferencaIdade + " anos.");

// Exercícios de escrita de código - Resolução do 2° 


let numero = prompt("Por favor, insira um número par abaixo:");
let calculo = numero / 2;
let resultado = calculo % 2 == 0;
alert ("O resultado é: " + Number(resultado));
/*
Sempre ao inserir um número par ganhamos o retorno no prompt do número 1
Sempre ao inserir um número ímpar ganhamos o retorno no prompt do número 0
*/

// Exercícios de escrita de código - Resolução do 3° 

let listaDeTarefas = [];

let tarefa1 = prompt("Digite abaixo a primeira tarefa do seu dia:");
let tarefa2 = prompt("Digite abaixo a segunda tarefa do seu dia:"); 
let tarefa3 = prompt("Digite abaixo a terceira tarefa do seu dia:");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);
alert(listaDeTarefas); 

let tarefasRealizadas = Number(prompt("Digite abaixo o número das taferas você realizou: 0, 1 e/ou 2?"));
console.log(tarefasRealizadas); 
listaDeTarefas.splice(tarefasRealizadas, 1);
console.log(listaDeTarefas);

// Exercícios de escrita de código - Resolução do 4°

let usuario = [];

let nomeUsuario = prompt("Qual é o seu nome?");
let emailUsuario = prompt("Qual é o seu e-mail?");

usuario.push(nomeUsuario, emailUsuario);
console.log(usuario);

alert("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja Bem-Vind@, " + nomeUsuario + "!");