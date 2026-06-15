import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1A0B2E] pt-12 pb-6 text-slate-300 relative overflow-hidden border-t border-[#5416B4]/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5416B4]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-1">
                <Image
                  src="/zaachila-radio-lg.png"
                  alt="Zaachila Radio Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">Zaachila Radio</span>
                <span className="text-xs font-semibold text-accent tracking-widest">96.3 FM</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              "La voz del pueblo que despierta y se levanta." Transmitiendo lo mejor de nuestra cultura, música y noticias para toda la comunidad.
            </p>
            <div className="flex gap-4">
              <a href="http://fb.com/ZaachilaRadioFM" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#5416B4]/30 flex items-center justify-center hover:bg-accent hover:text-slate-900 transition-colors border border-[#5416B4]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contacto Directo</h4>
            <div className="space-y-4">
              <a href="tel:+529515052175" className="flex items-start gap-3 hover:opacity-80 transition-opacity group">
                <Phone className="text-accent shrink-0 mt-0.5 group-hover:animate-bounce" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Cabina</p>
                  <p className="text-slate-400 text-sm">(951) 5052175</p>
                </div>
              </a>
              <a href="mailto:zaachilaradio@gmail.com" className="flex items-start gap-3 hover:opacity-80 transition-opacity group">
                <Mail className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Correo</p>
                  <p className="text-slate-400 text-sm">zaachilaradio@gmail.com</p>
                </div>
              </a>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a 
                href="https://wa.me/529515052175" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
              >
                Mensaje por WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Ubicación</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={20} />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Tiboot 210-H,<br />
                  Barrio de San Jacinto,<br />
                  Villa de Zaachila, Oaxaca.<br />
                  C.P. 71250
                </p>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Horario de Transmisión</p>
                  <p className="text-slate-400 text-sm">Lunes a Domingo<br />07:00 a 20:00 horas</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#5416B4]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Zaachila Radio 96.3 FM. Todos los derechos reservados.
            </p>
            <p className="text-sm text-slate-400 font-medium tracking-wide">
              Programado por Alduino Calderon 🐢
            </p>
          </div>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="https://www.caster.fm/privacy-policy.php" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Privacidad (Caster.fm)</a>
            <a href="https://www.caster.fm/terms-of-service.php" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Términos</a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a 
        href="#inicio" 
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#5416B4] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-[#1A0B2E] transition-all z-50 group border border-white/10"
        aria-label="Volver arriba"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}
