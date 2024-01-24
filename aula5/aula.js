class Pessoa{
    nome;
    idade;
    anodenascimento;
  
    constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
      this.anodenascimento = 2024 - idade;
    }
    descrever(){
      console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  
    }
  }
  
  const vitor = new Pessoa('vitor', 25);
  
  const renan = new Pessoa();
  renan.nome = 'renan';
  renan.idade = 30;
  
  
  console.log(vitor);
  console.log(renan);
  
  