/**
 * parse the movie collections
 * @param {Array} movies
 */
function movieCollectionParser(movies = []) {
  return movies.map(parseMovies);
}

/**
 * parse the movie data
 * @param {Object} data
 */
function parseMovies(data = {}) {
  return {
    id: data.id,
    title: data.title,
    original_title: data.original_title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    overview: data.overview,
  };
}

export default movieCollectionParser;
