import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaAward, FaUniversity, FaCode, FaUsers, FaCheckCircle, FaLaptopCode, FaYoutube } from "react-icons/fa";
import { SiGoogleanalytics, SiDotnet, SiReact } from "react-icons/si";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function SectionLabel({ text, color = "cyan" }) {
  const colorMap = {
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/5",
    green: "text-green-400 border-green-500/30 bg-green-500/5",
  };
  return (
    <span className={`font-orbitron text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border ${colorMap[color]}`}>
      {text}
    </span>
  );
}

function TimelineDot({ active = false, color = "cyan" }) {
  const colorMap = {
    cyan: "bg-cyan-400 shadow-cyan-400/80",
    purple: "bg-purple-400 shadow-purple-400/80",
    slate: "bg-slate-600 shadow-slate-600/40",
  };
  return (
    <span
      className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${colorMap[color]} ${active ? "shadow-[0_0_10px_currentColor]" : ""}`}
    />
  );
}

function About() {
  return (
    <div name="About" className="w-full py-32 px-4 md:px-20 relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center gap-4"
        >
          <SectionLabel text="System.Bio()" color="purple" />
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-orbitron">
            ABOUT <span className="text-purple-400">ME</span>
          </h1>
          <div className="section-line" style={{ background: "linear-gradient(90deg, #a855f7, #7c3aed)" }} />
          <p className="text-slate-400 mt-2 max-w-xl font-light text-sm">
            Professional journey, production engineering experience, and university leadership matrix.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* ── Experience Card (Full details from CV) ── */}
          <motion.div
            variants={cardVariants}
            className="scifi-card corner-accent holo-glass p-8 rounded-2xl h-full hover:border-cyan-400/30 transition-all duration-500"
          >
            <h2 className="font-orbitron text-sm font-bold mb-8 text-white flex items-center gap-3 tracking-widest uppercase">
              <FaBriefcase className="text-cyan-400 text-xl" />
              <span>Production <span className="text-cyan-400">Experience</span></span>
            </h2>

            <div className="relative border-l border-cyan-500/20 ml-3 space-y-12">
              {/* Role 1: .NET Developer Intern */}
              <div className="relative pl-8 group">
                <TimelineDot active color="cyan" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      .NET Developer Intern
                    </h3>
                    <h4 className="text-cyan-400 font-medium text-sm mt-1">Eimple Labs · Remote</h4>
                  </div>
                  <span className="font-orbitron text-[10px] text-cyan-300 uppercase tracking-widest border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 rounded">
                    August 2025 – 2026
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-slate-400 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Developed backend modules and RESTful APIs using <strong className="text-slate-200">ASP.NET Core</strong> and <strong className="text-slate-200">SQL Server</strong> for production systems.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Implemented secure <strong className="text-slate-200">Email Notification</strong> and <strong className="text-slate-200">OTP-based Authentication</strong> systems.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Integrated <strong className="text-slate-200">Google Analytics</strong> for user behavior tracking and business reporting.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Improved backend query performance and API response times through database indexing and profiling.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2: React Developer Intern */}
              <div className="relative pl-8 group">
                <TimelineDot color="purple" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      React Developer Intern
                    </h3>
                    <h4 className="text-purple-400 font-medium text-sm mt-1">Eimple Labs · Remote</h4>
                  </div>
                  <span className="font-orbitron text-[10px] text-purple-300 uppercase tracking-widest border border-purple-500/40 bg-purple-500/10 px-2.5 py-1 rounded">
                    June 2024 – July 2025
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-slate-400 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Developed a responsive admin dashboard using <strong className="text-slate-200">React.js</strong> and <strong className="text-slate-200">Material UI (MUI)</strong>, improving internal team workflow efficiency.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Built and maintained reusable UI components, reducing frontend development time for new features.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Integrated REST APIs to enable real-time data rendering across dashboard modules.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Debugged and optimized application performance, enhancing page load speed and UI responsiveness.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── Education Card (Full details from CV) ── */}
          <motion.div
            variants={cardVariants}
            className="scifi-card corner-accent holo-glass p-8 rounded-2xl h-full hover:border-purple-400/30 transition-all duration-500"
          >
            <h2 className="font-orbitron text-sm font-bold mb-8 text-white flex items-center gap-3 tracking-widest uppercase">
              <FaUniversity className="text-purple-400 text-xl" />
              <span>Academic <span className="text-purple-400">Path</span></span>
            </h2>

            <div className="relative border-l border-purple-500/20 ml-3 space-y-10">
              {/* Edu 1: B.Tech */}
              <div className="relative pl-8 group">
                <TimelineDot active color="purple" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-purple-400 font-medium text-sm mt-0.5">Computer Science / Software Engineering</p>
                    <p className="text-slate-300 text-xs mt-1">YBN University · Ranchi, Jharkhand</p>
                  </div>
                  <span className="font-orbitron text-[10px] text-purple-300 uppercase tracking-widest border border-purple-500/40 bg-purple-500/10 px-2.5 py-1 rounded">
                    2023 – 2027
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOPs", "System Design"].map(s => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded border border-purple-500/30 text-purple-300 font-orbitron bg-purple-500/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Edu 2: Intermediate */}
              <div className="relative pl-8 group">
                <TimelineDot color="slate" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">Intermediate (Class 12th) - Mathematics</h3>
                    <p className="text-slate-400 font-medium text-sm mt-0.5">Saraswati Sishu Vidya Mandir, Dhurwa</p>
                    <p className="text-slate-500 text-xs mt-0.5">Ranchi, Jharkhand</p>
                  </div>
                  <span className="font-orbitron text-[10px] text-slate-400 uppercase tracking-widest border border-slate-700/50 px-2 py-1 rounded">
                    2021 – 2023
                  </span>
                </div>
              </div>

              {/* Edu 3: Matriculation */}
              <div className="relative pl-8 group">
                <TimelineDot color="slate" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">Secondary School (Class 10th) - Mathematics</h3>
                    <p className="text-slate-400 font-medium text-sm mt-0.5">St. Columbus School, Murgu</p>
                    <p className="text-slate-500 text-xs mt-0.5">Ranchi, Jharkhand</p>
                  </div>
                  <span className="font-orbitron text-[10px] text-slate-400 uppercase tracking-widest border border-slate-700/50 px-2 py-1 rounded">
                    2020 – 2021
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Leadership & Activities (ALL 6 items from CV) ── */}
          <motion.div
            variants={cardVariants}
            className="scifi-card holo-glass p-8 rounded-2xl md:col-span-2 hover:border-green-400/20 transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-white/5 gap-4">
              <h2 className="font-orbitron text-sm font-bold text-white flex items-center gap-3 tracking-widest uppercase">
                <FaAward className="text-green-400 text-xl" />
                <span>Leadership, Activities <span className="text-green-400">&</span> Open Source</span>
              </h2>
              <span className="font-orbitron text-[10px] text-green-400 uppercase tracking-widest border border-green-500/30 px-3 py-1 rounded-full bg-green-500/5">
                6 Key Highlights
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaAward,
                  role: "Head of Event",
                  event: "IDEA-THON 2026",
                  org: "Dept. of Advanced Computing × YBN Tech Club",
                  desc: "Overseeing complete platform delivery (ideathon26.vercel.app), registration flow, presentation portal, and on-ground execution.",
                  color: "cyan",
                },
                {
                  icon: FaUsers,
                  role: "Organizing Member",
                  event: "Design Hackathon 2024",
                  org: "YBN University",
                  desc: "Coordinated technical event flow, problem statements, participant onboarding, and live judging panels.",
                  color: "purple",
                },
                {
                  icon: FaCode,
                  role: "Active Member",
                  event: "Coding Club",
                  org: "YBN University",
                  desc: "Regular competitive programming contributor, organizing peer learning sessions and technical workshops.",
                  color: "green",
                },
                {
                  icon: FaLaptopCode,
                  role: "Participant",
                  event: "National Hackathons",
                  org: "Arka Jain University",
                  desc: "Built rapid tech prototypes in intensive 24-48h hackathons solving real-world domain challenges.",
                  color: "cyan",
                },
                {
                  icon: FaCheckCircle,
                  role: "Open Source Creator",
                  event: "48+ Public Repositories",
                  org: "GitHub Profile @KumarPawan2004",
                  desc: "Maintains active open-source repositories spanning full-stack frameworks, AI computer vision, and utilities.",
                  color: "purple",
                },
                {
                  icon: FaYoutube,
                  role: "Tech Content Creator",
                  event: "2 Active YouTube Channels",
                  org: "@pawanraj-codewithpawan & @tune_with_pawan",
                  desc: "Creates coding education blended with tech content, teaching software engineering, coding concepts, and programming humor.",
                  color: "green",
                },
              ].map((item, i) => {
                const colorMap = {
                  cyan: { border: "border-cyan-500/30", text: "text-cyan-400", bg: "bg-cyan-500/5", glow: "hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]" },
                  purple: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/5", glow: "hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
                  green: { border: "border-green-500/30", text: "text-green-400", bg: "bg-green-500/5", glow: "hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]" },
                };
                const c = colorMap[item.color];
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-6 rounded-xl border ${c.border} ${c.bg} ${c.glow} transition-all duration-300 flex flex-col`}
                  >
                    {/* corner marks */}
                    <div className={`absolute top-2 left-2 w-3.5 h-3.5 border-t border-l ${c.border}`} />
                    <div className={`absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r ${c.border}`} />

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${c.border} ${c.bg}`}>
                        <item.icon className={`${c.text} text-sm`} />
                      </div>
                      <span className={`${c.text} font-orbitron text-[10px] font-bold uppercase tracking-widest`}>
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold text-sm mb-1">{item.event}</h3>
                    <p className="text-slate-400 text-xs font-mono mb-2">{item.org}</p>
                    <p className="text-slate-400 text-xs leading-relaxed font-light mt-auto pt-2 border-t border-white/5">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default About;
