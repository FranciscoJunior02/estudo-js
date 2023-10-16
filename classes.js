class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome  = sobrenome;
    }
    falar(){
        console.log(`${this.nome} ESTÁ FALANDO`)
    }
    comer(){
        console.log(`${this.nome} ESTÁ COMENDO`)
    }
    beber(){
        console.log(`${this.nome} ESTÁ BEBENDO`)
    }
    andar(){
        
    }
}

const p1 = new Pessoa('Francisco', 'Junior');
const p2 = new Pessoa('ANTONIO', 'Junior');
const p3 = new Pessoa('QUEIROZ', 'Junior');

console.log(p1);
console.log(p2);
console.log(p3.falar());