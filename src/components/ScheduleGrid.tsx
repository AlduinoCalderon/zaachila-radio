import { Clock, CalendarDays, Music, Mic } from "lucide-react";

const scheduleData = [
  {
    id: 1,
    time: "07:00 - 09:00",
    title: "Amanecer Zaachila",
    host: "Voz Comunitaria",
    category: "Noticias y Cultura",
    icon: Mic,
    highlight: true,
  },
  {
    id: 2,
    time: "09:00 - 12:00",
    title: "Mañanas Musicales",
    host: "Cabina Principal",
    category: "Entretenimiento",
    icon: Music,
    highlight: false,
  },
  {
    id: 3,
    time: "12:00 - 14:00",
    title: "Nuestra Tierra",
    host: "Tradición y Costumbres",
    category: "Cultural",
    icon: CalendarDays,
    highlight: false,
  },
  {
    id: 4,
    time: "14:00 - 16:00",
    title: "Informativo 96.3",
    host: "Redacción Z",
    category: "Noticias",
    icon: Clock,
    highlight: true,
  },
  {
    id: 5,
    time: "16:00 - 18:00",
    title: "Tardes de Éxitos",
    host: "Locutor Invitado",
    category: "Música Variada",
    icon: Music,
    highlight: false,
  },
  {
    id: 6,
    time: "18:00 - 20:00",
    title: "El Cierre",
    host: "Resumen del Día",
    category: "Informativo",
    icon: Mic,
    highlight: false,
  },
];

export default function ScheduleGrid() {
  return (
    <section id="programacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Parrilla de Programación</h2>
          <p className="text-slate-600 text-lg">Acompáñanos todos los días de 07:00 a 20:00 horas con nuestra selección de programas pensados para ti.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((item) => (
            <div 
              key={item.id} 
              className={`group relative p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.highlight 
                  ? "bg-slate-900 border-slate-800 text-white shadow-lg shadow-slate-900/20" 
                  : "bg-slate-50 border-slate-100 hover:border-accent/30"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${item.highlight ? "bg-accent/20 text-accent" : "bg-white text-slate-700 shadow-sm"}`}>
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.highlight ? "bg-white/10 text-slate-300" : "bg-slate-200 text-slate-600"}`}>
                  {item.time}
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${item.highlight ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              
              <div className="space-y-1">
                <p className={`text-sm font-medium ${item.highlight ? "text-accent" : "text-slate-500"}`}>
                  Locutor: <span className={item.highlight ? "text-white" : "text-slate-700"}>{item.host}</span>
                </p>
                <p className={`text-xs ${item.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {item.category}
                </p>
              </div>

              {item.highlight && (
                <div className="absolute inset-0 rounded-3xl ring-2 ring-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
