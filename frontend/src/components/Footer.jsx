import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          <a href="/" className="hover:text-cyan-400 inline-block px-1">
            Home
          </a>
          <a href="/vision" className="hover:text-cyan-400 inline-block px-1">
            Vision
          </a>
          <a
            href="/offerings"
            className="hover:text-cyan-400 inline-block px-1"
          >
            Offerings
          </a>
          <a href="/about" className="hover:text-cyan-400 inline-block px-1">
            About Us
          </a>
          <a href="/contact" className="hover:text-cyan-400 inline-block px-1">
            Contact Us
          </a>
        </div>
        <p className="text-gray-400">contact@shapingagile.com</p>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Shaping Agile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
