# Plantilla de invocación

Pega en tu IA con visión: **(1)** el prompt completo de
[`../prompts/patron-ganchillo-desde-imagenes.md`](../prompts/patron-ganchillo-desde-imagenes.md),
**(2)** este bloque de parámetros ya rellenado y **(3)** tus imágenes adjuntas en el mismo mensaje.

---

```text
PARÁMETROS
- Tamaño final deseado: 18 cm de alto
- Grosor de hilo / lana: algodón DK
- Número de aguja: 3,0 mm
- Nivel de dificultad objetivo: intermedio
- Idioma y terminología: español (con equivalencia US/UK)
- Uso: juguete decorativo

Adjunto una serie de imágenes del muñeco: frente, espalda, ambos laterales,
vista superior, vista inferior y un primer plano de la cara.
Genera el patrón completo siguiendo tu estructura.
```

---

## Ejemplo mínimo (una sola foto, sin parámetros)

Si solo tienes una foto y quieres probar rápido:

```text
Aquí tienes una foto de un llavero de ganchillo. No tengo medidas ni preferencias
de hilo: usa valores por defecto, indícalos, y marca tus suposiciones.
Genera el patrón completo.
```

> El autoprompt está preparado para trabajar incluso con poca información: usará valores por defecto,
> los dirá explícitamente y marcará cada suposición con `» Suposición:`.
