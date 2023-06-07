const livros = require("./listalivros.js");


function insert(lista){

    for( let atual=0; atual < lista.length; atual++ ){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemanal = lista[analise]
            let analis = lista[analise - 1 ]
        
            lista[analise] = analis
            lista[analise - 1 ] = itemanal
//          o "While" diferentemente do "For" necessita de uma parada.
            analise--
        }

    }
   console.log(lista)

}
insert(livros)