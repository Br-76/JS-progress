// Caso queiramos percorrer um objeto, devemos usar um laço de repetição, uma vez que os itens de 
// um objetonão possuem um indice, logo não podem ser localizados como os itens de um array

const cliente = {
    nome : "Neto",
    Idade : 1238,
    Cidade : "Itanhanem"
}

cliente.endereço = {
    rua : "Itanhanem 2",
    numero : 220
}

for (let chave in cliente) {
    console.log(cliente[chave])
}




