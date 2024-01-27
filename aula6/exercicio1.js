/* const multiplicadores = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];
let numero = 2;

for(let i = 0; i < multiplicadores.length; i++){
    let valor = numero * multiplicadores[i];
    console.log(`${numero} x ${multiplicadores[i]} = ${valor}`);
}

*/

/* Numeros pares */ 

const lista = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];

for (let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 == 0){
        console.log(lista[i])
    }
}