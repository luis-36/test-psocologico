# Prompt para Gemini — clonar NOESIS tal cual

Copia TODO lo que está debajo de la línea y pégalo en Gemini. No resumas: es una especificación de implementación.

---

Eres un implementador senior. Construye la web **NOESIS** exactamente como se especifica. No improvises marca, copy, color, tipografía ni flujo. Si algo no está escrito, elige la opción más sobria y editorial. Idioma de la UI: **español**. Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Cero dependencias extra de iconos o imágenes (no lucide, no heroicons, no next/image con fotos, no Unsplash, no emojis). Toda la ornamentación es **SVG geométrico inline** (círculos, cuadrados, líneas, stroke 1.2–1.4, `currentColor`).

## Qué es el producto

Landing de tests psicológicos premium que funciona como **página de paso / señuelo hacia anuncios**. Tres lecturas relacionadas forman un solo perfil. El deseo de ver el resultado y de completar 3/3 es el motor. No es un test clínico. Tono: íntimo, literario, seguro, nunca infantil ni “AI slop”.

Nombre: **Noesis**  
Kicker: **Laboratorio de lectura**  
Headline: **Tres lecturas.** (romanos, Fraunces) + segunda línea en itálica **Un perfil.**  
Lead: *Vínculo, mente y esfera social se leen juntas. Empieza por el eje que te llama. El retrato se nombra cuando los tres coinciden.*

Los tres ejes (siempre en este orden):

| # | Slug | Nombre | Eje | Promesa | Min |
|---|------|--------|-----|---------|-----|
| 01 | vinculo | Vínculo | Cómo te unes | La forma en que amas cuando nadie te está mirando. | 4 |
| 02 | mente | Mente | Cómo razonas | No un ranking. Un retrato de cómo piensas cuando aprieta el reloj. | 5 |
| 03 | esfera | Esfera | Cómo te leen | El efecto que dejas en una sala cuando aún no has hablado. | 4 |

Cada uno tiene **6 preguntas** y **4 rasgos**. Completar los tres desbloquea la “arquitectura” (`Ancla · Analítico · Diplomático`).

## Prohibido (anti-slop, no negociable)

- Fotos, avatares, ilustraciones, icon packs, emojis.
- Púrpura, violeta, magenta, amarillo, oro, naranja, neón, glassmorphism, blobs, mesh gradients, aurora.
- Inter / Comic Sans como display. No más de 2 familias.
- Gradientes llamativos. Como máximo un wash vertical ≤8% de diferencia de luminosidad.
- Bordes gruesos, sombras dramáticas, bounce, scale desde 0.
- Copy con “✨”, “descubre tu verdadero yo!!”, ranking tóxico, diagnóstico clínico.
- Bloquear el resultado con un paywall agresivo. El anuncio se ve **antes** del resultado, pero el usuario **siempre** puede pulsar “Ver mi lectura”.

## Sistema visual (tokens exactos)

```
background: #f3efe6          /* papel cálido */
foreground: #1a1714          /* tinta */
card:       #faf7f0
primary:    #3a4a42          /* sage profundo */
primary-fg: #f4f0e8
muted:      #6d665d
subtle:     #8f877c
border:     #1a17141f        /* tinta 12% */
ring:       #3a4a42
wash:       #ebe6db
ink-soft:   #1a17140f

radius-sm 8 / md 12 / lg 20 / xl 36
/* cards p-6 (24px) + botón radius-md 12 → card radius-xl 36 (concéntrico) */

font-display: "Fraunces", "Iowan Old Style", Palatino, Georgia, serif
              optical-sizing auto; pesos 400/500/600; itálica para el patrón y la 2ª línea del H1
font-sans:    "Figtree", "Segoe UI", system-ui, sans-serif  (400/500/600)

text-display: clamp(2.75rem, 1.4rem + 6vw, 5.5rem); line-height .96; tracking -0.035em
text-title:   clamp(1.75rem, 1.2rem + 2vw, 2.75rem); line-height 1.12; tracking -0.03em
body: line-height 1.55; text-wrap pretty en p, balance en h1–h3
antialiased

shadow-border:
  0 0 0 1px #1a171414,
  0 1px 2px -1px #1a171410,
  0 8px 24px -16px #1a171418
shadow-border-hover:
  0 0 0 1px #1a171422,
  0 10px 28px -18px #1a171428
```

Fondo de página (`paper-wash`):
```
background-color: #f3efe6
background-image:
  linear-gradient(180deg, #1a171408, transparent 42%),
  radial-gradient(80% 50% at 50% -10%, #ffffff88, transparent 70%)
```

Google Fonts:
`https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap`

Botones:
- Primary: `bg #3a4a42`, texto `#f4f0e8`, h-11 / h-12 / h-14, hover opacity 0.9, active scale(0.96), 150ms ease-out.
- Outline: fondo card + shadow-border.
- Ghost: texto tinta, hover ink-soft.
- Mínimo 44px de alto. `cursor: pointer`.
- Kickers: 11–12px, uppercase, tracking 0.16–0.22em, color subtle.

Motion: enter `opacity + translateY(12px) + blur(4px)` 500ms `cubic-bezier(0.22,1,0.36,1)`, stagger 80/140/200/280ms. Respetar `prefers-reduced-motion`. No `transition: all`.

## Marcas SVG (únicas “imágenes”)

Logo / wordmark: tres círculos stroke superpuestos + texto “Noesis” en Fraunces.
```
viewBox 0 0 48 48, stroke 1.4 currentColor, fill none
c1: (18,20) r=12
c2: (30,20) r=12
c3: (24,30) r=12
```

Vínculo: dos círculos (18,24) r=11 y (30,24) r=11.  
Mente: cuadrado 12,12 24×24 + cuadrado rotado 45° en el centro.  
Esfera: tres puntos (24,14) (14,32) (34,32) unidos por un triángulo stroke.

Favicon: mismos tres círculos sobre fondo `#f3efe6`, stroke `#1a1714`.

## Diagrama Venn (héroe visual)

SVG viewBox `0 0 240 220`, tres círculos r=58:
- Vínculo (86,78) label “VÍNCULO” en (40,28)
- Mente (154,78) label “MENTE” en (200,28)
- Esfera (120,136) label “ESFERA” en (120,198)
Texto “PERFIL” en (120,102), 10px, tracking 0.22em, opacity 0.55.

Si ese eje está completado: fill currentColor opacity 0.1 + stroke 1.6. Si no: fill none, stroke opacity 0.45. Es el medidor de deseo: 0/3, 1/3, 2/3, 3/3.

## Rutas (App Router)

```
/                    landing
/test/[slug]         intro → preguntas → cierre/anuncio
/lectura/[slug]      resultado de un eje
/perfil              retrato 0–3
/vespera             advertorial del socio (el anuncio)
```

Header sticky h-16, blur 80% paper, wordmark izq, “Perfil N / 3” dcha (Fraunces tabular-nums). En mobile solo el número. Footer: “Noesis” + *Lecturas de estilo en tres ejes. No sustituyen evaluación clínica ni profesional.*

Persistencia: `localStorage` clave `noesis-profile-v1`  
`{ name: string, results: { [slug]: { slug, trait, score, answers, completedAt } } }`  
Sin auth, sin base de datos.

## Landing (estructura exacta)

1. Kicker LABORATORIO DE LECTURA  
2. H1 Tres lecturas. / *Un perfil.*  
3. Lead (el de arriba)  
4. CTA primario: “Empezar mi perfil” (si 0/3) o “Continuar el perfil” (si hay progreso). Si hay progreso, secundario outline “Ver retrato”.  
5. Campo underline, sin caja: label “CÓMO TE NOMBRAMOS”, placeholder “Tu nombre, si quieres”, max 40.  
6. Venn.  
7. Grid 3 columnas (stack en mobile) — cards: índice Fraunces 4xl color subtle, marca del eje, nombre, eje en uppercase, promesa, “6 preguntas · N min”, CTA “Iniciar lectura” o el nombre del rasgo si ya está hecho. Click: a `/test/[slug]` o `/lectura/[slug]`.  
8. Método:
   - 01 Eliges un eje — El que te tira ahora. No hace falta el orden.
   - 02 Respondes sin pose — Seis escenas. La primera impresión suele ser la cierta.
   - 03 Se nombra el patrón — Una lectura, no un ranking. Luego, el siguiente espejo.
9. Bloque socio featured (ver anuncio).

## Flujo de un test (`/test/[slug]`)

Barra de progreso: 1px, tinta 12%, relleno primary, scaleX, origin left.

**Intro**
- Marca del eje + “01 · CÓMO TE UNES”
- H1 nombre del eje (display)
- Intro (abajo, texto literal)
- “6 preguntas · N minutos · sin registro”
- Si no hay nombre, el mismo input; si hay, “Lectura para {nombre}”
- “Empezar la lectura” / ghost “Otra vez no”

Intros:
- Vínculo: *Seis escenas íntimas. No hay respuesta correcta: hay un patrón. Al final, tu lectura nombra cómo te acercas, cómo sostienes y cómo te vas.*
- Mente: *Cuatro problemas de precisión y dos de estilo. El número que verás es una estimación lúdica — la lectura nombra tu manera de entrar al problema, que es lo que de verdad te distingue.*
- Esfera: *Seis escenas sociales. No medimos simpatía: medimos lectura. Cómo entras, cómo sostienes el clima, cómo te posicionas cuando el grupo se tensa.*

**Pregunta (una a una)**
- “01 / 06” (+ “ · Precisión” o “ · Estilo” solo en Mente)
- Prompt en Fraunces title
- 4 opciones A B C D, min-h 56px, card + hairline; seleccionada = primary invertida
- Atrás / Siguiente (disabled hasta elegir). En la 6ª: “Cerrar la lectura”

**Cierre (el señuelo, ~2.6s)**
Frases que rotan con shimmer de texto:  
“Ordenando respuestas” → “Contrastando con el modelo” → “Nombrando el patrón” → “Preparando tu lectura”  
Luego: “{Nombre}, tu lectura está lista.” (o “Tu lectura está lista.”)  
Copy: *Un socio sostiene este laboratorio. Ábrelo ahora, o continúa a tu retrato.*  
**Card del socio grande** (CTA primario “Conocer el programa” → `/vespera`).  
Botón outline “Ver mi lectura” → `/lectura/[slug]`.

## Anuncio nativo (socio)

```
kicker: Socio de Noesis
name:   Instituto Vespera
line:   Cuatro semanas para leer lo que tu entorno no dice.
body:   Un programa de atención sostenida: vínculo, criterio y presencia social. El mismo triángulo que acabas de recorrer, con práctica.
cta:    Conocer el programa
```

Aparece: landing (featured), cierre del test, resultado, perfil.

`/vespera` — misma piel, advertorial:
- Semana de vínculo — Cómo te acercas, cómo pides, cómo te vas. Práctica, no teoría de pareja.
- Semana de criterio — Atención sostenida. Menos ruido, más corte limpio en lo que piensas.
- Semana de esfera — Presencia en grupo. Leer la sala sin desaparecer en ella.
- Semana de cruce — Los tres ejes en una sola forma de estar. El retrato que Noesis nombra, ensayado.
Card “Reservar una plaza” / “Sin pago aquí. Solo una señal de interés para la siguiente cohorte.” / botón “Anotar mi plaza” → “Plaza anotada. Te escribimos desde Vespera.”  
Link ghost “Volver a Noesis”.

(Este bloque es el destino del señuelo. Si más adelante enchufas AdSense/otra red, sustituye el CTA; no cambies el diseño.)

## Resultado `/lectura/[slug]`

Kicker: `01 · VÍNCULO · CÓMO TE UNES`  
“{nombre}, tu patrón se llama”  
H1 display itálica: nombre del rasgo (Ancla / Horizonte / …)  
Kicker del rasgo (Constancia, Autonomía…)  
Si es Mente: número grande tabular `{score}` + “estimación” (IQ lúdico = `Math.round(92 + (correct/scored)*48)`, scored = preguntas con `correct` definido).  
Párrafo retrato.  
3 líneas separadas por hairline.  
“Perfil N de 3. El retrato pide otro eje.” o “Los tres ejes están nombrados.”  
CTA: “Seguir con {siguiente}” o “Abrir el retrato completo”. Secundario “Los tres ejes”.  
Debajo, de nuevo el socio.

## Perfil `/perfil`

Si 0: “Aún no hay lectura. Elige el eje que te tira.”  
Si 1–2: “N de 3 ejes.” + *El perfil se nombra cuando los tres espejos coinciden. Te falta poco — y es la parte que cambia el retrato.*  
Si 3: “{Nombre}, arquitectura.” + los tres nombres en itálica unidos por ` · ` + párrafo *{Vínculo} en el afecto, {mente en minúscula} en el criterio, {esfera en minúscula} en la sala. El cruce no es un promedio: es una forma de estar.* y *Guarda el nombre. Los tests cambian si los repites en otro día — el patrón, casi nunca.*

Lista de 3 filas: marca + nombre del eje + rasgo o “Sin lectura” + “Abrir”/“Iniciar”. Venn arriba. Socio abajo.

## Puntuación

Cada opción tiene `trait`. Gana el rasgo con más votos (empate: el primero que alcance el máximo; fallback abajo).

**Vínculo** fallback `ancla`  
Rasgos: Ancla/Constancia, Espejo/Sintonía, Horizonte/Autonomía, Marea/Intensidad.

Preguntas y opciones (label → trait):

1. Alguien que te importa tarda horas en responder.  
   Sigo con lo mío. Si importa, vuelve. → horizonte  
   Le escribo con calma para saber si está bien. → ancla  
   El cuerpo se me adelanta al mensaje. → marea  
   Ajusto el tono a cómo suele ser esa persona. → espejo  

2. En un desacuerdo que duele, lo primero que haces es…  
   Bajar la fiebre. Entender antes de defender. → espejo  
   Decir la verdad entera, aunque tiemble. → marea  
   Pedir un receso y volver cuando esté nítido. → horizonte  
   Quedarme en la mesa hasta que se aclare. → ancla  

3. El domingo por la mañana, juntos, te sientes bien si…  
   Hay un plan compartido, aunque sea pequeño. → ancla  
   Cada uno ocupa su espacio y se cruzan. → horizonte  
   Hay una conversación que no cabe en un chat. → marea  
   El otro está a gusto. Yo me acomodo. → espejo  

4. Cuando te enamoras de verdad…  
   Se nota en cómo reorganizo el tiempo. → ancla  
   Se nota en la intensidad, no en el anuncio. → marea  
   Se nota en lo que dejo de forzar. → horizonte  
   Se nota en cómo empiezo a hablar como nosotros. → espejo  

5. Lo que más te cansa en una relación es…  
   Tener que adivinar lo que no se dice. → marea  
   Que el otro necesite pruebas constantes. → horizonte  
   Sentir que sostengo yo el clima entero. → espejo  
   Que lo importante se posponga una y otra vez. → ancla  

6. Si tu forma de amar pudiera pedirle una sola cosa al otro…  
   Que no traduzca mi silencio como abandono. → horizonte  
   Que se quede cuando se ponga serio. → ancla  
   Que no baje el volumen de lo que siento. → marea  
   Que me recuerde que también ocupo sitio. → espejo  

Retratos Vínculo (usar verbatim):

ANCLA — Eliges profundidad sobre teatro. Cuando alguien importa, te quedas — no como sacrificio, como clima. El otro te siente tierra firme, a veces más de lo que tú te permites sentir.  
- La lealtad te sale antes que la pose.  
- El conflicto no te echa: te pide claridad.  
- Tu riesgo es cargar tú lo que debería ser de dos.

ESPEJO — Lees al otro antes de hablarte. Afinas el tono de la habitación y te vuelves habitable. Es un don raro. También es una forma de desaparecer un poco para que el vínculo quepa.  
- Captas el clima antes de que tenga nombre.  
- Das espacio sin que se lo pidan.  
- Tu trabajo ahora: no traducir tanto. Ocupar.

HORIZONTE — El cariño no te pide desaparecer. Quieres cerca, no fusionado. Quien te ama bien entiende tu silencio como respeto, no como huida — y tú estás aprendiendo a explicarlo sin armadura.  
- Necesitas aire para poder volver.  
- La presión te cierra más que el desacuerdo.  
- Tu puente: avisar antes de alejarte.

MAREA — Sientes en oleaje, no en línea. Cuando entras, entras del todo. El otro te vive como clima: calor, lluvia, claridad. Lo que pides no es drama. Es que te encuentren a la misma profundidad.  
- La tibieza te resulta más fría que el frío.  
- Nombras pronto lo que otros postergan.  
- Tu cuidado: que la ola no se lleve el muelle.

**Mente** fallback `analitico`  
Rasgos: Analítico/Despiece, Sintético/Conjunto, Lateral/Puerta rara, Preciso/Filo.  
Preguntas 1,3,4,5 tienen `correct`. 2 y 6 son solo estilo.

1. ¿Qué número sigue? 3 · 9 · 27 · 81 · —  
   162 sintetico | **243 preciso CORRECTA** | 218 lateral | 324 analitico  
2. Un problema no tiene puerta obvia. ¿Por dónde entras?  
   Lo desarmo en partes hasta que una ceda. → analitico  
   Busco un caso parecido en otro campo. → sintetico  
   Cambio la pregunta hasta que sea contestable. → lateral  
   Defino términos y reglas antes de moverme. → preciso  
3. Si 5 máquinas tardan 5 minutos en hacer 5 piezas, ¿cuánto tardan 100 máquinas en hacer 100 piezas?  
   100 min sintetico | 20 min analitico | **5 min preciso CORRECTA** | 1 min lateral  
4. Todos los analistas son precisos. Algunos precisos son lentos. Entonces…  
   Algunos analistas son lentos. sintetico | Ningún analista es lento. preciso | **No se puede concluir. analitico CORRECTA** | Todos los lentos son analistas. lateral  
5. Completa la serie: 1 · 1 · 2 · 3 · 5 · 8 · —  
   11 lateral | **13 preciso CORRECTA** | 12 sintetico | 16 analitico  
6. Tienes diez minutos para un problema difícil. ¿Qué haces con el tiempo?  
   Cinco en entender, cinco en resolver. → analitico  
   Una hipótesis fuerte y la persigo. → lateral  
   Un marco limpio aunque no llegue al final. → preciso  
   Busco el parecido con algo que ya resolví. → sintetico  

Retratos Mente:

ANALÍTICO — Antes de decidir, abres el problema. Ves piezas, no niebla. Te fías de la estructura más que del destello. Quien trabaja contigo agradece que no improvises el cimiento.  
- Separar es tu forma de respetar lo complejo.  
- El atajo te resulta sospechoso, no tentador.  
- Tu borde: a veces el mapa tarda más que el territorio.

SINTÉTICO — Unes lo que otros dejan en carpetas distintas. Ves el patrón entero y recién después los nudos. Es una mente de arquitectura: menos catálogo, más edificio.  
- Las analogías te llegan antes que las fórmulas.  
- Agrupas rápido. A veces demasiado.  
- Tu rigor está en la forma, no en el inventario.

LATERAL — Entras por donde el plano no indica puerta. El problema se te aparece torcido y por eso lo resuelves. Molestas un poco a quien necesita el procedimiento. Vale la pena.  
- Si la pregunta está mal hecha, la cambias.  
- Te aburre repetir un método que ya funcionó.  
- Tu cuidado: no confundir original con exacto.

PRECISO — El error te molesta más que la lentitud. Prefieres una respuesta nítida a una brillante. En un mundo de opiniones, eres el que pregunta las unidades.  
- Mides dos veces. Cortas una.  
- La ambigüedad te pide más datos, no más fe.  
- Tu don es que se puede construir encima.

**Esfera** fallback `observador`  
Rasgos: Observador/Lectura, Catalizador/Movimiento, Diplomático/Clima, Polar/Posición.

1. Entras a una reunión donde nadie se conoce del todo. ¿Qué haces primero?  
   Escucho un rato. Mapeo quién tira de qué. → observador  
   Rompo el hielo con una pregunta útil. → catalizador  
   Presento a dos personas que deberían hablarse. → diplomatico  
   Digo para qué estoy y qué espero de la hora. → polar  

2. Alguien interrumpe a otra persona, una y otra vez.  
   Le devuelvo la palabra a quien la perdió. → diplomatico  
   Lo nombro con claridad, sin teatro. → polar  
   Cambio el formato para que deje de pasar. → catalizador  
   Espero a ver si el grupo lo corrige solo. → observador  

3. Te invitan a un plan de último minuto que no te apetece.  
   Digo que no, con una razón breve. → polar  
   Voy un rato si alguien concreto me importa. → diplomatico  
   Propongo otra cosa que sí me sume. → catalizador  
   Agradezco y me quedo fuera, sin drama. → observador  

4. En un grupo, tu lugar natural es…  
   El que ve el patrón y habla poco. → observador  
   El que empuja a pasar de la queja al hecho. → catalizador  
   El que sostiene que nadie quede fuera. → diplomatico  
   El que dice lo que el resto está evitando. → polar  

5. Cuando el ambiente se pone tenso, tu cuerpo pide…  
   Aire. Observar un segundo más. → observador  
   Mover. Cambiar de tarea o de sitio. → catalizador  
   Traducir. Encontrar la frase puente. → diplomatico  
   Cortar. Nombrar el nudo y seguir. → polar  

6. Lo que más te importa que recuerden de ti en un grupo es…  
   Que entendí lo que no se dijo. → observador  
   Que hice que pasara algo. → catalizador  
   Que se pudo seguir juntos. → diplomatico  
   Que no disfracé lo que pensaba. → polar  

Retratos Esfera:

OBSERVADOR — Lees la sala antes de ocuparla. Ves alianzas, fatiga, quién no ha hablado. No es timidez: es cartografía. Cuando intervienes, suele ser la frase que faltaba.  
- El silencio te da más datos que el discurso.  
- No compites por el micrófono.  
- Tu borde: a veces te leen como distante.

CATALIZADOR — El grupo se mueve cuando tú hablas. No por volumen: por dirección. Enciendes lo que estaba tibio. Quien te sigue agradece el impulso; quien se cansa, el ritmo.  
- Propones antes de que se vote el estancamiento.  
- El aburrimiento te resulta casi físico.  
- Tu cuidado: dejar sitio a quien aún está pensando.

DIPLOMÁTICO — Bajas la fiebre sin apagar la verdad. Encuentras la frase que permite seguir juntos. No eres tibio: eres el que evita que el vínculo se rompa por un mal ángulo.  
- Traduces bandos que ya no se escuchan.  
- El respeto te importa más que ganar la ronda.  
- Tu riesgo: suavizar de más lo que debía nombrarse.

POLAR — Tomas posición. El resto se ordena alrededor — a favor, en contra, con alivio. No dejas la sala en gris. Es un tipo de honestidad que algunos llaman dureza y otros, oxígeno.  
- Prefieres el desacuerdo nítido a la paz opaca.  
- La ambigüedad colectiva te irrita.  
- Tu puente: la posición no tiene que ser un veredicto.

## UX / calidad

- Mobile-first 390px: sin overflow horizontal, cards en columna, CTAs full-width.
- Desktop max-width 72rem, mucho aire.
- html lang="es", theme-color `#f3efe6`, title “Noesis”, description la lead.
- Focus ring 2px primary/50. Skip link “Saltar al contenido”.
- No registro. Todo client-side.

Entrega una app Next.js completa, runnable, con estas rutas y este copy letra por letra. Empieza por el design system y la landing, luego el test, el cierre-anuncio, el resultado, el perfil y Vespera.

---
