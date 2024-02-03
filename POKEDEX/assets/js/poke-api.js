


const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return  fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}%limit=${limit}`



//para fazer requisiçao fetch
//pra processar o sucesso da promise(response) usa o then
//catch é quando fracassar
//pra fazer operaçao quando a requisiçao terminar usa o finally
//o then de baixo usa o retorno do then de cima
// => sintaxe para reduzir a definiçao de uma funçao
    return fetch(url)
    //convertendo o response p json
        .then((response) => response.json())
        //o json vem cm muitos detalhes, oq interesse sao só os resultados
        .then((jsonBody) => jsonBody.results)
        //a lista de pokemons vaa ser mapeada em uma lista de requisiçao dos detalhes d epokemons qé um novo fetch pra url do pokemon, e convertendo a resposta em json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        //espérando q todas as requisiçoes da lista terminem
        .then((detailRequests) => Promise.all(detailRequests))
        //quando terminar, vai exibir a lista de detalhes
        .then((pokemonsDetails) => pokemonsDetails)
       
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



