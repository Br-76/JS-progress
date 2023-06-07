const livros = require("./listalivros.js");
const mt = require("./problemo.js");

for (let atual = 0; atual < livros.length; atual++) {
    let menor = mt(livros, atual)

    let livroatual = livros[atual]
    let livromp = livros[menor]

    livros[atual] = livromp
    livros[menor] = livroatual
}

console.log(livros)