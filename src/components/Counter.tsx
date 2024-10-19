import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../redux/learnRTK/counterSlice';
import { AppDispatch, RootState } from '../redux/learnstore';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2 className="text-2xl text-white mb-4">Count: {count}</h2>
      <div className="flex flex-row gap-4">
        <button
          className="text-white bg-blue-500 p-3 rounded-lg"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment Async
        </button>
        <button
          className="text-white bg-blue-500 p-3 rounded-lg"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By Amount
        </button>
        <button
          className="text-white bg-blue-500 p-3 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className={
            count <= 0
              ? 'bg-blue-300 text-white p-3 rounded-lg'
              : 'bg-blue-500 text-white p-3 rounded-lg'
          }
          disabled={count <= 0}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
export default Counter;
