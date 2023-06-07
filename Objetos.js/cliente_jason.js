// O Formato JASON ou JSON é um tipo de arqui do java que possui algum padrão de interesse com o qual você queira usar 
// em outros lugares
// Resumindo, transforma um objeto em algo facil de ser lido por outros sistemas

const dados = require("./JASOion.json")

console.log(dados);

//Para salvarmos um objeto js. com o objetivo de ultilizarmos o mesmo em outro sistema
//devos transforma-lo em uma string, e para isso fazemos o seguinte:

const dadosstring = JSON.stringify(dados);

console.log(dadosstring)

//Agora para tirar mos os dados do fromato string, devemos usar o:

const objetodenovo = JSON.parse(dadosstring);

console.log(objetodenovo)