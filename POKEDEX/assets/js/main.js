
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}%limit=${limit}`

//para fazer requisiçao fetch
//pra processar o sucesso da promise(response) usa o then
//catch é quando fracassar
//pra fazer operaçao quando a requisiçao terminar usa o finally
//o then de baixo usa o retorno do then de cima
// => sintaxe para reduzir a definiçao de uma funçao
fetch(url).
    then((response) => {
        return response.json()

    })
    .then(function(jsonBody){
        console.log(jsonBody)
    })
    .catch(function(error){
        console.error(error)
    })
    .finally(function () {
        console.log('requisiçao concluida')
    })

