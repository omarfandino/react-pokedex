import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonItem = ({ statusFetch, id, name, sprites, weight, mostrarCadena }) => {
    return (
        <div className="card">
            {
                statusFetch === 200 ?
                (<div className="row g-0">
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
                            { 
                                mostrarCadena && <Link className="btn btn-outline-secondary" to={`/evolucion/${ id }`}>Evoluciones</Link>
                            }
                        </div>
                    </div>
                </div>) :
                (<div className="row">
                    <div className="card-body p-5">
                        <h5 className="card-title">Pokémon no encontrado</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Por favor intente con otro ID o Nombre de Pokémon</h6>
                    </div>
                </div>)
            }
        </div>
    )
}