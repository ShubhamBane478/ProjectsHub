import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Set the initial state using that type
const initialState: CounterState = {
  value: 0, // Counter starts at 0
};

// Create the counter slice
export const counterSlice = createSlice({
  name: 'counter', // Name of this slice of state
  initialState, // The initial state value
  reducers: {
    increment: (state) => {
      // Directly mutating the state is allowed thanks to Immer in Redux Toolkit
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0; // Resets the counter to 0
    },
    // Optionally pass a payload to set the counter to a specific value
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions generated from the slice
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Export the reducer to be used in the store configuration
export default counterSlice.reducer;
