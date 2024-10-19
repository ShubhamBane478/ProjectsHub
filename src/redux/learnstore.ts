import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './learnRTK/counterSlice';

export const learnStore = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

export type RootState = ReturnType<typeof learnStore.getState> ;

export type AppDispatch = typeof learnStore.dispatch;