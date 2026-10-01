"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f2f0ea]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-2.5 md:h-[72px] md:px-10">
        <Link href="/" className="text-lg font-extrabold tracking-[-0.08em] text-[#141414] md:text-xl" aria-label="Mustafa Alp Ekici home">MAE<span className="text-[#e84b2c]">/</span></Link>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#706e69] sm:gap-5 md:gap-7 md:text-[11px] md:tracking-[0.13em]">
          {NAV_LINKS.map((link) => <Link key={link.name} href={link.href} className={`transition-colors ${pathname === link.href ? "text-[#141414]" : "hover:text-[#e84b2c]"}`}>{link.name}</Link>)}
        </div>
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-[#e84b2c] lg:block">Based in Milano</span>
      </div>
    </nav>
  );
};

export default Navbar;
