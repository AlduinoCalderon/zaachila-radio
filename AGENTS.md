<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Zaachila Radio - AI Agent Workflow & Rules

Estas son las reglas operativas obligatorias para cualquier asistente de IA trabajando en el repositorio de **Zaachila Radio**:

## 1. Flujo de Trabajo (Git Workflow)
- **Prohibido tocar `master`**: La rama `master` es EXCLUSIVAMENTE para Producción. Todo el desarrollo y las pruebas se harán en ramas paralelas (ej. `pruebas` o ramas de *features* específicas). Vercel está configurado para hacer despliegues paralelos automáticos para estas ramas.
- **Commits Atómicos**: Cada commit debe contener un único cambio lógico, adición de función o resolución de un bug. No se permiten commits masivos que mezclen funcionalidades inconexas. Usa mensajes de commit descriptivos en inglés o español.

## 2. Creación de Artefactos y Modos de Planeación
- Si la petición del usuario requiere cambios estructurales o añadir secciones grandes (como el futuro muro de Facebook o historia), entra en **Modo de Planificación**.
- Crea o actualiza el artefacto `implementation_plan.md` y solicita feedback/aprobación explícita del usuario ANTES de empezar a alterar código.
- Usa `task.md` como una checklist para llevar el registro de qué archivos estás tocando en tiempo real.
- Finaliza cambios complejos actualizando `walkthrough.md` para resumirle al usuario qué se modificó.
- Estructura los artefactos de forma legible, usando alertas de GitHub Markdown (ej. `> [!NOTE]`, `> [!IMPORTANT]`).

## 3. Optimización y Rendimiento (Best Practices)
La web debe ser ultra-rápida considerando que la audiencia comunitaria puede tener conexiones intermitentes. Sigue esto:
- **Imágenes Optimizadas**: Utiliza formatos ligeros como `.webp`. Apóyate siempre en el componente `<Image>` de Next.js (`next/image`) que las optimiza dinámicamente en el servidor.
- **Lazy Loading**: Si se introducen iframes pesados no críticos (como redes sociales futuras), SIEMPRE incluye el atributo `loading="lazy"` para evitar bloqueos del *First Contentful Paint*.
- **Iframe de Streaming (Caster.fm)**: Se reconoce que el iframe principal de streaming tiene un retraso inherente al ser un script de un servicio externo remoto. Esto es aceptable. No intentes bloquear el renderizado de la página principal esperando este iframe.
- **Componentes de Servidor vs Cliente**: En Next.js (App Router), privilegia la renderización en el servidor. Añade la directiva `"use client"` estricta y únicamente a los componentes específicos que requieran estado interactivo (botones funcionales, hooks de React).
