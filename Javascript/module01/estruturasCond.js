const prompt = require('prompt-sync')()

// Exercicio 9

// let age = Number(prompt('Informe a sua idade: '))
// let ageRange

// if (age >= 0 && age <= 12) {
//     ageRange = 'Criança'
// } else if (age >= 13 && age <= 17) {
//     ageRange = 'Adolescente'
// } else if (age >= 18 && age <= 60) {
//     ageRange = 'Adulto'
// } else {
//     ageRange = 'Idade inválida'
// }

// switch(ageRange) {
//     case 'Criança':
//         console.log('Você é uma criança!')
//         break
//     case 'Adolescente':
//         console.log('Você é um adolescente!')
//         break
//     case 'Adulto':
//         console.log('Você é um adulto!')
//         break
//     default:
//         console.log('Idade Inválida')
// }


// Exercicio 10:

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)