import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is About</div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/support");
          }}
          className="bg-gray-400 cursor-pointer py-2 px-1 border border-gray-500 rounded-sm"
        >
          Move to support Page
        </button>
      </div>
    </>
  );
};

export default About;
