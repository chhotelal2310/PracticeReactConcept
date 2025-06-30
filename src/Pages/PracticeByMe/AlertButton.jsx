import React from "react";

const AlertButton = ({ message, children }) => {
  return (
    <div className="flex justify-center">
      <button
        className="mt-10 w-40 h-10 bg-violet-400 rounded-lg cursor-pointer"
        onClick={() => alert(message)}
      >
        {children}
      </button>
    </div>
  );
};

export default AlertButton;
