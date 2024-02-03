
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon){
    return  `
    <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>


            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">


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