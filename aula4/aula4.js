function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'abaixo do peso';
    }
    else
    if(imc >= 18.5){
        return 'peso normal';
    }
}


(function () {
const peso = 75;
const altura = 1.75;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
})();



