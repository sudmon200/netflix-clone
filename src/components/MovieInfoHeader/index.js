import React from 'react';
import { BASE_URLS } from '../../api/config';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarsIcon from '@material-ui/icons/Stars';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

function MovieInfoHeader({ movieInfo }) {
  const title = movieInfo.title || movieInfo.original_title,
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
          {movieInfo.vote_average > 7 ? (
            <TrendingUpIcon style={{ color: '#33FF3F' }} />
          ) : (
            <TrendingDownIcon style={{ color: '#E50A13' }} />
          )}
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
