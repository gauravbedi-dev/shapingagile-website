import React from "react";

export default function ScrumKanban() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Scrum & Kanban
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Understand the key Agile frameworks and how to implement them
            effectively in your team.
          </p>
        </div>
      </section>

      {/* Scrum Section */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Scrum Framework
              </h2>
              <p className="text-gray-600 mb-4">
                Scrum is an Agile framework for delivering complex projects
                through iterative sprints and collaborative teamwork.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Roles: Product Owner, Scrum Master, Development Team</li>
                <li>
                  Events: Sprint Planning, Daily Standup, Sprint Review,
                  Retrospective
                </li>
                <li>Artifacts: Product Backlog, Sprint Backlog, Increment</li>
              </ul>
            </div>

            {/* Kanban Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Kanban Framework
              </h2>
              <p className="text-gray-600 mb-4">
                Kanban focuses on visualizing work, limiting work-in-progress,
                and optimizing flow for continuous delivery.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Kanban Board setup and workflow stages</li>
                <li>Setting WIP limits and monitoring flow</li>
                <li>Improving delivery speed and predictability</li>
              </ul>
            </div>

            {/* Comparison Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Scrum vs Kanban
              </h2>
              <p className="text-gray-600 mb-4">
                Compare both frameworks and understand when to use each based on
                team needs and project complexity.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  Scrum: Iterative sprints, predefined roles, timeboxed events
                </li>
                <li>
                  Kanban: Continuous delivery, flexible roles, flow-based
                  planning
                </li>
                <li>Hybrid approaches for larger organizations</li>
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
