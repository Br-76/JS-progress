//Objetos tem como objetivo guardar as caracteeristica de algo.
//Sua estrutura é dada por:

const cliente = { 
    nome: "Adamastor",
    idade: 32,
    tamanho: 1.89,
    cpf: "45454545456589"

}

console.log(cliente.cpf.substring(0, 3))
//Para alterarmos o meio em que os objetos aparecem podemos usar o operador tipo '.'
//o ".substring" cria um string baseada na original, mas somente coms os objetos que queremos.

//temos o metodo com """"

console.log(cliente["nome"])

//Alem disso, podemos alterar valores de uma chave se necessario
//suponhamos que temos o campo"chave" porem ele não tem um valor defindo

console.log(cliente.telefone)
//Seu valor sera retornado como UNDEFINED 
//podemos alterar isso adicionando um valor para o campo "Telefone"

cliente.telefone = "(34) 99211-6097"
console.log(cliente.telefone)
//Agora o valor adicionado sera exeutado
