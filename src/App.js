import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './components/Shell';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Collections from './components/Collections';
import Footer from './components/Footer';
import { genres } from './appConfig';

import './App.scss';

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Banner />
            {genres.map((genre, i) => (
              <Collections
                key={genre.genre}
                genre={genre.genre}
                title={genre.title}
                collectionUrl={genre.collectionUrl}
                showPosters={genre.showPosters}
              />
            ))}
          </Route>
          <Route path='/movie/:id' exact>
            <h1> I am the movie details</h1>
          </Route>
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
