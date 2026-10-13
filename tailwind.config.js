/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "scifi-bg": "#020409",
        "scifi-card": "#060d1a",
        "neon-cyan": "#00d4ff",
        "neon-purple": "#a855f7",
        "neon-green": "#00ff88",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        orbitron: ["Orbitron", "monospace"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        aurora: "aurora 20s ease-in-out infinite",
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 20s linear infinite",
        "scan": "scanLine 3s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanLine: {
          "0%": { top: "-2px" },
          "100%": { top: "100%" },
        },
      },
      backgroundImage: {
        "scifi-grid":
          "linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)",
        "neon-gradient": "linear-gradient(135deg, #00d4ff, #7c3aed, #00ff88)",
        "cyber-gradient": "linear-gradient(90deg, #00d4ff, #a855f7)",
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(0,212,255,0.4), 0 0 30px rgba(0,212,255,0.2)",
        "neon-purple": "0 0 15px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.2)",
        "neon-green": "0 0 15px rgba(0,255,136,0.4), 0 0 30px rgba(0,255,136,0.2)",
        "card-glow": "0 0 40px rgba(0,212,255,0.05), 0 20px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
