import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:gap-24 w-full justify-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold relative">
              Company Name
              <div className="absolute w-20 bg-orange-500 h-1 top-[103%] rounded-full"></div>
            </h2>
            <p className="mt-2">A brief description of the company.</p>
          </div>
          <div className="flex flex-row max-md:w-full md:gap-24 gap-y-4 max-md:justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h3 className="text-lg font-semibold">Miscellaneous</h3>
              <ul className="mt-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:mr-8">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="mt-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
