import React, { useState } from 'react'

/* Comonents */
import { Search } from './components/Search'
import { PokemonGrid } from './components/PokemonGrid'
import { EvolutionGrid } from './components/EvolutionGrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const Pokedex = () => {

    // Iniciamos nuestro campo en vacio
    const [inputPokemon, setInputPokemon] = useState(4);

    return (
        <div className="container">
            <Search setInputPokemon={ setInputPokemon } />
            <Router>
                <Switch>
                    <Route path="/evolucion/:id">
                        <EvolutionGrid />
                    </Route>
                    <Route path="/">
                        <PokemonGrid pokemon={ inputPokemon } />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
