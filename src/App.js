import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './components/Shell';
import Home from './containers/Home';
import MovieInfo from './containers/MovieInfo';

import './App.scss';

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/movie/:id' component={MovieInfo}></Route>
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
