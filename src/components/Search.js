import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Search = ({ setInputPokemon }) => {

    const history = useHistory();
    // Iniciamos el campo Input
    const [inputSearch, setInputSearch] = useState('');
    
    // Guardamos el valor que ingresa por el campo de busqueda
    const handleInputValue = (e) => {
        setInputSearch( e.target.value.toLowerCase() );
    };
    
    // Guardamos el valor en la variable inputPokemon 
    const handleInputPokemon = (e) => {
        e.preventDefault();
        
        if( inputSearch.trim().length !== 0 ) {
            setInputPokemon( inputSearch );
            setInputSearch('');
            history.push('/');
        }
    };

    return (
        <form onSubmit={ handleInputPokemon } className="input-group mt-5 mb-5">
            <input onChange={ handleInputValue } value={ inputSearch }
                className="form-control" list="datalistOptions"
                placeholder="Busca un Pokémon..." />
            <button onClick={ handleInputPokemon } className="btn btn-outline-secondary">Buscar</button>
            <datalist id="datalistOptions">
                <option value="Pikachu" />
                <option value="Bulbasaur" />
                <option value="Charmander" />
                <option value="Squirtle" />
                <option value="Mew" />
            </datalist>
        </form>
    );
};