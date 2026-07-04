import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaServer, FaReact, FaRobot, FaGift } from "react-icons/fa";

function SpotlightCard({ project }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.4]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="spotlight-card flex flex-col h-[400px] transition-shadow duration-500 overflow-hidden"
    >
      {/* Glare / Mirror Effect Layer */}
      <motion.div
        style={{
          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 25%, transparent 30%)",
          left: glareX,
          top: glareY,
          transform: "translate(-50%, -50%) rotate(45deg) scale(2.5)",
          opacity: glareOpacity,
          pointerEvents: "none",
        }}
        className="absolute w-[200%] h-[200%] z-20 mix-blend-overlay"
      ></motion.div>

      {/* Inner wrapper to block spotlight from flooding center */}
      <div 
        className="absolute inset-[1px] bg-slate-50 dark:bg-[#0a0a0a] rounded-[1.45rem] z-0 transition-colors duration-500"
      ></div>
      
      <div 
        className="relative z-10 flex flex-col h-full"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Subtle header area */}
        <div className="h-32 w-full flex items-center justify-center p-6 border-b border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02]">
          <project.icon className="text-4xl text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500" />
        </div>
        
        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors duration-500">{project.name}</h2>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-4">
            {project.tech}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed font-light transition-colors duration-500">
            {project.desc}
          </p>
          
          <div className="mt-auto">
            {project.demo ? (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="premium-btn w-full py-3 flex items-center justify-center gap-2 text-sm rounded-xl"
              >
                <span>View Project</span>
                <FaExternalLinkAlt size={12} className="opacity-70" />
              </a>
            ) : (
              <div className="w-full py-3 bg-slate-200 dark:bg-white/5 text-slate-500 border border-slate-300 dark:border-white/5 rounded-xl text-center text-sm cursor-not-allowed transition-colors duration-500">
                Internal Repository
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
      tech: "ASP.NET Core • SQL", 
      desc: "Built and deployed a full-stack ASP.NET Core web application. Features a robust authentication system, backend APIs, and an admin dashboard.",
      icon: FaServer,
      demo: "https://www.jankoti.com/"
    },
    { 
      id: 2, 
      name: "Portfolio Framework", 
      tech: "React.js • Tailwind", 
      desc: "Designed and developed a highly interactive, responsive portfolio. Showcases projects, technical skills, and achievements.",
      icon: FaReact,
      demo: "https://kumarpawanthakur.netlify.app/"
    },
    { 
      id: 3, 
      name: "Mood Sync AI", 
      tech: "React.js • AI", 
      desc: "An AI-powered web app that captures facial expressions in real-time through the webcam and accurately predicts the user's current mood.",
      icon: FaRobot,
      demo: "https://mood-sync-ai-com.vercel.app/"
    },
    { 
      id: 4, 
      name: "Wisher App", 
      tech: "React.js • Vite", 
      desc: "An interactive and engaging web application designed to send customized, beautifully animated wishes and greetings to users.",
      icon: FaGift,
      demo: "https://wisher-application.vercel.app/"
    }
  ];

  return (
    <div name="Portfolio" className="w-full py-32 px-4 md:px-20 relative z-10">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-4 transition-colors duration-500">Work</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            Featured Projects
          </h1>
          <p className="text-slate-600 dark:text-slate-500 mt-4 max-w-2xl font-light transition-colors duration-500">
            A selection of recent work and engineering challenges I've tackled.
          </p>
        </div>

        {/* ELEGANT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              style={{ perspective: 1200 }}
            >
              <SpotlightCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
