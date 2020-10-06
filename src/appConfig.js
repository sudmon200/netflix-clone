import config from './api/config';

const genres = [
  {
    genre: 'netflixOriginals',
    title: 'Netflix Originals',
    collectionUrl: config.netflixOriginals,
    showPosters: true,
  },
  {
    genre: 'animation',
    title: 'Animation Movies',
    collectionUrl: config.animation,
    showPosters: false,
  },
  {
    genre: 'action',
    title: 'Action Movies',
    collectionUrl: config.action,
    showPosters: false,
  },
  {
    genre: 'documentary',
    title: 'Documentary',
    collectionUrl: config.documentary,
    showPosters: false,
  },
];

const ytOpts = {
  height: '540',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};

const ytOptsBanner = {
  height: '860',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};

export { genres, ytOpts, ytOptsBanner };
