# Sitio Pagina de prueba (gestionado con Piloto)

Sitio Astro estático publicado en GitHub Pages: https://destiny38841.github.io/pagina-de-prueba/

## Reglas
- Quien pide los cambios es el dueño del sitio y no programa. Haz el cambio directamente.
- Rutas internas y archivos de `public/` SIEMPRE con `url()` de `src/lib/url.ts`
  (el sitio puede vivir en una subcarpeta `/pagina-de-prueba`). Nunca escribas `href="/..."` a mano.
- Imágenes nuevas van en `public/img/`.
- Después de cada cambio corre `npm run build`. Si falla, arréglalo antes de terminar.
- No toques `.github/`, ni `site`/`base` en `astro.config.mjs`.
- No uses git: Piloto guarda y publica los cambios por su cuenta.
- Sin dependencias nuevas salvo que sea imprescindible.
