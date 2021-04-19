import React from 'react';

import PokemonLign from '../components/PokemonLign';

const PokedexList = ({pokemons, goToPokemonPage}) => {

   return (
      <div>
         <table className="table text-center">
            <thead>
               <tr>
                  <th>No.</th>
                  <th>Icone</th>
                  <th>Nom</th>
                  <th>Type(s)</th>
               </tr>
            </thead>
            <tbody>
               {pokemons.map(({id, name, type}) => {
                  return (
                     <PokemonLign key={id} id={id} name={name} type={type} goToPokemonPage={goToPokemonPage}/>
                  )
               })}
            </tbody>  
         </table>
      </div>
   )
}

export default PokedexList
