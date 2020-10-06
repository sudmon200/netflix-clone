import movieCollectionsParser from '../index';

const mockData = require('./mockData.json');
const parsedData = movieCollectionsParser(mockData.results);
const movie = parsedData[0];

it('should parsed n items', () => {
  expect(parsedData.length).toEqual(2);
});

it('should parsed movie data', () => {
  expect(movie.id).toEqual(mockData.results[0].id);
  expect(movie.title).toEqual(mockData.results[0].title);
  expect(movie.original_title).toEqual(mockData.results[0].original_title);
  expect(movie.poster_path).toEqual(mockData.results[0].poster_path);
  expect(movie.backdrop_path).toEqual(mockData.results[0].backdrop_path);
  expect(movie.overview).toEqual(mockData.results[0].overview);
});
