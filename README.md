# Zaachila Radio 96.3 FM - Web App

Este proyecto es la Landing Page oficial y Single Page Application (SPA) para **Zaachila Radio 96.3 FM**, *"La voz del pueblo que despierta y se levanta"*.

Construido con **Next.js (App Router)** y **Tailwind CSS**, este rediseño sustituye la anterior arquitectura web con una propuesta moderna, de alto rendimiento y adaptada a la identidad comunitaria de la emisora, adoptando un diseño estilo "Evangelion Eva 01" con tonos oscuros (Dark Mode), morado intenso, detalles en verde brillante y animaciones dinámicas.

## Características Actuales

- **Reproductor Caster.fm Personalizado**: Se implementó una solución avanzada de CSS para "recortar" y aislar exclusivamente los controles esenciales (Play/Pausa y Volumen) del iframe nativo de Caster.fm, logrando una píldora flotante ultra-minimalista, librándose de toda la marca y los enlaces externos que no son de interés para la radio.
- **Diseño Responsivo (Mobile-First)**: La interfaz está diseñada para que todos los elementos encajen armónicamente en cualquier tamaño de pantalla. Con las recientes optimizaciones, la vista principal cabe en una sola pantalla sin necesidad de hacer scroll.
- **Identidad Visual "Eva 01"**: Paleta oscura basada en `#1A0B2E` (fondo), `#5416B4` (acentos morados) y `#44E25D` (detalles en verde neón).
- **Animaciones Integradas**: Fondo dinámico de partículas con emojis musicales y ondas de radio generados mediante React Hooks (`AnimatedBackground`).
- **Navegación Eficiente**: Se eliminaron enlaces innecesarios ("Inicio") priorizando "EN VIVO" como el botón principal de llamada a la acción (CTA), llevando directamente a los controles de radio.

## Futuras Implementaciones Planeadas

El desarrollo de la plataforma se dividirá en fases. Las siguientes funcionalidades y secciones están documentadas para ser implementadas en las próximas versiones:

1. **Integración de Redes Sociales (Facebook)**:
   - Añadir la sección "Publicaciones Recientes" en el layout usando iframes oficiales de la página de Facebook de Zaachila Radio para mostrar la actividad comunitaria en vivo y mantener el contenido web fresco sin necesidad de un CMS complejo.

2. **Tipografía Oficial de Zaachila Radio**:
   - Transicionar de las fuentes web seguras actuales a las tipografías oficiales o institucionales que utiliza Zaachila Radio en sus medios impresos o branding original, garantizando coherencia de marca total.

3. **Sección "Nuestra Historia"**:
   - Crear un apartado en la página que documente la fundación y el trayecto histórico de la estación. 
   - Objetivo: Mostrar la trayectoria de *la voz del pueblo* y fortalecer el sentido de identidad de la audiencia local con el proyecto.

4. **Formulario de Contacto Funcional (Formspree)**:
   - Integrar un formulario real de contacto para que los radioescuchas y patrocinadores puedan mandar mensajes directos a la cabina.
   - **Esquema propuesto**:
     ```html
     <form action="https://formspree.io/f/mwpplwnk" method="POST">
       <div class="mb-3">
         <label for="name" class="form-label">Name</label>
         <input type="text" class="form-control" id="name" name="name" required>
       </div>
       <div class="mb-3">
         <label for="email" class="form-label">Email</label>
         <input type="email" class="form-control" id="email" name="_replyto" required>
       </div>
       <div class="mb-3">
         <label for="message" class="form-label">Message</label>
         <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
       </div>
       <button type="submit" class="btn btn-outline-light"><i class="fas fa-envelope"></i> Send</button>
     </form>
     ```

## Tecnologías Utilizadas

- **React 18** & **Next.js**
- **Tailwind CSS v4** (Estilizado mediante directivas `@theme`)
- **Lucide React** (Iconografía vectorial moderna)
- **Caster.fm** (Servicio de streaming y widget embebido)

---
*Programado por Alduino Calderon 🐢*
