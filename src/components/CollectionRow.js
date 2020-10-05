import React, { useState } from 'react';
import { BASE_URLS } from '../api/config';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function CollectionRow({ collections, showPosters }) {
  const [trailerUrl, setTrailerUrl] = useState();
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

  return (
    <div className='movieListRow__movies'>
      {collections.map((collection) =>
        collection.map((movie) => (
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
            alt={movie.title}
            onClick={() => showYoutube(movie.title)}
          />
        ))
      )}

      <div>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={opts}
            className='movieListRow__youTube'
          />
        )}
      </div>
    </div>
  );
}

export default CollectionRow;
