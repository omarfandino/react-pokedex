import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEvolutionChain, getPokemon } from '../services/getPokemon';
import { PokemonItem } from './PokemonItem'

export const EvolutionGrid = () => {

    const { id: pokeEvol } = useParams();

    const [pokemonEvolution, setPokemonEvolution] = useState([]);

    //Renderizar despues de montar el componente
    useEffect(() => {
        getPokemon( pokeEvol ).then( pokemonData => {
            getEvolutionChain( pokemonData.urlSpecie ).then( setPokemonEvolution )
        });
    }, [pokeEvol]);

    return (
        <div className="card-group">
            {
                pokemonEvolution.length !== 0 && pokemonEvolution.map( pokProm =>
                    pokProm.then( pokemonito => {
                        console.log ( pokemonito )
                        return (
                            <PokemonItem
                                key={ pokemonito.id }
                                { ...pokemonito }
                            />
                        )
                    })
                )
            }
        </div>
    )
}