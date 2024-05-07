function getPokemonDataAndGIFs()
    let pokemonDuJour = document.getElementById("pokeName").value;
    const pokeDex = axios({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonDuJour}`
    })
    const giphyData = axios({
        method: "GET",
        url: `api.giphy.com/v1/gifs/search?api_key=xczXfI0xg1pUWwh4W7vfmOOtQDb5N2KA&q=${pokemonDuJour}&limit=3&rating=g`
    })
    .then((res)=>{

        document.getElementById("pokedexInfo").innerHTML = `
        <h4>Name: ${pokeDex.name}</h4>
        <img src="${pokeDex.sprites.front_default}/>`
        document.getElementById("giphy").innerHTML = `
        ${giphyData}`
    })