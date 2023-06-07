
const User = {
    Name: "Breno",
    Age: "20",
    Email: "Tobiascreicrei@tals",
    Phone: "3212",
    active: true,
    showInfo: function() {
        console.log(this.Name,this.Age,this.Email,this.Phone)
    }
};

// "exibir" perde vinculo com a constante inicial, por isso necessita da segunda função. ("exibenome")
const exibir = function() {
    console.log(this.Name)
};

const exibenome = exibir.bind(User);
exibenome();
// a connstante "exibenome" ultiliza o metodo "bind" que adere um valor ao "this" em um determinado contexto.

//-------------------------------------------------------------------------------------------------------//

//Alem do metodo "bind" temos o "call" que faz a mesma coisa.

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user)

   // Metodo Apply, faz a mesma coisa mas recebe a ista de argumentos em forma de array

   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user2 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user2, [this.nome, this.email])
    }
   };
    user2.executaFuncao(exibeMensagem); 

    //Herança de prototipo

    const admin = {
    Name: "Homero",
    Age: "80",
    Email: "TT@PPI",
    Phone: "285686",
        cortacabelo () {
            console.log("cabelo cortado")
        }
    }
    Object.setPrototypeOf(admin, User);
    admin.cortacabelo();
    admin.showInfo();
//Ao invez de termos que criar um novo "showinfo" para admin, podemos usar o metodo "Object.setPrototypeOf"
//que seta como prototipo de uso no admin o objetoo criado em User.