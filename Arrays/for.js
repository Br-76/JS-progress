//O tipo for realiza um sistema de repetições 

const numeros = [100, 200, 300, 400, 500, 600]

//Para sua existencia, o for deve conter 3 termos:
//1*:é executada uma unica vez(indica onde o for vai começar a operar)
//2* indica o parâmetro que deve ser seguido(condição que vai manter o "For" funcionado)
//38 
for (let indice = 0; indice < numeros.length; indice++){
    console.log(numeros[indice])
}

//somando com o FOR 

const conta = [2, 4, 5, 6]

let continua = 0 

for (let i = 0; i < conta.length; i++){
        continua += conta[1]
}

const mediadas = continua / conta.length

console.log("A media dos números é:  ", mediadas )



//loop em matrizes

const m1 = [1, 2, 3, 6]
const m2 = [4, 5, 6, 9, 8]
const m3 = [5, 8, 9, 7]
 
let junt = [m1, m2, m3]

let md = 0

for (let i = 0; i < junt.length; i++){
    for (let j = 0; j < junt[i].length; j++){
        md += junt[i][j] / junt[i].length;
    }
}

md = md / junt.length

console.log(md)