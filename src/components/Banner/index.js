import React, { useEffect, useState } from 'react';
import { BASE_URLS } from '../../api/config';
import { useSelector } from 'react-redux';
import { selectMovieCollections } from '../../redux/movieCollectionSlice';
import { truncate } from '../../appUtility';
import { Link } from 'react-router-dom';

import './Banner.scss';

function Banner() {
  const [randomMovie, setRandomMovie] = useState();
  const movieCollections = useSelector(selectMovieCollections);
  const collections = movieCollections?.netflixOriginals[0];

  // get one genre (ex:netflixOriginals) and get a random movie to show in banner
  useEffect(() => {
    const randomCollection =
      collections &&
      collections[Math.floor(Math.random() * collections.length)];
    setRandomMovie(randomCollection);
  }, [collections]);

  //Extract data from object for the component
  const backdropOriginalUrl =
      randomMovie && BASE_URLS.backdrop_original + randomMovie?.backdrop_path,
    backgroundImage = randomMovie && `url(${backdropOriginalUrl})`,
    id = randomMovie && randomMovie?.id,
    title = randomMovie?.title || randomMovie?.original_title,
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
          <Link to={`/movie/${id}`}>
            <button>More Info</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Banner;
