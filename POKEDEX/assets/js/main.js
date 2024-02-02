


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



 
pokeApi.getPokemons().then((pokemons) => {
    const listItems = []
//no map eu posso passar uma funçao q transforma um elemento em outro
    pokemons.map[]
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItems.push(convertPokemonToHtml(pokemon))

        }
//incrementando o item no html
            pokemonList.innerHTML += 
        
    })
    .catch((error) => console.error(error))
    
