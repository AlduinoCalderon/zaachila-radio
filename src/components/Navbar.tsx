"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Volume2 } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#1A0B2E]/90 backdrop-blur-md border-[#5416B4]/30 shadow-lg shadow-[#5416B4]/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <Image
              src="/zaachila-radio-lg.png"
              alt="Zaachila Radio Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-tight">
                Zaachila Radio
              </span>
              <span className="text-xs font-semibold text-accent tracking-widest drop-shadow-md">
                96.3 FM
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#contacto" className="text-sm font-medium text-slate-300 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(68,226,93,0.8)] transition-all">
              Contacto
            </a>
            
            {/* Live Indicator */}
            <a href="#inicio" className="flex items-center gap-2 bg-[#5416B4]/30 px-4 py-2 rounded-full border border-[#5416B4] hover:bg-accent/20 transition-all group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-white tracking-wider drop-shadow-md flex items-center gap-1.5">
                EN VIVO
                <Volume2 className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A0B2E] border-b border-[#5416B4]/30 shadow-lg shadow-[#5416B4]/20 absolute w-full">
          <div className="flex flex-col pt-4 pb-6 space-y-4 items-center">
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors w-full text-center"
            >
              Contacto
            </a>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 bg-[#5416B4]/30 px-6 py-3 rounded-full border border-[#5416B4] w-max hover:bg-accent/20 transition-colors">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-bold text-white tracking-wider flex items-center gap-1.5">
                EN VIVO
                <Volume2 className="w-4 h-4 text-accent" />
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
