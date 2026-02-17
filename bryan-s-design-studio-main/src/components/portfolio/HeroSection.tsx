import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-hero-gradient">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-16 w-24 h-24 border-2 border-white/15 rounded-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-12 w-16 h-16 border-2 border-white/10 rounded-lg"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[8%] w-3 h-3 rounded-full bg-white/20"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[12%] w-4 h-4 rounded-full bg-white/15"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[8%] w-2 h-2 rounded-full bg-primary"
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Large name display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="block text-sm md:text-base font-mono tracking-[0.4em] text-white/60 uppercase mb-4">
            Portfolio of
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            HARIKRISHNA{" "}
            <span className="text-gradient">V</span>
          </span>
        </motion.h1>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3 flex-wrap"
        >
          {["Software Developer", "UI & UX", "Data Visualization"].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm text-white/90 text-sm font-mono tracking-wider"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center justify-center gap-4 flex-wrap mt-12"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-full bg-white text-accent font-semibold text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2 hover:shadow-lg hover:shadow-white/20"
          >
            View My Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1 mx-auto"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
