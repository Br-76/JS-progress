//A funcao ForEach 
//assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula,
//também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos.
//No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar
// as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.
const number = [ 1, 215, 456, 87]

let md = 0 

number.forEach(function(numero,){
console.log(numero)
    md += numero

}
)

md = md / number.length

console.log("A média dos valores a cima é: ", md)
