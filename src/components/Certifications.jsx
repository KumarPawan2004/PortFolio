import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaShieldAlt, FaChartLine, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { SiGooglecloud, SiTensorflow } from "react-icons/si";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata",
      platform: "Forage",
      badge: "Tata Group",
      date: "Verified Completion",
      icon: FaChartLine,
      color: "cyan",
      skillsGained: [
        "Generative AI Integration",
        "Data Analytics & Modeling",
        "Exploratory Data Analysis",
        "Business Insights & Storytelling",
      ],
      description:
        "Completed hands-on practical tasks involving GenAI tools applied to complex business datasets. Performed exploratory analysis, prompt engineering for business analytics, and executive presentation preparation.",
    },
    {
      id: 2,
      title: "Cybersecurity Job Simulation",
      issuer: "Deloitte Australia",
      platform: "Forage",
      badge: "Deloitte",
      date: "Verified Completion",
      icon: FaShieldAlt,
      color: "purple",
      skillsGained: [
        "Threat Analysis & Mitigation",
        "Cloud Security & Governance",
        "Identity & Access Management (IAM)",
        "Incident Response Planning",
      ],
      description:
        "Completed practical cybersecurity simulation simulating Deloitte analyst workflow. Handled forensic investigation, threat modeling, vulnerability assessment, and strategic security advisory communications.",
    },
  ];

  const colorMap = {
    cyan: {
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/5",
      badge: "bg-cyan-500/10 border-cyan-500/40 text-cyan-300",
      text: "text-cyan-400",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]",
      line: "from-cyan-400 to-transparent",
    },
    purple: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      badge: "bg-purple-500/10 border-purple-500/40 text-purple-300",
      text: "text-purple-400",
      glow: "hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      line: "from-purple-400 to-transparent",
    },
  };

  return (
    <div name="Certifications" className="w-full py-32 px-4 md:px-20 relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-screen-xl container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center gap-4"
        >
          <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
            Credentials.verify()
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-orbitron">
            INDUSTRY <span className="text-cyan-400">CERTIFICATIONS</span>
          </h1>
          <div className="section-line" style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }} />
          <p className="text-slate-400 mt-2 max-w-xl font-light text-sm">
            Professional job simulations and verified credentials from global enterprise leaders.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`scifi-card corner-accent holo-glass p-8 rounded-2xl border ${c.border} ${c.glow} transition-all duration-500 flex flex-col`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl border ${c.border} ${c.bg} flex items-center justify-center`}>
                    <cert.icon className={`text-2xl ${c.text}`} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`font-orbitron text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border ${c.badge}`}>
                      {cert.badge}
                    </span>
                    <span className="text-slate-500 text-[10px] font-mono mt-1">Platform: {cert.platform}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`font-orbitron text-xs font-semibold ${c.text}`}>
                    Issued by: {cert.issuer}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-orbitron">
                    <FaCheckCircle size={10} /> Verified
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                  {cert.description}
                </p>

                {/* Skills gained */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <h4 className="font-orbitron text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                    Competencies & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsGained.map((skill, i) => (
                      <span
                        key={i}
                        className={`font-orbitron text-[9px] px-2.5 py-1 rounded border ${c.badge} uppercase tracking-wider`}
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

        {/* Global Assurance Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <FaCertificate className="text-cyan-400 text-2xl" />
            <div className="text-left">
              <h4 className="text-white text-sm font-semibold font-orbitron">Continuous Upskilling</h4>
              <p className="text-slate-400 text-xs">Simulated on enterprise-grade problem statements hosted on Forage.</p>
            </div>
          </div>
          <span className="font-orbitron text-[10px] uppercase tracking-widest text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded-lg bg-cyan-500/10">
            Forage Enterprise Certified
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Certifications;
