import React, {useState, useEffect, Fragment} from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

//helpers
import formatId from '../helpers/format-id';
import formatFrenchType from '../helpers/format-french-type';
import formatBadgeColorType from '../helpers/format-badge-color-type';

//data
import PokedexData from '../pokedex.json';

import loader from '../loader.gif'

const PokemonPage = ({match}) => {

   const [pokemon, setPokemon] = useState(null);     

   const history = useHistory();

   useEffect(() => {
      PokedexData.forEach(pokemon => {
         if (match.params.id === pokemon.id.toString()) {
            setPokemon(pokemon);
         }        
      })
   }, [match.params.id]);

   const goToPokemonPageBefore = (id) => {
      history.push(`/${id - 1}`);
   }
   const goToPokemonPageNext = (id) => {
      history.push(`/${id + 1}`);
   }
   const goToPokedexList = () => {
      history.push(`/`);
   }
   
   return (
      <div>
         
         <div className="text-center">
            {
               (pokemon && pokemon.id !== 1) && (
                  <Fragment>
                     <img src={`/images-pokemon/sprites/${formatId(pokemon.id - 1)}MS.png`} alt={pokemon.name.french}/>
                     <button className="btn btn-info m-2 pt-0" onClick={() => goToPokemonPageBefore(pokemon.id)}><FaArrowCircleLeft/></button>
                  </Fragment>                  
               )                  
            }
            {
               (pokemon && pokemon.id !== 151) && (
                  <Fragment>                     
                     <button className="btn btn-info m-2 pt-0" onClick={() => goToPokemonPageNext(pokemon.id)}><FaArrowCircleRight/></button>
                     <img src={`/images-pokemon/sprites/${formatId(pokemon.id + 1)}MS.png`} alt={pokemon.name.french}/>
                  </Fragment>                  
               )                  
            }            
         </div>
         <br/>
         <div className="text-center">
            <p>
               {
                  pokemon ? 
                     <img 
                        className="img-fluid pr-5 pl-5" 
                        src={`/images-pokemon/images/${formatId(pokemon.id)}.png`} 
                        alt={pokemon.name.french}
                     />
                     :
                     <img src={ loader } alt="loader"/>
               }
            </p>
            
            <h2>
               {pokemon && pokemon.name.french}
            </h2>
            <h6>
               No.{pokemon && formatId(pokemon.id)}
            </h6>

            <h4>
               {pokemon && pokemon.type.map((i, index) => (                              
                  <span className={formatBadgeColorType(i)} key={index}>{formatFrenchType(i)}</span>
               ))}
            </h4>
         </div>
         
         <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
               {
                  pokemon && 
                     <ul className="list-group">
                        <li className="list-group-item"><strong>HP :</strong> {pokemon.base.HP}</li>
                        <li className="list-group-item"><strong>Attaque :</strong> {pokemon.base.Attack}</li>
                        <li className="list-group-item"><strong>Défense :</strong> {pokemon.base.Defense}</li>
                        <li className="list-group-item"><strong>Sp. Attaque :</strong> {pokemon.base["Sp. Attack"]}</li>
                        <li className="list-group-item"><strong>Sp. Défense :</strong> {pokemon.base["Sp. Defense"]}</li>
                        <li className="list-group-item"><strong>Speed:</strong> {pokemon.base.Speed}</li>
                     </ul>
               }
            </div>
            <div className="col-2"></div>
         </div>
         <div className="text-center">
            <button className="m-2 btn btn-warning font-weight-bold left-align" onClick={() => goToPokedexList()}>Retour</button>
         </div>     
      </div>
   )
}

export default PokemonPage
