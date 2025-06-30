import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is Labs</div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/about");
          }}
          className="bg-gray-400 cursor-pointer py-2 px-1 border border-gray-500 rounded-sm"
        >
          Move to About Page
        </button>
      </div>
    </>
  );
};

export default Labs;
