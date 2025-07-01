import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is Support</div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/labs");
          }}
          className="bg-gray-400 cursor-pointer py-2 px-1 border border-gray-500 rounded-sm"
        >
          Move to labs Page
        </button>
      </div>
    </>
  );
};

export default Support;
