# miCesta · web

Landing estática de miCesta para iPhone, construida con Astro y TypeScript. Diseño negro y verde, tipografía Manrope local y demostración de listas, comparación entre supermercados y gastos.

## Desarrollo

Requiere Node.js 22.12 o superior (versión par compatible).

```sh
npm ci
npm run dev
```

## Verificar y compilar

```sh
npm run check
npm run build
npm run preview
```

La salida estática se genera en `dist/`. No necesita servidor de aplicación, cuentas, secretos ni conexión a Supabase.

## Demostración

- Los selectores Organiza, Compara y Controla cambian de pantalla; también funcionan con flechas, Inicio y Fin del teclado.
- La lista permite marcar y desmarcar los cinco productos. El contador refleja los productos comprados. El total estimado corresponde a la lista completa.
- El estado se conserva al cambiar de pestaña, solo durante la visita. Recargar restaura los ejemplos.
- Los datos son ficticios, incluidos los precios y los tickets. La comparación muestra productos similares y cantidades equivalentes; no es una oferta ni una cotización actual.
- Sin JavaScript, la presentación y la lista inicial siguen visibles.

Los botones «Descubre miCesta» enlazan a la demostración. El estado público es «Próximamente en iPhone»; no hay enlaces ficticios de descarga ni formularios de registro.

## Recursos y contenido

Marca, ilustración de fondo y logos de supermercados procedentes de `caporrfer/appCompra`, revisión `8d74d386c6b3a3de4a6cfdcd571910fedb39ba3a`. Se copian únicamente recursos gráficos, sin configuración ni credenciales de la app.

- `public/images/brand-logo.webp`: logo original optimizado.
- `public/images/wallpaper.webp`: ilustración original optimizada.
- Los SVG de supermercados conservan su contenido original. Identifican supermercados del catálogo, no una relación comercial.
- Las pantallas y las ilustraciones de productos se recrean con HTML, CSS y SVG; no contienen datos de usuarios.
- Manrope se distribuye localmente mediante `@fontsource-variable/manrope`, bajo SIL Open Font License (incluida en el paquete).

## Alojamiento futuro

Este repositorio no configura ni publica alojamiento. Al elegir un dominio, definir `SITE_URL=https://dominio-real.example` en el entorno de compilación para generar canonical y URL absoluta de la imagen social. Sin dominio configurado se omite canonical y la imagen usa una ruta local.

## Pruebas de interfaz

```sh
npx playwright install chromium
npm run test:e2e
```

Las pruebas usan una compilación de producción. Se pueden ejecutar con un navegador Chromium ya instalado indicando `PLAYWRIGHT_CHROMIUM_EXECUTABLE` con su ruta absoluta. Incluyen anchos de 360, 390, 768 y 1440 px, teclado, movimiento reducido, modo sin JavaScript y comprobación de accesibilidad.
