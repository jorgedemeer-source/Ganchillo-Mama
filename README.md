# 🧶 Patrones de ganchillo a partir de imágenes

Este repositorio contiene un **autoprompt** (un prompt reutilizable) para generar **patrones de
ganchillo/crochet completos** a partir de una **serie de imágenes**, usando cualquier modelo de IA con
visión (Claude, ChatGPT, Gemini…).

## 📁 Contenido

| Archivo | Para qué sirve |
|---------|----------------|
| [`prompts/patron-ganchillo-desde-imagenes.md`](prompts/patron-ganchillo-desde-imagenes.md) | El **autoprompt** principal. Cópialo y pégalo en tu IA. |
| [`ejemplos/plantilla-invocacion.md`](ejemplos/plantilla-invocacion.md) | Plantilla lista para rellenar con tus parámetros. |

## 🚀 Cómo usarlo (3 pasos)

1. **Copia el prompt**: abre `prompts/patron-ganchillo-desde-imagenes.md` y copia todo el bloque entre
   «⬇️ PROMPT» y «⬆️ FIN DEL PROMPT».
2. **Pégalo en una IA con visión** (Claude, ChatGPT-4o, Gemini, etc.) y, en el mismo mensaje, **adjunta
   tus imágenes**. Rellena el bloque `PARÁMETROS` si quieres (tamaño, hilo, aguja, nivel…).
3. **Recibe el patrón**: materiales, muestra, abreviaturas, instrucciones vuelta a vuelta con conteo de
   puntos, ensamblaje y acabado. Si a la IA le faltan datos, te hará hasta 3 preguntas antes de generar.

## 📸 Consejos para las imágenes

Cuantos más ángulos, mejor sale el patrón:

- **Frente, espalda, ambos laterales, arriba y abajo.**
- **Detalles** en primer plano: cara, uniones entre piezas, cambios de color, texturas.
- Incluye algo de **escala** (una regla, una moneda) o indica el **tamaño real** en `PARÁMETROS` — las
  fotos no dan medidas absolutas por sí solas.
- Buena luz y fondo liso.

## ✅ Qué hace bien este autoprompt

- Detecta el **método adecuado**: amigurumi en espiral (objetos 3D), tapiz/C2C/filet (imágenes 2D) o
  paneles (prendas).
- **Verifica la aritmética de puntos** vuelta a vuelta (los aumentos/disminuciones deben cuadrar).
- Marca cada **suposición** cuando algo no se ve en las fotos.
- Da abreviaturas con equivalencia **ES / US / UK** para que el patrón sea universal.

## ⚠️ Limitaciones

Una IA **no sustituye a una prueba de tejido real**. Trata el resultado como un **borrador muy avanzado**:
teje una muestra, ajusta tensión y conteos, y afina el patrón antes de publicarlo o regalarlo.
