import axios from '../api/axios';
import movieCollectionParser from '../parser/movieCollectionsParser';
import movieInfoParser from '../parser/movieInfoParser';

export async function fetchMovieCollections(collectionUrl) {
  try {
    let response = await axios.get(collectionUrl),
      parsedData;

    // parse the data from the api before pushing to store
    parsedData = movieCollectionParser(response.data.results);
    return parsedData;
  } catch (error) {
    console.error('API ERROR:', error);
  }
}

export async function fetchMovieInfo(apiUrl) {
  try {
    let response = await axios.get(apiUrl),
      parsedData;

    // parse the data from the api before pushing to store
    parsedData = movieInfoParser(response.data);
    return parsedData;
  } catch (error) {
    console.error('API ERROR:', error);
  }
}
