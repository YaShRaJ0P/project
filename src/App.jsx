import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
      <main className>
        <Navbar />
      </main>
    </BrowserRouter>
  );
};
