import {configureStore} from '@reduxjs/toolkit';
import darkmodeSlice from '../src/darkmodeSlice';

export const store = configureStore({
  reducer: {
    theme: darkmodeSlice,
  },
});
