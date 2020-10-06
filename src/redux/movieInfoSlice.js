import { createSlice } from '@reduxjs/toolkit';

export const movieInfoSlice = createSlice({
  name: 'movieInfo',
  initialState: {
    movieInfo: {},
  },
  reducers: {
    setMovieInfo: (state, action) => {
      state.movieInfo = action.payload.movieInfo;
    },
  },
});

export const { setMovieInfo } = movieInfoSlice.actions;
export const selectMovieInfo = (state) => state.movieInfo.movieInfo;

export default movieInfoSlice.reducer;
