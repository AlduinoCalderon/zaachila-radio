import RadioPlayer from "./RadioPlayer";
import { Radio } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#1A0B2E]">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5416B4]/30 border border-[#6357E2]/50 shadow-lg shadow-[#6357E2]/20 mb-8 backdrop-blur-md">
          <Radio className="text-accent w-4 h-4" />
          <span className="text-xs font-semibold text-white tracking-wide uppercase">Transmitiendo desde Zaachila, Oaxaca</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-2xl">
          La voz del pueblo que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44E25D] via-[#75FF45] to-[#FF7B00]">
            despierta y se levanta
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 drop-shadow-md font-medium">
          Conéctate con tu comunidad, escucha nuestra programación en vivo y mantente informado con la mejor música, noticias y cultura.
        </p>

        {/* Player Container */}
        <div className="max-w-3xl mx-auto mt-8">
          <RadioPlayer />
        </div>
      </div>
    </section>
  );
}
