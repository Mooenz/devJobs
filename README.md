# devJobs

Este repositorio contiene una aplicación de búsqueda y gestión de ofertas de empleo desarrollada como ejercicio personal para retomar conceptos de React y aprender Zustand. El proyecto está basado en el curso/proyecto educativo de Midudev (jscamp.dev) y se usa como laboratorio para practicar buenas prácticas, estado global y patrones de React.

**Estado:** En desarrollo — objetivo: reforzar React y dominar Zustand.

## ¿Qué es este proyecto?

devJobs es una SPA creada con Vite + React que simula un portal de empleos. Permite buscar, filtrar, ver detalles de ofertas, marcar favoritas y gestionar autenticación básica (simulada). Lo uso para practicar arquitectura de estado y patrones modernos de React.

## Objetivo de aprendizaje

- Retomar y profundizar en React (componentes, hooks, rutas protegidas).
- Aprender y aplicar `zustand` para manejo de estado global (stores simples y eficientes).
- Combinar Context API y Zustand donde tenga sentido (p. ej. Auth vs. Favoritos).
- Practicar organización de proyecto con Vite y estructura modular.

Este repositorio es una muestra de código pensada para mostrar habilidades técnicas a reclutadores y posibles equipos.

## Características principales

- Búsqueda y filtrado de ofertas (por texto, tipo, ubicación, etc.).
- Paginación de resultados.
- Ficha de detalle de una oferta.
- Marcado de ofertas como favoritas.
- Autenticación y rutas protegidas (simulada para práctica).
- Estado global con `zustand` y uso de `Context` para ciertos casos.

## Stack tecnológico

- React + Vite
- JavaScript (JSX)
- Zustand (estado global)
- Context API
- CSS modular y estilos en `src/styles`

## Dónde mirar (archivos clave)

- [src/context/AuthContext.jsx](src/context/AuthContext.jsx)
- [src/context/FavContext.jsx](src/context/FavContext.jsx)
- [src/store/authStore.js](src/store/authStore.js)
- [src/store/favoritesStore.js](src/store/favoritesStore.js)
- [src/hooks/useFilterJobs.jsx](src/hooks/useFilterJobs.jsx)
- [src/page/Home.jsx](src/page/Home.jsx)
- [src/page/JobDetail.jsx](src/page/JobDetail.jsx)

Estos archivos muestran patrones de estado, hooks personalizados y componentes clave.

## Cómo ejecutar

Instala dependencias y arranca el servidor de desarrollo (uso `pnpm`, pero también funciona con `npm` o `yarn`):

```bash
pnpm install
pnpm dev
# o con npm
npm install
npm run dev
```

Abre http://localhost:5173 (u otro puerto que Vite indique).

## Qué quiero mostrar a reclutadores

- Capacidad para estructurar una SPA con React y Vite.
- Uso real de `zustand` para gestionar estado global de forma escalable.
- Entendimiento de patrones de UI/UX básicos: búsqueda, paginación, rutas protegidas.
- Código legible y modular, con hooks reutilizables.

## Origen / Créditos

Proyecto basado en el material educativo de Midudev (jscamp.dev) como punto de partida para el aprendizaje personal.

## Contacto
- Website [mooenz.me](https://www.mooenz.me/)
- GitHub [@mooenz](https://github.com/Mooenz)
- Twitter [@mooenzdev](https://twitter.com/MooenzDev)