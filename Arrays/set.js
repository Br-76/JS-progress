//Corrige um array que possua componentes duplicados

const n = ["Anna", "Tatu", "Tatu", "xa"]

const set1 = new Set(n)

const n2 = [...set1]
//Para fazer com que um set seja exibido como um array novamente, só ultilizar a formula da copia la
console.log(n2)
