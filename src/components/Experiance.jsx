import React, { useMemo } from "react";
import { motion } from "framer-motion";

function Experiance() {
  const skills = [
    "C/C++", "C#", "Java", "Python", "SQL",
    "HTML5", "CSS3", "JavaScript", "React.js", "React Native", "ASP.NET Core", "Node.js",
    "SQL Server", "MySQL", "MongoDB",
    "Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "GCP",
    "VS Code", "Postman", "Swagger", "Linux", "Figma"
  ];

  const randomizedSkills = useMemo(() => {
    return skills.map((skill, index) => ({
      id: index,
      name: skill,
      yOffset: Math.random() * 10 - 5,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 2,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div name="Experience" className="w-full py-32 px-4 md:px-20 relative z-10">
      <div className="max-w-screen-xl container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4 transition-colors duration-500">Skills</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            Technical Arsenal
          </h1>
          <p className="text-slate-600 dark:text-slate-500 mt-4 text-lg max-w-3xl font-light transition-colors duration-500">
            A comprehensive overview of the languages, frameworks, and tools I use to build scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {randomizedSkills.map((skill) => (
            <motion.div
              variants={itemVariants}
              key={skill.id}
              animate={{
                y: [0, skill.yOffset, 0],
              }}
              transition={{
                y: {
                  duration: skill.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: skill.delay
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 }
              }}
              className="px-6 py-3 premium-glass rounded-full cursor-default hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-500"
            >
              <h3 className="text-slate-600 dark:text-slate-400 font-medium text-sm hover:text-slate-900 dark:hover:text-white transition-colors duration-300 tracking-wide">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experiance;
