/**
 * parse the movie collections
 * @param {Object} movie
 */
function movieInfoParser(movie = {}) {
  return parseMovieInfo(movie);
}

/**
 * parse the movie data
 * @param {Object} data
 */
function parseMovieInfo(data = {}) {
  return {
    id: data.id,
    title: data.title,
    original_title: data.original_title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    overview: data.overview,
    homepage: data.homepage,
    vote_count: data.vote_count,
    vote_average: data.vote_average,
    popularity: data.popularity,
    status: data.status,
    release_date: data.release_date,
    revenue: data.revenue,
  };
}

export default movieInfoParser;
