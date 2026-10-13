import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Certifications from "./components/Certifications";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="relative min-h-screen font-sans antialiased overflow-hidden bg-[#020409] text-slate-100">

      {/* ── Particle System (canvas) ── */}
      <ParticleBackground />

      {/* ── 3D Grid Overlay ── */}
      <div className="fixed inset-0 pointer-events-none z-0 scifi-grid opacity-100" />

      {/* ── Ambient Neon Glow Orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left cyan orb */}
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-500/5 blur-[160px] animate-aurora" />
        {/* Bottom-right purple orb */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[160px] animate-aurora" style={{ animationDelay: "7s" }} />
        {/* Center green faint orb */}
        <div className="absolute top-[40%] left-[40%] w-[20vw] h-[20vw] rounded-full bg-emerald-500/3 blur-[120px] animate-aurora" style={{ animationDelay: "14s" }} />
      </div>

      {/* ── Data Stream Lines ── */}
      {[15, 30, 50, 70, 85].map((left, i) => (
        <div
          key={i}
          className="data-stream"
          style={{
            left: `${left}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <Navbar />
      <main className="z-10 flex flex-col items-center w-full relative">
        <Home />
        <About />
        <PortFolio />
        <Certifications />
        <Experiance />
        <Contact />
      </main>
      <Footer />

      {/* ── Toast Notifications ── */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(2, 8, 20, 0.95)",
            backdropFilter: "blur(20px)",
            color: "#00d4ff",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            borderRadius: "12px",
            fontFamily: "'Orbitron', monospace",
            fontSize: "12px",
            letterSpacing: "0.05em",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
          },
        }}
      />
    </div>
  );
}

export default App;
