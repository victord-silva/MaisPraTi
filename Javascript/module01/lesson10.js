// 1. Soma dos Elementos de um Array como Function

// let somaArray = (sum) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [10, 30, 20, 30]
// let sum = 0

// console.log(`A soma da Array é: ${somaArray(sum)}`);

// 2. Encontre o maior número em um Array em Function
    
// let maiorNumero = (maior) => {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > maior) {
//             maior = arr1[i];
//         } 
//     }
//     return maior;
// }

// let arr1 = [100, 30, 20, 550]
// let maior = arr1[0]

// console.log(`O maior número é o ${maiorNumero(maior)}`);

// 3. Reverter um Array em em Function

// let revertArray = (arrReversed) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrReversed.push(arr[i])
//     }
//     return arrReversed;
// }

// let arr = [2, 1, 2, 3, 10];
// let arrReversed = []

// console.log(revertArray(arrReversed));

// 4. Criar um novo Array contendo apenas os números pares em Function

// let onlyCousin = (arrCousin) => {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             arrCousin.push(arr[i])
//         }
//     }
//     return arrCousin;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arrCousin= []

// console.log(onlyCousin(arrCousin));

// 5. Contar ocorrencias de um valor em Function

const prompt = require('prompt-sync')()

let ocorrencias = (equalNumbers) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == userResp) {
        equalNumbers++
        }
    }
    return equalNumbers
}

let arr = [10, 20, 30, 10, 20, 10]
let equalNumbers = 0
let userResp = Number(prompt("Quantas vezes aparece o número: "))
console.log(ocorrencias(equalNumbers))