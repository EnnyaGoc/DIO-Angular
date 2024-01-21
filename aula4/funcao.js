function escreverNome(nome) {
    return 'Seu nome é: ' + nome;
}


const nome = 'ana';
console.log(escreverNome(nome));


function verificaIdade(idade){
    if(idade < 18){
        console.log(escreverNome(nome) + ' Menor de idade');
    }
    else
    console.log('Maior de idade');
}

const idade = 15;
verificaIdade(idade);