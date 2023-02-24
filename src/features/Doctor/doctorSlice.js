import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDoctors } from './doctorAPI';

export const fetchDoctors = createAsyncThunk(
  'doctor/fetchDoctors',
  async () => {
    const response = await getDoctors();
    return response;
  },
);

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctorList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.fulfilled, (state, action) => ({
        ...state,
        doctorList: action.payload,
      }))
      .addCase(fetchDoctors.pending, (state) => ({
        ...state,
        doctorList: [],
      }))
      .addCase(fetchDoctors.rejected, (state) => ({
        ...state,
        doctorList: [],
      }));
  },
});

export default doctorSlice.reducer;
