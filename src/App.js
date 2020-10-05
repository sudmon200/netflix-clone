import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Collections from './components/Collections';
import config from './api/config';

import './App.scss';

function App() {
  const genres = [
    {
      genre: 'netflixOriginals',
      title: 'Netflix Originals',
      collectionUrl: config.netflixOriginals,
      showPosters: true,
    },
    {
      genre: 'animation',
      title: 'Animation Movies',
      collectionUrl: config.animation,
      showPosters: false,
    },
    {
      genre: 'action',
      title: 'Action Movies',
      collectionUrl: config.action,
      showPosters: false,
    },
    {
      genre: 'documentary',
      title: 'Documentary',
      collectionUrl: config.documentary,
      showPosters: false,
    },
  ];

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
