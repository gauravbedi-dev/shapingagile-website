import React from "react";
import simplify from "../assets/images/simplify_agile.jpg";
import empower from "../assets/images/empower_teams.jpg";
import foster_learning from "../assets/images/foster_learning.jpg";

export default function Vision() {
  return (
    <>
      {/* Vision Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            To inspire a world where Agile is not just a framework, but a
            culture — where teams build with purpose, adapt with courage, and
            deliver with passion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              We strive to empower teams and organizations to evolve through
              Agile transformation — connecting strategy with execution, and
              turning collaboration into measurable success.
            </p>
            <div className="container mx-auto grid gap-8 justify-center  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 mb-6">
              <div className="flex items-center justify-center lg:justify-end h-full">
                <img
                  alt="Empower Teams"
                  src={empower}
                  className="h-40 sm:h-64 md:h-64 lg:h-56 w-auto"
                />
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center w-full max-w-md mx-auto lg:mx-0">
                <h3 className="font-semibold text-xl mb-2 text-blue-600">
                  Empower Teams
                </h3>
                <p className="text-gray-600">
                  Enable teams to work with autonomy, trust, and shared purpose.
                </p>
              </div>
            </div>
            <div className="container mx-auto grid gap-8 justify-center  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 mb-6">
              <div className="flex items-center justify-center lg:justify-end h-full">
                <img
                  alt="Simplify Agile"
                  src={simplify}
                  className="h-40 sm:h-64 md:h-64 lg:h-56 w-auto"
                />
              </div>
              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center w-full max-w-md mx-auto lg:mx-0">
                <h3 className="font-semibold text-xl mb-2 text-blue-600">
                  Simplify Agile
                </h3>
                <p className="text-gray-600">
                  Make Agile practices accessible, meaningful, and measurable
                  for everyone.
                </p>
              </div>
            </div>
            <div className="container mx-auto grid gap-8 justify-center  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 mb-6">
              <div className="flex items-center justify-center lg:justify-end h-full">
                <img
                  alt="Foster Learning"
                  src={foster_learning}
                  className="h-40 sm:h-64 md:h-64 lg:h-56 w-auto"
                />
              </div>

              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center w-full max-w-md mx-auto lg:mx-0">
                <h3 className="font-semibold text-xl mb-2 text-blue-600">
                  Foster Learning
                </h3>
                <p className="text-gray-600">
                  Promote a culture of curiosity, feedback, and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              The principles that guide every decision, every sprint, and every
              success.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Open communication and visible work help build trust across
                  teams.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We thrive on teamwork — individuals aligned by shared goals
                  and purpose.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Continuous Growth
                </h3>
                <p className="text-gray-600">
                  Every iteration brings new learning and improvement
                  opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Customer Value
                </h3>
                <p className="text-gray-600">
                  Deliver meaningful outcomes that truly solve customer
                  challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Ownership
                </h3>
                <p className="text-gray-600">
                  We take accountability and deliver with integrity, every time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  Trust
                </h3>
                <p className="text-gray-600">
                  We believe great teams are built on empowerment, not control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agile Principles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Our Agile Principles
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We live by simple yet powerful principles that drive how we think,
              build, and grow.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">Deliver value early and often.</p>
              </div>
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">
                  Embrace change — it’s the only constant.
                </p>
              </div>
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">
                  People and communication over rigid process.
                </p>
              </div>
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">
                  Working product over excessive documentation.
                </p>
              </div>
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">
                  Continuous feedback drives continuous improvement.
                </p>
              </div>
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <p className="text-gray-700">
                  Simplicity is the ultimate form of agility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
    </>
  );
}
