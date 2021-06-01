import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Pokedex from './Pokedex';
import PokemonPage from './pages/PokemonPage';


function App() {
    return (
        <Router>
            <div className="container">
                <div className="text-center">
                    <h1>
                        <img
                            className="w-50"
                            src={`/images-pokemon/pokedex.png`}
                            alt="pokedex"
                        />
                    </h1>
                </div>
                <Switch>
                    <Route exact path="/" component={Pokedex} />
                    <Route exact path="/:id" component={PokemonPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;