import React from "react";

const FormikPractice = () => {
  const handleNegativeValue = (event) => {
    const {key, target: { value, selectionStart }} = event;
    const newValue =
      value.slice(0, selectionStart) + value.slice(selectionStart + 1);
    const parsedValue = parseFloat(newValue);
    if (
      ["ArrowUp", "ArrowDown", "-", "+", "e", "E"].includes(key) &&
      (isNaN(parsedValue) || parsedValue < 0)
    ) {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center bg-green-400 mt-10">
        <input
          type="text"
          placeholder="Enter the phone number"
          className="border rounded-sm w-60 px-2 py-1"
          onKeyDown={(event) => handleNegativeValue(event)}
        />
      </div>
    </>
  );
};

export default FormikPractice;
