//Contexto: recebemos um valcher de uma livaria e agora temos que ver qual o menor preço

const livros = require("./listalivros")

function menorvalor (arrprodutos, posicaoinicial) {
let menor = posicaoinicial;

for (let atual = posicaoinicial; atual < arrprodutos.length; atual++) {
    if (arrprodutos[atual].preco < arrprodutos[menor].preco) {
        menor = atual
    }
  
}
return menor;
}

module.exports = menorvalor;
