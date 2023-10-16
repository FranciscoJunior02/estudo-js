class Controleremoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }


aumentarVolume(){
    this.volume += 2;
}

diminuirVolume(){
    this.volume -= 2;
 }
 //método estático
static soma(x,y){
    return x + y;
 }

}

const controle1 = new Controleremoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

console.log(Controleremoto.soma(2,4));