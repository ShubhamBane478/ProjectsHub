import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../features/counter/counterSlice";
import HabitTrackerForm from "./components/habit-tracker-form";

const ReduxToolkit = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <button onClick={handleResetClick}> Reset </button>
        <br />
        <br />
        <input
          type="Number"
          value={amount}
          placeholder="Enter Amount "
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment By Amount
        </button>
      </div>
      <HabitTrackerForm />
    </>
  );
};
export default ReduxToolkit;
