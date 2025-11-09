import React from "react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send a short default message along with the email
        body: JSON.stringify({
          email,
          message: `New subscription or inquiry from homepage: ${email}`,
        }),
      });

      if (response.ok) {
        setStatus("✅ Thank you! We'll get in touch soon.");
        setEmail("");
      } else {
        setStatus("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Server not reachable. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20"
        id="home"
      >
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shaping Agile</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Shaping Agile is more than a tool — it’s a movement to reimagine how
            teams build products. We bring clarity, speed and accountability to
            every stage of product delivery by merging Agile principles with
            practical, real-world workflows.
          </p>

          <p className="text-md md:text-lg max-w-2xl mx-auto mb-8">
            Built for startups, product teams, and enterprises who believe that
            agility is not just about doing Scrum — it's about shaping a culture
            of continuous improvement, innovation, and ownership.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/vision"
              className="bg-white text-blue-600 px-6 py-3 font-medium rounded-lg shadow-md hover:bg-gray-100 inline-flex text-center whitespace-nowrap"
            >
              Our Vision
            </a>
            <a
              href="#coming-soon"
              className="bg-white text-blue-600 px-6 py-3 font-medium rounded-lg shadow-md hover:bg-gray-100 inline-flex text-center whitespace-nowrap"
            >
              Agile Tool Coming Soon
            </a>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Why We Exist</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Most Agile tools today are complex, rigid or disconnected from
              real team dynamics. Teams spend more time managing tools than
              delivering value. We exist to change that.
            </p>

            <ul className="text-gray-700 max-w-2xl mx-auto mb-6 space-y-2 text-left md:text-center">
              <li>✔ To simplify Agile — without diluting its power</li>
              <li>✔ To help teams focus on outcomes, not just activities</li>
              <li>
                ✔ To bridge the gap between leadership vision and execution
              </li>
              <li>
                ✔ To make agility intuitive, human-centered and measurable
              </li>
            </ul>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe that when teams are empowered with clarity and purpose
              — great products get built, faster and happier.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-gray-50" id="coming-soon">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Agile Project Management Tool
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We are building a modern Agile Project Management tool to empower
              teams, enhance transparency, and streamline delivery. Stay tuned!
            </p>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Stay Updated
              </button>
            </form>
            {status && (
              <p className="text-sm mt-4 text-gray-700 font-medium">{status}</p>
            )}
          </div>
        </section>

        {/* Agile Knowledge Section */}
        {/* <section className="py-16 bg-white" id="offerings">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Agile Knowledge</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Explore key topics to enhance your understanding of Agile Project
          Management.
        </p>
      </div>
      <div
        className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4"
      >
        <div
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">What is Agile?</h3>
          <p className="text-gray-600">
            An overview of Agile principles and why they matter for modern
            organizations.
          </p>
        </div>
        <div
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">Scrum vs Kanban</h3>
          <p className="text-gray-600">
            Understanding the differences and when to use Scrum or Kanban
            effectively.
          </p>
        </div>
        <div
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">Agile Values & Principles</h3>
          <p className="text-gray-600">
            Explore the foundation of Agile methodology and its guiding
            principles.
          </p>
        </div>
        <div
          className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">
            CI/CD & Continuous Improvement
          </h3>
          <p className="text-gray-600">
            Learn about automation, integration, and continuous improvement
            practices in Agile.
          </p>
        </div>
      </div>
    </section> */}
      </div>
      {/* Footer Section */}
    </>
  );
}
