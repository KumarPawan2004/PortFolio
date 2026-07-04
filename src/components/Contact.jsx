import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bolmojra", userInfo);
      toast.success("Message sent successfully.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name="Contact" className="w-full py-32 px-4 md:px-20 relative z-10">
      <div className="max-w-screen-xl container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4 transition-colors duration-500">Contact</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            Get In Touch
          </h1>
          <p className="text-slate-600 dark:text-slate-500 mt-4 max-w-2xl font-light transition-colors duration-500">
            Have a question or want to work together? Leave a message.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="premium-glass w-full max-w-2xl p-8 md:p-12 rounded-3xl relative"
          >
            <div className="space-y-8 relative z-10">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-3 transition-colors duration-500">Full Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  {...register("name", { required: true })}
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-white/20 transition-all font-light"
                  type="text"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 dark:text-red-400 text-xs mt-2 block">This field is required</span>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-3 transition-colors duration-500">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-white/20 transition-all font-light"
                  type="email"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 dark:text-red-400 text-xs mt-2 block">Valid email is required</span>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-3 transition-colors duration-500">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  {...register("message", { required: true })}
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-white/20 transition-all font-light min-h-[150px] resize-y"
                  placeholder="How can I help you?"
                />
                {errors.message && <span className="text-red-500 dark:text-red-400 text-xs mt-2 block">This field is required</span>}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
                disabled={isSubmitting}
                className={`premium-btn w-full flex items-center justify-center gap-3 py-4 rounded-xl font-medium tracking-wide transition-all duration-500 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <FaPaperPlane size={12} className="opacity-70" />}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
