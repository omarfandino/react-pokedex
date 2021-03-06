//Construccion de datos del Pokemon
export const getPokemon = async( pokemon ) => {
    let pokemonData =  {};
    
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI( pokemon ) }`;
        const resp = await fetch( url );
        const statusFetch = resp.status;
        const { id, name, sprites, weight, species: { url: urlSpecie } } = await resp.json();

        pokemonData =  {
            statusFetch,
            id,
            name,
            sprites,
            weight,
            urlSpecie
        };
    } catch( e ) {
        console.error(e)
    }
    
    return pokemonData;
}

//Obtener la "cadena de evolucion"
export const getEvolutionChain = async( urlSpecie ) => {
    let resp = await fetch( urlSpecie );
    const { evolution_chain: { url: urlEvolutionChain } } = await resp.json();

    resp = await fetch( urlEvolutionChain );
    const { chain } = await resp.json();

    //Metodo recursivo para obtener la cadena de evolucion
    let arrayEvolution = await getEvolutionArray( chain );
    
    arrayEvolution = await arrayEvolution.map( async( namePokemon ) => {
        const dataPokemon = await getPokemon( namePokemon );
        return dataPokemon;
    })

    return arrayEvolution;
}

export const getEvolutionArray = ( chain ) => {
    if ( chain.evolves_to.length === 0 ) {
        return [chain.species.name];
    } else {
        const nombrePokemon = chain.species.name;
        const arrayPokemon = getEvolutionArray( chain.evolves_to[0] );

        return [ nombrePokemon, ...arrayPokemon ];
    }
}