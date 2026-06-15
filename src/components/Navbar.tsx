"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm"
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
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-tight">
                Zaachila Radio
              </span>
              <span className="text-xs font-semibold text-accent tracking-widest">
                96.3 FM
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="#programacion" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">
              Programación
            </a>
            <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">
              Contacto
            </a>
            
            {/* Live Indicator */}
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-slate-900 tracking-wider">EN VIVO</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 w-full text-center rounded-lg"
            >
              Inicio
            </a>
            <a 
              href="#programacion" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 w-full text-center rounded-lg"
            >
              Programación
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 w-full text-center rounded-lg"
            >
              Contacto
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 bg-slate-100 px-6 py-3 rounded-full border border-slate-200 w-max">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-bold text-slate-900 tracking-wider">EN VIVO</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
