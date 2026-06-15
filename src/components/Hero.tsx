import RadioPlayer from "./RadioPlayer";
import { Radio } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent to-transparent blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <Radio className="text-accent w-4 h-4" />
          <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Transmitiendo desde Zaachila, Oaxaca</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          La voz del pueblo que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-500">
            despierta y se levanta
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12">
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
