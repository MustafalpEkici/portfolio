"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";

const Experience = () => {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
        Experience
      </h2>

      <div className="space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            // Kartın üzerine gelince kenarlık o güzel mavi olsun
            className="glass p-8 relative hover:border-blue-300 transition-colors duration-300" 
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                {/* Rol Başlığı */}
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                
                {/* Şirket İsmi: "View Full Report" butonundaki yazı rengi (Blue-700) */}
                <div className="text-blue-700 font-bold text-lg mt-1 tracking-tight">
                  {exp.company}
                </div>
              </div>
              
              {/* Tarih Kutusu: "View Full Report" butonunun aynısı (Mavi Zemin, Mavi Çerçeve, Mavi Yazı) */}
              {/* rounded-lg yaparak butona daha çok benzettim */}
              <div className="text-sm font-bold text-blue-700 bg-blue-50 px-4 py-1.5 rounded-lg border border-blue-200 mt-3 md:mt-0 shadow-sm">
                {exp.period}
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-base">
              {exp.description}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;