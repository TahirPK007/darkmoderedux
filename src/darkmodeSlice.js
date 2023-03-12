import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  color: '',
};

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
