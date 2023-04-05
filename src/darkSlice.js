import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  theme: 'dark',
};

export const darkSlice = createSlice({
  name: 'darktheme',
  initialState,
  reducers: {
    toggletheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {toggletheme} = darkSlice.actions;

export default darkSlice.reducer;
