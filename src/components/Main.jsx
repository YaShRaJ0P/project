import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Customer } from "./Customer";
import { Start } from "./Start";
import React from "react";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div className="bg-customWhite">
      <Navbar />
      <Hero />
      <Services />
      <Customer />
      <Start />
      <Footer />
    </div>
  );
};
