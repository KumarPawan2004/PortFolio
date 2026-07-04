import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaUniversity } from "react-icons/fa";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div name="About" className="w-full py-32 px-4 md:px-20 relative z-10">
      <div className="max-w-screen-xl container mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-4 transition-colors duration-500">Background</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            About Me
          </h1>
          <p className="text-slate-600 dark:text-slate-500 mt-4 max-w-2xl font-light transition-colors duration-500">
            My professional journey, education, and leadership experiences.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Experience Card */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="premium-glass p-10 rounded-3xl flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <h2 className="text-2xl font-semibold mb-10 text-slate-900 dark:text-white flex items-center gap-3 tracking-tight transition-colors duration-500">
              <FaBriefcase className="text-blue-500 dark:text-blue-400 text-2xl" /> Professional Experience
            </h2>
            <div className="relative border-l border-slate-200 dark:border-white/10 ml-3 space-y-12">
              
              <div className="relative pl-8 group">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-slate-50 dark:ring-[#0a0a0a] group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-500"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">.NET Developer Intern</h3>
                <h4 className="text-blue-500 dark:text-blue-400 font-medium text-sm mt-1">Eimple Labs (Remote)</h4>
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider mt-1">Aug 2024 – Present</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">
                  <li>— Developed backend modules using ASP.NET Core and SQL Server.</li>
                  <li>— Implemented Email Notification and OTP Authentication.</li>
                  <li>— Integrated Google Analytics and improved backend performance.</li>
                </ul>
              </div>

              <div className="relative pl-8 group">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-50 dark:ring-[#0a0a0a] group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-500"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">React Developer Intern</h3>
                <h4 className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1">Eimple Labs (Remote)</h4>
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider mt-1">Jun 2024 – Jul 2025</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">
                  <li>— Developed responsive admin dashboard using React.js and Material UI.</li>
                  <li>— Built reusable UI components and integrated REST APIs.</li>
                  <li>— Optimized application performance through debugging.</li>
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="premium-glass p-10 rounded-3xl flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500"
          >
            <h2 className="text-2xl font-semibold mb-10 text-slate-900 dark:text-white flex items-center gap-3 tracking-tight transition-colors duration-500">
              <FaUniversity className="text-purple-500 dark:text-purple-400 text-2xl" /> Education
            </h2>
            <div className="relative border-l border-slate-200 dark:border-white/10 ml-3 space-y-12">
              
              <div className="relative pl-8 group">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 ring-4 ring-slate-50 dark:ring-[#0a0a0a] group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-500"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">B.Tech in Software Engineering</h3>
                <p className="text-purple-500 dark:text-purple-400 font-medium text-sm mt-1">YBN University</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Ranchi | 2023 – Present</p>
              </div>

              <div className="relative pl-8 group">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-50 dark:ring-[#0a0a0a] group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-500"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Higher Secondary Education</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1">Saraswati Sishu Vidya Mandir</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Ranchi | 2021 – 2023</p>
              </div>

              <div className="relative pl-8 group">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-50 dark:ring-[#0a0a0a] group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-500"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Secondary School</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1">St. Columbus School</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Ranchi | 2019 – 2021</p>
              </div>

            </div>
          </motion.div>

          {/* Activities & Leadership Card */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="premium-glass p-10 rounded-3xl md:col-span-2 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500"
          >
             <h2 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white flex items-center justify-center gap-3 tracking-tight transition-colors duration-500">
              <FaAward className="text-emerald-500 dark:text-emerald-400 text-2xl" /> Leadership & Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-500 group">
                <h3 className="text-emerald-600 dark:text-emerald-400 font-medium text-lg mb-2">Organizing Member</h3>
                <p className="text-slate-800 dark:text-white font-light text-sm">Design Hackathon 2024</p>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">YBN University</p>
              </div>
              <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-500 group">
                <h3 className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">Active Member</h3>
                <p className="text-slate-800 dark:text-white font-light text-sm">Coding Club</p>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">YBN University</p>
              </div>
              <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-500 group">
                <h3 className="text-purple-600 dark:text-purple-400 font-medium text-lg mb-2">Participant</h3>
                <p className="text-slate-800 dark:text-white font-light text-sm">National Hackathons</p>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">Arka Jain University</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default About;
