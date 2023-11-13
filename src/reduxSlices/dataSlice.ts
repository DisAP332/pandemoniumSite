import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

let data: {
  Drinks: Array<object>;
  Events: any;
};

interface IState {
  loading: string;
  data: any;
  error: any;
}

const initialState: IState = {
  loading: "pending",
  data: [],
  error: null,
};

export const fetchData = createAsyncThunk("site/fetchData", async () => {
  try {
    const response = await axios.get(
      "https://server.perodactylesarefire.com/site",
      {
        headers: { user: "pandemonium" },
      }
    );
    return [...response.data];
  } catch (error) {}
});

const dataSlice = createSlice({
  name: "site_data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchData.fulfilled, (state, action: any) => {
      state.loading = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

// export const { siteDataHandler } = dataSlice.actions;

export const getAllData = (state: any) => state.data;
export const getDataStatus = (state: any) => state.pending;
export const getDataError = (state: any) => state.error;

export default dataSlice.reducer;
