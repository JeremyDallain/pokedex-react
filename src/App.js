import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Pokedex from './Pokedex';
import PokemonPage from './pages/PokemonPage';


function App() {
    return (
        <Router>

                <Switch>
                    <Route exact path="/" component={Pokedex} />
                    <Route exact path="/:id" component={PokemonPage} />
                </Switch>
        </Router>
    );
}

export default App;