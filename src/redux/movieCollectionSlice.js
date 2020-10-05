import { createSlice } from '@reduxjs/toolkit';

export const movieCollectionSlice = createSlice({
  name: 'movieCollection',
  initialState: {
    netflixOriginals: [],
    animation: [],
    action: [],
    documentary: [],
  },
  reducers: {
    setNetflixOriginalsCollection: (state, action) => {
      //console.log('action ==>', action);
      state.netflixOriginals = [
        ...state.netflixOriginals,
        action.payload.movieCollection,
      ];
    },
    setAnimationCollection: (state, action) => {
      state.animation = [...state.animation, action.payload.movieCollection];
    },
    setActionCollection: (state, action) => {
      state.action = [...state.action, action.payload.movieCollection];
    },
    setDocumentaryCollection: (state, action) => {
      state.documentary = [
        ...state.documentary,
        action.payload.movieCollection,
      ];
    },
  },
});

export const {
  setNetflixOriginalsCollection,
  setAnimationCollection,
  setActionCollection,
  setDocumentaryCollection,
} = movieCollectionSlice.actions;
export const selectMovieCollections = (state) => state.movieCollection;

export default movieCollectionSlice.reducer;
