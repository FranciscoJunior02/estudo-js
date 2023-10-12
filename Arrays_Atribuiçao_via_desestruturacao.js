function teste (){
let a = 'a'; //b
let b = 'b'; //c
let c = 'c'; //a

const letras = [b, c,a];
[a, b, c] = letras;

console.log(a,b,c);
console.log(teste);

}

function teste1 (){
// ... rest pega o resto ... spread divide na metade
const numeros = [1000,2000,3000,4000,5000,600,700,80,90];
const [um,, ] = numeros;
console.log(um, dois, tres);

}


const pessoa = {
    nome: 'Francisco',
    sobrenome: 'Junior',
    idade: '21',
    endereco: {
        rua: 'Aniz Nassif',
        numero: 320
    }

};
    // atribuição via desestruturação, nesse exemplo ta chamando uma variavel
    //de dentro de um objeto ,e solicitando para mostrar a mesma. 
const {nome, ...resto} = pessoa; 
console.log(nome, resto)
