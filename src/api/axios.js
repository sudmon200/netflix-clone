import axios from 'axios';
import { BASE_URLS } from './config';

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: BASE_URLS.api,
});

export default instance;
