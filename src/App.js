import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './components/Shell';

import Home from './containers/Home';

import './App.scss';

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/movie/:id' exact>
            <h1> I am the movie details</h1>
          </Route>
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
