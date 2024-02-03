


function convertPokemonToHtml(pokemon){
    return  `
    <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>


            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

            <img src="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-HD-Quality.png" alt="${pokemon.name}">


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