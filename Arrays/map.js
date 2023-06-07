//Tem como objetivo reescrever um array

const notas = [10, 9.5, 4.5, 3]

const notasextra = notas.map((nota) =>{
      return nota + 1 >= 10 ? 10 : nota + 1;
}
     )

    console.log(notasextra)
