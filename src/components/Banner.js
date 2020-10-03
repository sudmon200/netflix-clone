import React, { useState, useEffect } from 'react';
import requests from '../api/config';
import axios from '../api/axios';
import { BASE_URLS } from '../api/config';

const getBannerFrom = requests.fetchNetflixOriginals;

function Banner() {
  const [movies, setMovies] = useState([]);

  //One random movie from the collections (netflix originals)
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(getBannerFrom);
      const collections = request.data.results;
      const getRandomMovieFromCollections =
        collections &&
        collections[Math.floor(Math.random() * collections.length)];
      setMovies(getRandomMovieFromCollections);
    }
    fetchMovies();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  console.table(movies);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${BASE_URLS.backdrop_original}${movies?.backdrop_path})`,
        backgroundPosition: 'top center',
      }}
    >
      <div className='banner_container'>
        <div className='banner__contents'>
          <h1>{movies?.original_title || movies?.title}</h1>
          <div className='banner__description'>
            {movies?.overview ? truncate(movies?.overview, 150) : null}
          </div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
