// O metodo splice remove e adiciona coisas a um array
// Suponhamos que os alunos Ana e caio sairam da escola, ao mesmo tempo, rodrigo entrara para a sala em que eles estavam.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2, "Rodrigo");
// O splice necessita das seguintes coodernadas: (o caractere onde ele começara, quantos parametros remover, o que sera adicionado)
console.log(nomes)