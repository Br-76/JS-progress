// Procura  coisa dentro de arrays 

const alunos = ['Tomé', "Enzo", "Gabiru"]
const notas = [10, 12 ,23]

const medias = [alunos, notas]

function names(aluno){
    if (medias[0].includes(aluno)){

        const [alu, nota] = medias;

        const indice = alu.indexOf(aluno);
        const indicenotas = nota[indice];

        console.log(aluno, "tem a nota", indicenotas)

    } else {
        console.log("Aluno não encontrado")
    }
}

names('Tomé')