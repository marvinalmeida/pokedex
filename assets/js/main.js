const offset = 0;
const limit = 12;

const API_URL = ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `  
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}"/>
                    
                </div>
            </li>
           
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi
  .getPokemons()
  .then((pokemons) => {
    console.log(pokemons);
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }
  })
  .catch((e) => console.error(e));
