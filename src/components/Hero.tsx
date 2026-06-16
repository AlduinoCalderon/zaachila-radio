import RadioPlayer from "./RadioPlayer";
import { Radio } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-[#1A0B2E]">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5416B4]/30 border border-[#6357E2]/50 shadow-lg shadow-[#6357E2]/20 mb-8 backdrop-blur-md">
          <Radio className="text-accent w-4 h-4" />
          <span className="text-xs font-semibold text-white tracking-wide uppercase">Transmitiendo desde Zaachila, Oaxaca</span>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-extrabold text-accent tracking-tight mb-6 leading-tight drop-shadow-lg">
          La voz del pueblo que despierta y se levanta
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8 drop-shadow-md font-medium whitespace-pre-line">
          Escucha nuestros diversos programas: musicales, informativos y culturales.{"\n"}¡Conéctate con la comunidad!
        </p>

        {/* Player Container */}
        <div className="max-w-3xl mx-auto mt-6">
          <RadioPlayer />
        </div>
      </div>
    </section>
  );
}
