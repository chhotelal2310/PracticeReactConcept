import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/CreateSlice";

const Counter = () => {
  const count = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-400">
      <div className="flex justify-center items-center space-x-6">
        <button
          onClick={() => dispatch(decrement())}
          className="py-2 border px-6 cursor-pointer rounded-sm border-gray-500 font-medium bg-blue-500 text-white"
        >
          Decrement
        </button>

        <p className="text-xl font-bold min-w-10 text-center">{count}</p>

        <button
          onClick={() => dispatch(increment())}
          className="py-2 border px-6 cursor-pointer rounded-sm border-gray-500 font-medium bg-blue-500 text-white"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
