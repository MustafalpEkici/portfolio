"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { PROJECTS } from "@/constants";

const Projects = () => (
  <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-16 grid gap-5 md:grid-cols-12 md:items-end"><p className="eyebrow md:col-span-3">03 / Selected work</p><div className="md:col-span-9"><h1 className="headline text-6xl md:text-8xl">Built, tested,<br /><span className="text-[#e84b2c]">documented.</span></h1></div></div>
      <div className="border-t border-black/20">
        {PROJECTS.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.05 }} className="project-row group grid gap-5 border-b border-black/20 py-8 transition-colors hover:bg-[#e84b2c] hover:px-4 md:grid-cols-12 md:gap-8 md:py-10 md:hover:px-7">
            <div className="flex items-start justify-between md:col-span-2 md:block"><span className="display-number group-hover:text-white">0{index + 1}</span></div>
            <div className="md:col-span-5"><h2 className="text-3xl font-bold tracking-[-0.055em] text-[#141414] group-hover:text-white md:text-4xl">{project.title}</h2></div>
            <div className="md:col-span-5"><p className="max-w-xl text-[15px] leading-relaxed text-[#494743] group-hover:text-white/90 md:text-base">{project.description}</p><a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#141414] pb-1 text-sm font-extrabold text-[#141414] transition-colors group-hover:border-white group-hover:text-white"><FileText size={15} /> Read full report <ArrowUpRight size={16} className="project-link-arrow" /></a></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
