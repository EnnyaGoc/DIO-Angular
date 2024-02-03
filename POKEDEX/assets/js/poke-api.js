


const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}%limit=${limit}`



//para fazer requisiçao fetch
//pra processar o sucesso da promise(response) usa o then
//catch é quando fracassar
//pra fazer operaçao quando a requisiçao terminar usa o finally
//o then de baixo usa o retorno do then de cima
// => sintaxe para reduzir a definiçao de uma funçao
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        
        .catch((error) => console.error(error))
}
//o fetch em cima traz a lista de pokemons, e embaixo transforma a lista em novas requisiçoes

//esse promise espera q todas as promesas terminem, e qndo terminar, chama o then
Promise.all([
  fetch(`https://pokeapi.co/api/v2/pokemon/1`),
  fetch(`https://pokeapi.co/api/v2/pokemon/2`),
  fetch(`https://pokeapi.co/api/v2/pokemon/3`),
  fetch(`https://pokeapi.co/api/v2/pokemon/4`),
  fetch(`https://pokeapi.co/api/v2/pokemon/5`),

]).then((results) => {
    console.log(results)
})


