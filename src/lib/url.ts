/**
 * Arma rutas internas respetando el `base` del sitio.
 * En GitHub Pages genérico el sitio vive en /<repo>/, así que NUNCA escribas "/algo" a mano:
 *   <a href={url('contacto')}>  ·  <img src={url('img/foto.jpg')}>
 */
export const url = (ruta = ''): string =>
  import.meta.env.BASE_URL.replace(/\/?$/, '/') + ruta.replace(/^\//, '');
