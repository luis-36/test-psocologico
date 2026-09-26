export const TEST_SLUGS = ["vinculo", "mente", "esfera"] as const;
export type TestSlug = (typeof TEST_SLUGS)[number];

export type Trait = {
  id: string;
  name: string;
  kicker: string;
  portrait: string;
  lines: [string, string, string];
};

export type Option = {
  label: string;
  trait?: string;
  correct?: boolean;
};

export type Question = {
  prompt: string;
  hint?: string;
  options: Option[];
};

export type TestDef = {
  slug: TestSlug;
  index: string;
  name: string;
  axis: string;
  promise: string;
  intro: string;
  minutes: number;
  questions: Question[];
  traits: Trait[];
  fallbackTrait: string;
};

export const TESTS: TestDef[] = [
  {
    slug: "vinculo",
    index: "01",
    name: "Vínculo",
    axis: "Cómo te unes",
    promise: "La forma en que amas cuando nadie te está mirando.",
    intro:
      "Seis escenas íntimas. No hay respuesta correcta: hay un patrón. Al final, tu lectura nombra cómo te acercas, cómo sostienes y cómo te vas.",
    minutes: 4,
    fallbackTrait: "ancla",
    traits: [
      {
        id: "ancla",
        name: "Ancla",
        kicker: "Constancia",
        portrait:
          "Eliges profundidad sobre teatro. Cuando alguien importa, te quedas — no como sacrificio, como clima. El otro te siente tierra firme, a veces más de lo que tú te permites sentir.",
        lines: [
          "La lealtad te sale antes que la pose.",
          "El conflicto no te echa: te pide claridad.",
          "Tu riesgo es cargar tú lo que debería ser de dos.",
        ],
      },
      {
        id: "espejo",
        name: "Espejo",
        kicker: "Sintonía",
        portrait:
          "Lees al otro antes de hablarte. Afinas el tono de la habitación y te vuelves habitable. Es un don raro. También es una forma de desaparecer un poco para que el vínculo quepa.",
        lines: [
          "Captas el clima antes de que tenga nombre.",
          "Das espacio sin que se lo pidan.",
          "Tu trabajo ahora: no traducir tanto. Ocupar.",
        ],
      },
      {
        id: "horizonte",
        name: "Horizonte",
        kicker: "Autonomía",
        portrait:
          "El cariño no te pide desaparecer. Quieres cerca, no fusionado. Quien te ama bien entiende tu silencio como respeto, no como huida — y tú estás aprendiendo a explicarlo sin armadura.",
        lines: [
          "Necesitas aire para poder volver.",
          "La presión te cierra más que el desacuerdo.",
          "Tu puente: avisar antes de alejarte.",
        ],
      },
      {
        id: "marea",
        name: "Marea",
        kicker: "Intensidad",
        portrait:
          "Sientes en oleaje, no en línea. Cuando entras, entras del todo. El otro te vive como clima: calor, lluvia, claridad. Lo que pides no es drama. Es que te encuentren a la misma profundidad.",
        lines: [
          "La tibieza te resulta más fría que el frío.",
          "Nombras pronto lo que otros postergan.",
          "Tu cuidado: que la ola no se lleve el muelle.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Alguien que te importa tarda horas en responder.",
        options: [
          { label: "Sigo con lo mío. Si importa, vuelve.", trait: "horizonte" },
          { label: "Le escribo con calma para saber si está bien.", trait: "ancla" },
          { label: "El cuerpo se me adelanta al mensaje.", trait: "marea" },
          { label: "Ajusto el tono a cómo suele ser esa persona.", trait: "espejo" },
        ],
      },
      {
        prompt: "En un desacuerdo que duele, lo primero que haces es…",
        options: [
          { label: "Bajar la fiebre. Entender antes de defender.", trait: "espejo" },
          { label: "Decir la verdad entera, aunque tiemble.", trait: "marea" },
          { label: "Pedir un receso y volver cuando esté nítido.", trait: "horizonte" },
          { label: "Quedarme en la mesa hasta que se aclare.", trait: "ancla" },
        ],
      },
      {
        prompt: "El domingo por la mañana, juntos, te sientes bien si…",
        options: [
          { label: "Hay un plan compartido, aunque sea pequeño.", trait: "ancla" },
          { label: "Cada uno ocupa su espacio y se cruzan.", trait: "horizonte" },
          { label: "Hay una conversación que no cabe en un chat.", trait: "marea" },
          { label: "El otro está a gusto. Yo me acomodo.", trait: "espejo" },
        ],
      },
      {
        prompt: "Cuando te enamoras de verdad…",
        options: [
          { label: "Se nota en cómo reorganizo el tiempo.", trait: "ancla" },
          { label: "Se nota en la intensidad, no en el anuncio.", trait: "marea" },
          { label: "Se nota en lo que dejo de forzar.", trait: "horizonte" },
          { label: "Se nota en cómo empiezo a hablar como nosotros.", trait: "espejo" },
        ],
      },
      {
        prompt: "Lo que más te cansa en una relación es…",
        options: [
          { label: "Tener que adivinar lo que no se dice.", trait: "marea" },
          { label: "Que el otro necesite pruebas constantes.", trait: "horizonte" },
          { label: "Sentir que sostengo yo el clima entero.", trait: "espejo" },
          { label: "Que lo importante se posponga una y otra vez.", trait: "ancla" },
        ],
      },
      {
        prompt: "Si tu forma de amar pudiera pedirle una sola cosa al otro…",
        options: [
          { label: "Que no traduzca mi silencio como abandono.", trait: "horizonte" },
          { label: "Que se quede cuando se ponga serio.", trait: "ancla" },
          { label: "Que no baje el volumen de lo que siento.", trait: "marea" },
          { label: "Que me recuerde que también ocupo sitio.", trait: "espejo" },
        ],
      },
    ],
  },
  {
    slug: "mente",
    index: "02",
    name: "Mente",
    axis: "Cómo razonas",
    promise: "No un ranking. Un retrato de cómo piensas cuando aprieta el reloj.",
    intro:
      "Cuatro problemas de precisión y dos de estilo. El número que verás es una estimación lúdica — la lectura nombra tu manera de entrar al problema, que es lo que de verdad te distingue.",
    minutes: 5,
    fallbackTrait: "analitico",
    traits: [
      {
        id: "analitico",
        name: "Analítico",
        kicker: "Despiece",
        portrait:
          "Antes de decidir, abres el problema. Ves piezas, no niebla. Te fías de la estructura más que del destello. Quien trabaja contigo agradece que no improvises el cimiento.",
        lines: [
          "Separar es tu forma de respetar lo complejo.",
          "El atajo te resulta sospechoso, no tentador.",
          "Tu borde: a veces el mapa tarda más que el territorio.",
        ],
      },
      {
        id: "sintetico",
        name: "Sintético",
        kicker: "Conjunto",
        portrait:
          "Unes lo que otros dejan en carpetas distintas. Ves el patrón entero y recién después los nudos. Es una mente de arquitectura: menos catálogo, más edificio.",
        lines: [
          "Las analogías te llegan antes que las fórmulas.",
          "Agrupas rápido. A veces demasiado.",
          "Tu rigor está en la forma, no en el inventario.",
        ],
      },
      {
        id: "lateral",
        name: "Lateral",
        kicker: "Puerta rara",
        portrait:
          "Entras por donde el plano no indica puerta. El problema se te aparece torcido y por eso lo resuelves. Molestas un poco a quien necesita el procedimiento. Vale la pena.",
        lines: [
          "Si la pregunta está mal hecha, la cambias.",
          "Te aburre repetir un método que ya funcionó.",
          "Tu cuidado: no confundir original con exacto.",
        ],
      },
      {
        id: "preciso",
        name: "Preciso",
        kicker: "Filo",
        portrait:
          "El error te molesta más que la lentitud. Prefieres una respuesta nítida a una brillante. En un mundo de opiniones, eres el que pregunta las unidades.",
        lines: [
          "Mides dos veces. Cortas una.",
          "La ambigüedad te pide más datos, no más fe.",
          "Tu don es que se puede construir encima.",
        ],
      },
    ],
    questions: [
      {
        prompt: "¿Qué número sigue? 3 · 9 · 27 · 81 · —",
        hint: "Precisión",
        options: [
          { label: "162", correct: false, trait: "sintetico" },
          { label: "243", correct: true, trait: "preciso" },
          { label: "218", correct: false, trait: "lateral" },
          { label: "324", correct: false, trait: "analitico" },
        ],
      },
      {
        prompt: "Un problema no tiene puerta obvia. ¿Por dónde entras?",
        hint: "Estilo",
        options: [
          { label: "Lo desarmo en partes hasta que una ceda.", trait: "analitico" },
          { label: "Busco un caso parecido en otro campo.", trait: "sintetico" },
          { label: "Cambio la pregunta hasta que sea contestable.", trait: "lateral" },
          { label: "Defino términos y reglas antes de moverme.", trait: "preciso" },
        ],
      },
      {
        prompt: "Si 5 máquinas tardan 5 minutos en hacer 5 piezas, ¿cuánto tardan 100 máquinas en hacer 100 piezas?",
        hint: "Precisión",
        options: [
          { label: "100 minutos", correct: false, trait: "sintetico" },
          { label: "20 minutos", correct: false, trait: "analitico" },
          { label: "5 minutos", correct: true, trait: "preciso" },
          { label: "1 minuto", correct: false, trait: "lateral" },
        ],
      },
      {
        prompt: "Todos los analistas son precisos. Algunos precisos son lentos. Entonces…",
        hint: "Precisión",
        options: [
          { label: "Algunos analistas son lentos.", correct: false, trait: "sintetico" },
          { label: "Ningún analista es lento.", correct: false, trait: "preciso" },
          { label: "No se puede concluir.", correct: true, trait: "analitico" },
          { label: "Todos los lentos son analistas.", correct: false, trait: "lateral" },
        ],
      },
      {
        prompt: "Completa la serie: 1 · 1 · 2 · 3 · 5 · 8 · —",
        hint: "Precisión",
        options: [
          { label: "11", correct: false, trait: "lateral" },
          { label: "13", correct: true, trait: "preciso" },
          { label: "12", correct: false, trait: "sintetico" },
          { label: "16", correct: false, trait: "analitico" },
        ],
      },
      {
        prompt: "Tienes diez minutos para un problema difícil. ¿Qué haces con el tiempo?",
        hint: "Estilo",
        options: [
          { label: "Cinco en entender, cinco en resolver.", trait: "analitico" },
          { label: "Una hipótesis fuerte y la persigo.", trait: "lateral" },
          { label: "Un marco limpio aunque no llegue al final.", trait: "preciso" },
          { label: "Busco el parecido con algo que ya resolví.", trait: "sintetico" },
        ],
      },
    ],
  },
  {
    slug: "esfera",
    index: "03",
    name: "Esfera",
    axis: "Cómo te leen",
    promise: "El efecto que dejas en una sala cuando aún no has hablado.",
    intro:
      "Seis escenas sociales. No medimos simpatía: medimos lectura. Cómo entras, cómo sostienes el clima, cómo te posicionas cuando el grupo se tensa.",
    minutes: 4,
    fallbackTrait: "observador",
    traits: [
      {
        id: "observador",
        name: "Observador",
        kicker: "Lectura",
        portrait:
          "Lees la sala antes de ocuparla. Ves alianzas, fatiga, quién no ha hablado. No es timidez: es cartografía. Cuando intervienes, suele ser la frase que faltaba.",
        lines: [
          "El silencio te da más datos que el discurso.",
          "No compites por el micrófono.",
          "Tu borde: a veces te leen como distante.",
        ],
      },
      {
        id: "catalizador",
        name: "Catalizador",
        kicker: "Movimiento",
        portrait:
          "El grupo se mueve cuando tú hablas. No por volumen: por dirección. Enciendes lo que estaba tibio. Quien te sigue agradece el impulso; quien se cansa, el ritmo.",
        lines: [
          "Propones antes de que se vote el estancamiento.",
          "El aburrimiento te resulta casi físico.",
          "Tu cuidado: dejar sitio a quien aún está pensando.",
        ],
      },
      {
        id: "diplomatico",
        name: "Diplomático",
        kicker: "Clima",
        portrait:
          "Bajas la fiebre sin apagar la verdad. Encuentras la frase que permite seguir juntos. No eres tibio: eres el que evita que el vínculo se rompa por un mal ángulo.",
        lines: [
          "Traduces bandos que ya no se escuchan.",
          "El respeto te importa más que ganar la ronda.",
          "Tu riesgo: suavizar de más lo que debía nombrarse.",
        ],
      },
      {
        id: "polar",
        name: "Polar",
        kicker: "Posición",
        portrait:
          "Tomas posición. El resto se ordena alrededor — a favor, en contra, con alivio. No dejas la sala en gris. Es un tipo de honestidad que algunos llaman dureza y otros, oxígeno.",
        lines: [
          "Prefieres el desacuerdo nítido a la paz opaca.",
          "La ambigüedad colectiva te irrita.",
          "Tu puente: la posición no tiene que ser un veredicto.",
        ],
      },
    ],
    questions: [
      {
        prompt: "Entras a una reunión donde nadie se conoce del todo. ¿Qué haces primero?",
        options: [
          { label: "Escucho un rato. Mapeo quién tira de qué.", trait: "observador" },
          { label: "Rompo el hielo con una pregunta útil.", trait: "catalizador" },
          { label: "Presento a dos personas que deberían hablarse.", trait: "diplomatico" },
          { label: "Digo para qué estoy y qué espero de la hora.", trait: "polar" },
        ],
      },
      {
        prompt: "Alguien interrumpe a otra persona, una y otra vez.",
        options: [
          { label: "Le devuelvo la palabra a quien la perdió.", trait: "diplomatico" },
          { label: "Lo nombro con claridad, sin teatro.", trait: "polar" },
          { label: "Cambio el formato para que deje de pasar.", trait: "catalizador" },
          { label: "Espero a ver si el grupo lo corrige solo.", trait: "observador" },
        ],
      },
      {
        prompt: "Te invitan a un plan de último minuto que no te apetece.",
        options: [
          { label: "Digo que no, con una razón breve.", trait: "polar" },
          { label: "Voy un rato si alguien concreto me importa.", trait: "diplomatico" },
          { label: "Propongo otra cosa que sí me sume.", trait: "catalizador" },
          { label: "Agradezco y me quedo fuera, sin drama.", trait: "observador" },
        ],
      },
      {
        prompt: "En un grupo, tu lugar natural es…",
        options: [
          { label: "El que ve el patrón y habla poco.", trait: "observador" },
          { label: "El que empuja a pasar de la queja al hecho.", trait: "catalizador" },
          { label: "El que sostiene que nadie quede fuera.", trait: "diplomatico" },
          { label: "El que dice lo que el resto está evitando.", trait: "polar" },
        ],
      },
      {
        prompt: "Cuando el ambiente se pone tenso, tu cuerpo pide…",
        options: [
          { label: "Aire. Observar un segundo más.", trait: "observador" },
          { label: "Mover. Cambiar de tarea o de sitio.", trait: "catalizador" },
          { label: "Traducir. Encontrar la frase puente.", trait: "diplomatico" },
          { label: "Cortar. Nombrar el nudo y seguir.", trait: "polar" },
        ],
      },
      {
        prompt: "Lo que más te importa que recuerden de ti en un grupo es…",
        options: [
          { label: "Que entendí lo que no se dijo.", trait: "observador" },
          { label: "Que hice que pasara algo.", trait: "catalizador" },
          { label: "Que se pudo seguir juntos.", trait: "diplomatico" },
          { label: "Que no disfracé lo que pensaba.", trait: "polar" },
        ],
      },
    ],
  },
];

export function getTest(slug: string): TestDef | undefined {
  return TESTS.find((t) => t.slug === slug);
}

export function isTestSlug(value: string): value is TestSlug {
  return TEST_SLUGS.includes(value as TestSlug);
}

export function traitById(test: TestDef, id: string): Trait {
  return test.traits.find((t) => t.id === id) ?? test.traits[0];
}

export function scoreAnswers(test: TestDef, answers: number[]) {
  const counts = new Map<string, number>();
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
  for (const [id, n] of counts) {
    if (n > best) {
      best = n;
      traitId = id;
    }
  }

  const trait = traitById(test, traitId);
  const score =
    test.slug === "mente" ? iqFromCorrect(correct, scored) : Math.round((best / test.questions.length) * 100);

  return { trait, score, correct, scored };
}

function iqFromCorrect(correct: number, scored: number) {
  if (scored <= 0) return 110;
  const ratio = correct / scored;
  return Math.round(92 + ratio * 48);
}

export function architecture(results: { vinculo?: string; mente?: string; esfera?: string }) {
  const parts = [results.vinculo, results.mente, results.esfera].filter(Boolean);
  if (parts.length < 3) return null;
  return parts.join(" · ");
}
