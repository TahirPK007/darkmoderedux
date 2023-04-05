import {configureStore} from '@reduxjs/toolkit';
import darkmodeSlice from '../src/darkmodeSlice';
import darkSlice from '../src/darkSlice';

export const store = configureStore({
  reducer: {
    theme: darkmodeSlice,
    dark: darkSlice,
  },
});
