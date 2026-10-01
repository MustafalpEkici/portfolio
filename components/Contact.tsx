"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

const Contact = () => (
  <section className="min-h-screen bg-[#e84b2c] px-5 pb-10 pt-32 text-white md:px-10 md:pb-12 md:pt-40">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-between">
      <div className="grid gap-8 md:grid-cols-12"><p className="eyebrow text-[#141414] md:col-span-3">04 / Contact</p><div className="md:col-span-9"><h1 className="headline max-w-5xl text-6xl text-white md:text-8xl">Let&apos;s make<br />something <span className="text-[#141414]">matter.</span></h1><p className="mt-9 max-w-xl text-lg leading-relaxed text-white/85">I am open to research collaborations, internships, and engineering opportunities in analog and mixed-signal IC design, semiconductor devices, and biomedical sensing.</p></div></div>
      <div className="mt-20 grid gap-10 border-t border-white/40 pt-7 md:grid-cols-12 md:items-end"><a href="mailto:mustafalpekici@gmail.com" className="group inline-flex w-fit items-center gap-4 text-2xl font-bold tracking-[-0.045em] text-white transition-colors hover:text-[#141414] md:col-span-7 md:text-4xl"><Mail size={25} /> mustafalpekici@gmail.com <ArrowUpRight size={24} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><div className="md:col-span-2"><div className="flex items-center gap-2 text-sm font-semibold"><MapPin size={16} /> Milano, Italy</div></div><div className="flex gap-2 md:col-span-3 md:justify-end">{SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition-colors hover:border-[#141414] hover:bg-[#141414]"><social.icon size={18} /></a>)}</div></div>
    </motion.div>
  </section>
);

export default Contact;
