import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { BASE_URLS } from '../api/config';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Collections.scss';

function Collections({ title, collectionUrl, showPosters }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(collectionUrl);
      setMovies(request.data.results);
    }
    fetchMovies();
  }, [collectionUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const showYoutube = (title) => {
    movieTrailer(title)
      .then((url) => {
        const queryStrings = new URL(url).search;
        const urlParams = new URLSearchParams(queryStrings);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
  };

  // console.table(movies);

  return (
    <div className='movieListRow'>
      <h2>{title}</h2>
      <div className='movieListRow__movies'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${
              showPosters ? 'poster' : 'backdrop'
            } movieListRow__movie`}
            src={
              showPosters
                ? BASE_URLS.poster_thumbnail + movie.poster_path
                : BASE_URLS.backdrop_thumbnailL +
                  (movie.backdrop_path
                    ? movie.backdrop_path
                    : movie.poster_path)
            }
            alt={movies.name}
            onClick={() => showYoutube(movie.title)}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={opts}
          className='movieListRow__youTube'
        />
      )}
    </div>
  );
}

export default Collections;
