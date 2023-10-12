//some todos os numeros(reduce)
//retorne um array com os pares(filter)
//retorne um array com o dobro dos valores(map)


//reduce basicamente é utilizado consiste em reduzir o array a um unico elemento 

const numeros = [5, 50, 60, 93, 12, 20, 10,15];
const total = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(total);


//retorne a pessoa mais velha 
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'claudio', idade: 22},
    { nome: 'Francisco', idade: 51},
    { nome: 'maria', idade: 2},
    { nome: 'ana', idade: 69},
    { nome: 'eduarda', idade: 70}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(maisVelha);





