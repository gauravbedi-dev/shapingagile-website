import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo_title.png"; // ✅ import the logo image

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: logo only */}
        <div className="flex items-center">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="inline-flex items-center"
          >
            <img alt="Logo" src={logo} className="h-14 w-auto" />
          </NavLink>
        </div>

        {/* Right: desktop nav + mobile button */}
        <div className="flex items-center space-x-4">
          {/* Desktop links (hidden on small screens) */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </NavLink>
            <NavLink to="/vision" className="text-gray-700 hover:text-blue-600">
              Vision
            </NavLink>
            <NavLink
              to="/offerings"
              className="text-gray-700 hover:text-blue-600"
            >
              Offerings
            </NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {open ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (small screens) - render conditionally to avoid max-height issues */}
      <div className="md:hidden">
        {open && (
          <div className="bg-white shadow-md">
            <nav className="flex flex-col px-4">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="block py-3 border-b text-gray-700 hover:text-blue-600"
              >
                Home
              </NavLink>
              <NavLink
                to="/vision"
                onClick={() => setOpen(false)}
                className="block py-3 border-b text-gray-700 hover:text-blue-600"
              >
                Vision
              </NavLink>
              <NavLink
                to="/offerings"
                onClick={() => setOpen(false)}
                className="block py-3 border-b text-gray-700 hover:text-blue-600"
              >
                Offerings
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="block py-3 border-b text-gray-700 hover:text-blue-600"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600"
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
