import React, { useState } from "react";
import heroImg from "../assets/profile_hero.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex(i => (i + 1) % texts.length);
    }

    setDisplayText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className="text-cyan-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "Pawan_Kumar_CV.pdf";
    link.download = "Pawan_Kumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const socials = [
    { icon: FaGithub, link: "https://github.com/KumarPawan2004", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/pawan-kumar-581b5b246/", label: "LinkedIn" },
    { icon: IoLogoYoutube, link: "https://youtube.com/@pawanraj-codewithpawan.?si=Te4roFGRJ_y1herd", label: "Code with Pawan" },
    { icon: IoLogoYoutube, link: "https://youtube.com/@tune_with_pawan?si=2wfAKVWLjhpJh4QZ", label: "Tune with Pawan" },
    { icon: FaInstagram, link: "https://www.instagram.com/i_t_s_m_a_s_t_e_r?srtk=YnNpcnMzM25udjEz", label: "Instagram" },
  ];

  const stackIcons = [
    { icon: SiDotnet, label: "ASP.NET Core", color: "#7c3aed" },
    { icon: FaReact, label: "React.js", color: "#00d4ff" },
    { icon: FaDatabase, label: "SQL Server", color: "#00ff88" },
    { icon: FaNodeJs, label: "Node.js", color: "#68d391" },
  ];

  return (
    <div name="Home" className="w-full min-h-screen flex items-center pt-28 pb-10 px-4 md:px-20 relative z-10">
      {/* Radial glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-screen-xl container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 space-y-8 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 font-orbitron text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400" />
                Software Engineer // Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight font-orbitron">
                PAWAN
                <br />
                <span className="relative">
                  KUMAR THAKUR
                  <div className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent" />
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-slate-400 mt-4">
                <TypewriterText texts={[
                  "Full-Stack Developer",
                  "ASP.NET Core & React.js Specialist",
                  "AI & Computer Vision Enthusiast",
                  "Tech Content Creator @ YouTube",
                  "Building scalable production architectures"
                ]} />
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-base text-slate-400 font-light max-w-xl leading-relaxed">
              Final-year Software Engineering student and Full Stack Developer specializing in{" "}
              <span className="text-cyan-400 font-medium">ASP.NET Core</span>,{" "}
              <span className="text-purple-400 font-medium">React.js</span>, and{" "}
              <span className="text-emerald-400 font-medium">SQL Server</span> with 1+ year of production internship experience. Built 6+ live applications backed by 48+ open-source GitHub repositories.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-6 sm:gap-8 flex-wrap">
              {[
                { value: "1+ Yr", label: "Internship Exp." },
                { value: "6+", label: "Live Apps" },
                { value: "48+", label: "GitHub Repos" },
                { value: "2", label: "YouTube Channels" },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="stat-number text-2xl md:text-3xl">{stat.value}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest mt-1 font-orbitron">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Socials + Channels + Stack */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="font-orbitron text-[10px] text-cyan-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  Connect & Social Channels
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="px-3 py-2 flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300 text-xs font-orbitron"
                    >
                      <s.icon className="text-base text-cyan-400" />
                      <span className="hidden sm:inline">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-orbitron text-[10px] text-slate-500 uppercase tracking-[0.2em]">Core Tech Stack</h3>
                <div className="flex space-x-3">
                  {stackIcons.map((s, i) => (
                    <div
                      key={i}
                      title={s.label}
                      className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/30 text-slate-400 hover:scale-110 transition-all duration-300 text-xl cursor-default"
                      style={{ "--hover-color": s.color }}
                      onMouseEnter={e => e.currentTarget.style.color = s.color}
                      onMouseLeave={e => e.currentTarget.style.color = ""}
                    >
                      <s.icon />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={handleDownloadCV}
                className="cyber-btn-solid px-8 py-3.5 rounded-xl font-orbitron text-xs tracking-widest uppercase flex items-center gap-2"
              >
                {isDownloaded ? "✓ Downloaded" : "Download CV"}
              </motion.button>
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                href="#Contact"
                className="cyber-btn px-8 py-3.5 rounded-xl font-orbitron text-xs tracking-widest uppercase flex items-center"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Main Profile Photo (Formal Suit Portrait) */}
          <motion.div
            className="md:w-1/2 flex justify-center order-1 md:order-2 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
              
              {/* Outer rotating ring */}
              <div className="absolute inset-0 ring-rotate">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200" cy="200" r="190"
                    fill="none"
                    stroke="url(#ringGrad1)"
                    strokeWidth="1.5"
                    strokeDasharray="25 15"
                  />
                  <defs>
                    <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Inner reverse ring */}
              <div className="absolute inset-6 ring-rotate-reverse">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle
                    cx="150" cy="150" r="140"
                    fill="none"
                    stroke="url(#ringGrad2)"
                    strokeWidth="1.5"
                    strokeDasharray="8 20"
                  />
                  <defs>
                    <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Glow blob */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl scale-125 pointer-events-none animate-aurora" />

              {/* Corner accent marks */}
              {[0, 90, 180, 270].map((deg, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4"
                  style={{
                    transform: `rotate(${deg}deg) translateX(190px) translateY(-50%)`,
                    transformOrigin: "0 50%",
                  }}
                >
                  <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,212,255,1)] animate-pulse" />
                </div>
              ))}

              {/* Profile image container */}
              <motion.div
                className="absolute inset-[10%] rounded-full overflow-hidden shadow-2xl shadow-cyan-500/20"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 z-10 pointer-events-none" />
                <img
                  src={heroImg}
                  className="w-full h-full object-cover rounded-full"
                  alt="Pawan Kumar Thakur"
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/15 via-transparent to-purple-500/15 z-10 pointer-events-none" />
                {/* Scan line */}
                <div className="absolute inset-0 rounded-full scan-line z-20 pointer-events-none opacity-40 hover:opacity-100 transition-opacity" />
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="font-orbitron text-[10px] text-slate-500 uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-10 bg-gradient-to-b from-cyan-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
