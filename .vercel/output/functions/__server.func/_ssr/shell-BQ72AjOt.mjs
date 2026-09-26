import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-BQ72AjOt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground hover:opacity-90",
			outline: "bg-card text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-foreground hover:bg-ink-soft",
			link: "text-primary underline-offset-4 hover:underline px-0 h-auto"
		},
		size: {
			md: "h-11 min-h-11 px-5 text-sm rounded-md",
			lg: "h-12 min-h-12 px-6 text-sm rounded-lg",
			xl: "h-14 min-h-14 px-7 text-base rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TEST_SLUGS = [
	"vinculo",
	"mente",
	"esfera"
];
var TESTS = [
	{
		slug: "vinculo",
		index: "01",
		name: "Vínculo",
		axis: "Cómo te unes",
		promise: "La forma en que amas cuando nadie te está mirando.",
		intro: "Seis escenas íntimas. No hay respuesta correcta: hay un patrón. Al final, tu lectura nombra cómo te acercas, cómo sostienes y cómo te vas.",
		minutes: 4,
		fallbackTrait: "ancla",
		traits: [
			{
				id: "ancla",
				name: "Ancla",
				kicker: "Constancia",
				portrait: "Eliges profundidad sobre teatro. Cuando alguien importa, te quedas — no como sacrificio, como clima. El otro te siente tierra firme, a veces más de lo que tú te permites sentir.",
				lines: [
					"La lealtad te sale antes que la pose.",
					"El conflicto no te echa: te pide claridad.",
					"Tu riesgo es cargar tú lo que debería ser de dos."
				]
			},
			{
				id: "espejo",
				name: "Espejo",
				kicker: "Sintonía",
				portrait: "Lees al otro antes de hablarte. Afinas el tono de la habitación y te vuelves habitable. Es un don raro. También es una forma de desaparecer un poco para que el vínculo quepa.",
				lines: [
					"Captas el clima antes de que tenga nombre.",
					"Das espacio sin que se lo pidan.",
					"Tu trabajo ahora: no traducir tanto. Ocupar."
				]
			},
			{
				id: "horizonte",
				name: "Horizonte",
				kicker: "Autonomía",
				portrait: "El cariño no te pide desaparecer. Quieres cerca, no fusionado. Quien te ama bien entiende tu silencio como respeto, no como huida — y tú estás aprendiendo a explicarlo sin armadura.",
				lines: [
					"Necesitas aire para poder volver.",
					"La presión te cierra más que el desacuerdo.",
					"Tu puente: avisar antes de alejarte."
				]
			},
			{
				id: "marea",
				name: "Marea",
				kicker: "Intensidad",
				portrait: "Sientes en oleaje, no en línea. Cuando entras, entras del todo. El otro te vive como clima: calor, lluvia, claridad. Lo que pides no es drama. Es que te encuentren a la misma profundidad.",
				lines: [
					"La tibieza te resulta más fría que el frío.",
					"Nombras pronto lo que otros postergan.",
					"Tu cuidado: que la ola no se lleve el muelle."
				]
			}
		],
		questions: [
			{
				prompt: "Alguien que te importa tarda horas en responder.",
				options: [
					{
						label: "Sigo con lo mío. Si importa, vuelve.",
						trait: "horizonte"
					},
					{
						label: "Le escribo con calma para saber si está bien.",
						trait: "ancla"
					},
					{
						label: "El cuerpo se me adelanta al mensaje.",
						trait: "marea"
					},
					{
						label: "Ajusto el tono a cómo suele ser esa persona.",
						trait: "espejo"
					}
				]
			},
			{
				prompt: "En un desacuerdo que duele, lo primero que haces es…",
				options: [
					{
						label: "Bajar la fiebre. Entender antes de defender.",
						trait: "espejo"
					},
					{
						label: "Decir la verdad entera, aunque tiemble.",
						trait: "marea"
					},
					{
						label: "Pedir un receso y volver cuando esté nítido.",
						trait: "horizonte"
					},
					{
						label: "Quedarme en la mesa hasta que se aclare.",
						trait: "ancla"
					}
				]
			},
			{
				prompt: "El domingo por la mañana, juntos, te sientes bien si…",
				options: [
					{
						label: "Hay un plan compartido, aunque sea pequeño.",
						trait: "ancla"
					},
					{
						label: "Cada uno ocupa su espacio y se cruzan.",
						trait: "horizonte"
					},
					{
						label: "Hay una conversación que no cabe en un chat.",
						trait: "marea"
					},
					{
						label: "El otro está a gusto. Yo me acomodo.",
						trait: "espejo"
					}
				]
			},
			{
				prompt: "Cuando te enamoras de verdad…",
				options: [
					{
						label: "Se nota en cómo reorganizo el tiempo.",
						trait: "ancla"
					},
					{
						label: "Se nota en la intensidad, no en el anuncio.",
						trait: "marea"
					},
					{
						label: "Se nota en lo que dejo de forzar.",
						trait: "horizonte"
					},
					{
						label: "Se nota en cómo empiezo a hablar como nosotros.",
						trait: "espejo"
					}
				]
			},
			{
				prompt: "Lo que más te cansa en una relación es…",
				options: [
					{
						label: "Tener que adivinar lo que no se dice.",
						trait: "marea"
					},
					{
						label: "Que el otro necesite pruebas constantes.",
						trait: "horizonte"
					},
					{
						label: "Sentir que sostengo yo el clima entero.",
						trait: "espejo"
					},
					{
						label: "Que lo importante se posponga una y otra vez.",
						trait: "ancla"
					}
				]
			},
			{
				prompt: "Si tu forma de amar pudiera pedirle una sola cosa al otro…",
				options: [
					{
						label: "Que no traduzca mi silencio como abandono.",
						trait: "horizonte"
					},
					{
						label: "Que se quede cuando se ponga serio.",
						trait: "ancla"
					},
					{
						label: "Que no baje el volumen de lo que siento.",
						trait: "marea"
					},
					{
						label: "Que me recuerde que también ocupo sitio.",
						trait: "espejo"
					}
				]
			}
		]
	},
	{
		slug: "mente",
		index: "02",
		name: "Mente",
		axis: "Cómo razonas",
		promise: "No un ranking. Un retrato de cómo piensas cuando aprieta el reloj.",
		intro: "Cuatro problemas de precisión y dos de estilo. El número que verás es una estimación lúdica — la lectura nombra tu manera de entrar al problema, que es lo que de verdad te distingue.",
		minutes: 5,
		fallbackTrait: "analitico",
		traits: [
			{
				id: "analitico",
				name: "Analítico",
				kicker: "Despiece",
				portrait: "Antes de decidir, abres el problema. Ves piezas, no niebla. Te fías de la estructura más que del destello. Quien trabaja contigo agradece que no improvises el cimiento.",
				lines: [
					"Separar es tu forma de respetar lo complejo.",
					"El atajo te resulta sospechoso, no tentador.",
					"Tu borde: a veces el mapa tarda más que el territorio."
				]
			},
			{
				id: "sintetico",
				name: "Sintético",
				kicker: "Conjunto",
				portrait: "Unes lo que otros dejan en carpetas distintas. Ves el patrón entero y recién después los nudos. Es una mente de arquitectura: menos catálogo, más edificio.",
				lines: [
					"Las analogías te llegan antes que las fórmulas.",
					"Agrupas rápido. A veces demasiado.",
					"Tu rigor está en la forma, no en el inventario."
				]
			},
			{
				id: "lateral",
				name: "Lateral",
				kicker: "Puerta rara",
				portrait: "Entras por donde el plano no indica puerta. El problema se te aparece torcido y por eso lo resuelves. Molestas un poco a quien necesita el procedimiento. Vale la pena.",
				lines: [
					"Si la pregunta está mal hecha, la cambias.",
					"Te aburre repetir un método que ya funcionó.",
					"Tu cuidado: no confundir original con exacto."
				]
			},
			{
				id: "preciso",
				name: "Preciso",
				kicker: "Filo",
				portrait: "El error te molesta más que la lentitud. Prefieres una respuesta nítida a una brillante. En un mundo de opiniones, eres el que pregunta las unidades.",
				lines: [
					"Mides dos veces. Cortas una.",
					"La ambigüedad te pide más datos, no más fe.",
					"Tu don es que se puede construir encima."
				]
			}
		],
		questions: [
			{
				prompt: "¿Qué número sigue? 3 · 9 · 27 · 81 · —",
				hint: "Precisión",
				options: [
					{
						label: "162",
						correct: false,
						trait: "sintetico"
					},
					{
						label: "243",
						correct: true,
						trait: "preciso"
					},
					{
						label: "218",
						correct: false,
						trait: "lateral"
					},
					{
						label: "324",
						correct: false,
						trait: "analitico"
					}
				]
			},
			{
				prompt: "Un problema no tiene puerta obvia. ¿Por dónde entras?",
				hint: "Estilo",
				options: [
					{
						label: "Lo desarmo en partes hasta que una ceda.",
						trait: "analitico"
					},
					{
						label: "Busco un caso parecido en otro campo.",
						trait: "sintetico"
					},
					{
						label: "Cambio la pregunta hasta que sea contestable.",
						trait: "lateral"
					},
					{
						label: "Defino términos y reglas antes de moverme.",
						trait: "preciso"
					}
				]
			},
			{
				prompt: "Si 5 máquinas tardan 5 minutos en hacer 5 piezas, ¿cuánto tardan 100 máquinas en hacer 100 piezas?",
				hint: "Precisión",
				options: [
					{
						label: "100 minutos",
						correct: false,
						trait: "sintetico"
					},
					{
						label: "20 minutos",
						correct: false,
						trait: "analitico"
					},
					{
						label: "5 minutos",
						correct: true,
						trait: "preciso"
					},
					{
						label: "1 minuto",
						correct: false,
						trait: "lateral"
					}
				]
			},
			{
				prompt: "Todos los analistas son precisos. Algunos precisos son lentos. Entonces…",
				hint: "Precisión",
				options: [
					{
						label: "Algunos analistas son lentos.",
						correct: false,
						trait: "sintetico"
					},
					{
						label: "Ningún analista es lento.",
						correct: false,
						trait: "preciso"
					},
					{
						label: "No se puede concluir.",
						correct: true,
						trait: "analitico"
					},
					{
						label: "Todos los lentos son analistas.",
						correct: false,
						trait: "lateral"
					}
				]
			},
			{
				prompt: "Completa la serie: 1 · 1 · 2 · 3 · 5 · 8 · —",
				hint: "Precisión",
				options: [
					{
						label: "11",
						correct: false,
						trait: "lateral"
					},
					{
						label: "13",
						correct: true,
						trait: "preciso"
					},
					{
						label: "12",
						correct: false,
						trait: "sintetico"
					},
					{
						label: "16",
						correct: false,
						trait: "analitico"
					}
				]
			},
			{
				prompt: "Tienes diez minutos para un problema difícil. ¿Qué haces con el tiempo?",
				hint: "Estilo",
				options: [
					{
						label: "Cinco en entender, cinco en resolver.",
						trait: "analitico"
					},
					{
						label: "Una hipótesis fuerte y la persigo.",
						trait: "lateral"
					},
					{
						label: "Un marco limpio aunque no llegue al final.",
						trait: "preciso"
					},
					{
						label: "Busco el parecido con algo que ya resolví.",
						trait: "sintetico"
					}
				]
			}
		]
	},
	{
		slug: "esfera",
		index: "03",
		name: "Esfera",
		axis: "Cómo te leen",
		promise: "El efecto que dejas en una sala cuando aún no has hablado.",
		intro: "Seis escenas sociales. No medimos simpatía: medimos lectura. Cómo entras, cómo sostienes el clima, cómo te posicionas cuando el grupo se tensa.",
		minutes: 4,
		fallbackTrait: "observador",
		traits: [
			{
				id: "observador",
				name: "Observador",
				kicker: "Lectura",
				portrait: "Lees la sala antes de ocuparla. Ves alianzas, fatiga, quién no ha hablado. No es timidez: es cartografía. Cuando intervienes, suele ser la frase que faltaba.",
				lines: [
					"El silencio te da más datos que el discurso.",
					"No compites por el micrófono.",
					"Tu borde: a veces te leen como distante."
				]
			},
			{
				id: "catalizador",
				name: "Catalizador",
				kicker: "Movimiento",
				portrait: "El grupo se mueve cuando tú hablas. No por volumen: por dirección. Enciendes lo que estaba tibio. Quien te sigue agradece el impulso; quien se cansa, el ritmo.",
				lines: [
					"Propones antes de que se vote el estancamiento.",
					"El aburrimiento te resulta casi físico.",
					"Tu cuidado: dejar sitio a quien aún está pensando."
				]
			},
			{
				id: "diplomatico",
				name: "Diplomático",
				kicker: "Clima",
				portrait: "Bajas la fiebre sin apagar la verdad. Encuentras la frase que permite seguir juntos. No eres tibio: eres el que evita que el vínculo se rompa por un mal ángulo.",
				lines: [
					"Traduces bandos que ya no se escuchan.",
					"El respeto te importa más que ganar la ronda.",
					"Tu riesgo: suavizar de más lo que debía nombrarse."
				]
			},
			{
				id: "polar",
				name: "Polar",
				kicker: "Posición",
				portrait: "Tomas posición. El resto se ordena alrededor — a favor, en contra, con alivio. No dejas la sala en gris. Es un tipo de honestidad que algunos llaman dureza y otros, oxígeno.",
				lines: [
					"Prefieres el desacuerdo nítido a la paz opaca.",
					"La ambigüedad colectiva te irrita.",
					"Tu puente: la posición no tiene que ser un veredicto."
				]
			}
		],
		questions: [
			{
				prompt: "Entras a una reunión donde nadie se conoce del todo. ¿Qué haces primero?",
				options: [
					{
						label: "Escucho un rato. Mapeo quién tira de qué.",
						trait: "observador"
					},
					{
						label: "Rompo el hielo con una pregunta útil.",
						trait: "catalizador"
					},
					{
						label: "Presento a dos personas que deberían hablarse.",
						trait: "diplomatico"
					},
					{
						label: "Digo para qué estoy y qué espero de la hora.",
						trait: "polar"
					}
				]
			},
			{
				prompt: "Alguien interrumpe a otra persona, una y otra vez.",
				options: [
					{
						label: "Le devuelvo la palabra a quien la perdió.",
						trait: "diplomatico"
					},
					{
						label: "Lo nombro con claridad, sin teatro.",
						trait: "polar"
					},
					{
						label: "Cambio el formato para que deje de pasar.",
						trait: "catalizador"
					},
					{
						label: "Espero a ver si el grupo lo corrige solo.",
						trait: "observador"
					}
				]
			},
			{
				prompt: "Te invitan a un plan de último minuto que no te apetece.",
				options: [
					{
						label: "Digo que no, con una razón breve.",
						trait: "polar"
					},
					{
						label: "Voy un rato si alguien concreto me importa.",
						trait: "diplomatico"
					},
					{
						label: "Propongo otra cosa que sí me sume.",
						trait: "catalizador"
					},
					{
						label: "Agradezco y me quedo fuera, sin drama.",
						trait: "observador"
					}
				]
			},
			{
				prompt: "En un grupo, tu lugar natural es…",
				options: [
					{
						label: "El que ve el patrón y habla poco.",
						trait: "observador"
					},
					{
						label: "El que empuja a pasar de la queja al hecho.",
						trait: "catalizador"
					},
					{
						label: "El que sostiene que nadie quede fuera.",
						trait: "diplomatico"
					},
					{
						label: "El que dice lo que el resto está evitando.",
						trait: "polar"
					}
				]
			},
			{
				prompt: "Cuando el ambiente se pone tenso, tu cuerpo pide…",
				options: [
					{
						label: "Aire. Observar un segundo más.",
						trait: "observador"
					},
					{
						label: "Mover. Cambiar de tarea o de sitio.",
						trait: "catalizador"
					},
					{
						label: "Traducir. Encontrar la frase puente.",
						trait: "diplomatico"
					},
					{
						label: "Cortar. Nombrar el nudo y seguir.",
						trait: "polar"
					}
				]
			},
			{
				prompt: "Lo que más te importa que recuerden de ti en un grupo es…",
				options: [
					{
						label: "Que entendí lo que no se dijo.",
						trait: "observador"
					},
					{
						label: "Que hice que pasara algo.",
						trait: "catalizador"
					},
					{
						label: "Que se pudo seguir juntos.",
						trait: "diplomatico"
					},
					{
						label: "Que no disfracé lo que pensaba.",
						trait: "polar"
					}
				]
			}
		]
	}
];
var PARTNER = {
	kicker: "Socio de Noesis",
	name: "Instituto Vespera",
	line: "Cuatro semanas para leer lo que tu entorno no dice.",
	body: "Un programa de atención sostenida: vínculo, criterio y presencia social. El mismo triángulo que acabas de recorrer, con práctica.",
	cta: "Conocer el programa"
};
function getTest(slug) {
	return TESTS.find((t) => t.slug === slug);
}
function isTestSlug(value) {
	return TEST_SLUGS.includes(value);
}
function traitById(test, id) {
	return test.traits.find((t) => t.id === id) ?? test.traits[0];
}
function scoreAnswers(test, answers) {
	const counts = /* @__PURE__ */ new Map();
	let correct = 0;
	let scored = 0;
	test.questions.forEach((q, i) => {
		const opt = q.options[answers[i] ?? -1];
		if (!opt) return;
		if (opt.trait) counts.set(opt.trait, (counts.get(opt.trait) ?? 0) + 1);
		if (typeof opt.correct === "boolean") {
			scored += 1;
			if (opt.correct) correct += 1;
		}
	});
	let traitId = test.fallbackTrait;
	let best = -1;
	for (const [id, n] of counts) if (n > best) {
		best = n;
		traitId = id;
	}
	return {
		trait: traitById(test, traitId),
		score: test.slug === "mente" ? iqFromCorrect(correct, scored) : Math.round(best / test.questions.length * 100),
		correct,
		scored
	};
}
function iqFromCorrect(correct, scored) {
	if (scored <= 0) return 110;
	const ratio = correct / scored;
	return Math.round(92 + ratio * 48);
}
function architecture(results) {
	const parts = [
		results.vinculo,
		results.mente,
		results.esfera
	].filter(Boolean);
	if (parts.length < 3) return null;
	return parts.join(" · ");
}
function TriadMark({ className, title = "Noesis" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("text-foreground", className),
		"aria-hidden": title ? void 0 : true,
		role: "img",
		children: [
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "20",
				r: "12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "20",
				r: "12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "30",
				r: "12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			})
		]
	});
}
function AxisMark({ slug, className }) {
	if (slug === "vinculo") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("text-foreground", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "18",
			cy: "24",
			r: "11",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "30",
			cy: "24",
			r: "11",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		})]
	});
	if (slug === "mente") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("text-foreground", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "12",
			width: "24",
			height: "24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "16.5",
			y: "16.5",
			width: "15",
			height: "15",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.2",
			transform: "rotate(45 24 24)"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("text-foreground", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "14",
				r: "3.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "14",
				cy: "32",
				r: "3.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34",
				cy: "32",
				r: "3.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 14 L14 32 L34 32 Z",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.2"
			})
		]
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriadMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg tracking-tight",
			children: "Noesis"
		})]
	});
}
var KEY = "noesis-profile-v1";
var empty = {
	name: "",
	results: {}
};
var listeners = /* @__PURE__ */ new Set();
var cache = empty;
var cacheRaw = "";
function emit() {
	listeners.forEach((l) => l());
}
function parse(raw) {
	if (!raw) return empty;
	try {
		const data = JSON.parse(raw);
		return {
			name: typeof data.name === "string" ? data.name.slice(0, 40) : "",
			results: data.results && typeof data.results === "object" ? data.results : {}
		};
	} catch {
		return empty;
	}
}
function read() {
	if (typeof window === "undefined") return empty;
	try {
		const raw = window.localStorage.getItem(KEY) ?? "";
		if (raw === cacheRaw && cacheRaw !== "") return cache;
		cacheRaw = raw;
		cache = parse(raw);
		return cache;
	} catch {
		return empty;
	}
}
function write(next) {
	cache = next;
	cacheRaw = JSON.stringify(next);
	try {
		window.localStorage.setItem(KEY, cacheRaw);
	} catch {}
	emit();
}
function subscribe(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function useProfile() {
	return (0, import_react.useSyncExternalStore)(subscribe, read, () => empty);
}
function setName(name) {
	write({
		...read(),
		name: name.trim().slice(0, 40)
	});
}
function saveResult(result) {
	const current = read();
	write({
		...current,
		results: {
			...current.results,
			[result.slug]: result
		}
	});
}
function completedCount(profile) {
	return TESTS.filter((t) => profile.results[t.slug]).length;
}
function Shell({ children }) {
	const done = completedCount(useProfile());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-wash min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-foreground",
						"aria-label": "Noesis, inicio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/perfil",
						className: "flex h-11 items-center gap-3 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Perfil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display tabular-nums text-foreground",
							children: [
								done,
								" / ",
								TESTS.length
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "contenido",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-foreground",
						children: "Noesis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-pretty",
						children: "Lecturas de estilo en tres ejes. No sustituyen evaluación clínica ni profesional."
					})]
				})
			})
		]
	});
}
//#endregion
export { TESTS as a, completedCount as c, saveResult as d, scoreAnswers as f, Shell as i, getTest as l, useProfile as m, Button as n, architecture as o, setName as p, PARTNER as r, cn as s, AxisMark as t, isTestSlug as u };
