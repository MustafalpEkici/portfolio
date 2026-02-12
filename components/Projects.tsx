"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { FolderGit2, FileText, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-slate-900">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 group h-full flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              {/* Sol: Proje İkonu */}
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <FolderGit2 size={24} />
              </div>

              {/* SAĞ: BELİRGİN RAPOR BUTONU */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                <FileText size={14} />
                <span>View Full Report</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {project.description}
            </p>
            
            {/* Etiketler (Tags) bölümü buradan kaldırıldı. */}

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;