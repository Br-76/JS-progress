//O new tem a função de criar instacias de objetos
//Metos com construtuores

function User(nome,sexo) {
    this.nome = nome;
    this.sexo = sexo;

    this.exibeinfo = function() {
        return `${this.nome}, ${this.sexo}`
    }
}

const outrousas = new User(`Junim`, `Helicoptero de ataque MI28N`)
console.log(outrousas.exibeinfo())

console.log(`||____________________________________________________________________||`);

function Adim(role) {
User.call(this, `Tebotal`,`T-90A2M3`);
this.role = role || `Estudante`;
}

Adim.prototype = Object.create(User.prototype);
const novousu = new Adim(`Disco`);
console.log(novousu.exibeinfo());
console.log(novousu.role);
// Isso aqui ^ não é muito usado no mercado, é mais pela aula memo

//Metodo Com objetos

console.log(`|__________________________________________________________________________|`);

const ser = {
    init: function(nome, sexo){
        this.nome = nome;
        this.sexo = sexo; 
    },
    exibirif: function(){
        return this.nome 
    }

}

const novotit = Object.create(ser)
novotit.init(`Teobaldo`, `Bt`)
console.log(novotit.exibirif())


