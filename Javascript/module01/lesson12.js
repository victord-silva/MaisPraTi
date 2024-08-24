let serie = {
    nome: "The Boys",
    genero: "Ação, Paródia, Heróis",
    nrTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50
    },

    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome} e sua classificação é + ${this.classificacao}`
    }
}

for(let key in serie) {
   // console.log(serie[key])
}

for(let key of Object.keys(serie)) {
   // console.log(serie[key])
}

// console.log(serie.mostrarCaracteristicas())

let livro = {
    nome: "A Guerra dos Tronos",
    genero: ["Romance", "Literatura fantástica", "Alta fantasia", "Ficção Política"],
    dataLancamento: 1996,
    autor: "George R. R. Martin",
    statusLeitura: "Em andamento",
    paginas: 592,
    tipo: ["Digital", "Físico"],
    idioma: ["Português", "Español", "English"],
    
    mostrarCaracteristicas: function() {
        return (this.nome + " foi escrito por " + this.autor + " em " + this.dataLancamento)
    }
}

for(let key in livro) {
   // console.log(livro[key])
}

// console.log(livro.mostrarCaracteristicas())

let carro = {
    nome: "m2",
    marca: "BMW",
    ano: 2020,
    cor: "Azul",
    potenciaCV: 220,
    nrPortas: 4,
    modelo: "Coupé",
    velMaximaEmKM: 250,

    mostrarCaracteristicas: function() {
        return ("A " + this.marca + " " + this.nome + " de ano " + this.ano + " é um dos carros mais rápidos, alcançando incríveis " + this.velMaximaEmKM + "km/H.")
    },

    acelerar: function() {
        return "Acelerando com pé no porão!"
    }
}

// console.log(carro.mostrarCaracteristicas())
// console.log(carro.acelerar())

let motor = "1800"
let nome = "bmw s1000r"
let tipo = "Esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor
}

//console.log(moto)

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate Street",
    idade: 16
}

atleta.nacionalidade = "Brasil"
atleta.medalhas = {ouro: 10, prata: 2, bronze: 1}
atleta.celebrarVitoria = () => {return "Ganhei!"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: "Bruce",
//     profissao: "Batman"
// }

// let obj2 = obj1

// obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

function computador(processador, gpu, ram, armazenamento) {
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function() {
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function() {
        return `processador: ${this.processador}
                gpu: ${this.gpu}
                ram: ${this.ram}
                armazenamento: ${this.armazenamento}`
    }
}

let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
//console.log(pc.mostrarEspecificacoes())

function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log('Jogando'))

//console.log(jogo1.jogar())


for(let key in jogo1) {
   //console.log(`${key}: ${jogo1[key]}`)
}

const jogadores = ["Pelé", "CR7", "Messi"]

for(let jogador of jogadores){
    //console.log(jogador)
}
