"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EDUCATION } from "@/constants";

const Education = () => (
  <section id="education" className="bg-[#141414] px-5 py-20 text-[#f2f0ea] md:px-10 md:py-28">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-12 grid gap-5 md:grid-cols-12 md:items-end"><p className="eyebrow text-[#ff7559] md:col-span-3">01 / Education</p><h2 className="headline text-5xl md:col-span-9 md:text-7xl">Academic<br className="md:hidden" /> trajectory.</h2></div>
      <div className="border-t border-white/25">
        {EDUCATION.map((education, index) => (
          <motion.article key={education.institution} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="group grid gap-5 border-b border-white/25 py-7 transition-colors hover:bg-white/[0.045] md:grid-cols-12 md:items-center md:py-9">
            <span className="display-number text-[#ff7559] md:col-span-1">0{index + 1}</span><h3 className="text-2xl font-bold tracking-[-0.04em] md:col-span-5 md:text-3xl">{education.institution}</h3><div className="md:col-span-4"><p className="font-semibold">{education.degree}</p><p className="mt-1 text-sm text-white/55">{education.detail}</p></div><div className="flex items-center justify-between md:col-span-2 md:justify-end"><p className="text-sm font-semibold text-white/65">{education.period}</p><ArrowUpRight className="text-[#ff7559] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={21} /></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
