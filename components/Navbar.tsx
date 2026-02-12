"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    // "glass" class'ı yerine özel navbar stili (daha şeffaf)
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-sm transition-all">
      <div className="px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-slate-900 hover:text-blue-600 transition tracking-tight">
          MAE<span className="text-blue-600">.</span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`relative transition-colors duration-300 ${
                pathname === link.href ? "text-blue-700 font-semibold" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;