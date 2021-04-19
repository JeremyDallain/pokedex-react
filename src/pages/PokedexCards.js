import React from 'react';

import PokemonCard from '../components/PokemonCard';


const PokedexCards = ({pokemons, goToPokemonPage}) => {

   return (
      <div className="container-fluid">
         <div className="row no-gutters">
            {pokemons.map(({id, name, type}) => {
               return (
                   <PokemonCard key={id} id={id} name={name} type={type} goToPokemonPage={goToPokemonPage}/>    
               )
            })}               
         </div>
      </div>
      
   )
}

export default PokedexCards
