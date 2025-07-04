import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../RouteComponents/Home";
import Support from "../RouteComponents/Support";
import About from "../RouteComponents/About";
import Labs from "../RouteComponents/Labs";
import NotFound from "../RouteComponents/NotFound";
import MainHeader from "../RouteComponents/MainHeader";
import PrivateRoute from "../RouteComponents/PrivateRoute";
import Login from "../../Login/Login";

const ReactRouting = () => {
  const token = JSON.parse(localStorage.getItem("token"));

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
            {token && (
              <NavLink
                to="/labs"
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : ""
                }
              >
                Labs
              </NavLink>
            )}
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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/labs"
            element={
              <PrivateRoute>
                <Labs />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouting;
