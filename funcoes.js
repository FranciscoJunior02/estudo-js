//declaração de função(function hoisting)
function falaoi(){
    console.log('oie');}
falaoi();

// first-class objects(objetos de primeira classe)
//function expression
const souUmdado = function(){
    console.log('Sou um dado.');
}

souUmdado();

// function executafuncao(funcao){
    // console.log('Vou executar sua função abaixo')
    // funcao();
// }

// executafuncao(souUmdado);

//arrow function
const funcaoArrow = () =>{
    console.log('Sou uma Arrow function')
};

funcaoArrow();
//dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...')
    }
};
obj.falar();