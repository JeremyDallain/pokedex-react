import React, { useState } from 'react';

//helpers
import formatId from '../helpers/format-id'
import formatFrenchType from '../helpers/format-french-type'
import formatBadgeColorType from '../helpers/format-badge-color-type'

const PokemonCard = ({id, name, type, goToPokemonPage}) => {

   const [borderStyle, setBorderStyle] = useState()

   return (
      <div 
         onClick={() => goToPokemonPage(id)} 
         className="col-12 col-xl-2 col-lg-3 col-md-4 col-sm-6"   
      >
         <div 
            className={`text-center m-2 border ${borderStyle}`}
            style={{cursor: 'pointer'}}
            onMouseEnter={() => setBorderStyle('border-info')} 
            onMouseLeave={() => setBorderStyle('')}
         >
            <div className="pt-3 pb-2 bg-light">
               <img 
                  className="w-50" 
                  src={`/images-pokemon/thumbnails/${formatId(id)}.png`} 
                  alt={name.french}
               />
               <h5>{name.french}</h5>
            </div>            
            <div className="mt-2 mb-3">                           
               <p className="mb-0">No.{formatId(id)}</p>
               {type.map((i, index) => (                              
                  <span className={formatBadgeColorType(i)} key={index}>{formatFrenchType(i)}</span>
               ))}
            </div>
         </div>         
      </div>
   )
}

export default PokemonCard
