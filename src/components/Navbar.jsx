import React, { useState, useEffect } from "react";
import pic from "../assets/photo.avif";
import { CgMenuRight } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" }, // Fixed spelling
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 premium-glass border-b" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <img src={pic} className="h-10 w-10 rounded-full border border-slate-200 dark:border-white/10 shadow-sm" alt="Profile" />
              <h1 className="font-semibold text-lg cursor-pointer tracking-tight text-slate-900 dark:text-white">
                Pawan<span className="text-blue-500">.</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mt-0.5">Software Engineer</p>
              </h1>
            </div>
            
            {/* desktop navbar */}
            <div className="flex items-center space-x-6">
              <ul className="hidden md:flex space-x-8">
                {navItems.map(({ id, text }) => (
                  <li
                    className="group relative cursor-pointer font-medium text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-500"
                    key={id}
                  >
                    <Link
                      to={text === "Experience" ? "Experience" : text}
                      smooth={true}
                      duration={800}
                      offset={-70}
                      activeClass="text-blue-500 dark:text-white"
                    >
                      {text}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 transition-colors duration-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <IoSunny size={18} /> : <IoMoon size={18} />}
              </button>

              <div onClick={() => setMenu(!menu)} className="md:hidden text-slate-900 dark:text-slate-200 cursor-pointer ml-4">
                {menu ? (
                  <IoIosCloseCircleOutline size={28} />
                ) : (
                  <CgMenuRight size={28} />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* mobile navbar */}
      <AnimatePresence>
        {menu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#030303]/95 backdrop-blur-xl flex flex-col justify-center items-center h-screen"
          >
            <ul className="flex flex-col items-center space-y-8 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="font-medium cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 tracking-wide"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(false)}
                    to={text === "Experience" ? "Experience" : text}
                    smooth={true}
                    duration={800}
                    offset={-70}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
