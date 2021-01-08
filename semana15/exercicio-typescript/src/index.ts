// Resolução do Exercício 1 
//a
// const minhaString: string = 2;
// Ocorre um erro, pois o tipo number não é atribuível ao tipo string.

//b
const meuNumero: number = 15;
let numeros: (number | string) = "quinze";
// Utilizando o | é possível escolher entre qualquer dos tipos de variáveis inseridos.

//c
/*
const pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "Pedro",
    idade: 35,
    corFavorita: "preto"
}
*/

//d 
/* 
type pessoa = { nome: string, idade: number, corFavorita: string }
let listaDePessoas: pessoa[] = [
    {
        nome: "Pedro",
        idade: 35,
        corFavorita: "preto"
    },
    {
        nome: "Victória",
        idade: 22,
        corFavorita: "cinza"
    },
    {
        nome: "Katy",
        idade: 17,
        corFavorita: "azul"
    }
]
*/

//e
enum cor {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = { nome: string, idade: number, corFavorita: cor }
let listaDePessoas: pessoa[] = [
    {
        nome: "Pedro",
        idade: 35,
        corFavorita: cor.VERDE
    },
    {
        nome: "Victória",
        idade: 22,
        corFavorita: cor.VERMELHO
    },
    {
        nome: "Katy",
        idade: 17,
        corFavorita: cor.AZUL
    }
]

// Resolução do Exercício 2:
//a e b
/*
type dados = {numerosOrdenados: any, numeros: any, soma: number, num: any, estatisticas: object, maior: any, menor: any, media: number}
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
*/

//c 
type dados = {
    numeros: number[],
    obterEstatisticas: any
}

const amostraDeNumerosPares = {
    numeros: [15, 22, 13, 8, 10],
    obterEstatisticas: (numeros) => {3}
}

// Resolução do Exercício 3:
//a
const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]