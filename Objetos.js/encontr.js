//Temos como objetivo encontrar um nome de uma peesoa da liste de clientes "clientesatt"
//Para isso, vamos ultilizar o seguinte código

const client = require("./clientesatt.json")

function encontra (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
    //Nesta linha, estamos verificando se o item da chave que estamos procurandoé semelhante ao seu valor0
//como estamos trabalhando com arrays e estrings, caso queiramos achar um valor, como por exemplo
//um telefone, temos que ultilizar o .includes ao inves do ===
}

const achar = encontra(client, "nome", "Kirby")
const achar2 = encontra(client, "telefone", "51993301028")

console.log(achar)
console.log(achar2)