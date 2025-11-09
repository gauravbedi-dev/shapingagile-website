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
          message: `New subscription or inquiry from Offerings page: ${email}`,
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Offerings</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore Agile knowledge, methodologies, and our upcoming Agile
            Project Management tool.
          </p>
        </div>
      </section>

      {/* Agile Knowledge Section (Detailed) */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white" id="agile-topics">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Agile Knowledge Hub
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Dive deep into Agile methodologies, principles, and best practices
              to empower your teams and enhance project delivery.
            </p>
          </div>

          <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4">
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Agile Fundamentals
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the core principles of Agile, including iterative
                development, adaptive planning, and continuous delivery.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>History and evolution of Agile</li>
                <li>Agile Manifesto and its values</li>
                <li>Key benefits for teams and organizations</li>
              </ul>
              <a
                href="/agile-fundamentals"
                className="text-blue-600 font-medium hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Scrum & Kanban Deep Dive
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed insights into Scrum and Kanban frameworks, how they
                differ, and when to apply each effectively.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Scrum roles, events, and artifacts</li>
                <li>Kanban boards and workflow optimization</li>
                <li>Choosing the right framework for your team</li>
              </ul>
              <a
                href="/scrum-kanban"
                className="text-blue-600 font-medium hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Agile Values & Principles
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the foundation of Agile methodology, focusing on
                collaboration, communication, and delivering customer value.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Four Agile values explained</li>
                <li>Twelve guiding principles</li>
                <li>Implementing values in daily work</li>
              </ul>
              <a
                href="/agile-values-principles"
                className="text-blue-600 font-medium hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                CI/CD & Continuous Improvement
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about automation, integration, and fostering a culture of
                continuous improvement within Agile teams.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Continuous Integration & Delivery pipelines</li>
                <li>Monitoring and feedback loops</li>
                <li>Kaizen and retrospectives for improvement</li>
              </ul>
              <a
                href="/ci-cd"
                className="text-blue-600 font-medium hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* Coming Soon Tool Section */}
        <section className="py-16 bg-gray-50 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Agile Project Management Tool
            </h2>
            <p className="text-gray-600 mb-6">
              Our upcoming tool is designed to help teams plan, track, and
              deliver projects efficiently while embracing Agile principles.
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
      </div>
      {/* Footer Section */}
    </>
  );
}
