import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovieInfo, setMovieInfo } from '../../redux/movieInfoSlice';
import { fetchMovieInfo } from '../../redux/actions';
import { BASE_URLS } from '../../api/config';
import { useParams } from 'react-router-dom';
import MovieInfoHeader from '../../components/MovieInfoHeader';
import { API_KEY } from '../../api/config';

import './MovieInfo.scss';

function MovieInfo() {
  const { id } = useParams();
  const movieInfo = useSelector(selectMovieInfo);
  const dispatch = useDispatch();

  const apiUrl = `movie/${id}?api_key=${API_KEY}`;
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
  }, [apiUrl, dispatch]);

  const backgroundImageUrl =
    BASE_URLS.backdrop_original + movieInfo.backdrop_path;

  return (
    <div className='movieInfo'>
      <div
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
      <div className='movieInfo__review'>
        <h3>Dummy Text Review</h3>
        <p>
          Ambition is important in film making and it is always reassuring to
          see film-makers pushing as hard as they can against their budgets to
          produce something creative and dynamic. Unfortunately those behind
          Money Plane found themselves somewhat defeated by lack of funds. Their
          name actors including Kelsey Grammar, Denise Richards and Thomas Jane
          all look like they did a single day’s filming at individual locations.
          Like a number of Bruce Willis’ recent films the leads have their
          scenes spread across the movie but over relatively few scenes and
          single locations to make their involvement appear... read the rest.
        </p>
        <br />
        <h3>Dummy Text Review</h3>
        <p>
          Ambition is important in film making and it is always reassuring to
          see film-makers pushing as hard as they can against their budgets to
          produce something creative and dynamic. Unfortunately those behind
          Money Plane found themselves somewhat defeated by lack of funds. Their
          name actors including Kelsey Grammar, Denise Richards and Thomas Jane
          all look like they did a single day’s filming at individual locations.
          Like a number of Bruce Willis’ recent films the leads have their
          scenes spread across the movie but over relatively few scenes and
          single locations to make their involvement appear... read the rest.
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;
