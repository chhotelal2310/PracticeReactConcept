import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ReactRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>This is home page</div>} />
          <Route path="/support" element={<div>This is support page</div>} />
          <Route path="/about" element={<div>This is about page</div>} />
          <Route path="/labs" element={<div>This is labs page</div>} />
          <Route path="*" element={<div>Not Found Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouting;
