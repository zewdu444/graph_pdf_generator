import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

const initialState = {
  arrestStore: {},
  status: "idle",
  error: null,
};

export const fetchArrest = createAsyncThunk("arrest/fetchArrest", async () => {
  const response = await axios.get(API_URL).catch((error) => {
    throw Error(error.response.data.message);
  });
  return response.data;
});

const arrestSlice = createSlice({
  name: "arrest",
  initialState,
  reducers: {
    clearArrestStore: (state) => {
      state.arrestStore = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArrest.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArrest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.arrestStore = action.payload;
      })
      .addCase(fetchArrest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearArrestStore } = arrestSlice.actions;
export default arrestSlice.reducer;
