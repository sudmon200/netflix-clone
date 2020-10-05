import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovieInfo, setMovieInfo } from '../../redux/movieInfoSlice';
import { fetchMovieInfo } from '../../redux/actions';
import { BASE_URLS } from '../../api/config';
import { useParams } from 'react-router-dom';
import MovieInfoHeader from '../../components/MovieInfoHeader';

import './MovieInfo.scss';

function MovieInfo() {
  const { id } = useParams();
  const movieInfo = useSelector(selectMovieInfo);
  const dispatch = useDispatch();
  console.log('===>', id);

  const apiUrl = `movie/${id}?api_key=081dd474dce4fdd2c4a2704b80ef58cf`;
  //Dispatch & Update Store
  useEffect(() => {
    fetchMovieInfo(apiUrl).then(function (result) {
      dispatch(
        setMovieInfo({
          movieInfo: result,
        })
      );
    });
    return () => {
      console.log('unmount....');
    };
  }, [dispatch]);

  const backgroundImageUrl =
    BASE_URLS.backdrop_original + movieInfo.backdrop_path;

  return (
    <div
      className='movieInfo'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'top center',
      }}
    >
      <div className='movieInfo__wrapperBg'>
        <MovieInfoHeader movieInfo={movieInfo} />
      </div>
    </div>
  );
}

export default MovieInfo;
