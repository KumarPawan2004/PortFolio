import React, { useMemo } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Programming Languages",
    color: "cyan",
    skills: ["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend Architecture",
    color: "purple",
    skills: ["React.js", "Next.js", "React Native", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material UI (MUI)"],
  },
  {
    label: "Backend & Systems",
    color: "green",
    skills: ["ASP.NET Core", "Node.js", "Express.js", "REST API Design", "JWT Authentication", "Entity Framework"],
  },
  {
    label: "Databases & Storage",
    color: "orange",
    skills: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    label: "AI, Vision & Data Analysis",
    color: "pink",
    skills: ["OpenCV", "Face Detection", "Image Processing", "TensorFlow (Basics)", "Pandas", "NumPy", "Matplotlib", "Exploratory Data Analysis (EDA)"],
  },
  {
    label: "Cloud, DevOps & Platforms",
    color: "yellow",
    skills: ["Git", "GitHub", "Docker", "Jenkins", "CI/CD", "AWS", "Azure", "GCP", "Kubernetes (Familiar)", "Linux", "VS Code", "Postman", "Swagger", "Vercel", "Netlify", "Figma"],
  },
];

const colorMap = {
  cyan:   { border: "border-cyan-500/25",   bg: "bg-cyan-500/10",   text: "text-cyan-400",   labelBorder: "border-cyan-500/40",   glow: "hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]",   tag: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",   dot: "bg-cyan-400 shadow-cyan-400" },
  purple: { border: "border-purple-500/25", bg: "bg-purple-500/10", text: "text-purple-400", labelBorder: "border-purple-500/40", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]", tag: "bg-purple-500/10 border-purple-500/25 text-purple-300", dot: "bg-purple-400 shadow-purple-400" },
  green:  { border: "border-green-500/25",  bg: "bg-green-500/10",  text: "text-green-400",  labelBorder: "border-green-500/40",  glow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]",   tag: "bg-green-500/10 border-green-500/25 text-green-300",  dot: "bg-green-400 shadow-green-400" },
  orange: { border: "border-orange-500/25", bg: "bg-orange-500/10", text: "text-orange-400", labelBorder: "border-orange-500/40", glow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]",  tag: "bg-orange-500/10 border-orange-500/25 text-orange-300", dot: "bg-orange-400 shadow-orange-400" },
  pink:   { border: "border-pink-500/25",   bg: "bg-pink-500/10",   text: "text-pink-400",   labelBorder: "border-pink-500/40",   glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]",  tag: "bg-pink-500/10 border-pink-500/25 text-pink-300",   dot: "bg-pink-400 shadow-pink-400" },
  yellow: { border: "border-yellow-500/25", bg: "bg-yellow-500/10", text: "text-yellow-400", labelBorder: "border-yellow-500/40", glow: "hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]",   tag: "bg-yellow-500/10 border-yellow-500/25 text-yellow-300", dot: "bg-yellow-400 shadow-yellow-400" },
};

// All skills flattened for marquee
const allSkills = skillCategories.flatMap(c => c.skills.map(s => ({ name: s, color: c.color })));

function Experiance() {
  return (
    <div name="Experience" className="w-full py-32 px-4 md:px-20 relative z-10">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center gap-4"
        >
          <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400">
            Skills.matrix()
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-orbitron">
            TECHNICAL <span className="text-purple-400">ARSENAL</span>
          </h1>
          <div className="section-line" style={{ background: "linear-gradient(90deg, #7c3aed, #a855f7)" }} />
          <p className="text-slate-400 mt-2 max-w-xl font-light text-sm">
            Complete technology stack from languages and AI/Computer Vision to Cloud DevOps and backend systems.
          </p>
        </motion.div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => {
            const c = colorMap[category.color];
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: catIndex * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative p-6 rounded-2xl border ${c.border} bg-[#020409] ${c.glow} transition-all duration-400 group flex flex-col`}
              >
                {/* Subtle bg gradient */}
                <div className={`absolute inset-0 rounded-2xl ${c.bg} opacity-30`} />

                {/* Corner marks */}
                <div className={`absolute top-2 left-2 w-4 h-4 border-t border-l ${c.labelBorder} opacity-40`} />
                <div className={`absolute bottom-2 right-2 w-4 h-4 border-b border-r ${c.labelBorder} opacity-40`} />

                <div className="relative flex flex-col h-full">
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`w-2 h-2 rounded-full ${c.dot} shadow-[0_0_8px_currentColor] animate-pulse`} />
                    <h3 className={`font-orbitron text-xs font-bold uppercase tracking-widest ${c.text}`}>
                      {category.label}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-lg border ${c.tag} font-medium transition-all duration-200 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="holo-glass rounded-2xl p-8"
        >
          <h3 className="font-orbitron text-xs text-cyan-400 uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Core Proficiency Levels
          </h3>
          <div className="space-y-5">
            {[
              { label: "ASP.NET Core & C#", pct: 90, color: "#00d4ff" },
              { label: "React.js & Next.js Ecosystem", pct: 92, color: "#a855f7" },
              { label: "SQL Server & Database Architecture", pct: 85, color: "#00ff88" },
              { label: "AI, OpenCV & Computer Vision", pct: 78, color: "#fb923c" },
              { label: "Docker, CI/CD & DevOps", pct: 75, color: "#f472b6" },
              { label: "Node.js & REST API Security (JWT)", pct: 84, color: "#eab308" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                  <span className="font-orbitron text-xs font-bold" style={{ color: item.color }}>{item.pct}%</span>
                </div>
                <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
                      boxShadow: `0 0 10px ${item.color}50`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infinite Skill Marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020409] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020409] to-transparent z-10 pointer-events-none" />
          <div className="marquee-track gap-4">
            {[...allSkills, ...allSkills].map((skill, i) => {
              const c = colorMap[skill.color];
              return (
                <span
                  key={i}
                  className={`flex-shrink-0 px-4 py-2 rounded-full border ${c.tag} font-orbitron text-[10px] uppercase tracking-widest`}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experiance;
