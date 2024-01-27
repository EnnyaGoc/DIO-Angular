
function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

/* 
exportando direto
module.exports.gets = gets;
*/

//exportando
module.exports = { 
    gets,
    print
};