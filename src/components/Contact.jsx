import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post("https://getform.io/f/bolmojra", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success("Message transmitted successfully.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Transmission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Direct Email",
      value: "kumarthakurpawan788@gmail.com",
      href: "mailto:kumarthakurpawan788@gmail.com",
      color: "cyan",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone / WhatsApp",
      value: "+91 7859042307",
      href: "tel:+917859042307",
      color: "green",
    },
    {
      icon: FaGlobe,
      label: "Live Portfolio",
      value: "kumarpawanthakur.netlify.app",
      href: "https://kumarpawanthakur.netlify.app",
      color: "cyan",
    },
    {
      icon: FaGithub,
      label: "GitHub Profile",
      value: "github.com/KumarPawan2004",
      href: "https://github.com/KumarPawan2004",
      color: "purple",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/pawan-kumar-581b5b246",
      href: "https://www.linkedin.com/in/pawan-kumar-581b5b246/",
      color: "cyan",
    },
    {
      icon: FaInstagram,
      label: "Instagram Account",
      value: "@i_t_s_m_a_s_t_e_r",
      href: "https://www.instagram.com/i_t_s_m_a_s_t_e_r?srtk=YnNpcnMzM25udjEz",
      color: "purple",
    },
    {
      icon: IoLogoYoutube,
      label: "Code with Pawan",
      value: "Coding & Tech Channel",
      href: "https://youtube.com/@pawanraj-codewithpawan.?si=Te4roFGRJ_y1herd",
      color: "red",
    },
    {
      icon: IoLogoYoutube,
      label: "Tune with Pawan",
      value: "Music & Creative Channel",
      href: "https://youtube.com/@tune_with_pawan?si=2wfAKVWLjhpJh4QZ",
      color: "red",
    },
  ];

  const colorMap = {
    cyan: { border: "border-cyan-500/25", bg: "bg-cyan-500/5", text: "text-cyan-400", glow: "hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]" },
    purple: { border: "border-purple-500/25", bg: "bg-purple-500/5", text: "text-purple-400", glow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
    green: { border: "border-green-500/25", bg: "bg-green-500/5", text: "text-green-400", glow: "hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]" },
    red: { border: "border-red-500/25", bg: "bg-red-500/5", text: "text-red-400", glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]" },
  };

  return (
    <div name="Contact" className="w-full py-32 px-4 md:px-20 relative z-10">
      {/* BG glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center flex flex-col items-center gap-4"
        >
          <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase px-3.5 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-400">
            Contact.init()
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-orbitron">
            GET IN <span className="text-cyan-400">TOUCH</span>
          </h1>
          <div className="section-line" style={{ background: "linear-gradient(90deg, #00d4ff, #00ff88)" }} />
          <p className="text-slate-400 mt-2 max-w-xl font-light text-sm">
            Ready to collaborate on full-stack web applications, AI models, or cloud solutions? Send a message directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-3.5"
          >
            {/* Status */}
            <div className="holo-glass rounded-2xl p-6 mb-4">
              <div className="font-orbitron text-[10px] text-slate-500 uppercase tracking-widest mb-3">System Status</div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
                <span className="text-green-400 font-orbitron text-sm font-bold tracking-widest">ONLINE & AVAILABLE</span>
              </div>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                Open to Full-Stack Developer / SDE opportunities, freelancing, and technical collaborations. Response time: &lt;12 hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
              {contactInfo.map((item, i) => {
                const c = colorMap[item.color] || colorMap.cyan;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-3.5 p-3.5 rounded-xl border ${c.border} ${c.bg} ${c.glow} transition-all duration-300 group`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${c.border} ${c.bg} flex-shrink-0`}>
                      <item.icon className={`text-base ${c.text}`} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <div className={`font-orbitron text-[9px] uppercase tracking-widest ${c.text} mb-0.5`}>{item.label}</div>
                      <div className="text-slate-300 text-xs truncate group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                    <div className={`ml-auto ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`}>›</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="scifi-card holo-glass p-8 rounded-2xl relative"
            >
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/30" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30" />

              <div className="font-orbitron text-[10px] text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Message Transmission Terminal
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block font-orbitron text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="scifi-input w-full rounded-xl px-5 py-3.5 text-sm"
                    type="text"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block font-orbitron">Required field</span>}
                </div>

                <div>
                  <label className="block font-orbitron text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="scifi-input w-full rounded-xl px-5 py-3.5 text-sm"
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block font-orbitron">Valid email required</span>}
                </div>

                <div>
                  <label className="block font-orbitron text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    className="scifi-input w-full rounded-xl px-5 py-3.5 text-sm min-h-[140px] resize-y"
                    placeholder="Project requirements, inquiry or collaboration message..."
                  />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block font-orbitron">Required field</span>}
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`cyber-btn-solid w-full flex items-center justify-center gap-3 py-4 rounded-xl font-orbitron text-xs uppercase tracking-widest ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={12} />
                      Send Transmission
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
