import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

export const fetchPopularTV = createAsyncThunk(
  "TVs/fetchTrendingAll",
  async (page) => {
    const res = await apiService.get(
      `/tv/popular?language=en-US&page=${page || 1}`
    );
    console.log("fetchPopularTV", res);
    return res.data;
  }
);

export const fetchOnTheAirTV = createAsyncThunk(
  "TVs/fetchOnTheAirTV",
  async (page) => {
    const res = await apiService.get(
      `/tv/on_the_air?language=en-US&page=${page || 1}`
    );
    console.log("fetchOnTheAirTV", res);
    return res.data;
  }
);
