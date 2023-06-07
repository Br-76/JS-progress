// tem como objetivo filtrar um array 
// Retorna um novo array
const alunos = ['Anna', "Marcus", "Beatrice", "Adamastor"]
const notas = [60, 100, 25, 40]

const passaro = alunos.filter((nota, indice) => {
    return notas[indice] >= 60;
}

)

console.log("os alunos que passaram foram: ", passaro)
