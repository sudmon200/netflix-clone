import { configureStore } from '@reduxjs/toolkit';
import movieCollectionReducer from './movieCollectionSlice';
import movieInfoReducer from './movieInfoSlice';

export default configureStore({
  reducer: {
    movieCollection: movieCollectionReducer,
    movieInfo: movieInfoReducer,
  },
});
