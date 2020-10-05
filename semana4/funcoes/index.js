// Exercícios de interpretação de código - Resolução do 1°

// function minhaFuncao(variavel) {
// 	return variavel * 5;
// }

// console.log(minhaFuncao(2));
// console.log(minhaFuncao(10));

// a. Primeiro o console irá imprimir 2 * 5 = 10
// Em seguida, irá imprimir 10 * 5 = 50
// b. Caso só venhamos a colocar minhaFuncao(2) ou minhaFuncao(10), 
// não iremos receber nada de volta no console, pois apesar de parecer, não chamamos a função. 
// Para chamá-la preciasaríamos colocar return no início -> return minhaFuncao(2)
// Além disso, só poderiamos chamar um dos dois (minhaFuncao(2) ou minhaFuncao(10)),
// pois ao chamarmos um o outro é automaticamente ignorado.


// Exercícios de interpretação de código - Resolução do 2°

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i]);
// 	}
// }

// outraFuncao(arrayDeNomes);

// a. As saídas impressas no console são: 
// Darvas
// Caio
// Tais saídas são resultado da condicional for estabelecida na função, ou seja,
// enquanto i for menor que 2, sendo i + 1, imprimir no console o arrayDeNomes. 
// Continuará sendo impresso os dois primeiros (nesse caso, Amanda e Caio), já eles são index menos que 2. 


// Exercícios de interpretação de código - Resolução do 3°

// const funcaoDevolver = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
// }

// const resultado = funcaoDevolver([2, 4, 6])
// console.log(resultado)

// Esse programa tem como função retornar os números ditos acima (números pares) multiplicados por eles mesmos,
// ou seja, 2 * 2 = 4, 4 * 4 = 16, 6 * 6 = 36. 

//Exercícios de escrita de código - Resolução do 4°
// a.
// function funcaoSobreMim () {
//     console.log("Eu sou Evelyn, tenho 24 anos, moro em Olinda e sou estudante.");
// }
// funcaoSobreMim ();

// b.
// let nome = "Evelyn";
// let idade = String(24);
// let endereco = "rua do Cardeal, 146";
// const estudante =  true;

// let infoUsuario = (nome, idade, endereco, estudante) => {
//     if (estudante === true) {
//         "sou";
//     } else {
//         "não sou";
//     }
//     console.log(`Eu sou, ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante}.`);
// }
// const resultado = infoUsuario (nome, idade, endereco, estudante);
// console.log(resultado);


//Exercícios de escrita de código - Resolução do 5°

// a. 
// let funcaoAdicao = (a, b) => {
//     const soma = a + b;
//     return soma; 
// }
// const resultado = funcaoAdicao(48, 345)
// console.log(resultado);

// b. 
// let funcaoReceber = (c, d) => {
//     if (c >= d) {
//         console.log(`${c} é maior ou igual a ${d}`);
//     } else {
//         console.log(`${c} é menor que ${d}`);
//     }
// }
// const resultado = funcaoReceber(50, 175);
// console.log(resultado);

// c. 
const mensagem = "Minha namorada é linda <3";
let funcaoMensagem = (mensagem) => {
    for (let i = 0; i <= 10; i++) {
        console.log(mensagem);
    }
}


