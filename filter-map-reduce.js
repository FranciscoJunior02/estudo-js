//retorne a soma do dobro de todos os pares
// filtrar os pares
// dobrar os valores
// reduzir(somar tudo)


const numeros = [5,50,30,33,36,39,20,22,20];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});

console.log(numerosPares);