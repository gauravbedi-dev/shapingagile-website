import React, { useState } from "react";
import {
  Target,
  Layers,
  Sparkles,
  Bug,
  BarChart3,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import config from "../configs/config";
import productLogo from "../assets/images/works/Works_logo_title_landscape.svg";
import picture1 from "../assets/images/works/backlog_picture.png";
import picture2 from "../assets/images/works/boards_picture.png";

const futureItems = [
  {
    title: "Test Management (Newly Launched)",
    icon: Bug,
  },
  {
    title: "Capacity Based Planning",
    icon: BarChart3,
  },
  {
    title: "AI Automation",
    icon: Cpu,
  },
  {
    title: "Predictive Insights",
    icon: TrendingUp,
  },
];

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
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("✅ Thank you! We'll get in touch soon.");
        setEmail("");
      } else {
        setStatus("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      setStatus("⚠️ Server not reachable. Please try again later.");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A New Way to Build with Agile
          </h1>
          {/* Product Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-xl">
              <img
                src={productLogo}
                alt="Shaping Agile Works"
                className="h-16 md:h-20 object-contain transition duration-300"
              />
            </div>
          </div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Shaping Agile Works helps teams move from task execution to
            outcome-driven delivery.
          </p>
          <a
            href={config.WORKS_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Product
          </a>
        </motion.div>
      </section>

      {/* PRODUCT SCREENSHOT SECTION */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          Built for Clarity. Designed for Real Teams.
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience a clean, intuitive interface that aligns teams without
          unnecessary complexity.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white border border-blue-400 border-2 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
          >
            <img
              src={picture1}
              alt="Product Backlog"
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white border border-blue-400 border-2 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
          >
            <img
              src={picture2}
              alt="Sprint Board"
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY NOT JIRA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
            Why Teams Are Rethinking Traditional Tools
          </h2>

          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Agile tools were meant to simplify execution — but over time, many
            have become systems teams manage instead of systems that help teams
            deliver. A shift is underway.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-red-100"
            >
              <h3 className="font-semibold mb-6 text-red-500 text-lg">
                Traditional Tools
              </h3>

              <div className="space-y-4 text-gray-600 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-400">✖</span>
                  <p>Work is broken into tasks, but outcomes remain unclear</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-400">✖</span>
                  <p>Complex workflows that require constant management</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-400">✖</span>
                  <p>Heavy configuration before teams can even begin</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-400">✖</span>
                  <p>Leaders rely on reports instead of real signals</p>
                </div>
              </div>
            </motion.div>

            {/* Shaping Agile */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg border border-blue-100"
            >
              <h3 className="font-semibold mb-6 text-blue-600 text-lg">
                Shaping Agile Works
              </h3>

              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500">✔</span>
                  <p>Work aligned to clear outcomes and business goals</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500">✔</span>
                  <p>Simple, intuitive flows that teams adopt naturally</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500">✔</span>
                  <p>Start fast — evolve with real usage, not setup overhead</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-500">✔</span>
                  <p>Real-time visibility built into everyday work</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing line */}
          <p className="text-center text-gray-500 text-sm mt-12 max-w-3xl mx-auto">
            We've not just built another Agile tool — we’ve rethought how Agile
            should feel for teams and leaders alike.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-12">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target />}
              title="Outcome-Driven Planning"
              description="Align work with real business goals."
            />
            <FeatureCard
              icon={<Layers />}
              title="Clarity Over Complexity"
              description="Reduce noise and improve focus."
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Leadership Visibility"
              description="Clear insights without micromanagement."
            />
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          What’s Coming Next
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
          {futureItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-100 p-6 rounded-xl shadow-lg transition"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="mx-auto mb-4 text-purple-600 w-10 h-10" />
                </motion.div>

                <p className="font-medium text-gray-800">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Early Access</h2>
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
            className="px-4 py-2 rounded-lg text-black flex-1"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
            Get Access
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl transition"
    >
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
