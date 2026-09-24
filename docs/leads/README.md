# ZO Leads · captación de contactos en congresos

App web instalable (PWA) para que el equipo de stand registre contactos de profesionales
y cada uno quede asignado automáticamente al territorio y delegado que le corresponde.
Funciona sin conexión; los datos se guardan en el propio móvil.

## Cómo la usa el equipo (3 pasos)

1. Abrir la URL en el móvil (Safari en iPhone, Chrome en Android) y pulsar
   **Compartir → Añadir a pantalla de inicio**. Ya queda como app.
2. Pestaña **01 Nuevo**: nombre, provincia (obligatoria: decide el territorio),
   email o teléfono, y marcar el consentimiento. Guardar.
3. Al cerrar el congreso, pestaña **03 Exportar**: cada persona envía su
   *Copia de seguridad (JSON)*; quien consolida importa todos y descarga el Excel.

## Reutilizarla en otro congreso

Editar `config.js`: nombre del evento, personas del stand, delegados por territorio.
También se puede cambiar desde la pestaña **04 Ajustes** del móvil (solo afecta a ese móvil).

## Pendiente de validar antes del primer uso

- `config.js` → reparto **provincia → territorio**: es una propuesta deducida de los nombres
  de los territorios. Validar con Ventas.
- `config.js` → **nombre y email de cada delegado**: en blanco.
- `config.js` → **texto RGPD y email de derechos**: revisar con Legal.
- Logo: los iconos actuales son provisionales (cuadrado azul con "ZO"). Para poner el
  oficial, copiar desde Box (`ZO Brand Logos/PNG` y `/SVG`) a la carpeta `logo/`:
  `ZO_Icon_Black.png` y `ZO_Wordmark_wObagi_Left_Black.svg`. La cabecera los carga sola.
  Para el icono de la app, sustituir `icon-192.png`, `icon-512.png` e `icon-180.png`.

## Ficheros

| Fichero | Qué es |
|---|---|
| `index.html` | La app completa (formulario, lista, exportación, ajustes) |
| `config.js` | Evento, territorios, delegados, listas desplegables, texto RGPD |
| `sw.js` | Cache para funcionar sin conexión |
| `manifest.webmanifest`, `icon-*.png` | Instalación como app |
