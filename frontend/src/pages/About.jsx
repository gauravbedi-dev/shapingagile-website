import React from "react";
import gauravimg from "../assets/images/gaurav.png";
import kavyaimg from "../assets/images/kavya.png";
import aishwaryaimg from "../assets/images/aishwarya.png";
import harshithaimg from "../assets/images/harshitha.png";
import tejasimg from "../assets/images/tejas.png";
import ayushimg from "../assets/images/ayush.png";
import preethiimg from "../assets/images/preethi.png";

import LIimg from "../assets/images/linkedin_icon.png";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet the team shaping the Agile transformation journey.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <div className="px-4 sm:px-6 lg:px-8">
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
          {/* Use a single responsive grid for all team cards so they stack cleanly on small screens */}
          <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 max-w-6xl">
            {/* All cards keep same size (max-w-sm) and center in their grid cell */}
            {/** Card: Gaurav */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={gauravimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Gaurav Bedi</h3>
                <a
                  href="https://www.linkedin.com/in/gauravbedi"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">Founder & Agile Evangelist</p>
              <p className="text-gray-500 text-sm text-justify">
                Driving Shaping Agile's mission to empower teams and
                organizations with modern tools and Agile practices.
                <br />
                <br />
                Seasoned engineering leader with several years of experience in
                driving innovation and excellence in Product Engineering,
                Technology, Product Development, and Delivery Management.
              </p>
            </div>

            {/** Card: Kavya */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={kavyaimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Kavya G Rao</h3>
                <a
                  href="https://www.linkedin.com/in/kavya-g-87034985"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">HR Specialist</p>
              <p className="text-gray-500 text-sm text-justify">
                Building a positive workplace culture and aligning people's
                practices with business objectives.
                <br />
                <br />
                HR professional with experience across recruitment, HR
                generalist functions, and HR business partnering. She brings
                strong expertise in talent management, employee engagement, and
                strategic HR initiatives.
              </p>
            </div>

            {/** Card: Aishwarya */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={aishwaryaimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Aishwarya S Rajkondawar
                </h3>
                <a
                  href="https://www.linkedin.com/in/aishwarya-rajkondawar-99a30a3a1"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">Java Springboot Technologist</p>
              <p className="text-gray-500 text-sm text-justify">
                Consistently delivering high-quality backend solutions while
                working effectively in agile, collaborative environments.
                <br />
                <br />
                Developer with expertise in Java, Spring Boot, and
                micro-services architecture, with experience in building RESTful
                APIs, implementing complex business logic, and integrating
                relational databases.
              </p>
            </div>

            {/** Card: Harshitha */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={harshithaimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Harshitha S</h3>
                <a
                  href="https://www.linkedin.com/in/harshitha-s-7157811b1/"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">
                React Native & React.js Technologist
              </p>
              <p className="text-gray-500 text-sm text-justify">
                Building scalable and high-quality front-end applications while
                contributing to the development of robust and user-centric
                solutions.
                <br />
                <br />
                Developer with expertise in React Native and React.js
                technologies, with experience in complex mobile & web
                applications project delivery. She is a creative person at heart
                with keen interest in sketching, adventure activities and
                television series.
              </p>
            </div>

            {/** Card: Tejas */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={tejasimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Tejas DM</h3>
                <a
                  href="https://www.linkedin.com/in/tejas-dm-1b0418198/"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">Quality Specialist</p>
              <p className="text-gray-500 text-sm text-justify">
                Delivering high quality and robust enterprise systems while
                ensuring compliance to Product Engineering principles.
                <br />
                <br />
                Testing professional with expertise in functional testing,
                mobile automation using Appium and WebdriverIO, API automation,
                and Selenium. He enjoys playing badminton and cricket and is
                passionate about traveling and exploring new places.
              </p>
            </div>

            {/** Card: Ayush */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={ayushimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Ayush Jain</h3>
                <a
                  href="https://www.linkedin.com/in/thealanjain"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">Frontend & 3D Web Specialist</p>
              <p className="text-gray-500 text-sm text-justify">
                Building performant, accessible, and visually immersive web
                experiences in React.js, TypeScript, and modern frontend
                architecture.
                <br />
                <br />
                Frontend developer who brings a strong product mindset to every
                engagement, crafting UI solutions that are fast, inclusive, and
                built to scale across diverse domains. He is specialized in 3D
                web development using Three.js and React Three Fiber, bringing
                real-time product customization and interactive 3D environments
                to life in the browser.
              </p>
            </div>

            {/** Card: Preethi */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition max-w-sm w-full mx-auto">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[radial-gradient(circle_at_center,_#4c6cb3,_#1f2f5a)] flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  alt="Profile"
                  src={preethiimg}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Divi Datta Preethi</h3>
                <a
                  href="https://www.linkedin.com/in/dattapreethi-divi-81a050219/"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="LinkedIn Profile"
                    src={LIimg}
                    height="16"
                    width="16"
                  />
                </a>
              </div>
              <p className="text-gray-600 mb-2">Backend Technologist</p>
              <p className="text-gray-500 text-sm text-justify">
                Building robust backend systems with a focus on delivering
                reliable, scalable, and efficient solutions.
                <br />
                <br />A passionate and detail-oriented software professional
                with experience in backend development, reporting systems, and
                application support. She is skilled in working with Java, SQL,
                APIs, and debugging complex technical issues. Adept at
                collaborating with cross-functional teams, handling production
                issues, and improving application performance.
              </p>
            </div>
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
