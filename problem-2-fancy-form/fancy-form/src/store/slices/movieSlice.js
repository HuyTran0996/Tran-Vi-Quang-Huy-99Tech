import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTrendingAll,
  fetchNowPlayingMovie,
  fetchTopRatedMovie,
  fetchMovieAndTVDetail,
  fetchMovieAndTVCredits,
  fetchMovieAndTVSimilar,
  fetchMovieAndTVRecommendations,
  fetchMovieAndTVVideos,
  fetchMovieAndTVDiscover,
  fetchSearchMulti,
} from "../thunks/fetchMovies";

const initialState = {
  dataTrendingAll: [],
  dataNowPlayingMovie: [],
  dataTopRatedMovie: [],
  dataMovieAndTVDetail: [],
  dataMovieAndTVCredits: [],
  dataMovieAndTVSimilar: [],
  dataMovieAndTVRecommendations: [],
  dataMovieAndTVVideos: [],
  dataMovieAndTVDiscover: [],
  dataSearchMulti: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  extraReducers(builder) {
    builder.addCase(fetchTrendingAll.fulfilled, (state, action) => {
      state.dataTrendingAll = action.payload;
    });
    builder.addCase(fetchNowPlayingMovie.fulfilled, (state, action) => {
      state.dataNowPlayingMovie = action.payload;
    });
    builder.addCase(fetchTopRatedMovie.fulfilled, (state, action) => {
      state.dataTopRatedMovie = action.payload;
    });
    builder.addCase(fetchMovieAndTVDetail.fulfilled, (state, action) => {
      state.dataMovieAndTVDetail = action.payload;
    });
    builder.addCase(fetchMovieAndTVCredits.fulfilled, (state, action) => {
      state.dataMovieAndTVCredits = action.payload;
    });
    builder.addCase(fetchMovieAndTVSimilar.fulfilled, (state, action) => {
      state.dataMovieAndTVSimilar = action.payload;
    });
    builder.addCase(
      fetchMovieAndTVRecommendations.fulfilled,
      (state, action) => {
        state.dataMovieAndTVRecommendations = action.payload;
      }
    );
    builder.addCase(fetchMovieAndTVVideos.fulfilled, (state, action) => {
      state.dataMovieAndTVVideos = action.payload;
    });
    builder.addCase(fetchMovieAndTVDiscover.fulfilled, (state, action) => {
      state.dataMovieAndTVDiscover = action.payload;
    });
    builder.addCase(fetchSearchMulti.fulfilled, (state, action) => {
      state.dataSearchMulti = action.payload;
    });
  },
});

export const movieReducer = movieSlice.reducer;
