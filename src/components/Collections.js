import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { BASE_URLS } from '../api/config';
import './Collections.scss';

function Collections({ title, collectionUrl, showPosters }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(collectionUrl);
      setMovies(request.data.results);
    }
    fetchMovies();
  }, [collectionUrl]);

  // console.log(movies);

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
                : BASE_URLS.backdrop_thumbnailL + movie.backdrop_path
            }
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Collections;

// import React, { Component } from 'react';
// //import { connect } from 'react-redux';

// export const MovieListRow = ({ title }) => {
//   return (
//     <div>
//       <div>
//         <h1>{title}</h1>
//         <div>
//           <img
//             src='https://images-na.ssl-images-amazon.com/images/I/81jf4hBzqwL._AC_SL1500_.jpg'
//             alt=''
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(MovieListRow);
