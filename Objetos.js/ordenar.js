//Agora imagine que queiramos ordenar a listA EM ORDEM ALFABETIC
//uLTILIZAREMOS O 

const clientes = require("./clientesatt.json");

function ordenar(lista, parametro) { 
    const resultado = lista.sort((a,b) => {
        if (a[parametro] < b[parametro]) {
            return -1;
        }
        if (a[parametro] > b[parametro]) {
            return 1;
        } 
        else {
            return 0;
        }

    })

    return resultado
}

const ordenado = ordenar(clientes, "nome")

console.log(ordenado)