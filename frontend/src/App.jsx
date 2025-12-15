import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Offerings from "./pages/Offerings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AgileFundamentals from "./pages/AgileFundamentals";
import ScrumKanban from "./pages/ScrumKanban";
import AgileValuesPrinciples from "./pages/AgileValuesPrinciples";
import CiCd from "./pages/CiCd";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agile-fundamentals" element={<AgileFundamentals />} />
          <Route path="/scrum-kanban" element={<ScrumKanban />} />
          <Route
            path="/agile-values-principles"
            element={<AgileValuesPrinciples />}
          />
          <Route path="/ci-cd" element={<CiCd />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
