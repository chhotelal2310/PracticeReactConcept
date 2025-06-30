import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../RouteComponents/Home";
import Support from "../RouteComponents/Support";
import About from "../RouteComponents/About";
import Labs from "../RouteComponents/Labs";
import NotFound from "../RouteComponents/NotFound";
import MainHeader from "../RouteComponents/MainHeader";

const ReactRouting = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className="w-full bg-amber-200 flex justify-center gap-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : ""
              }
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/labs"
              className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : ""
              }
            >
              Labs
            </NavLink>
          </li>
        </ul>
      </nav>

      {/*
      *********************************simple routing*************************************
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      
      */}

      {/* *********************************Nested routing************************************* */}
      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/*Hopme page is the default route*/}
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouting;
