import React, { useState } from "react";
import { Target, Layers, BarChart3, Users } from "lucide-react";

export default function Offerings() {
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Offerings</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A purpose-built solution to help teams plan better, collaborate
            clearly, and deliver with confidence.
          </p>
        </div>
      </section>

      {/* Agile Project Management Tool */}
      <section className="pt-16 pb-1 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Agile Project Management Tool
            </h2>
          </div>
        </div>
      </section>
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Product Focus Areas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A focused, outcome-driven planning system designed to reduce
              noise, improve alignment, and help teams and leaders rely on facts
              — not fragmented conversations.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Target className="w-7 h-7 text-gray-800" />}
              backgcolor={"bg-sky-50 border border-sky-100"}
              title="Outcome-Driven Planning"
              description="Plan work around clear outcomes and goals — not just tasks and backlogs — enabling teams to understand why they are building, not just what."
            />

            <FeatureCard
              icon={<Layers className="w-7 h-7 text-gray-800" />}
              backgcolor={"bg-blue-50 border border-blue-100"}
              title="Clarity Over Complexity"
              description="Clean planning spaces that surface what truly matters. Less noise, fewer vanity metrics, and a shared understanding teams can trust."
            />

            <FeatureCard
              icon={<BarChart3 className="w-7 h-7 text-gray-800" />}
              backgcolor={"bg-indigo-50 border border-indigo-100"}
              title="Leadership Visibility"
              description="Clear, aggregated views of progress and risks without micromanagement — designed to evolve with feedback from early adopters."
            />
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        {/* Future Roadmap Section */}
        <div className="text-center mb-12 px-4">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Product Evolution Roadmap
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A thoughtful, outcome-led evolution — shaped by real usage and early
            adopters, not assumptions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-blue-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Phase 1 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-4">
                1
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                Focused Planning Core
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Outcome-driven planning with clean goal-to-work mapping, helping
                teams align on what truly matters.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold mb-4">
                2
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                Collaboration & Alignment
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shared context, goal-linked discussions, and dependency
                awareness — reducing ambiguity and misalignment.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold mb-4">
                3
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">
                Leadership & Portfolio Signals
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear, meaningful signals for leaders — enabling oversight and
                confidence without micromanagement.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs text-gray-500">
          This roadmap is indicative and will evolve based on pilot customers
          and early adopters.
        </p>
      </section>
      <section className="py-10 bg-white">
        {/* Email Capture */}
        <div className="max-w-xl mx-auto text-center border border-white sm:border-white md:border-blue-200 lg:border-blue-200 mb-4 p-6 rounded-lg md:bg-blue-50 lg:bg-blue-50">
          <p className="text-gray-600 mb-6">
            We're building this tool incrementally with real teams. Join early
            to shape what comes next.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
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
    </>
  );
}

/* ---------------- Components ---------------- */

function FeatureCard({ icon, title, description, backgcolor }) {
  return (
    <div
      className={
        backgcolor + " p-6 rounded-xl shadow-md hover:shadow-lg transition"
      }
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function KnowledgeCard({ title, items, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3 text-blue-600">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <a href={link} className="text-blue-600 font-medium hover:underline">
        Read More
      </a>
    </div>
  );
}
