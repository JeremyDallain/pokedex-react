import React, { Fragment, useState } from 'react';

//helpers
import formatId from '../helpers/format-id'
import formatFrenchType from '../helpers/format-french-type'
import formatBadgeColorType from '../helpers/format-badge-color-type'

const PokemonLign = ({id, name, type, goToPokemonPage}) => {

   const [bgColor, setBgColor] = useState('');

   return (
      <Fragment>
         <tr 
            onClick={() => goToPokemonPage(id)} 
            onMouseEnter={() => setBgColor('bg-light')} 
            onMouseLeave={() => setBgColor('')}
            className={bgColor}
            style={{cursor: 'pointer'}}
         >
            <td>{formatId(id)}</td>
            <td><img src={`/images-pokemon/sprites/${formatId(id)}MS.png`} alt={name.french}/></td>
            <td>{name.french}</td>
            <td>
               {type.map((i, index) => (                              
                  <span className={formatBadgeColorType(i)} key={index}>{formatFrenchType(i)}</span>
               ))}
            </td>
         </tr>
      </Fragment>
   )
}

export default PokemonLign
