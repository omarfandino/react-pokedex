import React, { useEffect, useState } from 'react'
import { PokemonItem } from './PokemonItem'
import { getPokemon } from '../services/getPokemon';

export const PokemonGrid = ({ pokemon }) => {
    
    const [pokemonInfo, setPokemonInfo] = useState('');

    //Renderizar despues de montar el componente
    useEffect(() => {
        getPokemon( pokemon ).then( setPokemonInfo );
    }, [pokemon]);

    return (
        <div className="card-group">
            {
                pokemonInfo && <PokemonItem { ...pokemonInfo } mostrarCadena={ true } />
            }
        </div>
    )
}