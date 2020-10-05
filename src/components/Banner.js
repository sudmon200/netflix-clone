import React from 'react';
import { BASE_URLS } from '../api/config';
import { useSelector } from 'react-redux';
import { selectMovieCollections } from '../redux/movieCollectionSlice';

function Banner() {
  const movieCollections = useSelector(selectMovieCollections);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const collections = movieCollections?.netflixOriginals[0];
  const randomMovie =
    collections && collections[Math.floor(Math.random() * collections.length)];

  const backgroundImage =
    randomMovie &&
    `url(${BASE_URLS.backdrop_original}${randomMovie?.backdrop_path})`;
  const title =
    (randomMovie && randomMovie?.original_title) || randomMovie?.title;
  const overview = randomMovie && truncate(randomMovie?.overview, 150);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: backgroundImage,
        backgroundPosition: 'top center',
      }}
    >
      <div className='banner_container'>
        <div className='banner__contents'>
          <h1>{title}</h1>
          <div className='banner__description'>{overview}</div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
