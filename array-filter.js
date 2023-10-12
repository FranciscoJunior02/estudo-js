//filter, map, reduce  / filtrar, mapear e reduzir
//filter -> sempre retorna um array com a mesma quantidade de elementos,
//ou menos. 

//retornar os numeros maior de 10 
const numeros = [5, 6, 8, 9, 12, 36, 58, 1, 2];

function callbackFilter(valor){
    if(valor > 10){
        return valor >10;
    }
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);


//Maneira que também é utilizado: 
const numerosFiltrados1 = numeros.filter((valor) =>{
    return valor > 10;
});

console.log(numerosFiltrados1);




//retorne as pessoas que tem o nome com 7 letras ou mais 
//retorne as pessoas com mais de 50 anos 
//retorne as pessoas cujo nome termina com a 

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'claudio', idade: 22},
    { nome: 'Francisco', idade: 51},
    { nome: 'maria', idade: 2},
    { nome: 'ana', idade: 69},
    { nome: 'eduarda', idade: 30}
];

const pessoasNomeGrande = pessoas.filter(function(obj){
    return obj.nome.length >= 7;
});

const Maior50 = pessoas.filter(function(obj){
    if(obj.idade > 50){
        return obj.idade > 50;
    }
});
const nomeTerminacomA = pessoas.filter(obj =>{
    return obj.nome.toLowerCase().endsWith('a');    // toLowercase, todas as letras minusculas, e endsWhit pega a ultima letra da variavel. 
});
console.log(pessoasNomeGrande);
console.log(Maior50);
console.log(nomeTerminacomA);





