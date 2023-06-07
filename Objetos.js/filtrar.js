//Agora imagine que temos que encontrar na lista"clientesatt" as pessoas que moram em apartsmento //
//só que esqueceram de colocar o complemento
//fazemos assim:

const clientes = require("./clientesatt.json");

function filtrar(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
            //Usamos o "!" com o objetivo de negar a linha, ou seja: não tem aquele valor
            //o ".hasownProperty" avalia se determinado "campo" existe
        );
    });
}

const filtrados = filtrar(clientes)

console.log(filtrados)