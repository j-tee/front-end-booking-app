import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (username) => {
  const response = await fetch(`https://booking-backend-e3gn.onrender.com/api/users/${username}/doctors/`, {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
});

const initialState = {
  doctors: [],
  status: '',
  error: null,
};

const doctorsSlice = createSlice({
  name: 'allDoctors',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'error occured';
      });
    /* eslint-enable no-param-reassign */
  },
});

export default doctorsSlice.reducer;
