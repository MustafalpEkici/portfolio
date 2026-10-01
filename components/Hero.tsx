"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { HERO_CONTENT, SOCIAL_LINKS } from "@/constants";

const Hero = () => (
  <section className="relative flex min-h-screen items-end overflow-hidden border-b border-black/15 px-5 pb-8 pt-28 md:px-10 md:pb-12 md:pt-32">
    <div className="absolute right-[-0.2em] top-[5.2rem] select-none text-[29vw] font-black leading-none tracking-[-0.13em] text-black/[0.035] md:top-20">M</div>
    <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="lg:col-span-9">
        <div className="mb-8 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e84b2c]" /><p className="eyebrow text-[#141414]">Open to research &amp; engineering opportunities</p></div>
        <h1 className="headline text-balance max-w-5xl text-[19vw] text-[#141414] sm:text-[16vw] lg:text-[10.8rem] xl:text-[12.8rem]">Mustafa<br />Alp <span className="text-[#e84b2c]">Ekici</span></h1>
      </motion.div>
      <motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.13 }} className="border-t border-black/20 pt-5 lg:col-span-3 lg:mb-2"><p className="mb-5 text-base font-medium leading-relaxed text-[#494743] md:text-lg">{HERO_CONTENT.role}</p><div className="flex items-center gap-2 text-sm text-[#706e69]"><MapPin size={15} strokeWidth={2.5} /> {HERO_CONTENT.location}</div></motion.aside>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="border-t border-black/20 pt-5 lg:col-span-5"><p className="max-w-xl text-[15px] leading-relaxed text-[#494743] md:text-base">{HERO_CONTENT.description}</p></motion.div>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }} className="flex flex-wrap items-center gap-3 border-t border-black/20 pt-5 lg:col-span-7 lg:justify-end">
        <a href="/cv.pdf" target="_blank" className="group inline-flex items-center gap-3 bg-[#141414] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#e84b2c]"><FileText size={17} /> Download CV <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        {SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-[50px] w-[50px] items-center justify-center border border-black/20 text-[#141414] transition-colors hover:border-[#e84b2c] hover:bg-[#e84b2c] hover:text-white"><social.icon size={19} strokeWidth={2.2} /></a>)}
        <a href="#education" aria-label="Explore education" className="ml-auto flex h-[50px] w-[50px] items-center justify-center text-[#e84b2c] sm:ml-2"><ArrowDownRight size={25} /></a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
