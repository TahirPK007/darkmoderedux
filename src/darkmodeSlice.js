import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  clr: '',
  bgclr: '',
};

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    theme: (state, action) => {
      const {a, b} = action.payload;
      state.clr = a;
      state.bgclr = b;
    },
  },
});

export const {theme} = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
