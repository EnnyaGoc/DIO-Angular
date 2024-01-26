const notas = [5, 7, 8, 2, 5 ,8];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

console.log(soma/notas.length)