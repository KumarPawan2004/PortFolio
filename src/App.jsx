import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen font-sans antialiased overflow-hidden selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-white">
      
      {/* Ultra-Premium Ambient Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 dark:bg-blue-900/10 blur-[120px] animate-aurora"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/20 dark:bg-purple-900/10 blur-[120px] animate-aurora" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-emerald-400/10 dark:bg-emerald-900/5 blur-[100px] animate-aurora" style={{ animationDelay: '10s' }}></div>
      </div>

      <Navbar />
      <main className="z-10 flex flex-col items-center w-full relative">
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
      </main>
      <Footer />
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: theme === 'dark' ? {
            background: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          } : {
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            color: '#0f172a',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
          }
        }} 
      />
    </div>
  );
}

export default App;
