import React, { useEffect, useState } from 'react';
import { BASE_URLS } from '../../api/config';
import { useSelector } from 'react-redux';
import { selectMovieCollections } from '../../redux/movieCollectionSlice';
import { truncate } from '../../appUtility';
import { Link } from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import TrailerBox from '../../components/TrailerBox';
import { ytOptsBanner } from '../../appConfig';

import './Banner.scss';

function Banner() {
  const [trailerUrl, setTrailerUrl] = useState();
  const [randomMovie, setRandomMovie] = useState();
  const movieCollections = useSelector(selectMovieCollections);
  const collections = movieCollections?.action[0];

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

  //handle onclick, Youtube
  const showYoutube = (title) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(title)
        .then((url) => {
          const queryStrings = new URL(url).search;
          const urlParams = new URLSearchParams(queryStrings);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

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
        <div className={`banner__contents ${trailerUrl ? 'ytActive' : ''}`}>
          <h1>{title}</h1>
          <div className='banner__description'>{overview}</div>
          <div className='banner__buttons'>
            <button onClick={() => showYoutube(title)}>
              {!trailerUrl ? 'Play' : 'Close'}
            </button>
            <Link to={`/movie/${id}`}>
              <button>More Info</button>
            </Link>
          </div>
        </div>
      </div>
      {trailerUrl && (
        <TrailerBox
          className='banner__youTube'
          trailerUrl={trailerUrl}
          opts={ytOptsBanner}
        />
      )}
    </header>
  );
}

export default Banner;
