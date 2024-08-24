// 1. Soma dos Elementos de um Array

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// 2. Encontre o maior número em um Array
    
// let arr = [0, 30, 0, 0]
// let maior = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maior) {
//         maior = arr[i];
//     } 

// }

// console.log(`O maior número é ${maior}`)

// 3. Reverter um Array

// let arr = [0, 1, 2, 3, 4];
// let arrReversed = []

// for (let i = arr.length - 1; i >= 0; i--) {
//     arrReversed.push(arr[i])
// }

// console.log(arrReversed)

// 4. Criar um novo Array contendo apenas os números pares

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrCousin= []

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arrCousin.push(arr[i])
//     }
// }

// console.log(arrCousin)

// 5. Contar ocorrencias de um valor

// const prompt = require('prompt-sync')()

// let arr = [10, 20, 30, 10, 20, 10]
// let equalNumbers = 0

// let userResp = Number(prompt("Quantas vezes aparece o número: "))

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == userResp) {
//         equalNumbers++
//     }
// }

// console.log(equalNumbers)

// arrays/vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.table(matriz)

// console.log (matriz[1][1])

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

// 6. Soma de Matrizes

// let matriz1 = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]
// ]

// let matriz2 = [
//     [1, 2, 3], //1
//     [1, 2, 3], //2
//     [1, 2, 3] //3
//  ]

// let somaMatrizes = []

// if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length){
//     throw new Error("Os arrays devem ter o mesmo tamanho.")
// }

// for (let i = 0; i < matriz1.length; i++) {
//     let somaLinha = []
//     for (let j = 0; j < matriz1.length; j++) {
//         somaLinha.push(matriz1[i][j] + matriz2[i][j])
//     }

//     somaMatrizes.push(somaLinha)
// }

// console.table(somaMatrizes)

// 7. Somar diagonal principal

let matriz1 = [
    [5, 2, 3],
    [1, 1, 3],
    [1, 2, 4]
]

// let matriz2 = [
//     [1, 2, 3], //1
//     [1, 2, 3], //2
//     [1, 2, 3] //3
//  ]

let somaDiagonal = []

for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1.length; j++) {
        if (i == j) {
            somaDiagonal.push(matriz1[i][j] + matriz1[i][j])
        }
    }

}

console.log(somaDiagonal)