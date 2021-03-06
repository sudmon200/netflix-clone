import React, { useState } from 'react';
import { BASE_URLS } from '../../api/config';
import TrailerBox from '../../components/TrailerBox';
import movieTrailer from 'movie-trailer';
import { ytOpts } from '../../appConfig';

import './CollectionRow.scss';

function CollectionRow({ collections, showPosters }) {
  const [trailerUrl, setTrailerUrl] = useState();

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
    <div>
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
      </div>
      {trailerUrl && (
        <TrailerBox
          className='movieListRow__youTube'
          trailerUrl={trailerUrl}
          opts={ytOpts}
        />
      )}
    </div>
  );
}

export default CollectionRow;
