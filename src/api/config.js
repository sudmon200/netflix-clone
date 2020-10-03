const API_KEY = '081dd474dce4fdd2c4a2704b80ef58cf';

const BASE_URLS = {
  api: 'https://api.themoviedb.org/3',
  backdrop_thumbnailL: 'http://image.tmdb.org/t/p/w250_and_h141_face',
  backdrop_original: 'http://image.tmdb.org/t/p/original',
  poster_thumbnail: 'http://image.tmdb.org/t/p/w220_and_h330_face',
};

const GENRE_ID = {
  action: '28',
  animation: '16',
  bestDrama: '18',
  comedy: '35',
  documentary: '99',
  horror: '27',
  war: '10752',
};

const NETWORK_ID = {
  netflixOriginals: '213',
};

const requests = {
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=${NETWORK_ID.netflixOriginals}`,
  fetchBestDramas: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.bestDrama}`,
  fetchActions: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.action}`,
  fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.animation}`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.documentary}`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.horror}`,
  fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID.war}`,
};

export { BASE_URLS };
export default requests;
