import React from "react";

export default function AgileValuesPrinciples() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agile Values & Principles
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive guide to the core values and principles that drive
            Agile success.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            {/* Agile Values */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                The Four Agile Values
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Individuals and interactions over processes and tools</li>
                <li>Working software over comprehensive documentation</li>
                <li>Customer collaboration over contract negotiation</li>
                <li>Responding to change over following a plan</li>
              </ul>
            </div>

            {/* Agile Principles */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                The Twelve Agile Principles
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  Customer satisfaction through early and continuous delivery of
                  valuable software
                </li>
                <li>Welcome changing requirements, even late in development</li>
                <li>
                  Deliver working software frequently, with a preference for
                  shorter timescales
                </li>
                <li>Business people and developers must work together daily</li>
                <li>
                  Build projects around motivated individuals, give them the
                  environment and support they need
                </li>
                <li>
                  Face-to-face conversation is the most effective form of
                  communication
                </li>
                <li>Working software is the primary measure of progress</li>
                <li>Agile processes promote sustainable development</li>
                <li>
                  Continuous attention to technical excellence and good design
                  enhances agility
                </li>
                <li>
                  Simplicity—the art of maximizing the amount of work not
                  done—is essential
                </li>
                <li>
                  The best architectures, requirements, and designs emerge from
                  self-organizing teams
                </li>
                <li>
                  Regularly reflect on how to become more effective, then tune
                  and adjust behavior accordingly
                </li>
              </ul>
            </div>

            {/* Applying Values */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Applying Values & Principles
              </h2>
              <p className="text-gray-600 mb-4">
                Learn how to implement Agile values and principles in your
                team’s daily work to improve collaboration, adaptability, and
                value delivery.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Daily standups for communication</li>
                <li>Iteration planning to manage scope and priorities</li>
                <li>Retrospectives to continuously improve team processes</li>
                <li>Collaborating with stakeholders throughout development</li>
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
