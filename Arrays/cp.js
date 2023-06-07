//Para copiarmos um array sem alterar seu valor original 
// podemos usar o seguinte esquema 

const notas = [2, 1, 3, 6, 5];

const novas = [...notas, 10];

console.log("As notas originais são: ", notas)
console.log("As novas notas são:", novas)
// temos que usar os "..." como uma maneira de "criar" um array sobre o array original,
// pois caso queiramos adicionar um novo valor para o array, o Js compreende como se estivessemos alterando seu valor original.
// o 10 ali representa um segundo parametro que deve ser seguido, com o objetivo de adicionar o 10 ao array original.
// Ps: esse metodo de clonagem so pode ser ultilizado com arrays, ja que com strings, boleanos, etc, não a alteração por parte do java
// qunado se é adicionado o "="

