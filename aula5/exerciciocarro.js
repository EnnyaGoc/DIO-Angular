class Carro{
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    calculaValor(km, preco){
        
        const qtd= km * this.gastoCombustivel; 
        const valor = preco * qtd; 
        return valor;
    }
}

const carro1 = new Carro('marca1', 'azul', 0.1);
const carro2 = new Carro('marca2', 'vemelho', 0.4)

console.log(carro1.calculaValor(70, 5));
console.log(carro2.calculaValor(90, 5));