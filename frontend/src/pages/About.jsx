import React from "react";
import gauravimg from "../assets/images/gaurav.png";
import LIimg from "../assets/images/linkedin_icon.png";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet the team shaping the Agile transformation journey.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              A group of passionate Agile enthusiasts committed to driving
              organizational change.
            </p>
          </div>
          {/* <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4"> */}
          <div className="container mx-auto grid gap-8 justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 px-4 max-w-sm">
            {/* Founder Placeholder */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#1f3a6d,_#0d1a3a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={gauravimg}
                  height="50"
                  width="100"
                  className="object-cover"
                />
              </div>
              <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex items-center justify-left h-full">
                  <h3 className="text-xl font-semibold">Gaurav Bedi</h3>
                </div>
                <div className="flex items-center justify-left h-full">
                  <a
                    href="https://www.linkedin.com/in/gauravbedi"
                    alt="LinkedIn Profile"
                    target="_new"
                  >
                    <img
                      alt="LinkedIn Profile"
                      src={LIimg}
                      height="16"
                      width="16"
                    />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-2">Founder & Agile Evangelist</p>
              <p className="text-gray-500 text-sm">
                Driving Shaping Agile's mission to empower teams and
                organizations with modern tools and Agile practices.
                <br />
                <br />
                Seasoned engineering leader with several years of experience in
                driving innovation and excellence in Product Engineering,
                Technology, Product Development, and Delivery Management.
              </p>
            </div>

            {/* Future Team Members Placeholder */}
            {/* <div
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <div
            className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#1f3a6d,_#0d1a3a)] flex items-center justify-center overflow-hidden shadow-xl"
          >
            <img
              alt="Profile"
              src=""
              height="50"
              width="100"
              className="object-cover"
            / />
          </div>
          <h3 className="text-xl font-semibold mb-2">Name</h3>
          <p className="text-gray-600 mb-2">Role</p>
          <p className="text-gray-500 text-sm">Description</p>
        </div> */}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-gray-50 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-6">
              We are always looking for passionate Agile practitioners. Reach
              out if you want to be part of our journey.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 font-medium rounded-lg shadow-md hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
      {/* Footer Section */}
    </>
  );
}
