//Podemos tambem guardar funções dentro das chaves de um objeto

const cliente = {
    nome : "Tobias",
    idade : 23,
    conta : 2599.12,
    compra: function (valor) {
        if (valor > this.conta) {
            console.log("Saldo insuficiente para efetuar a compra")
        } else { 
            this.conta -= valor;
            console.log(`Compra realizada. saldo atual: ${this.conta}`)

        }

    }
};

cliente.compra(5000);
