import React from 'react';
import { BASE_URLS } from '../../api/config';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarsIcon from '@material-ui/icons/Stars';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

function MovieInfoHeader({ movieInfo }) {
  const title = movieInfo.title || movieInfo.original_title,
    backgroundImageUrl = BASE_URLS.backdrop_original + movieInfo.backdrop_path,
    posterImageUrl = BASE_URLS.poster_thumbnail + movieInfo.poster_path;

  return (
    <div className='movieInfo__wrapper'>
      <div className='movieInfo__thumbnail'>
        <img src={posterImageUrl} alt='' />
      </div>
      <div className='movieInfo__contents'>
        <h1>
          {title}
          <span className='movieInfo__releaseDate'>
            ({new Date().getFullYear(movieInfo.release_date)})
          </span>
          <TrendingUpIcon style={{ color: '#33FF3F' }} />
        </h1>
        <div className='movieInfo__stats'>
          <div>
            <span>User Rating:</span> {movieInfo.vote_average}/10
          </div>
          <div>
            <span>Total Votes: </span>
            {movieInfo.vote_count}
          </div>
          <FavoriteIcon />
          <StarsIcon />
          <PlaylistAddIcon />
        </div>
        <div className='movieInfo__description'>{movieInfo.overview}</div>
        <button>Play</button>
      </div>
    </div>
  );
}

export default MovieInfoHeader;
