import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1A0B2E] pt-12 pb-6 text-slate-300 relative overflow-hidden border-t border-[#5416B4]/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5416B4]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-72 md:w-80 h-20 md:h-24">
              <Image
                src="/logo-horizontal-slogan.webp"
                alt="Zaachila Radio Logo"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>

          {/* Contact / Social Details */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="http://fb.com/ZaachilaRadioFM" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1877F2]/80 transition-colors shadow-lg shadow-[#1877F2]/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Síguenos</span>
            </a>
            <a href="https://wa.me/529515052175" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#25D366]/80 transition-colors shadow-lg shadow-[#25D366]/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>Escríbenos</span>
            </a>
          </div>

        </div>

        <div className="border-t border-[#5416B4]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Zaachila Radio 96.3 FM. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="https://www.caster.fm/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Privacidad (Caster.fm)</a>
            <a href="https://www.caster.fm/terms-of-service/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Términos</a>
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
