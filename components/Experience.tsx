"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/constants";

const Experience = () => (
  <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-16 grid gap-5 md:grid-cols-12 md:items-end"><p className="eyebrow md:col-span-3">02 / Experience</p><div className="md:col-span-9"><h1 className="headline text-6xl md:text-8xl">Where research<br />meets practice.</h1></div></div>
      <div className="border-t border-black/20">
        {EXPERIENCE.map((exp, index) => (
          <motion.article key={exp.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: index * 0.06 }} className="group grid gap-5 border-b border-black/20 py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <div className="flex items-start justify-between md:col-span-2 md:block"><span className="display-number">0{index + 1}</span><p className="mt-0 text-sm font-bold text-[#706e69] md:mt-7">{exp.period}</p></div>
            <div className="md:col-span-4"><h2 className="text-3xl font-bold tracking-[-0.05em] text-[#141414]">{exp.role}</h2><p className="mt-3 font-bold text-[#e84b2c]">{exp.company}</p><p className="mt-1 text-sm text-[#706e69]">{exp.location}</p></div>
            <div className="flex items-start gap-5 md:col-span-6"><p className="max-w-2xl text-[15px] leading-relaxed text-[#494743] md:text-base">{exp.description}</p><ArrowUpRight size={22} className="mt-1 shrink-0 text-[#e84b2c] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
