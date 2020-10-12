/* 
Execícios de interpretação de código 
1. O código mostrado é uma função de converção de moedas. A função recebe como parâmetro valorEmDolar. 
Logo abaixo temos a declaração de uma variável que irá aparecer como pop-out para o usuário, pedindo a este que insira o valor atual da cotação do dolar.
A função irá então retornar a R$ + o valor em dolar * a cotação atual.
Com a variável meuDinheiro vamos chamar a função conversorDeMoeda para entra em ação com o valor fornecido.
Por último, teremos o valor da variável meuDinheiro impressa no console: Ex (cotação atual > 5.53 * 100): 
Console:
R$ 553,00
*/

/*
2. Temos um programa de investimento de dinheiro. A função investeDinheiro recebe dois parâmetros, um sobre o tipo de investimento e
o outro sobre o valor do investimento. Uma variável que irá calcular o valor do investimento após feito. Inicia-se então um loop switch que
irá calcular o tipo de investimento, sendo o cálculo de cada uma a variável valorAposInvestimento igual ao valor * a taxa de cada investimento.
Caso o tipo de investimento não esteja dentro dos valores do loop, o usuário receberá um alerta dizendo que o tipo de investimento informa 
é incorreto. Teremos o retorno do valorAposInvestimento logo após isso, para então seguirmos para a criação de duas novas variáveis. 
Ambas receberam um novo montante de investimento com a função investeDinheiro sendo chamada com seus parâmetros estabelicidos. 
Por último teremos o console lendo os valores finais de cada uma dessas variáveis. 
Console: 
 165
(alerta)TIPO DE INVESTIMENTO INFORMADO INCORRETO!
*/

/*
3. Um programa que se centra em paridade. Temos 3 arrays: um chamada numeros (recebe vários números), array1 (está vazia) e array2 (está vazio).
Seguimos então com o loop for sob as condições: de numero (que calcula paridade), para numeros. Ele recebe a condicional if que irá calcular a paridade
e em que o array1 irá ser preenchido com os números pares, enquanto o array2 irá receber os ímpares. Por fim teremos o console lendo três coisas: 
o tamanho total do array numeros, array1 e do array2.
Console:
Quantidade total de números 14 
6
8 
*/

/*
4. Inicialmente temos a declaração de três variáveis: uma array const numeros (que recebe números), uma let numero1 (que recebe a propriedade Infinity >> infinito), 
e let numero2 (que recebe 0). Em seguida começa-se um loop for que recebe de numero para numeros. Dentro do for temos a condicional if chamda duas vezes.
O primeiro if recebe a condição se o numero for menor que numero1 irá executar a seguinte tarefa: o numero1 será igual ao numero. Na segunda condicional if
o numero sendo maior que numero2 irá executar: numero2 igual a numero. Por fim temos dois console.log printando o numero1 e numero2.
Console:
Infinity 
1590 
*/

//Exercícios de Lógica de Programação 
// 1. For, forEach e Map. 

/*
const racasCachorro = [
    { raca: "Daschund", nome: "Marvin" },
    { raca: "Spitz", nome: "Max" },
    { raca: "Poodle", nome: "Sophia" },
    { raca: "Pitbull", nome: "Nala" },
    { raca: "Beagle", nome: "Stuart" }
]

racasCachorro.forEach((racas, nomes) => {
    return racasCachorro <= 5;
})

console.log(racasCachorro);
*/

/* 
2.
a) false
b) false
c) true
d)false
e)true
*/

// 3. Não funciona, pois falta os valores da variável const quantidadeDeNumerosPares.
// Não solucionado :/
/*
const quantidadeDeNumerosPares = [1, 0, 3, 13, 14, 25, 28, 30, 32, 33];
let i = 3;
while(i <= quantidadeDeNumerosPares) {
  console.log(i * 2)
}

console.log(quantidadeDeNumerosPares);
*/

// 4.
/*
function descobreTriangulo(a, b, c) {
    if(a === b && b === c) {
        console.log("Esse triângulo é Equilátero.");
    } else if (a === b && b !== c) {
        console.log("Esse triângulo é Isósceles.");
    } else {
        console.log("Esse triângulo é Escaleno.");
    }
}

descobreTriangulo(40, 40, 40);
descobreTriangulo(40, 45, 33);
descobreTriangulo(40, 40, 35);
*/

// 5. 
// Não solucionado
/* function descobreDiferenca() {
 
    const maiorQue = a > b;
    const seDivisiveis = a % b === 0;
    const diferenca = a - b;

    console.log(`O maior é: ${maiorQue}`);
    console.log(`${seDivisiveis}`);
    console.log(`${diferenca}`);
}
descobreDiferenca(10, 20);
*/

// Exercícios de Funções
//1.
/*
const numeros = [13, 84, 67, 55, 2, 18, 3440];
i = 0;

Array.min = function(valorMinimo) {
    return Math.min.apply(Math, valorMinimo.splice(i, 1));
}

Array.max = function(valorMaximo) {
    return Math.max.apply(Math, valorMaximo.splice(i, 1));
}

console.log(`Esse é o segundo menor: ${Array.min(numeros)}`);
console.log(`Esse é o segundo maior: ${Array.max(numeros)}`);
*/

//2.
/*
let mensagem = function (cumprimenteUsuario) {
    return "";
}

const mostrarMensagem = mensagem(alert("Hello, Future4!"));
*/

