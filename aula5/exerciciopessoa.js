class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc() {
        const imc = this.peso / (this.altura * this.altura)
        return imc;
    }

        classificarImc() {
          const imc =  this.valorImc();
    if (imc < 20) {
        return (`Seu imc é de ${imc} e vc esta muito magro`);
    }
    else
        return (`Seu imc é de ${imc} e vc esta no peso ideal`);
}
}

const pessoa1 = new Pessoa('José', 70, 1.75);
const pessoa2 = new Pessoa('renan', 63, 1.75);

console.log(pessoa1.valorImc());
console.log(pessoa2.valorImc());

console.log(pessoa1.classificarImc());
console.log(pessoa2.classificarImc());
