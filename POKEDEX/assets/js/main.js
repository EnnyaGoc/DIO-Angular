



function convertPokemonToHtml(pokemon){
    return  `
    <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>


            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type" ${type}>${type}</li>`).join('')}
                </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">


            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')



 
pokeApi.getPokemons().then((pokemons = []) => {
    
    //no map eu posso passar uma funçao q transforma um elemento em outro
    //essa funçao vai transformar o pokemon num html
    //join junta todos os elementos da lista em uma string 
    //incrementando o item no html
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
   

}) 