import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';
import movieCollectionReducer from './movieCollectionSlice';

export default configureStore({
  reducer: {
    // user: userReducer,
    movieCollection: movieCollectionReducer,
  },
});
