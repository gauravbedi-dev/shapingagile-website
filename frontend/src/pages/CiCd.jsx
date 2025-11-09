import React from "react";

export default function CiCd() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CI/CD & Continuous Improvement
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn how continuous integration, continuous delivery, and a culture
            of improvement drive Agile success.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            {/* Continuous Integration */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Continuous Integration (CI)
              </h2>
              <p className="text-gray-600 mb-4">
                CI is the practice of automatically integrating code changes
                into a shared repository multiple times a day, ensuring quick
                detection of errors and maintaining a reliable build.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Automated testing with each code commit</li>
                <li>Integration with version control systems (Git)</li>
                <li>Early detection of defects and merge conflicts</li>
              </ul>
            </div>

            {/* Continuous Delivery/Deployment */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Continuous Delivery & Deployment (CD)
              </h2>
              <p className="text-gray-600 mb-4">
                CD ensures that code changes are automatically prepared for
                release to production, allowing faster and safer delivery of
                features and bug fixes.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Automated build and deployment pipelines</li>
                <li>Infrastructure as Code (IaC) for consistency</li>
                <li>Minimizing manual errors and reducing release risk</li>
              </ul>
            </div>

            {/* Continuous Improvement */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Continuous Improvement
              </h2>
              <p className="text-gray-600 mb-4">
                A mindset of ongoing improvement ensures teams learn from past
                experiences and optimize processes for efficiency and quality.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Retrospectives to identify improvements</li>
                <li>Metrics and KPIs to monitor progress</li>
                <li>Fostering a culture of learning and experimentation</li>
              </ul>
            </div>

            {/* Tools & Practices */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Tools & Practices
              </h2>
              <p className="text-gray-600 mb-4">
                Modern Agile teams use a combination of tools and practices to
                implement CI/CD and continuous improvement effectively.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Jenkins, GitLab CI, CircleCI for pipelines</li>
                <li>Automated testing frameworks (JUnit, Selenium)</li>
                <li>Monitoring and alerting systems (Prometheus, Grafana)</li>
                <li>
                  Retrospective and collaboration tools (Miro, MURAL,
                  Confluence)
                </li>
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
