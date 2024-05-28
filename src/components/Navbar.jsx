import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full p-4 text-gray-600 poppins-medium border-b-4 border-black">
      <div className=" w-full flex flex-row max-lg:flex-col items-center justify-between">
        <div
          className={`flex flex-row justify-between items-center max-lg:w-full ${
            isOpen && "max-lg:border-b-2 max-lg:border-b-gray-600"
          } `}
        >
          <Link
            to="/"
            className="flex flex-row gap-3 items-baseline poppins-regular"
          >
            <svg
              className="w-24 inline"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
            <span>|</span>
            <span className="">Careers</span>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } flex lg:flex flex-col  lg:flex-row gap-4 items-center max-lg:gap-2 max-lg:py-2`}
        >
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1 "
            to="/explore"
          >
            Explore Jobs
          </Link>
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1"
            to="/manufacturing"
          >
            Manufacturing
          </Link>
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1"
            to="/ai"
          >
            AI
          </Link>
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1"
            to="/internships"
          >
            Internships
          </Link>
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1"
            to="/veterans"
          >
            Veterans
          </Link>
          <Link
            className="hover:rounded-md hover:bg-gray-200 px-2 py-1"
            to="/aboutus"
          >
            About Us
          </Link>
        </nav>
        <div
          className={`flex flex-row gap-4 justify-center items-center lg:flex max-lg:flex-row ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button className="hover:rounded-md hover:bg-gray-200 px-2 py-1">
            Profile
          </button>
          <button className="flex flex-row gap-1 justify-center items-center hover:rounded-md hover:bg-gray-200 px-2 py-1">
            <svg
              className="w-4 inline"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"
              ></path>
            </svg>
            <span>US</span>
          </button>
        </div>
      </div>
    </header>
  );
};
