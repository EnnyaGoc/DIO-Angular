
//shift + alt + f para identar

class Pessoa {
  nome;
  idade;
  anodenascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anodenascimento = 2024 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)

  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velha que ${p2.nome}`);
  }
  else
    if (p2.idade > p1.idade){
      console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }
    else{
      console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
  }

const vitor = new Pessoa('vitor', 25);
const renan = new Pessoa('renan', 30);

compararPessoas(vitor, renan);