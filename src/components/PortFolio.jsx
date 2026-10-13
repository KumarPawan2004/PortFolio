import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaReact, FaRobot, FaGift, FaGithub, FaQrcode, FaCamera, FaDatabase, FaBrain } from "react-icons/fa";
import { SiDotnet, SiPython } from "react-icons/si";

function ScifiProjectCard({ project }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const colorMap = {
    cyan: {
      glow: "rgba(0,212,255,0.15)",
      iconBg: "bg-cyan-500/10",
      iconBorder: "border-cyan-500/25",
      iconColor: "text-cyan-400",
      tagBg: "bg-cyan-500/10",
      tagText: "text-cyan-300",
      tagBorder: "border-cyan-500/30",
    },
    purple: {
      glow: "rgba(168,85,247,0.15)",
      iconBg: "bg-purple-500/10",
      iconBorder: "border-purple-500/25",
      iconColor: "text-purple-400",
      tagBg: "bg-purple-500/10",
      tagText: "text-purple-300",
      tagBorder: "border-purple-500/30",
    },
    green: {
      glow: "rgba(0,255,136,0.15)",
      iconBg: "bg-green-500/10",
      iconBorder: "border-green-500/25",
      iconColor: "text-green-400",
      tagBg: "bg-green-500/10",
      tagText: "text-green-300",
      tagBorder: "border-green-500/30",
    },
    orange: {
      glow: "rgba(251,146,60,0.15)",
      iconBg: "bg-orange-500/10",
      iconBorder: "border-orange-500/25",
      iconColor: "text-orange-400",
      tagBg: "bg-orange-500/10",
      tagText: "text-orange-300",
      tagBorder: "border-orange-500/30",
    },
  };
  const c = colorMap[project.color] || colorMap.cyan;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="scifi-card group relative flex flex-col h-[480px] cursor-default"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 40px ${c.glow}, 0 0 80px ${c.glow}` }}
      />

      {/* Corner decorations */}
      <div className={`absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 ${c.iconBorder} opacity-60`} />
      <div className={`absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 ${c.iconBorder} opacity-60`} />
      <div className={`absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 ${c.iconBorder} opacity-60`} />
      <div className={`absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 ${c.iconBorder} opacity-60`} />

      {/* Inner content (elevated via translateZ) */}
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full relative z-10">

        {/* Icon header */}
        <div className={`h-24 flex items-center justify-between px-6 border-b border-white/5 ${c.iconBg}`}>
          <div className={`w-14 h-14 flex items-center justify-center rounded-xl border ${c.iconBorder} ${c.iconBg}`}>
            <project.icon className={`text-2xl ${c.iconColor}`} />
          </div>
          <span className={`font-orbitron text-[10px] ${c.tagText} uppercase tracking-widest border ${c.tagBorder} px-2.5 py-1 rounded-full ${c.tagBg}`}>
            {project.badge || `PROJECT_${String(project.id).padStart(2, "0")}`}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h2>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techList.map((t, i) => (
              <span
                key={i}
                className={`font-orbitron text-[9px] px-2 py-0.5 rounded border ${c.tagBorder} ${c.tagBg} ${c.tagText} uppercase tracking-widest`}
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-grow font-light">
            {project.desc}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-4">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 flex items-center justify-center gap-2 rounded-xl border ${c.iconBorder} ${c.tagBg} ${c.iconColor} font-orbitron text-xs uppercase tracking-widest hover:opacity-80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]`}
              >
                <span>Live Project</span>
                <FaExternalLinkAlt size={10} />
              </a>
            ) : (
              <div className="w-full py-3 border border-slate-700/50 rounded-xl text-center text-slate-500 font-orbitron text-xs uppercase tracking-widest">
                {project.status || "Internal Engineering"}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PortFolio() {
  const projects = [
    {
      id: 1,
      name: "Jankoti Platform",
      badge: "Production Live",
      techList: ["ASP.NET Core", "SQL Server", "C#", "Admin Dashboard"],
      desc: "Built and deployed a full-stack ASP.NET Core web application from scratch to production. Developed authentication system, backend APIs, SQL Server integration, and platform admin management.",
      icon: SiDotnet,
      demo: "https://entrepreneur.jankoti.com",
      color: "cyan",
    },
    {
      id: 2,
      name: "IDEA-THON 2026 Platform",
      badge: "Live Event System",
      techList: ["React.js", "QR Attendance", "Presentation Portal", "Vercel"],
      desc: "Official event platform for IDEA-THON 2026 (Dept. of Advanced Computing × YBN Tech Club). Features team/individual registration, presentation upload portal, and real-time QR attendance scanner.",
      icon: FaQrcode,
      demo: "https://ideathon26.vercel.app",
      color: "purple",
    },
    {
      id: 3,
      name: "MoodSync AI – Facial Emotion Detector",
      badge: "Computer Vision",
      techList: ["React.js", "Face Detection", "Computer Vision", "TensorFlow"],
      desc: "Captures live photo/webcam stream and predicts user mood in real time using facial expression AI. Integrates facial landmark tracking and interactive instant mood feedback.",
      icon: FaRobot,
      demo: "https://mood-sync-ai-com.vercel.app/",
      color: "green",
    },
    {
      id: 4,
      name: "Passport Photo AI Converter",
      badge: "AI Vision Tool",
      techList: ["AI Image Processing", "Face Detection", "React.js", "Auto-Crop"],
      desc: "Automated web application that converts any uploaded photo into compliant passport-size photos using AI face detection, cropping, background handling, and one-click export.",
      icon: FaCamera,
      status: "AI Photo Tool",
      color: "cyan",
    },
    {
      id: 5,
      name: "Wisher – Birthday Wishing App",
      badge: "Interactive Web",
      techList: ["React.js", "Vite", "Responsive UI", "Animated Greetings"],
      desc: "Interactive application for designing and dispatching customized, beautifully animated greeting pages with shareable links and personalized experiences.",
      icon: FaGift,
      demo: "https://wisher-application.vercel.app/",
      color: "orange",
    },
    {
      id: 6,
      name: "University Management System (QA)",
      badge: "QA / Testing",
      techList: ["React.js", "PostgreSQL", "End-to-End Testing", "UI/UX QA"],
      desc: "Contributed as Quality Assurance Tester. Validated end-to-end user flows, identified UI glitches, broken flows, and edge cases, ensuring production release stability.",
      icon: FaReact,
      status: "QA & Stability Verified",
      color: "purple",
    },
    {
      id: 7,
      name: "Data Analysis Notebooks (Kaggle)",
      badge: "7+ Upvotes • 14 Forks",
      techList: ["Python", "Pandas", "NumPy", "EDA", "Sentiment Analysis"],
      desc: "Published exploratory data analysis on Amazon Sales Data and Social Media Sentiment Analysis with data cleaning, visualization, and statistical modeling.",
      icon: SiPython,
      status: "Kaggle Community Recognized",
      color: "green",
    },
    {
      id: 8,
      name: "BCI for Smart Wheelchair Applications",
      badge: "Research Project",
      techList: ["Brain-Computer Interface", "EEG Controls", "Assistive Tech", "IoT"],
      desc: "Conducted research on Brain-Computer Interface (BCI) accessibility solutions. Investigated EEG-based wheelchair control systems and assistive smart-mobility frameworks.",
      icon: FaBrain,
      status: "Research Paper Study",
      color: "cyan",
    },
  ];

  return (
    <div name="Portfolio" className="w-full py-32 px-4 md:px-20 relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center gap-4"
        >
          <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
            Projects.build()
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-orbitron">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h1>
          <div className="section-line" />
          <p className="text-slate-400 mt-2 max-w-xl font-light text-sm">
            8 live platforms, computer vision AI tools, research, and enterprise systems from my engineering portfolio.
          </p>
        </motion.div>

        {/* Grid - 8 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: "easeOut" }}
              style={{ perspective: 1200 }}
            >
              <ScifiProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/KumarPawan2004"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn px-8 py-3.5 rounded-xl flex items-center gap-3 font-orbitron text-xs uppercase tracking-widest"
          >
            <FaGithub size={16} />
            Explore 48+ Public Repositories
            <FaExternalLinkAlt size={10} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default PortFolio;
