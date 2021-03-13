import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonItem = ({ id, name, sprites, weight }) => {
    console.log( id, name );
    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ sprites.front_default } className="card-img-top" alt={ name } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <b>ID: </b> { id } <br />
                            <b>Peso: </b> { weight }
                        </h6>
                        <Link to={`/evolucion/${ id }`}>Cadena</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}