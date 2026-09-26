import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-Bzkhe2LL.mjs";
import { d as saveResult, f as scoreAnswers, i as Shell, l as getTest, m as useProfile, n as Button, p as setName, s as cn, t as AxisMark, u as isTestSlug } from "./shell-BQ72AjOt.mjs";
import { t as AdSlot } from "./ad-slot-BM-HUSHw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/test._slug-sJzfll_j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TestPage() {
	const { slug } = Route.useParams();
	const test = isTestSlug(slug) ? getTest(slug) : void 0;
	if (!test) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-5 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-title",
			children: "Esa lectura no existe."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Volver al laboratorio"
			})
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTest, { test });
}
function LiveTest({ test }) {
	const navigate = useNavigate();
	const profile = useProfile();
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [step, setStep] = (0, import_react.useState)(0);
	const [picks, setPicks] = (0, import_react.useState)([]);
	const [chosen, setChosen] = (0, import_react.useState)(null);
	const question = test.questions[step];
	const progress = phase === "ask" ? (step + (chosen !== null ? 1 : 0)) / test.questions.length : 0;
	const goNext = () => {
		if (chosen === null) return;
		const nextPicks = [...picks];
		nextPicks[step] = chosen;
		setPicks(nextPicks);
		setChosen(null);
		if (step + 1 >= test.questions.length) {
			const scored = scoreAnswers(test, nextPicks);
			saveResult({
				slug: test.slug,
				trait: scored.trait,
				score: scored.score,
				answers: nextPicks,
				completedAt: Date.now()
			});
			setPhase("compose");
			return;
		}
		setStep(step + 1);
	};
	const goBack = () => {
		if (step === 0) {
			setPhase("intro");
			return;
		}
		setChosen(picks[step - 1] ?? null);
		setStep(step - 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-5 pb-24 pt-10 sm:pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 h-px overflow-hidden bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full origin-left bg-primary transition-transform duration-500 ease-out",
					style: { transform: `scaleX(${phase === "compose" ? 1 : progress})` }
				})
			}),
			phase === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, {
						slug: test.slug,
						className: "size-9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-medium uppercase tracking-[0.2em]",
						children: [
							test.index,
							" · ",
							test.axis
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-6 text-display",
					children: test.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-pretty text-muted-foreground",
					children: test.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-subtle",
					children: [
						test.questions.length,
						" preguntas · ",
						test.minutes,
						" minutos · sin registro"
					]
				}),
				!profile.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-8 block max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Cómo te nombramos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						defaultValue: profile.name,
						onBlur: (e) => setName(e.target.value),
						placeholder: "Tu nombre, si quieres",
						maxLength: 40,
						className: "mt-2 h-11 w-full border-0 border-b border-border bg-transparent text-base outline-none placeholder:text-subtle focus:border-primary"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: ["Lectura para ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						onClick: () => setPhase("ask"),
						children: "Empezar la lectura"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Otra vez no"
						})
					})]
				})
			] }) : null,
			phase === "ask" && question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-subtle",
					children: [
						String(step + 1).padStart(2, "0"),
						" / ",
						String(test.questions.length).padStart(2, "0"),
						question.hint ? ` · ${question.hint}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 text-title",
					children: question.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: question.options.map((opt, i) => {
						const active = chosen === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setChosen(i),
							className: cn("flex min-h-14 w-full items-center gap-4 rounded-lg px-4 py-3 text-left text-base transition-[background-color,color,box-shadow] duration-150", active ? "bg-primary text-primary-foreground" : "bg-card text-foreground hairline hairline-hover"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-display w-6 shrink-0 text-sm", active ? "text-primary-foreground/70" : "text-subtle"),
								children: String.fromCharCode(65 + i)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-pretty",
								children: opt.label
							})]
						}) }, opt.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: goBack,
						children: "Atrás"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						disabled: chosen === null,
						onClick: goNext,
						children: step + 1 === test.questions.length ? "Cerrar la lectura" : "Siguiente"
					})]
				})
			] }, step) : null,
			phase === "compose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compose, {
				slug: test.slug,
				name: profile.name,
				navigate
			}) : null
		]
	}) });
}
function Compose({ slug, name, navigate }) {
	const lines = (0, import_react.useMemo)(() => [
		"Ordenando respuestas",
		"Contrastando con el modelo",
		"Nombrando el patrón",
		"Preparando tu lectura"
	], []);
	const [i, setI] = (0, import_react.useState)(0);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timers = [
			window.setTimeout(() => setI(1), 700),
			window.setTimeout(() => setI(2), 1400),
			window.setTimeout(() => setI(3), 2100),
			window.setTimeout(() => setReady(true), 2600)
		];
		return () => timers.forEach((t) => window.clearTimeout(t));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-[0.18em] text-subtle",
			children: "Cierre"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-4 text-title",
			children: name ? `${name}, tu lectura está lista.` : "Tu lectura está lista."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-4 text-muted-foreground", !ready && "shimmer"),
			children: lines[i]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-px overflow-hidden bg-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full origin-left bg-primary",
				style: { animation: "meter 2.6s ease-out forwards" }
			})
		}),
		ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-pretty text-muted-foreground",
					children: "Un socio sostiene este laboratorio. Ábrelo ahora, o continúa a tu retrato."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { featured: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "xl",
					variant: "outline",
					className: "w-full sm:w-auto",
					onClick: () => navigate({
						to: "/lectura/$slug",
						params: { slug }
					}),
					children: "Ver mi lectura"
				})
			]
		}) : null
	] });
}
//#endregion
export { TestPage as component };
