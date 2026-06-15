import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 pt-20 pb-10 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-xl">
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
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-slate-900 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-slate-900 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Cabina</p>
                  <p className="text-slate-400 text-sm">(951) 5052175</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Correo</p>
                  <p className="text-slate-400 text-sm">zaachilaradio@gmail.com</p>
                </div>
              </li>
            </ul>
            
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

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-slate-400 hover:text-accent transition-colors text-sm">Inicio</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-accent transition-colors text-sm">Contáctanos</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Zaachila Radio 96.3 FM. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
