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
//Note-1: the below code when form is submit the hole page is reload.
/*
import React from "react";
const App = () => {
  return (
    <>
      <p className="text-center text-blue-500 mt-2">
        This is the handle the Page reloading the concept
      </p>
      <div className="space-x-4 mt-16 flex justify-center">
        <form
          onSubmit={() => alert("Form submitted successfully.")}
          className="space-x-4"
        >
          <input
            type="text"
            placeholder="Enter the name..."
            className="border rounded-sm py-1.5 px-1 outline-0"
          />
          <button
            type="submit"
            className="bg-green-500 py-2 px-4 cursor-pointer rounded-sm font-semibold text-white"
          >
            Click me
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
*/

//Note-1: the below code when form is submit the hole page is not reload.
/*
import React from "react";
const App = () => {
  return (
    <>
      <p className="text-center text-blue-500 mt-2">
        This is the handle the Page reloading the concept
      </p>
      <div className="space-x-4 mt-16 flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted successfully.");
          }}
          className="space-x-4"
        >
          <input
            type="text"
            placeholder="Enter the name..."
            className="border rounded-sm py-1.5 px-1 outline-0"
          />
          <button
            type="submit"
            className="bg-green-500 py-2 px-4 cursor-pointer rounded-sm font-semibold text-white"
          >
            Click me
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
*/

/******************************************** Formik Practice ************************** */
/*
import React from "react";
import FormikPractice from "./components/PracticeByMe/FormikPractice";

const App = () => {
  return (
    <>
      <FormikPractice />
    </>
  );
};

export default App;
*/

/********************************** Routing *****************************/
/*
import React from "react";
import ReactRouting from "./Pages/RotingByLB/Routes/ReactRouting";

const App = () => {
  return (
    <>
      <ReactRouting />
    </>
  );
};

export default App;
*/

/************************************** Custom Hooks ***************************/
/*
import React from "react";
import RandamGif from "./Pages/RandomGif/RandamGif";

const App = () => {
  return (
    <>
      <RandamGif />
    </>
  );
};

export default App;
*/

/*************************************** Context AP ************************/

/*import React, { useContext, useEffect } from "react";
import Blogs from "./Pages/contextAPI/Blogs";
import { AppContext } from "./Pages/contextAPI/context/AppContext";
import Pagination from "./Pages/contextAPI/Pagination";
import Header from "./Pages/contextAPI/Header";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <div>
        <Header />
        <Blogs />
        <Pagination />
      </div>
    </>
  );
};

export default App;

*/

/*************************************** Redux ************************/
import React from "react";
import Counter from "./Pages/redux/Counter";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
