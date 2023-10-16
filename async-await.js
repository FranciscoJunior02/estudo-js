function rand(min = 0, max = 3){
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

// espera('fase 1', rand(0, 3))
// .then(valor => {
//     console.log(valor);
//     return espera('fase 2', rand());
// })

// .then(fase => {
//     console.log(fase);
//     return espera('fase 3', rand());
    
// }).then(fase =>{
//     console.log(fase);
// })

// .catch(e => console.log(e));

async function executa(){
    try{
        const fase1 = await espera('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await espera('fase 2', rand());
        console.log(fase2);
    
        const fase3 = await espera('fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase', fase3);
    }catch(e){
        console.log(e);
    }
}

executa();


// Pendente  -> resolvida - > reject 