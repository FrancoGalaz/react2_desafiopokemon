import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
    return (
        <div className='nav'>
            <NavLink to='/desafio_3_pokemon_route/'>
                <img className='icon' src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/02/pokemon-logo-and-pokedex.jpg"   rel='icon' alt="icon" />
            </NavLink>
        
            <div className='navBar'>
                <NavLink className={ setActiveClass } to="/desafio_3_pokemon_route/">
                    Inicio
                </NavLink>
                <NavLink className={ setActiveClass } to="/desafio_3_pokemon_route/pokemones">
                    Pokemones
                </NavLink>
            </div>
        </div>
    );
}
