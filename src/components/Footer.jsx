import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const navItems = ["Home", "About", "Portfolio", "Certifications", "Experience", "Contact"];

  const socials = [
    { icon: FaGithub, href: "https://github.com/KumarPawan2004", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pawan-kumar-581b5b246/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/i_t_s_m_a_s_t_e_r?srtk=YnNpcnMzM25udjEz", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com/@pawanraj-codewithpawan.?si=Te4roFGRJ_y1herd", label: "Code with Pawan" },
    { icon: FaYoutube, href: "https://youtube.com/@tune_with_pawan?si=2wfAKVWLjhpJh4QZ", label: "Tune with Pawan" },
  ];

  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-[#020409]/90 backdrop-blur-xl">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Brand */}
            <div>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest">
                PAWAN<span className="text-cyan-400">.</span>
              </h2>
              <p className="font-orbitron text-[10px] text-cyan-400/70 uppercase tracking-[0.2em] mt-1">
                Pawan Kumar Thakur // Full-Stack Software Engineer
              </p>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex flex-wrap gap-7">
              {navItems.map(item => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="font-orbitron text-[10px] uppercase tracking-widest text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg border border-cyan-500/25 bg-cyan-500/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all duration-300"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-orbitron text-[10px] text-slate-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Pawan Kumar Thakur. All rights reserved.
            </p>
            <p className="font-orbitron text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
              Engineered with <span className="text-cyan-400">⚡</span> ASP.NET Core & React.js
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(0,255,136,0.8)]" />
              <span className="font-orbitron text-[10px] text-green-400 uppercase tracking-widest">Systems Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
