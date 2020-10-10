const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const BASE_URLS = {
  api: 'https://api.themoviedb.org/3',
  backdrop_thumbnailL: 'http://image.tmdb.org/t/p/w250_and_h141_face',
  backdrop_original: 'http://image.tmdb.org/t/p/original',
  poster_thumbnail: 'http://image.tmdb.org/t/p/w220_and_h330_face',
};

const GENRE_IDS = {
  action: '28',
  animation: '16',
  bestDrama: '18',
  comedy: '35',
  documentary: '99',
  horror: '27',
  war: '10752',
};

const NETWORK_IDS = {
  netflixOriginals: '213',
};

const requests = {
  netflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=${NETWORK_IDS.netflixOriginals}`,
  drama: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.bestDrama}`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.action}`,
  animation: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.animation}`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.documentary}`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.horror}`,
  war: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_IDS.war}`,
};

export { BASE_URLS, API_KEY };
export default requests;
