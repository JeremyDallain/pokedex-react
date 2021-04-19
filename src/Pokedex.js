import React, {useState, useEffect, Fragment} from 'react';
import { useHistory } from 'react-router-dom';

//data
import PokedexData from './pokedex.json';

//style
import './pokedex.css';

//components
import PokedexList from './pages/PokedexList';
import PokedexCards from './pages/PokedexCards';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  const [listSort, setListSort] = useState(true);
  const activeList = listSort ? 'active' : '';
  const activeCards = listSort ? '' : 'active';

  const history = useHistory();

  useEffect(() => {
    setPokemons(PokedexData);
  }, []);

  const goToPokemonPage = (id) => {
    history.push(`/${id}`);
  }

  return (
      <Fragment>
        <h1 className="text-center">Pokédex</h1>

        <br/>

        <div className="text-center">
          affichage par :
          <button
              className={`btn ${activeList} btn-sm btn-outline-secondary m-2`}
              onClick={() => setListSort(true)}>
            Liste
          </button>
          <button
              className={`btn ${activeCards} btn-sm btn-outline-secondary m-2`}
              onClick={() => setListSort(false)}>
            Cartes
          </button>
        </div>
        {
          listSort
              ?
              <PokedexList pokemons={pokemons} goToPokemonPage={goToPokemonPage}/>
              :
              <PokedexCards pokemons={pokemons} goToPokemonPage={goToPokemonPage}/>
        }
      </Fragment>
  )
}

export default Pokedex;
