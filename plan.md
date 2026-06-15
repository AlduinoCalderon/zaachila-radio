Plan de Desarrollo y Prompt Técnico: Nueva Web para Zaachila Radio 96.3 FM

---

1. Contexto y Arquitectura del Proyecto

* Objetivo: Crear una Single Page Application (SPA) o Landing Page moderna, limpia y de alto rendimiento para Zaachila Radio 96.3 FM, reemplazando el diseño actual de www.zaachilaradio.com por una propuesta fresca que conserve el branding e identidad comunitaria.
* Target de Despliegue: Vercel (debe incluir una estructura de archivos limpia, package.json correcto y configuración de Tailwind CSS sin errores).
* Stack Recomendado: Next.js (App Router) o React con Vite, utilizando Tailwind CSS para los estilos y lucide-react para la iconografía.

---

2. Branding, Identidad y Paleta de Colores

* Nombre de la Emisora: Zaachila Radio 96.3 FM
* Eslogan Institucional: "La voz del pueblo que despierta y se levanta"
* Dirección de Arte (Fresh & Clean):
    * Fondo Base: Tonos claros, limpios y profesionales como #f8fafc (Slate 50) o blanco puro, rompiendo con estructuras saturadas.
    * Color de Acento Principal: Verde vibrante (#44E25D), extraído directamente del branding del widget de streaming de Caster.fm. Se usará para elementos interactivos, botones de acción, estados hover e indicadores activos.
    * Tipografía: Tipografías sans-serif modernas, legibles y estilizadas (ej. Inter o Poppins).
    * Estilo de Componentes: Bordes suavizados (rounded-2xl), sombras sutiles, microinteracciones fluidas y un diseño completamente mobile-first.

---

3. Estructura de Páginas y Componentes

A. Navbar / Cabecera Navegables
* Fijado en la parte superior (sticky) con un fondo difuminado (backdrop-blur).
* Logotipo de texto estilizado: "Zaachila Radio 96.3" junto al distintivo "FM".
* Menú de navegación fluida (smooth-scroll): Inicio, Programación, Contacto.
* Un indicador visual dinámico en la esquina superior que simule una transmisión en vivo (un círculo con animación de pulso tipo animate-pulse junto al texto "EN VIVO").

B. Hero Section y Componente de Reproducción Completo
La sección principal de la página debe capturar la atención inmediata del usuario. Integra un mensaje de bienvenida con el eslogan y el reproductor de streaming.

Instrucción de Arquitectura Segura para React/Next.js:
Para evitar errores de hidratación y fallos de compilación causados por etiquetas de script directas en el JSX, el reproductor debe aislarse en un componente de cliente ("use client") que maneje la inyección de scripts en el DOM de forma asíncrona.

Especificaciones del Componente RadioPlayer:
1. Contenedor del Widget: Debe renderizar exactamente el siguiente elemento HTML con sus atributos correspondientes para que la API de Caster.fm lo reconozca:

<div className="cstrEmbed" data-type="newStreamPlayer" data-publicToken="3bab21b3-1b78-44d6-9006-748559cbfa43" data-theme="light" data-color="44E25D" data-channelId="" data-rendered="false"></div>

2. Carga del Script: Utiliza un hook useEffect tradicional (o el componente Script de next/script) para inyectar de manera segura y asíncrona el script externo desde:
//cdn.cloud.caster.fm//widgets/embed.js

3. Contención Visual: Envuelve el reproductor en un contenedor estilizado con Tailwind con un padding adecuado para asegurar que el widget se cargue de forma responsiva sin romper el flujo del layout.

C. Parrilla de Programación (Grid Dinámico)
* Una sección organizada en formato de tarjetas minimalistas que muestre la programación representativa de la emisora de forma ilustrativa.
* Usa elementos visuales limpios, separando los bloques horarios con tipografía clara y destacando los programas estelares utilizando el verde de acento (#44E25D).

D. Pie de Página y Módulo de Contacto
Sección informativa e institucional con los datos oficiales de la estación:
* Dirección Física: Tiboot 210-H, Barrio de San Jacinto, Villa de Zaachila, Oaxaca. C.P. 71250.
* Horario de Cabina: Lunes a Domingo de 07:00 a 20:00 horas.
* Teléfono en Cabina: (951) 5052175
* Correo Electrónico: zaachilaradio@gmail.com
* Enlaces Sociales Integrados: Botones estilizados con los íconos de Facebook, Twitter/X y un botón destacado de acción rápida para enviar mensajes directos a través de WhatsApp.

---

4. Prompt de Entrada Directa para Antigravity / Generadores de Código

(Copia y pega el texto a continuación directamente en tu herramienta de IA)

Actúa como un desarrollador Frontend experto en React, Next.js y Tailwind CSS. Necesito que construyas una Landing Page moderna y completamente responsiva para "Zaachila Radio 96.3 FM", basada en la identidad de www.zaachilaradio.com, optimizada para desplegarse de inmediato en Vercel.

Sigue rigurosamente estas pautas de desarrollo:
1. Paleta de colores: Fondos limpios y claros (#f8fafc), texto oscuro refinado (#1e293b) y un verde de acento vibrante (#44E25D) usado en botones, hovers e indicadores activos.
2. Estructura: Crea un Navbar sticky con un botón parpadeante de "EN VIVO", una sección Hero elegante, un Grid ilustrativo para la programación de la radio, y un Footer detallado con la dirección (Tiboot 210-H Barrio de San Jacinto, Zaachila, Oaxaca), teléfono ((951) 5052175) y redes sociales.
3. Componente de Audio Crucial: Crea un componente de cliente ("use client") llamado RadioPlayer. No pegues etiquetas script directamente en el JSX porque romperá el build. En su lugar, usa useEffect para añadir al documento el script externo '//cdn.cloud.caster.fm//widgets/embed.js' de forma asíncrona al montar el componente. El JSX debe retornar exactamente este contenedor div para que el script de Caster.fm inyecte el reproductor de forma segura:

<div className="cstrEmbed" data-type="newStreamPlayer" data-publicToken="3bab21b3-1b78-44d6-9006-748559cbfa43" data-theme="light" data-color="44E25D" data-channelId="" data-rendered="false"></div>

Genera el código completo, modular y limpio, asegurando que todos los archivos necesarios (incluyendo package.json y tailwind.config.js) estén estructurados para compilar sin errores en un entorno de producción.