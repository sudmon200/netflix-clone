import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Collections from './components/Collections';
import { genres } from './appConfig';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Nav />
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
    </div>
  );
}

export default App;
