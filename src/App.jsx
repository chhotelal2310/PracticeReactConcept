/************************ Handle Calling function *******************/
/*
import React from "react";
const App = () => {
  return (
    <>
      <div className="text-center bg-green-500">Hello First Project</div>
      <div className="flex justify-center">
        <button
          className="mt-10 w-40 h-10 bg-violet-400 rounded-lg cursor-pointer"
          // onClick={function handleClick() {
          //   alert("You click me");
          // }}

          onClick={() => alert("Hello i am clicked button")}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default App;
*/

/************************* Reading props in event handlers***************/
/*
import React from "react";
import AlertButton from "./components/AlertButton";
const App = () => {
  return (
    <>
      <div className="text-center bg-green-500">Hello First Project</div>
      <AlertButton message="Playing">Play Cricket</AlertButton>
    </>
  );
};
export default App;
*/

/***************************************** Event bubbling *************************************/

/*import React from "react";

const App = () => {
  return (
    <>
      <p className="text-center text-blue-500 mt-2">This is the Event Bubbling Concept</p>
      <div
        className="space-x-4 mt-16 flex justify-center bg-violet-500"
        onClick={() => alert("You clicked on the div")}
      >
        <button
          className="w-40 h-10 bg-green-500 rounded-sm cursor-pointer"
          onClick={() => alert("You clicke on the first button")}
        >
          Button first
        </button>
        <button
          className="w-40 h-10 bg-green-500 rounded-sm cursor-pointer"
          onClick={() => alert("You cliked on the second button")}
        >
          Button Second
        </button>
      </div>
    </>
  );
};

export default App;
*/

/***************************************** handle Event bubbling *************************************/
/*
import React from "react";

const App = () => {
  return (
    <>
      <p className="text-center text-blue-500 mt-2">
        This is the handle the Event Bubbling Concept (Avoid the Event Bubbling)
      </p>
      <div
        className="space-x-4 mt-16 flex justify-center bg-violet-500"
        onClick={() => alert("You clicked on the div")}
      >
        <button
          className="w-40 h-10 bg-green-500 rounded-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            alert("You clicke on the first button");
          }}
        >
          Button first
        </button>
        <button
          className="w-40 h-10 bg-green-500 rounded-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            alert("You cliked on the second button");
          }}
        >
          Button Second
        </button>
      </div>
    </>
  );
};

export default App;
*/

/************************************ handle th page reload *************************/

import React from "react";
const App = () => {
  return (
    <>
      <p className="text-center text-blue-500 mt-2">
        This is the handle the Page reloading the concept
      </p>
      <div className="space-x-4 mt-16 flex justify-center bg-violet-500">
         <input type="button" value="" />
      </div>
    </>
  );
};

export default App;
