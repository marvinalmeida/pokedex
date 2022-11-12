const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const API_URL = ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

                return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results);
};
