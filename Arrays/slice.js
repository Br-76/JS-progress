//O slice recorta um array 

const alunos = ['João','Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
// O corte deve ser feito com as cordenadas do array.
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);
// o alunos.length é so pra deixar bonito, quissese colocar 10 ali tbm dava


console.log("Os alunos pertencentes a sala 01 são: ", sala1 )
console.log("Os alunos petencentes a sala 02 são:", sala2 )
