function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){
            reject('ERRO')
            return;
        }

        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });

}

// espera('conexão com o bd', rand(1, 3)) 
// .then(resposta => {
//     console.log(resposta);
//     return espera('buscando dados da base', rand(1,3)); 
// })

// .then(resposta =>{
//     console.log(resposta);
//    return espera(2222, rand(1,3));
// }).then(resposta =>{
//     console.log(resposta);
// })
// .catch(e =>{
//     console.log('erro:', e);
// })

// console.log('Isso será exibido antes de qualquer promisse') 


//Promise.all Promise.race Promise.resolve Promise.reject 

const promises = [
    espera('Promise 1', 3000),
    espera('Promise 2', 5000),
    espera('Promise 3', 1000),
];

Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});