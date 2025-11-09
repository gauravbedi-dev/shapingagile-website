import React from "react";

export default function AgileFundamentals() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agile Fundamentals
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A deep dive into the core principles, values, and practices that
            form the foundation of Agile Project Management.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            {/* History & Evolution */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                History & Evolution of Agile
              </h2>
              <p className="text-gray-600 mb-4">
                Agile emerged in the early 2000s as a response to rigid,
                plan-driven software development methods. The Agile Manifesto,
                created by 17 software practitioners, emphasized collaboration,
                adaptability, and delivering value incrementally.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>1990s: Lightweight software processes started to appear</li>
                <li>2001: Agile Manifesto formally introduced</li>
                <li>
                  Post-2001: Agile practices spread across industries beyond
                  software
                </li>
              </ul>
            </div>

            {/* Agile Manifesto & Values */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Agile Manifesto & Values
              </h2>
              <p className="text-gray-600 mb-4">
                The Agile Manifesto outlines four key values and twelve
                principles that guide Agile teams to prioritize individuals,
                interactions, and working software over rigid processes.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Individuals and interactions over processes and tools</li>
                <li>Working software over comprehensive documentation</li>
                <li>Customer collaboration over contract negotiation</li>
                <li>Responding to change over following a plan</li>
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Key Benefits of Agile
              </h2>
              <p className="text-gray-600 mb-4">
                Agile helps teams and organizations deliver higher value, adapt
                quickly to changes, and improve collaboration.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Faster time-to-market with iterative releases</li>
                <li>Higher customer satisfaction and engagement</li>
                <li>Improved team communication and morale</li>
                <li>Flexibility to adapt to changing requirements</li>
              </ul>
              <br />
              <a
                href="/offerings"
                className="text-blue-600 font-medium hover:underline mt-2 inline-block"
              >
                Back to Offerings
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
    </>
  );
}
