import React, { useState } from "react";
import logo from "../logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6 md:h-20">
        <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-10 lg:mr-72">
          <img src={logo} className="w-100 h-10 mr-2" alt="logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 text-4xl rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-7 w-7 sm:h-9 sm:w-9 ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-lg font-medium text-blue-600 hover:text-gray-600 mr-6 md:mr-10"
            >
              Home
            </a>
            <a
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-lg font-medium text-blue-600 hover:text-gray-600 mr-6 md:ml-10"
            >
              About
            </a>
            <a
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-lg font-medium text-blue-600 hover:text-gray-600 mr-6 md:ml-10"
            >
              Services
            </a>
            <a
              href="/contacts"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-lg font-medium text-blue-600 hover:text-gray-600 mr-6 md:ml-10"
            >
              Contact
            </a>
          </div>
          <div>
            <button className="inline-flex items-center hover:bg-gray-600  bg-blue-600 border-b-2 border-blue-300 py-2 px-4 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
