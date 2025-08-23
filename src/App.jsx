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

/*
const App = () => {
  const users = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ["Admin", "Editor", "Viewer"][i % 3], // Rotate roles
  }));

  console.log(users);

  return (
    <>
       <div className="p-4">
      <div
        className="overflow-x-auto w-full max-h-100
          [&::-webkit-scrollbar]:h-4
          [&::-webkit-scrollbar]:w-3
          [&::-webkit-scrollbar-track]:bg-gray-200
          [&::-webkit-scrollbar-thumb]:bg-gray-400
          [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
    </>
  );
};

export default App;
*/

/************************************* Sopping Card Application ********************************** */

/*
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/ShoppingApplication/components/Navbar";

import Home from "./Pages/ShoppingApplication/Pages/Home";
import CardDetails from "./Pages/ShoppingApplication/Pages/CardDetails";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/card" element={<CardDetails />} />
        </Routes>
    </>
  );
};

export default App;
*/

/*
const App = () => {
  return (
    <div>
      <ALCountryStateCity />
    </div>
  );
};

export default App;
*/

/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************/
import NormalDatePicker from "./Pages/Components/DatePicker/NormalDatePicker";
import DatePickerWithDiablelessCurrentDate from "./Pages/Components/DatePicker/DatePickerWithDiablelessCurrentDate";
import RangeDatePiker1 from "./Pages/Components/DatePicker/RangeDatePiker1";

import OTP from "./Pages/Components/Otp/OTP";

const App = () => {
  return (
    <>
      {/* <NormalDatePicker />
      <DatePickerWithDiablelessCurrentDate />
      <RangeDatePiker1 /> */}
      <OTP />
    </>
  );
};

export default App;
