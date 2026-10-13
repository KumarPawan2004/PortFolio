import React, { useState, useEffect } from "react";
import avatarImg from "../assets/avatar.jpg";
import { CgMenuRight } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Certifications" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#020409]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-16">
          <div className="flex justify-between items-center gap-4">
            
            {/* Logo with landscape avatar (flex-shrink-0 to prevent squishing) */}
            <div className="flex-shrink-0">
              <Link
                to="Home"
                smooth={true}
                duration={800}
                offset={-70}
                className="flex items-center gap-3 cursor-pointer select-none group"
              >
                <div className="relative flex-shrink-0 w-11 h-11">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md animate-pulse pointer-events-none" />
                  <img
                    src={avatarImg}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] max-w-[44px] max-h-[44px] rounded-full object-cover object-center border-2 border-cyan-400/70 shadow-md shadow-cyan-400/40 block flex-shrink-0"
                    alt="Pawan Kumar Thakur"
                  />
                </div>
                <div className="flex flex-col flex-shrink-0 leading-tight">
                  <span className="font-orbitron font-bold text-sm sm:text-base tracking-widest text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                    PAWAN<span className="text-cyan-400">.</span>
                  </span>
                  <span className="text-[9px] text-cyan-400/80 uppercase tracking-[0.2em] font-medium font-orbitron whitespace-nowrap">
                    Software Engineer
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav Items */}
            <div className="flex items-center gap-4 xl:gap-8 flex-shrink">
              <ul className="hidden xl:flex items-center gap-6 xl:gap-7">
                {navItems.map(({ id, text }) => (
                  <li key={id} className="group relative cursor-pointer whitespace-nowrap">
                    <Link
                      to={text}
                      smooth={true}
                      duration={800}
                      offset={-70}
                      className="text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-orbitron tracking-widest uppercase py-1"
                    >
                      {text}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Status Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-sm shadow-green-400" />
                <span className="text-green-400 text-[10px] font-orbitron tracking-widest whitespace-nowrap">ONLINE</span>
              </div>

              {/* Mobile/Tablet Menu Button (shows on screens < 1280px / xl) */}
              <div
                onClick={() => setMenu(!menu)}
                className="xl:hidden text-cyan-400 cursor-pointer p-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-400/10 transition-colors flex-shrink-0"
                aria-label="Toggle Navigation"
              >
                {menu ? <IoIosCloseCircleOutline size={26} /> : <CgMenuRight size={26} />}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#020409]/98 backdrop-blur-2xl flex flex-col justify-center items-center scifi-grid"
          >
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-400/40" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40" />

            <div className="absolute top-8 right-8">
              <button
                onClick={() => setMenu(false)}
                className="text-cyan-400 hover:text-white p-2"
              >
                <IoIosCloseCircleOutline size={34} />
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-7">
              {navItems.map(({ id, text }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.06 }}
                  className="cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={800}
                    offset={-70}
                    className="font-orbitron text-xl font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
