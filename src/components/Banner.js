import React from 'react';
import { BASE_URLS } from '../api/config';
import { useSelector } from 'react-redux';
import { selectMovieCollections } from '../redux/movieCollectionSlice';
import { truncate } from '../appConfig';

function Banner() {
  const movieCollections = useSelector(selectMovieCollections);

  // get one genre (ex:netflixOriginals) and get a random movie to show in banner
  const collections = movieCollections?.netflixOriginals[0],
    randomMovie =
      collections &&
      collections[Math.floor(Math.random() * collections.length)],
    backgroundImage =
      randomMovie &&
      `url(${BASE_URLS.backdrop_original}${randomMovie?.backdrop_path})`,
    title = (randomMovie && randomMovie?.original_title) || randomMovie?.title,
    overview = randomMovie && truncate(randomMovie?.overview, 150);

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
