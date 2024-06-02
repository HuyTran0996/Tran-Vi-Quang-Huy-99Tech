import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

export const fetchDataAll = createAsyncThunk("coins/fetchDataAll", async () => {
  const res = await apiService.get("");
  console.log("fetchDataAll", res);
  return res.data;
});
