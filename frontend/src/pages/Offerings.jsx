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
            Purpose-built solutions and knowledge to help teams plan better,
            collaborate clearly, and deliver with confidence.
          </p>
        </div>
      </section>

      {/* Agile Project Management Tool */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Agile Project Management Tool
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
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

          {/* Email Capture */}
          <div className="max-w-xl mx-auto text-center">
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
        </div>
      </section>

      {/* Agile Knowledge Hub */}
      <section className="py-20 bg-gray-50" id="agile-topics">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Agile Knowledge Hub
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical insights on Agile thinking, frameworks, and continuous
              improvement — grounded in real-world application.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <KnowledgeCard
              title="Agile Fundamentals"
              items={[
                "Agile Manifesto & principles",
                "Iterative delivery & adaptive planning",
                "Benefits for teams and organizations",
              ]}
              link="/agile-fundamentals"
            />

            <KnowledgeCard
              title="Scrum & Kanban Deep Dive"
              items={[
                "Scrum roles & events",
                "Kanban flow optimization",
                "Choosing the right framework",
              ]}
              link="/scrum-kanban"
            />

            <KnowledgeCard
              title="Agile Values & Principles"
              items={[
                "Four Agile values",
                "Twelve guiding principles",
                "Applying values in daily work",
              ]}
              link="/agile-values-principles"
            />

            <KnowledgeCard
              title="CI/CD & Continuous Improvement"
              items={[
                "CI/CD pipelines",
                "Feedback loops",
                "Retrospectives & Kaizen",
              ]}
              link="/ci-cd"
            />
          </div>
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
