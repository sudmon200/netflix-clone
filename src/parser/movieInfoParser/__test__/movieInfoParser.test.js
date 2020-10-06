import movieInfoParser from '../index';

const mockData = require('./mockData.json');
const parsedData = movieInfoParser(mockData.data);
const movie = parsedData;

it('should parsed movie info data', () => {
  expect(movie.id).toEqual(mockData.data.id);
  expect(movie.title).toEqual(mockData.data.title);
  expect(movie.original_title).toEqual(mockData.data.original_title);
  expect(movie.poster_path).toEqual(mockData.data.poster_path);
  expect(movie.backdrop_path).toEqual(mockData.data.backdrop_path);
  expect(movie.homepage).toEqual(mockData.data.homepage);
  expect(movie.vote_count).toEqual(mockData.data.vote_count);
  expect(movie.vote_average).toEqual(mockData.data.vote_average);
  expect(movie.popularity).toEqual(mockData.data.popularity);
  expect(movie.release_date).toEqual(mockData.data.release_date);
  expect(movie.revenue).toEqual(mockData.data.revenue);
});
