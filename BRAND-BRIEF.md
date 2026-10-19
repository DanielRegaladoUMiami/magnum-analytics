# Magnum Analytics — brief de marca

Para generar la imagen de marca (isotipo, logo, paleta y usos). Pega este documento
completo en Gemini; los prompts listos están al final.

## 1. Qué es Magnum

Magnum Analytics es una práctica de consultoría en datos con base en Miami, Florida, que
trabaja remoto en Estados Unidos y Latinoamérica. Tres socios con maestría en Business
Analytics de la Universidad de Miami. Atiende negocios de $500K a $10M de ingresos anuales:
dueños y gerentes, no técnicos. Todo es bilingüe (español e inglés).

## 2. Posicionamiento y promesa

**Hacemos el trabajo. Tú recibes el resultado.**

Magnum no vende software para que el cliente lo opere. Vende consultoría y ejecución: hace
la tarea y entrega un resultado concreto (un dashboard funcionando, un pronóstico que se
actualiza solo, un asistente que ya responde). El cliente no aprende una herramienta ni
mantiene nada.

Forma de contrato: proyecto de alcance fijo (entregable, fechas y precio por escrito antes
de empezar, nunca por hora) o membresía mensual para lo que se repite.

## 3. Las tres áreas

1. **Business Intelligence** — dashboards, reportes automáticos y una base limpia con los
   números que se usan para decidir.
2. **Machine Learning** — pronósticos, clientes en riesgo, inventario y precios: modelos que
   aprenden del historial y entregan la respuesta cada mes.
3. **Inteligencia artificial** — asistentes y agentes que responden desde los documentos del
   negocio, clasifican correos y hacen las tareas repetitivas del equipo.

## 4. Audiencia y qué debe sentir

Un dueño de negocio de Miami que factura entre $500K y $10M: retail, e-commerce, servicios
profesionales, distribución. Tiene los datos en Shopify, QuickBooks, un CRM y hojas de
cálculo, y decide por intuición porque nadie tiene tiempo de leerlos. Desconfía de las
"transformaciones digitales" de seis meses y del software que luego nadie usa.

Al ver la marca debe sentir: **seriedad, claridad y "ellos lo hacen por mí"**. Debe parecer
una firma de profesionales establecida, no una startup de IA ni una agencia de diseño.

## 5. Personalidad de marca

Somos: claros, directos, serios, cálidos, concretos, confiables, de Miami.

No somos: fríos, técnicos, futuristas, "disruptivos", baratos, genéricos.

Referencia de tono: una firma de contadores o abogados de confianza que además sabe de
datos. Hablamos en frases cortas, en sentence case, sin jerga.

## 6. Sistema visual actual (sitio v0.2)

Esto ya existe en el sitio y la imagen de marca debe convivir con ello o reemplazarlo de
forma coherente.

**Paleta**

| Rol | Hex | Uso |
|---|---|---|
| Fondo | `#fbfaf8` | blanco cálido, fondo de página |
| Superficie | `#ffffff` | tarjetas |
| Tinta | `#1c1b19` | títulos, texto principal |
| Tinta suave | `#55524c` | texto secundario |
| Líneas | `#e8e4dd` | bordes finos |
| **Azul de marca** | `#2563eb` | botones, enlaces, isotipo actual |
| Azul oscuro | `#1e40af` | azul como texto |
| Lavado azul | `#eef3ff` | fondos tintados |
| **Coral de acento** | `#ea6a3a` | números, viñetas, etiquetas |
| Verde / rojo | `#15803d` / `#b4341c` | solo para subidas y bajadas en dashboards |

**Tipografía**: Fraunces (serif con carácter, para títulos, siempre en sentence case) e Inter
(sans, para texto e interfaz).

**Wordmark actual**: la palabra "Magnum" en Fraunces semibold, negra, con "Analytics" en Inter
pequeño y gris a su lado. Sin símbolo.

**Isotipo actual**: solo un favicon provisional, una "M" blanca en Fraunces sobre un cuadrado
azul `#2563eb` con esquinas redondeadas. Es un placeholder, no una marca.

**Descriptor actual**: "Business Intelligence · Miami". Está pendiente de revisar porque ahora
la oferta son tres áreas, no solo BI.

## 7. Dirección para la imagen de marca

**Qué debe comunicar**: trabajo terminado y entregado; claridad que sale del desorden; una
firma seria y cercana de Miami.

**Metáforas visuales que sí**:
- Una "M" construida con pocas formas geométricas limpias (barras, bloques, una línea que
  sube), que pueda leerse también como un gráfico sencillo o como tres columnas (las tres
  áreas).
- Orden que emerge: varias líneas o puntos dispersos que convergen en una forma sólida.
- Un sello o monograma, como el de una firma profesional: compacto, sólido, con peso.
- Calidez de Miami en la paleta (el blanco cálido y el coral), nunca en motivos de palmeras
  o atardeceres.

**Clichés que no**: cerebros, circuitos, robots, chips, lluvia binaria, hexágonos, redes de
nodos, lupas, bombillas, cohetes, gráficas de barras genéricas con flecha hacia arriba,
degradados morados o cian "de IA", efectos 3D o brillo.

**Restricciones técnicas**:
- Debe funcionar en un solo color (negro sobre blanco y blanco sobre azul) antes de añadir
  color.
- Legible a 16 px como favicon y a 32 px como avatar de redes.
- Versiones: isotipo solo, wordmark solo, isotipo + wordmark horizontal, isotipo + wordmark
  apilado.
- Debe convivir con Fraunces e Inter; si propone otra tipografía para el wordmark, que sea
  una serif con carácter similar.
- Fondo claro como uso principal; versión para fondo oscuro como secundaria.
- Sin "LLC", "Inc." ni ninguna forma jurídica en el wordmark.

## 8. Entregables que se le piden a Gemini

1. Tres a cinco conceptos de isotipo, cada uno en negro sobre blanco.
2. El concepto elegido en azul `#2563eb`, en blanco sobre azul y con el coral `#ea6a3a` como
   detalle opcional.
3. Wordmark "Magnum Analytics" con el isotipo, en horizontal y apilado.
4. Hoja de usos: favicon 16 px, avatar 32 px, encabezado de sitio, firma de email, portada
   de propuesta en PDF.
5. Una línea explicando qué representa el concepto elegido.

## 9. Prompts listos para pegar

Los generadores responden mejor en inglés. Cada prompt lleva encima qué busca.

**Concepto base: una M geométrica que se lee como tres columnas o un gráfico sencillo.**

```
Minimal logo mark for "Magnum Analytics", a data consulting firm in Miami. A bold
monogram "M" built from three clean vertical blocks or bars, readable both as the
letter M and as a simple chart. Flat vector, single color, black on white, no
gradients, no 3D, no circuit boards, no brains, no hexagons. Heavy, confident,
professional, like a law or accounting firm mark. Centered, lots of white space,
presented on a plain white background.
```

**Concepto alternativo: orden que emerge del desorden.**

```
Abstract logo mark for a data consulting firm: scattered dots or short strokes on
the left converging into a solid, clean geometric "M" on the right. Flat vector,
one color, black on white, no gradients, no glow, no technology clichés. Calm,
precise, professional. Plain white background, centered, generous margins.
```

**Concepto alternativo: sello o monograma de firma profesional.**

```
Monogram seal for "Magnum Analytics": a compact serif "M" with a strong, slightly
flared serif, set inside a simple rounded square. Classic professional-services
feel with a modern cut. Flat vector, one color, black on white, no texture, no
gradients. Must stay legible at 16 pixels. Plain white background.
```

**Aplicación de color y lockup, para el concepto elegido.**

```
Take this logo mark and present it in brand blue #2563eb on warm off-white #fbfaf8,
then white on solid #2563eb, with one small accent detail in coral #ea6a3a.
Add the wordmark "Magnum" in a semibold high-contrast serif (like Fraunces) with
"Analytics" smaller in a clean sans (like Inter). Show horizontal and stacked
lockups side by side. Flat vector, no shadows, no gradients.
```

**Hoja de usos, para comprobar que funciona en tamaños reales.**

```
Brand usage sheet for the attached logo: a 16 px favicon, a 32 px round social
avatar, a website header on warm off-white #fbfaf8, an email signature, and a PDF
proposal cover. Flat, minimal, consistent spacing. Show light background versions
and one dark version on #1c1b19.
```
