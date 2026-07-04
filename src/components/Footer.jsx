import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="py-12 bg-slate-100 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5 w-full relative z-10 transition-colors duration-500">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex space-x-6 mb-8">
            {[
              { icon: FaFacebook, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/pawan-kumar-581b5b246/" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full premium-glass flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white">
              Pawan<span className="text-blue-500">.</span>
            </h2>
            <p className="text-xs text-slate-500 mb-1 uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Pawan Kumar. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1 font-light mt-2">
              Made with <span className="text-blue-500">❤</span> by Pawan
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
