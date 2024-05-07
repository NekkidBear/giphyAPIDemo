function getPokemonData(pokemonDuJour) {
  axios({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonDuJour}`,
  })
    .then((res) => {
      const pokeDex = res.data;
      console.log(pokeDex);
      document.getElementById("pokedexInfo").innerHTML = `
        <h4>Name: ${pokeDex.name}</h4>
        <img src="${pokeDex.sprites.front_default}"/>`;
    })
    .catch((error) => {
      console.log("There was an error retrieving data. ", error);
    });
}

function getGiphyData(pokemonDuJour) {
  axios({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?q="${pokemonDuJour}"+pokemon&limit=3&rating=g&api_key=xczXfI0xg1pUWwh4W7vfmOOtQDb5N2KA`,
  }).then((res) => {
    const giphy = res.data;
    console.log(giphy);
    document.getElementById("giphy").innerHTML = `
    <img src=${giphy.data[0].images.original.url} />
    <img src=${giphy.data[1].images.original.url} />
    <img src=${giphy.data[2].images.original.url} />`;
  });
}

function getPokedexDataAndGIFs() {
  const pokemonDuJour = document.getElementById("pokeName").value;
  getPokemonData(pokemonDuJour);
  getGiphyData(pokemonDuJour);
}
