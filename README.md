# JC Fotografía — Portafolio

Sitio web estático de portafolio fotográfico, construido con HTML, CSS y JavaScript puro (sin frameworks ni dependencias de build).

## Estructura

```
index.html      → estructura de la página
styles.css      → estilos y diseño responsive
script.js       → galería, lightbox y menú móvil
assets/img/     → fotografías optimizadas para web (versión completa + miniatura)
```

## Contenido

Incluye una selección de 10 fotografías de la cobertura de Graduación 2025, mostradas en una galería tipo mosaico con lightbox a pantalla completa.

## Ver en local

Al ser un sitio 100% estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor local:

```bash
python -m http.server 8000
```

y visitar `http://localhost:8000`.

## Publicación

Pensado para desplegarse gratis con **GitHub Pages** desde la rama `main`.
