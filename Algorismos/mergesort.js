//O mergesort reorganiza uma lista grandona em varias outras pequenas, realizando a comparação
//das mesmas no final, e reordenando as.
//PS: consome menos momeoria que que um loop de repetição, pois não cria uma variavel nova
//a cada verificação.

const listalivros = require("./array.js")

function mergesort(array, nivelAninhamento = 0){

 console.log(`o nivel de aninhamento atual é: ${nivelAninhamento}`)

 console.log(array)

    if  ( array.length > 1 ){
        const meio = Math.floor(array.length / 2 );
        //"math.floor" retorna o valor arrredondado para baixo
        const p1 = mergesort(array.slice(0, meio), nivelAninhamento + 1);
        const p2 = mergesort(array.slice(meio, array.length), nivelAninhamento +1 );
        array = ordena(p1, p2);
    }
    return array
}

function ordena (p1, p2){
    let pa1 = 0
    let pa2 = 0
    const resultado = []

    while (pa1 < p1.length && pa2 < p2.length){
        let produto1 = p1[pa1]
        let produto2 = p2[pa2]

        if (produto1.preco < produto2.preco) {
            resultado.push(produto1)
            pa1++
        } else {
            resultado.push(produto2)
            pa2++
        }
    
    }
     return resultado.concat(pa1 < p1.length ? p1.slice(pa1)
     : p2.slice(pa2))  
}

console.log(mergesort(listalivros))