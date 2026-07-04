import React, { useState } from "react";
import pic from "../assets/photo.avif";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaServer, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    const cvPath = "Pawan_Kumar_CV.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Pawan_Kumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  // Buttery-smooth, slow fade transitions (no bounce)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 1, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div name="Home" className="w-full min-h-screen flex items-center pt-24 pb-10 px-4 md:px-20 relative">
      <div className="max-w-screen-xl container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Text Content */}
          <motion.div 
            className="md:w-1/2 space-y-8 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase text-xs md:text-sm bg-slate-200/50 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 transition-colors duration-500">
                Software Engineer
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-500">
                Pawan Kumar
              </h1>
              <h2 className="text-2xl md:text-4xl font-medium text-slate-600 dark:text-slate-400 tracking-tight transition-colors duration-500">
                Building elegant digital experiences.
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-500 font-light max-w-xl leading-relaxed transition-colors duration-500">
              Full-Stack Developer specializing in ASP.NET Core and React.js. Passionate about writing clean, scalable code and designing ultra-premium user interfaces.
            </motion.p>
            
            {/* Social Media & Tech Stack */}
            <motion.div variants={itemVariants} className="flex flex-col xl:flex-row gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors duration-500">Connect</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaGithub, link: "https://github.com/KumarPawan2004" },
                    { icon: FaLinkedin, link: "https://www.linkedin.com/in/pawan-kumar-581b5b246/" },
                    { icon: IoLogoYoutube, link: "https://www.youtube.com/@CODE_WITH_PAWAN" },
                    { icon: FaTelegram, link: "https://t.me/" },
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl text-slate-500 dark:text-slate-400 premium-glass p-3 rounded-full hover:text-slate-900 dark:hover:text-white transition-all duration-500"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors duration-500">Stack</h3>
                <div className="flex space-x-4">
                  {[FaReact, FaServer, FaDatabase, FaNodeJs].map((Icon, index) => (
                    <div 
                      key={index} 
                      className="p-3 text-slate-500 dark:text-slate-400 premium-glass rounded-full hover:text-slate-900 dark:hover:text-white transition-all duration-500 cursor-pointer"
                    >
                      <Icon className="text-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleDownloadCV} 
                className="premium-btn px-8 py-3 rounded-full font-medium text-sm tracking-wide flex items-center gap-2"
              >
                {isDownloaded ? "✓ Resume Downloaded" : "Download Resume"}
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Image Content */}
          <motion.div 
            className="md:w-1/2 flex justify-center order-1 md:order-2 mt-10 md:mt-0"
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            animate={{ 
              opacity: 1, 
              filter: "blur(0px)", 
              y: [20, -10, 20],
            }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
              filter: { duration: 1.5, ease: "easeOut", delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              {/* Ultra-subtle glow ring */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl scale-150 pointer-events-none transition-colors duration-500"></div>
              
              <img
                src={pic}
                className="absolute inset-0 w-full h-full object-cover rounded-full border border-slate-300 dark:border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                alt="Profile"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
