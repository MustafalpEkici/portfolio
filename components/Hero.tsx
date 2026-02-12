"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT, SOCIAL_LINKS } from "@/constants";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-5xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open to Work & Research
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          {HERO_CONTENT.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-500 font-medium mb-8 max-w-2xl">
          {HERO_CONTENT.role}
        </h2>

        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
          Senior Electrical and Electronics Engineering student at Middle East Technical University. 
          Specializing in <span className="text-blue-700 font-semibold">semiconductor physics</span>, 
          <span className="text-blue-700 font-semibold"> device modeling</span>, and 
          <span className="text-blue-700 font-semibold"> solid-state electronics</span>. 
          Passionate about researching next-generation microelectronic devices.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 active:scale-95"
          >
            <FileText size={20} />
            Download CV
          </a>

          <div className="flex items-center gap-2 ml-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 text-slate-500 hover:text-blue-600 hover:bg-white rounded-xl transition border border-transparent hover:border-slate-200 hover:shadow-md"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;