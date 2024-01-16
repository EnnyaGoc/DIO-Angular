const preco = 5.79;
const gasto = 10;
const dist = 100;

const litrosConsumidos = dist / gasto;
const valorGasto = litrosConsumidos * preco;

console.log(valorGasto.toFixed(2)); //converte o valor p texto
