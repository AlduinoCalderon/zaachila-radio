import RadioPlayer from "./RadioPlayer";
import { Radio } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden bg-[#1A0B2E]">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Logo Principal con Eslogan */}
        <div className="relative flex justify-center items-center w-[85vw] sm:w-[90vw] md:w-[40rem] lg:w-[50rem] h-24 md:h-36 shrink-0 mb-8 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500">
          <Image
            src="/logo-horizontal-slogan.webp"
            alt="Zaachila Radio Logo"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5416B4]/30 border border-[#6357E2]/50 shadow-lg shadow-[#6357E2]/20 mb-8 backdrop-blur-md">
          <Radio className="text-accent w-4 h-4" />
          <span className="text-xs font-semibold text-white tracking-wide uppercase">Transmitiendo desde Zaachila, Oaxaca</span>
        </div>
        

        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8 drop-shadow-md font-medium whitespace-pre-line">
          Escucha nuestros diversos programas: musicales, informativos y culturales.{"\n"}¡Conéctate con la comunidad!
        </p>

        {/* Player Container */}
        <div className="max-w-3xl mx-auto mt-6 w-full">
          <RadioPlayer />
        </div>
      </div>
    </section>
  );
}
