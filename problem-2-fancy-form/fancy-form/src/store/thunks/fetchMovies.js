import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

export const fetchTrendingAll = createAsyncThunk(
  "moviesAndTVs/fetchTrendingAll",
  async () => {
    const res = await apiService.get("/trending/all/week?language=en-US");
    console.log("fetchTrendingAll", res);
    return res.data;
  }
);
export const fetchNowPlayingMovie = createAsyncThunk(
  "movies/fetchNowPlayingMovie",
  async (page) => {
    const res = await apiService.get(
      `/movie/now_playing?language=en-US&page=${page || 1}`
    );
    console.log("fetchNowPlayingMovie", res);
    return res.data;
  }
);
export const fetchTopRatedMovie = createAsyncThunk(
  "movies/fetchTopRatedMovie",
  async (page) => {
    const res = await apiService.get(
      `/movie/top_rated?language=en-US&page=${page || 1}`
    );
    console.log("fetchTopRatedMovie", res);
    return res.data;
  }
);

export const fetchMovieAndTVDetail = createAsyncThunk(
  "movies/fetchMovieAndTVDetail",
  async (type) => {
    //type of movie is: movie/movieID
    //type of movie is: tv/tvID
    const res = await apiService.get(`${type}?language=en-US`);
    console.log("fetchMovieAndTVDetail", res);
    return res.data;
  }
);

export const fetchMovieAndTVCredits = createAsyncThunk(
  "movies/fetchMovieAndTVCredits",
  async (type) => {
    //type of movie is: movie/movieID
    //type of movie is: tv/tvID
    const res = await apiService.get(`${type}/credits?language=en-US`);
    console.log("fetchMovieAndTVCredits", res);
    return res.data;
  }
);

export const fetchMovieAndTVSimilar = createAsyncThunk(
  "movies/fetchMovieAndTVSimilar",
  async (type) => {
    //type of movie is: movie/movieID
    //type of movie is: tv/tvID
    const res = await apiService.get(`${type}/similar?language=en-US`);
    console.log("fetchMovieAndTVSimilar", res);
    return res.data;
  }
);
export const fetchMovieAndTVRecommendations = createAsyncThunk(
  "movies/fetchMovieAndTVRecommendations",
  async (type) => {
    //type of movie is: movie/movieID
    //type of movie is: tv/tvID
    const res = await apiService.get(`${type}/recommendations?language=en-US`);
    console.log("fetchMovieAndTVRecommendations", res);
    return res.data;
  }
);

export const fetchMovieAndTVVideos = createAsyncThunk(
  "movies/fetchMovieAndTVVideos",
  async (type) => {
    //type of movie is: movie/movieID
    //type of movie is: tv/tvID
    const res = await apiService.get(`${type}/videos?language=en-US`);
    console.log("fetchMovieAndTVVideos", res);
    return res.data;
  }
);

export const fetchMovieAndTVDiscover = createAsyncThunk(
  "movies/fetchMovieAndTVDiscover",
  async ({ type, page }) => {
    const res = await apiService.get(`/discover/${type}?page=${page || 1}`);
    console.log("fetchMovieAndTVDiscover", res);
    return res.data;
  }
);

export const fetchSearchMulti = createAsyncThunk(
  "movies/fetchSearchMulti",
  async ({ query, page }) => {
    const res = await apiService.get(
      `/search/multi?query=${query}&page=${page || 1}`
    );
    console.log("fetchSearchMulti", res);
    return res.data;
  }
);
