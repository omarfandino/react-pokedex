import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEvolutionChain, getPokemon } from '../services/getPokemon';
import { PokemonItem } from './PokemonItem';

export const EvolutionGrid = () => {

    const { id: pokeEvol } = useParams();

    const [pokemonEvolution, setPokemonEvolution] = useState([]);

    //Renderizar despues de montar el componente
    useEffect(() => {
        setPokemonEvolution([])
        getPokemon( pokeEvol ).then( pokemonData => {
            getEvolutionChain( pokemonData.urlSpecie )
            .then( arrayPromise => {
                arrayPromise.map( pokemonPromise => { 
                    pokemonPromise.then( pokemonResolve => {
                        setPokemonEvolution( pokemonEvolut => [...pokemonEvolut, pokemonResolve] )
                    })
                })
            })
        });
    }, [pokeEvol]);

    return (
        <div className="card-group">
            {
                pokemonEvolution.length !== 0 && pokemonEvolution.map( pokemonData => {
                    return (
                        <PokemonItem
                            key={ pokemonData.id }
                            { ...pokemonData }
                        />
                    )
                })
            }
        </div>
    )
}