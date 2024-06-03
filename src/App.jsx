import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
