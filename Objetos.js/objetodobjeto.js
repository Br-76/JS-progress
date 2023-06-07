//Podemos guardar objetos dentro de outros objetos

const cliente = {
    nome : "Neto",
    Idade : 1238,
    Cidade : "Itanhanem"
}

cliente.endereço = {
    rua : "Itanhanem 2",
    numero : 220
}

console.log(cliente)