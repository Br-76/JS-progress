//Temos alguns metododos para visualizar todas as chaves em ultilização em um objeto
// vamos ver um exemplo deles

const cliente = {
    nome : "Neto",
    Idade : 1238,
    Cidade : "Itanhanem"
}

cliente.endereço = {
    rua : "Itanhanem 2",
    numero : 220
}

const chavedoobj = Object.keys(cliente)
//Essa função retorna um array com as chaves do objeto

console.log(chavedoobj)