import React from "react";
import { useState } from "react";
import contactus from "../assets/images/contactus.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reach out to us with your questions, suggestions, or collaboration
            ideas.
          </p>
        </div>
      </section>

      {/* Contact Form & Address */}
      <div class="px-4 sm:px-6 lg:px-8">
        <section className="py-16 bg-white" id="contact-us">
          <div className="container mx-auto grid gap-8 justify-center  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4">
            <div className="flex items-center justify-center lg:justify-end h-full">
              <img
                alt="Contact Us"
                src={contactus}
                className="h-40 sm:h-64 md:h-80 lg:h-80 w-auto"
              />
            </div>
            <div className="container mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>

              {status && <p className="mt-4 text-gray-700">{status}</p>}
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
    </>
  );
}
