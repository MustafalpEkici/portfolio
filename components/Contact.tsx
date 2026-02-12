"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-white p-12 md:p-20 shadow-2xl shadow-blue-100/50"
      >
        {/* Dekoratif Arka Plan Işıkları */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10">
          Let's Work Together
        </h2>

        {/* İstediğin tek renk ve güncel metin yapısı */}
        <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed relative z-10">
          I am currently open to research collaborations and work opportunities in the field of Semiconductor Devices.
        </p>

        {/* Mail Butonu */}
        <div className="relative z-10 flex justify-center">
             <a
              href="mailto:mustafalpekici@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 group active:scale-95"
            >
              <Mail size={24} />
              <span>mustafalpekici@gmail.com</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform opacity-80 group-hover:opacity-100" />
            </a>
        </div>

        {/* Alt Bilgiler ve Sosyal Linkler */}
        <div className="mt-12 flex flex-col items-center gap-6 relative z-10">
           <div className="flex items-center gap-2 text-slate-500 font-medium bg-white/60 px-5 py-2 rounded-full border border-blue-50 backdrop-blur-sm">
             <MapPin size={18} className="text-blue-600" />
             <span>Ankara, Turkey</span>
           </div>

           <div className="flex gap-4">
             {SOCIAL_LINKS.map((social) => (
               <a
                 key={social.label}
                 href={social.href}
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-700 hover:border-blue-300 hover:shadow-md transition-all active:scale-95"
                 aria-label={social.label}
               >
                 <social.icon size={20} />
               </a>
             ))}
           </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;