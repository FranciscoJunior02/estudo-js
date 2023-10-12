//dobre os numeros ]

const numeros = [5, 50, 60, 93, 12, 20, 10];
const numerosEmdrobro = numeros.map(function(valor){
    return `O valor x 2 é ${valor * 2}`;
})

console.log(numerosEmdrobro);



// para cada elemento 
//retorne apenas umas string com o nome da pessoa 
//remova apenas a chave "nome" do objeto 
//adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'claudio', idade: 22},
    { nome: 'Francisco', idade: 51},
    { nome: 'maria', idade: 2},
    { nome: 'ana', idade: 69},
    { nome: 'eduarda', idade: 30}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj){
    return {idade: obj.idade};
});

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};   //Foi copiado o objeto original, para que não tenha modificações nos dados originais, tendo modificações apenas nos dados informandos. 
    newObj.id = indice + 5000;
     return newObj;
});


console.log(nomes);
console.log(idades);
console.log(comIds);
