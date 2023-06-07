export default class User {
    //para exporta essas informações, use o npm ini -y (por algum motivo não ta funcionando agora)
    constructor(name, email, birth, role){
        this.#name = name
        // isso aqui (#) serve pra privar dados, uqe não podem ser alterados em outros objetos 
        this.email = email 
        this.birth = birth
        this.role = role = `chiefe`
    }

    exibeinfo(){
        return `${this.name},${this.email}, ${this.birth}`
    }
    privativo (){
        return({
          nome: this.name,
          email: this.email,
        })// essa função priva a alteração dos dados em todos os outros objetos e suas subclasses.
    }
//função getter, nunca recebe um parâmetro e fornecem  o acesso da propriedade marcada fora da classe
//para mais de uma propriedade temos que fazer um "get" para cada.
    get nome(){
      return this.#name
    }
//A função setter permite alterações em um parametro especifico, deve receber somente um parametro
set nome (novonome){
   this.#name = novonome
}
}
//depois pesquisa sobre SOLID, é uma "guia" de classes  que mosta como é bom fazer elas
//CADA CLASSE DEVE SER ESPECIFICA PARA SUA FUNÇÂO.
const newuser = new User (`|Carmine`, `bibilu@gitiu`, `9645`)
console.log(newuser)
console.log(newuser.exibeinfo())

//O do admin seria assim:
// import user form `./Classe_user.js`
//class admin extends user {
//constructor(coloca nome e aquelas coisas la)
//super(nome..)
//}

//mesma coisa da linha 14 so que com adm 
