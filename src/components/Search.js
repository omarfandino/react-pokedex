import React, { useState } from 'react';
import { Redirect } from 'react-router';

export const Search = ({ setInputPokemon }) => {

    // Iniciamos el campo Input
    const [inputSearch, setInputSearch] = useState('');
    
    // Guardamos el valor que ingresa por el campo de busqueda
    const handleInputValue = (e) => {
        setInputSearch( e.target.value );
    };
    
    // Guardamos el valor en la variable inputPokemon 
    const handleInputPokemon = (e) => {
        e.preventDefault();
        
        if( inputSearch.trim().length !== 0 ) {
            setInputPokemon( inputSearch );
            setInputSearch('');
            return <Redirect to="/" />
        }

    };

    return (
        <form onSubmit={ handleInputPokemon } className="input-group mt-5 mb-5">
            <input onChange={ handleInputValue } value={ inputSearch }
                className="form-control" list="datalistOptions"
                placeholder="Busca un Pokémon..." />
            <button onClick={ handleInputPokemon } className="btn btn-outline-secondary">Button</button>
            <datalist id="datalistOptions">
                <option value="Pikachu" />
                <option value="Bulbasaur" />
                <option value="Charmander" />
                <option value="Squirtle" />
            </datalist>
        </form>
    );
};